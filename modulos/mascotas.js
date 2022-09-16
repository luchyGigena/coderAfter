const express = require("express");
const { Router } = express;

const router = Router();

const mascotas = [
  {
    nombre: "Pepito",
    edad: 2,
    raza: "Bulldog",
  },
  {
    nombre: "Pepita",
    edad: 3,
    raza: "Bulldog",
  },
];

router.get("/", (req, res) => {
  res.send(mascotas);
});

router.post("/", (req, res) => {
  const mascotaGuardar = req.body;
  mascotas.push(mascotaGuardar);
  res.status(201).send({ status: "Guardado" });
});

module.exports = router;
