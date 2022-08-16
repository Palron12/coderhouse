const logger = require('../utils/logger');


router.get("/info-gzip", compression(), (req, res) => {
    logger.info("🔸Route: /info-gzip 🔸Method: GET ");
    res.send(info);
  });
  router.get("/api/randoms", (req, res) => {
    logger.info("🔸Route: /api/randoms 🔸Method: GET ");
      if (!req.query.cant) {
      logger.error(
        "🔸Route: /api/randoms 🔸Method: GET 🔸Error: cantidad no especificada"
      );
      res.status(400).send("Debe indicar la cantidad de números a generar");
    } else {
      const cant = 1000;
      const randoms = getRandom(cant);
      console.log(randoms);
      res.send(randoms);
    }
  });
  router.get("*", compression(), (req, res) => {
    logger.warn("🔸Route: 404 Not Found 🔸Method: GET ");
    res.send("Sorry 🤷‍♂️ 404 Not Found");
  });
  
  module.exports = loginRouter;