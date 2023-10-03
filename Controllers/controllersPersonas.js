const express = require("express");
// const db_personas = require("../db_personas.js"); // Importo el array de personas
const clienteModel = require("../Scheme/schemeClientes.js");

const listarPersonas = async (req, res) => {
  const  {guid}  = req.params;
  // const user = db_personas.find((user) => user.guid === guid);
  const user = await clienteModel.findById(guid).exec()

  if (!user)  res.status(404).send("No se encontro el usuario");
  
  return res.send(user);
  console.log(user);
};

const agregarPersonas = async (req, res) => {
const { guid, name } = req.body;

     const user = await clienteModel.findById(guid).exec()
// const user = db_personas.find((user) => user.guid === guid);
  if (!guid || !name) {
    res.status(404).send("No se encontro el usuario");
  }

if (user) {
    res.status(404).send("El usuario ya existe");
  }
  const newCliente = new clienteModel({
    _id: guid,
    name: name,
  });
  await newCliente.save();
  res.send("Usuario agregado");
};


const actualizarPersonas = async (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;

  if (!name) res.status(404).send("No se encontro el nombre");
  // const user = db_personas.find((user) => user.guid === guid);
  
  const user = await clienteModel.findById(guid).exec()

  if (!user) res.status(404).send("No se encontro el usuario");
  


  user.name = name;
   user.save();
 return res.send("Nombre actualizado");
};

const eliminarPersonas = async (req, res) => {
  const { guid } = req.params;

  // const userDelete = db_personas.findIndex((user) => user.guid === guid);
  const user = await clienteModel.findById(guid).exec()

  if (!user) res.status(401).send("No hay usuario para eliminar");

  await user.deleteOne;
  res.send("Usuario eliminado");
};

module.exports = {
  listarPersonas,
  agregarPersonas,
  actualizarPersonas,
  eliminarPersonas
};
