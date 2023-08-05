# Instrucción para inicializar el proyecto

Se recomienda usar Code Studio, tener instalado Nodejs y postgresql
Link de descargas:

- https://code.visualstudio.com/download
  - https://www.youtube.com/watch?v=HVzFLw5r2EM
  - (Video de Instalación)
- https://nodejs.org/es/download
  - https://www.youtube.com/watch?v=dsvCofDdTVA
  - (Video de Instalación)
- https://www.postgresql.org/download/
  - https://www.youtube.com/watch?v=cHGaDfzJyY4
  - (Video de Instalación)

## Pasos para abrir el proyecto Code Studio

- Clonar el repositorio en tu pc/laptop
- Abrir el terminar ubicándote en la carpeta que clonaste
- Una ves ubicado instalamos sus dependencias con npm install
- Para abrir el proyecto usamos Code .

## Paso para Postgresql

- Se abre el terminal de Postgresql (SQL Shell (psql))
- Nos pedirá que ingresemos los siguientes datos:
  - Server: localhost
  - Database: postgres
  - Puerto: 5432 (este puerto depende de windows que use pero siempre aparecerá entre [] )
  - Username: postgres
  - Contraseña: root
- Se iniciara la pase de datos con el usuario: postgres=#
- Creamos una base de datos se las siguiente manera:
  - CREATE DATABASE usuariodtt;
- Se recomienda crear la base de datos con el nombre usuariodtt
- Listo

## Inicializar el proyecto

En el terminal de Code estudio colocamos:

- npm start

# Documentación de la API

## Login

Add folder description…

### POSTlocalhost:8000/api.demoblaze.com/login

[Open Request](https://desktop.postman.com/?desktopVersion=10.13.0&userId=25300146&teamId=4551841)

localhost:8000/api.demoblaze.com/login

Add request description…

Bodyraw (json)

json

```json
{
  "username": "Luis",
  "password": "123456789"
}
```

## Registro login

Add folder description…

### POSTlocalhost:8000/api.demoblaze.com/signup

[Open Request](https://desktop.postman.com/?desktopVersion=10.13.0&userId=25300146&teamId=4551841)

localhost:8000/api.demoblaze.com/signup

Add request description…

Bodyraw (json)

json

```json
{
  "username": "Luis",
  "password": "123456789"
}
```
