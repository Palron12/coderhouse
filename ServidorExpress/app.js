const express = require("express");
const contenedor = require("./container");
const fs = require("fs");
const app = express();
const PORT = 8080;

const products = new contenedor("./productos.json");
products.init();

app.listen(process.env.PORT || PORT, () => {
  console.log("Server corriendo en el puerto 8080");
});
app.on("error", (error) => {
  console.log("Hubo un error");
});

const save = products.save({title:'Galaxis', price:'1200', thumbnail: 'movistar.com.ar', id:6 }) //modificar siempre para agregar nuevos productos
    console.log (`Nuevo item con id ${save}`);
    

app.get("/", (request, response) => {
  response.send(`<h1 style='color:blue;'>Bienvenidos a Express</h1>`);
});

app.get('/productos',(req, res) =>{
  try{
      const elementos = products.getAll()
      res.send(` Los elementos del archivo son ${JSON.stringify(elementos)}`)
  }
  catch(err){
      res.send(`Ocurrio un error al obtener los elementos: ${err}`)
  }
})
app.get('/productoRandom',(req, res) =>{
  const id = Math.floor(Math.random() * 4) + 1
  try{
      const elementoRandom = products.getById(id)
      res.send(`El elemento con id ${id}, es ${JSON.stringify(elementoRandom)}`)
  }
  catch(err){
      res.send(`Ocurrio un error al intentar obtener el elemento por id ${err}`)
  }
})