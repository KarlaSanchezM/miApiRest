# miApiRest

Con esta aplicación desarrollo una REST Api con Nodejs y Mysql, lo que permite esta aplicación es acceder a los datos desde cualquier aplicación, 
como puede ser aplicaciones web,moviles o cualquier otro tipo de aplicación cliente.

Para llevar esta aplicación acabo se comenzo creando el servidor node, después de esto hacemos una conección a la base de datos y 
haremos consultas, entre las cuales se encontrarán los procedimientos almacenados.

Para llevar una ejecución sin la necesidad de estar actualizando manualmente utilzamos "nodemon".
que este lo hará constantemente cada que guardemos. 
Para la base de datos se creo una tabla que contiene datos como id, name, salary, en esta misma tabla ya se introdujeron los datos 
que son los que muestra una vez ejecutados en el localhost o Zeit.
Se creo un archivo database en el cual es la cadena de conexion, se utilizo el modulo de mysql, se utilizo este modulo 
para que se pueda conectar. 

Se utiizo una ruta post esta nos ayuda para insertar un dato

Se creo un procedimiento almacenado en el cual devuelve un valor, el crear un procedimiento 
puede reducir el trafico de red entre el servidor y el cliente ya que estos son enviados unicamente a través de la red
la llamada que a ejecutar el procedimiento. 

## Postman 
es una extensión del navegador Google Chrome, que permite el envío de peticiones 
HTTP REST sin necesidad de desarrollar un cliente. Una vez instalado Postman, es necesario 
abrirlo e instalar 
el plugin Jetpack de Postman para poder crear las pruebas y lanzarlas conjuntamente.

## Base de datos.
Para esta aplicación se utilizo Remotemysql

## Editor 
Visual Studio Code
