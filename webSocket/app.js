const express = require("express");
const Contenedor = require("./contenedor/contenedor");
const productos = new Contenedor(__dirname + "/data/productos.json");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const { Router } = require('express')
const router = Router()
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const messages = []

app.use(express.static('./public'))
app.use(express.static("./views"));

app.get('/',(req,res) => {
  res.sendFile('index', {root: __dirname})
})

router.get('/',(req,res) =>{
  const elements = productos.getAll()
  res.send(JSON.stringify(elements))
})

httpServer.listen(process.env.PORT || 8080, () => {
  console.log("SERVER ON");
});
io.on('connection', (socket) =>{
  console.log('usuario conectado')
  socket.on('new_product',async (data)=>{
      await productos.save(data)
      io.sockets.emit('products', data)
  })
})


io.on('connection', (socket)=>{
  socket.emit('messages', messages)
  socket.on('new_message', data =>{
      data.time = new Date().toLocaleTimeString()
      data.date = new Date().toLocaleDateString()
      messages.push(data)
      io.sockets.emit('messages', [data])
  })

})