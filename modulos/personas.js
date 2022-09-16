const express = require("express");
const { Router } = express;

const router = Router();

const personas = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
  },
  {
    nombre: "Pedro",
    apellido: "González",
    edad: 40,
  },
];

router.get("/", (req, res) => {
  res.send(personas);
});

router.post("/", (req, res) => {
  const personaGuardar = req.body;
  personas.push(personaGuardar);
  res.status(201).send({ status: "Guardado" });
});

module.exports = router;
