const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Contenedor = require("../contenedor/contenedor");
const productos = new Contenedor(path.join(__dirname, "../data/productos.json"));


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/img"));
    },
    filename: (req, file, cb) => {
     cb(null, file.originalname)
      },
  });
 

router.use(multer({storage}).single('thumbnail'));

router.get("/", (req, res) => {
    return res.json(productos.content);
  });
  
  router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    return res.json(productos.getById(id));
  });
  
  /*router.post("/", (req, res) => {
    let obj = req.body;
    return res.json(productos.save(obj));
  });*/
  router.post('/', (req, res) => {
  const  body  = req.body;
  const photo = req.file;
  console.log(photo)
  // antes de guardar el objeto le añado la propiedad para que se pueda acceder a la foto.
  body.imagen = photo.filename;
  res.json(productos.save(body))
  
});
  
  router.put("/:id", (req, res) => {
    let obj = req.body;
    let id = Number(req.params.id);
    return res.json(productos.update(id, obj));
  });
  
  router.delete("/:id", (req, res) => {
    let id = Number(req.params.id);
    return res.json(productos.deleteById(id));
  });

  module.exports = router;