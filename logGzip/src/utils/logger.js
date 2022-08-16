const winston = require ('winston');

let login = {
    loggerProd: () => winston.createLogger({
        transports: [
        new winston.transports.File({
          filename: "prod-error.log",
          level: "error",
        }),
      ],
    }),
  
  
  loggerDev: () => winston.createLogger({
       transports: [
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
        new winston.transports.File({
          filename: "error.log",
          level: "error",
        }),
        new winston.transports.File({
          filename: "warn.log",
          level: "warn",
        }),
      ],
    }),
  
  byLoger: ()=> {
  let logger = null;
  if (process.env.NODE_ENV === "PROD") {
    logger = loggerProd();
    logger.info("logger in Production");
  } else {
    logger = loggerDev();
    logger.info("logger in Developer");
  }
  }
}
  module.exports = login;