
![GitHub all releases](https://img.shields.io/github/downloads/benjvalles/nodejs-express-mongoose/total?style=for-the-badge) ![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/benjvalles/nodejs-express-mongoose?style=for-the-badge)


# Nodejs Express Mongoose

Esta es una aplicación que ilustra varias funciones utilizadas en el desarrollo web diario, con un toque fino de las mejores prácticas. La aplicación de demostración es una aplicación de blog donde los usuarios pueden registrarse, crear un artículo, eliminar un artículo y agregar comentarios, etc.

> Este es un codigo viejo.

Contenidos:

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Install](#Install)
- [Tests](#Tests)
- [Docker](#Docker)
- [License](#License)

<!-- /TOC -->


## Install

```sh
git clone git://github.com/madhums/node-express-mongoose-demo.git
npm install
cp .env.example .env
npm start
```

El servidor esta listo en [http://localhost:3000/](http://localhost:3000/)

> No olvide configurar los `CLIENT_ID`s y `SECRET`s de twitter, google, linkedin y github. En `desarrollo` env, puede configurar las variables env en `.env` y reemplazar los valores allí. En el entorno de `producción`, no es seguro mantener los ID y los secretos en un archivo, por lo que debe configurar a través de la línea de comandos. Si está utilizando heroku, consulte cómo se configuran las variables de entorno [aquí](https://devcenter.heroku.com/articles/config-vars) 


## Tests

```sh
npm test
```

## Docker

También puede usar Docker para el desarrollo. Asegúrese de ejecutar npm install en su máquina host para que el código se borre y todo funcione bien.

```sh
npm i
cp .env.example .env
```

Start the services

```sh
docker-compose up -d
```

View the logs

```sh
docker-compose logs -f
```

En caso de que instale un módulo npm durante el desarrollo, también debe instalarse dentro del contenedor docker, para hacer esto, primero instale el módulo que desee con el simple `npm i module name`, luego ejecútelo dentro del contenedor docker

```sh
docker-compose exec node npm i
```

Si realiza algún cambio en el archivo, nodemon debería recuperarse y reiniciarse automáticamente dentro del contenedor (puede ver esto en los registros)

run tests
> Tenga en cuenta que estamos anulando la variable de entorno establecida en el archivo `.env` porque no queremos que las pruebas borren nuestros datos.

```sh
docker-compose exec -e MONGODB_URL=mongodb://mongo:27017/noobjs_test node npm test
```



> La diferencia entre exec y run es que exec ejecuta el comando dentro del contenedor en ejecución y run generará un nuevo contenedor para ejecutar ese comando. Entonces, si desea ejecutar solo las pruebas sin docker-compose up, puede hacerlo ejecutando `docker-compose run -e MONGODB_URL=mongodb://mongo:27017/noobjs_test node npm test`


## License

MIT
