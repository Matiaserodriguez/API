# API

Esta API es un challenge para el puesto de Desarrollador Backend SSR en Conexa.

## Descripción

La API está desplegada en un servidor EC2 de AWS y se puede ejecutar localmente para trabajar en un entorno de desarrollo.

## Colección de Postman

Puedes encontrar una colección de Postman [aquí](https://www.postman.com/satellite-cosmologist-72342374/workspace/conexa/collection/14655417-409a11fa-f14d-4923-9a85-8fb0bd923c04?action=share&creator=14655417) para realizar pruebas rápidas.

## Endpoints

1. POST `/api/signup`: Crea un usuario en la base de datos para luego hacer login.

2. POST `/api/signin`: Una vez hecho el signup, ahora hay que logearse.

3. GET `/api/userslist`: Debe enviarse el JWT recibido como respuesta de la llamada HTTP del 2do endpoint.

4. GET `/api/secretroute`: Endpoint que existe pero solo accesible a través de una llamada al endpoint 3, como se solicitó.

## Inicio rápido

Para ejecutar la API localmente:

1. Clonar el repositorio: `git clone https://github.com/Matiaserodriguez/API`

2. Levantar docker local una vez parado en la carpeta principal: `docker-compose up --build`

## Tecnologías utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Colaboradores

- Matias Rodriguez
