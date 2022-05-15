const express = require("express");
const app = express();
const main = require ('./router/main.js');
const path = require ('path');
const ejs = require ('ejs')


app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname, "./public")));

//motor de plantilla

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", main);
app.use(express.static("./views"));

app.listen(process.env.PORT || 8080, () => {
    console.log("Server on port 8080");
});
