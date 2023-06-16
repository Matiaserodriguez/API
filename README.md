# API

Esta API es un challenge para el puesto de Desarrollador Backend SSR en Conexa.

## Descripción

La API está desplegada en un servidor EC2 de AWS y se puede ejecutar localmente para trabajar en un entorno de desarrollo.

## Colección de Postman

Creé una colección de Postman [acá](https://www.postman.com/satellite-cosmologist-72342374/workspace/conexa/collection/14655417-409a11fa-f14d-4923-9a85-8fb0bd923c04?action=share&creator=14655417) para realizar pruebas rápidas.

## Endpoints locales

1. POST `localhost:3000/api/signup`: Crea un usuario en la base de datos para luego hacer login.

2. POST `localhost:3000/api/signin`: Una vez hecho el signup, ahora hay que logearse.

3. GET `localhost:3000/api/userslist`: Debe enviarse el JWT recibido como respuesta de la llamada HTTP del 2do endpoint.

4. GET `localhost:3000/api/secretroute`: Endpoint que existe pero solo accesible a través de una llamada al endpoint 3, como se solicitó.


## Endpoints en instancia EC2

1. POST `44.238.243.249:3000/api/signup`: Crea un usuario en la base de datos para luego hacer login.

2. POST `44.238.243.249:3000/api/signin`: Una vez hecho el signup, ahora hay que logearse.

3. GET `44.238.243.249:3000/api/userslist`: Debe enviarse el JWT recibido como respuesta de la llamada HTTP del 2do endpoint.

4. GET `44.238.243.249:3000/api/secretroute`: Endpoint que existe pero solo accesible a través de una llamada al endpoint 3, como se solicitó.

## Inicio rápido

Para ejecutar la API localmente desde la terminal:

1. Clonar el repositorio: `git clone https://github.com/Matiaserodriguez/API`

2. Ingresar a la carpeta descargada: `cd API`

3. Levantar docker local una vez parado en la carpeta principal: `docker-compose up --build`

Es probable que la primera vez al levantar la aplicacion local demore algunos segundos.

## Tecnologías utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

### Infra

- Docker
- Docker Compose
- EC2 AWS
- Github Actions

## Colaboradores

- Matias Rodriguez
