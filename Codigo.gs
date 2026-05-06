/* =========================================
   FUNCIONES BASE
========================================= */

function leerCelda(celda) {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  return hoja.getRange(celda).getValue();

}


function leerCeldas(rango) {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  return hoja.getRange(rango).getValues();

}


function setCelda(celda, valor) {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  hoja.getRange(celda).setValue(valor);

}


/* =========================================
   FUNCIONES DE PRUEBA
========================================= */

function pruebaLeerCelda() {

  const valor = leerCelda("A1");

  Logger.log(valor);

}


function pruebaTabla() {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const datos = hoja.getDataRange().getValues();

  Logger.log(datos);

}


/* =========================================
   FUNCION 1
   ls(arg)
========================================= */

function ls(arg) {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const datos = hoja.getDataRange().getValues();

  for(let i = 1; i < datos.length; i++) {

    const nombre = datos[i][1];

    const telefono = datos[i][32];
    const correo = datos[i][33];
    const web = datos[i][34];

    // TELEFONO
    if(arg == "t" && telefono != "") {

      Logger.log(
        "Negocio: " + nombre +
        " | Teléfono: " + telefono
      );

    }

    // WEB
    if(arg == "w" && web != "") {

      Logger.log(
        "Negocio: " + nombre +
        " | Web: " + web
      );

    }

    // CORREO
    if(arg == "c" && correo != "") {

      Logger.log(
        "Negocio: " + nombre +
        " | Correo: " + correo
      );

    }

    // LOS 3
    if(
      arg == "a" &&
      telefono != "" &&
      correo != "" &&
      web != ""
    ) {

      Logger.log(
        "Negocio: " + nombre +
        " | Teléfono: " + telefono +
        " | Correo: " + correo +
        " | Web: " + web
      );

    }

  }

}


/* =========================================
   FUNCION DE PRUEBA ls()
========================================= */

function probarLS() {

  ls("t");

}


/* =========================================
   FUNCION 2
   lsV(tipoVialidad, nombreVialidad)
========================================= */

function lsV(tipoVialidad, nombreVialidad) {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const datos = hoja.getDataRange().getValues();

  for(let i = 1; i < datos.length; i++) {

    const nombre = datos[i][1];

    const tipoVial = datos[i][6];
    const nombreVial = datos[i][7];

    if(
      tipoVial == tipoVialidad &&
      nombreVial == nombreVialidad
    ) {

      Logger.log(
        "Negocio: " + nombre +
        " | Tipo vialidad: " + tipoVial +
        " | Nombre vialidad: " + nombreVial
      );

    }

  }

}


/* =========================================
   FUNCION DE PRUEBA lsV()
========================================= */

function probarLSV() {

  lsV("CALLE", "JUÁREZ");

}


/* =========================================
   FUNCION 3
   lsGPS(latitud, longitud)
========================================= */

function lsGPS(latitud, longitud) {

  const hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const datos = hoja.getDataRange().getValues();

  let resultados = [];

  for(let i = 1; i < datos.length; i++) {

    const nombre = datos[i][1];

    const lat = parseFloat(datos[i][35]);
    const lon = parseFloat(datos[i][36]);

    if(!isNaN(lat) && !isNaN(lon)) {

      const distancia = calcularDistancia(
        latitud,
        longitud,
        lat,
        lon
      );

      // SOLO NEGOCIOS A MENOS DE 3 KM
      if(distancia <= 3) {

        resultados.push({
          nombre: nombre,
          distancia: distancia
        });

      }

    }

  }

  // ORDENAR DEL MÁS CERCANO AL MÁS LEJANO
  resultados.sort(function(a, b) {
    return a.distancia - b.distancia;
  });

  // MOSTRAR SOLO 5
  for(let i = 0; i < 5 && i < resultados.length; i++) {

    Logger.log(
      "Negocio: " + resultados[i].nombre +
      " | Distancia: " +
      resultados[i].distancia.toFixed(2) +
      " km"
    );

  }

}


/* =========================================
   CALCULAR DISTANCIA GPS
========================================= */

function calcularDistancia(lat1, lon1, lat2, lon2) {

  const R = 6371;

  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;

}


/* =========================================
   FUNCION DE PRUEBA lsGPS()
========================================= */

function probarGPS() {

  lsGPS(21.885256, -102.291567);

}
