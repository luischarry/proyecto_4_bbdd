# PROYECTO 4 BASE DE DATOS
***
Se crea una base de datos en mongodb simulando una plataforma de alquiler de películas.
***
## Tabla de contenido
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Postman](#Postman)
### General Info
***
La base de datos tendrá 3 colecciones principales [users],[movies],[series], que se utilizará más adelante para alimentar nuestra web que será creada con react.
#### users
* En la colección de users guardamos los datos personales, los cuales estarán encriptados y almacenados. 
* los usuarios una vez registados tendrán la posibilidad de realizar login que les dará un token para lograr ver la película deseada.
#### movies
* En la colección movies guardamos los datos de cada película como: nombre, género, popularidad, votaciones.
#### series
* En la colección series guardamos los datos de cada serie y también 2 puntos específicos pedidos para el proyecto como saber si aún está en transmisión y si será vista en teatro o cine.
### Technologies
***
#### mongoose
* Utilizamos mongoose que es una librerÍa de Node.js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.
#### bcrypt 
* Utilizamos bcrypt que es una librería de encriptación. que nos permite guardar los datos de los usuarios de manera segura en la base de datos y así evitar robo de información.
#### jsonwebtoken
* Nos permite darle un token a cada usuario una vez a ingresado al login y los datos son correctos, que permitirá tener acceso a ciertos puntos dentro de la web.
#### Nodemon
* Es un programa de utilidad que puede monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones.
#### Express
* Express.js o comúnmente conocido solo como Express, es un framework para crear aplicaciones web, APIs y web services que ha sido inspirado en la librería Sinatra de Ruby. Es software libre y de código abierto, con licencia MIT.

### Postman
#### ¿Que es postman?
Postman en sus inicios nace como una extensión que podía ser utilizada en el navegador Chrome de Google y básicamente nos permite realizar peticiones de una manera simple para testear APIs de tipo REST propias o de terceros.
#### como lo utlizamos en nuestro proyecto
Nuestra API la levantamos en un puerto local, en este caso será el 5500. Ahora dentro del postman creamos peticiones a nuestra api la cual comprobará que los endpoints funcionen correctamente.

#### peticiones 
***
##### [users]

* [post] http://localhost:5500/users : Crearemos un nuevo usuario que tendrá varias peticiones básicas como: nombre, apellido, dni, email, contraseña, teléfono, número de cuenta.
* [post] http://localhost:5500/users/login : Con esta peticion el usuario podrá logearse y tener un token para entrar a ciertos puntos permitidos si el usuario no está registrado su login será incorrecto. 
##### [movies]

* [post] http://localhost:5500/movies : Esta petición nos permite subir a la base de datos una nueva pelicula 

* [get] http://localhost:5500/movies : Obtendremos todas las peliculas de la base de datos, pero solo nos dara el titulo de cada una.

* [get] http://localhost:5500/movies/toprated : Nos dara las 5 peliculas mas votadas.

* [get] http://localhost:5500/movies/profile/:id : Nos dara una pelicula por su id.

* [post] http://localhost:5500/movies/name/movie : Nos dara como resultado todos los datos de la pelicula si se encuentra en la base de datos, tendremos que pasarle por body en titulo de la pelicula y nos dara resultado positivo si se encuentra. ejemplo {"title":"Trol"} en este ejemplo nos dara todas las caracteristicas de esta pelicula, los usuarios deben estar logeados para realizar dicha petición.

* [post] http://localhost:5500/movies/genre : En esta petición le daremos por body un genero y nos da como resultado las peliculas filtradas.

##### [series]
* [post] http://localhost:5500/series : Agregaremos una nueva serie a la base de datos.

* [get] http://localhost:5500/series : Obtendremos todas las series almacenadas en la base de datos.

* [get] http://localhost:5500/series/toprated : Nos dara el top 5 de las mejores series valoradas por los usuarios.

* [get] http://localhost:5500/series/serie/:id : Nos buscara una pelicula por su id.

* [post] http://localhost:5500/series/name/serie : buscaremos una serie por su nombre, si es correcto nos dara la informacion, si es incorrecto nos dara un mensaje que la serie no se encuentra en la base de datos.

* [post] http://localhost:5500/series/transmission : Con esta peticion le pasaremos por body si queremos las series que vayan a estar en cine o en teatro y nos dara como resultado las series filtradas segun en body.