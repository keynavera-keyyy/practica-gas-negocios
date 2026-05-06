# Práctica Google Apps Script – Búsqueda de Negocios

## Descripción

Esta práctica fue desarrollada utilizando Google Apps Script (GAS) y Google Sheets como base de datos. El objetivo fue crear funciones que permitieran realizar búsquedas de negocios utilizando diferentes criterios como teléfono, correo electrónico, página web, vialidad y coordenadas GPS.

La práctica toma como base las funciones proporcionadas en clase:
- leerCelda()
- leerCeldas()
- setCelda()

A partir de estas funciones se desarrollaron nuevas funcionalidades para consultar información dentro de la hoja de cálculo.

---

# Herramientas utilizadas

- Google Apps Script
- JavaScript
- Google Sheets
- GitHub

---

# Funciones desarrolladas

## 1. Función ls(arg)

Esta función permite buscar negocios dependiendo del parámetro recibido.

### Parámetros

| Parámetro | Descripción |
|---|---|
| t | Muestra negocios con teléfono |
| w | Muestra negocios con página web |
| c | Muestra negocios con correo electrónico |
| a | Muestra negocios que tengan teléfono, web y correo |

### Ejemplo

```javascript
ls("t");
```

### Funcionamiento

La función recorre toda la tabla utilizando un ciclo `for`, leyendo las columnas correspondientes a:
- teléfono
- correo electrónico
- página web

Después valida si contienen información y muestra únicamente los negocios que cumplen con la condición seleccionada.

---

## 2. Función lsV(tipoVialidad, nombreVialidad)

Esta función busca negocios que coincidan exactamente con el tipo de vialidad y el nombre de la vialidad.

### Ejemplo

```javascript
lsV("CALLE", "JUÁREZ");
```

### Funcionamiento

La función obtiene los datos de:
- tipo_vial
- nom_vial

Posteriormente compara los valores recibidos como parámetros con los datos de cada fila y muestra únicamente los negocios que coinciden.

---

## 3. Función lsGPS(latitud, longitud)

Esta función permite buscar los 5 negocios más cercanos a unas coordenadas GPS específicas dentro de un rango máximo de 3 kilómetros.

### Ejemplo

```javascript
lsGPS(21.885256, -102.291567);
```

### Funcionamiento

La función:
1. Lee la latitud y longitud de cada negocio.
2. Calcula la distancia utilizando la fórmula de Haversine.
3. Filtra negocios que estén a menos de 3 km.
4. Ordena los resultados del más cercano al más lejano.
5. Muestra máximo 5 resultados.

---

# Cómo se resolvió la práctica

Primero se realizaron pruebas de lectura utilizando:
- leerCelda()
- leerCeldas()

Después se utilizó `getDataRange().getValues()` para obtener toda la tabla de datos.

Posteriormente se identificaron las posiciones de las columnas necesarias dentro del arreglo:
- teléfono
- correo
- página web
- tipo de vialidad
- coordenadas GPS

Con ciclos `for` y estructuras `if` se realizaron las validaciones necesarias para filtrar negocios dependiendo de cada función.

Finalmente se implementó la fórmula de Haversine para calcular distancias GPS entre coordenadas geográficas.

---

# Estructura del proyecto

```text
practica-gas-negocios/
│
├── Codigo.gs
└── README.md
```

---
