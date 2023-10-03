const express = require("express");
const router = express.Router();
const db_personas = require("../db_personas.js");

const auhtRouter = router;

const {
  autorizado,
  autenticado,
  publico,
} = require("../Controllers/controllersAuth.js");

auhtRouter.get("/publico", publico);

auhtRouter.post("/Autenticado", autenticado);

auhtRouter.post("/Autorizado", autorizado);

module.exports = router;
