const express = require("express");
const mascotas = require("./modulos/mascotas");
const personas = require("./modulos/personas");

const app = express();
//configuro middlew
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/mascotas", mascotas);
app.use("/api/personas", personas);
app.use(express.static("./public"));

//----levanto servidor
app.listen(8080, () => console.log("Luchi atr en el 8080"));
