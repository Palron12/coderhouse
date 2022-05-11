const express = require("express");
const app = express();
const main = require ('./router/main.js');


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/api/productos", main);
app.use(express.static("./views"));

app.listen(process.env.PORT || 8080, () => {
    console.log("Server on port 8080");
});
// <-- Rutas -->