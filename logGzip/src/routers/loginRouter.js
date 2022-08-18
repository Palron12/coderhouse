const router = require("express").Router();

const login = require('../utils/logger')
const compression = require ('compression')



const info = {
  "Node version": process.version,
  Platform: process.platform,
  "Directorio de ejecución": process.cwd(),
  "ID del proceso": process.pid,
  "Uso de la memoria": process.memoryUsage(),
  "Memoria total reservada (rss)": process.memoryUsage().rss,
  "path de ejecución": process.execPath, //donde está el ejecutable de node
  "Argumentos de entrada": process.argv,
  
};

router.get('/info', (req, res)=>{
  login.info("Route: /info Method: GET ");
  res.send(info)
})

router.get("/info-gzip", compression(), (req, res) => {
    login.info("Route: /info-gzip Method: GET ");
    res.send(info);
  });
  
router.get("*", compression(), (req, res) => {
    login.warn("Route: 404 Not Found Method: GET ");
    res.send("Sorry 🤷‍♂️ 404 Not Found");
  });
  
  
  module.exports = router;