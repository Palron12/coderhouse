const express = require("express");
const Contenedor = require("./container");
const fs = require("fs");
const app = express();
const PORT = 8080;

const PRODUCTS = new Contenedor("productos.json");


app.listen(process.env.PORT || PORT, () => {
  console.log("Server corriendo en el puerto 8080");
});
app.on("error", (error) => {
  console.log("Hubo un error");
});

app.get("/", (request, response) => {
  response.send(`<h1 style='color:blue;'>Bienvenidos a Express</h1>`);
});

app.get("/products", (request, response) => {
  response.send(PRODUCTS.getAll());
});

app.get("/productsRandom", (request, response) => {
  response.send(PRODUCTS.getById(Math.floor(Math.random() * (PRODUCTS.countID - 1 + 1) + 1)));
});