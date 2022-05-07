Desafios semanales

En este repo se encuentran los desafios semanales del curso de backend dictado por Coderhouse.


<h1>Consigna Desafio 1 Javascript</h1>
<h2>Declarar una clase Usuario</h2>

Hacer que Usuario cuente con los siguientes atributos:

- nombre: String
- apellido: String
- libros: Object[]
- mascotas: String[]

Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias. 3) Hacer que Usuario cuente con los siguientes métodos:

- getFullName(): String. Retorna el completo del usuario. Utilizar template strings.

- addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.

- countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.

- addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.

- getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.


</hr>

<h1>Consigna Desafio 2 Manejo de Archivos</h1>

<h2>Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos: </h2>

- save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.

- getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.

- getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.

- deleteById(Number): void - Elimina del archivo el objeto con el id buscado.

- deleteAll(): void - Elimina todos los objetos presentes en el archivo.

Aspectos a incluir

- El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.

- Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.

- Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.

- Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”

- Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído.

- El formato de cada producto será : { title: (nombre del producto), price: (precio), thumbnail: (url de la foto del producto) }

</hr>

<h1>Consigna Desafio 3 Servidores Express </h1>

<h2>Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:: </h2>


-Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor

-Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles

-Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

</hr>

<h1>Consigna Desafio 4 APis Restful</h1>

<h2>Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:</h2>

-GET '/api/productos' -> devuelve todos los productos.

-GET '/api/productos/:id' -> devuelve un producto según su id.

-POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.

-PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.

-DELETE '/api/productos/:id' -> elimina un producto según su id.

</hr>