const express = require("express");

const userModel = require("../Scheme/schemeUser.js");
const bcrypt = require("bcrypt");



const registro = async (req, res) => {
 
const { user, pass } = req.body;
 
if (!user || !pass) res.status(404).send("No se encontro el usuario");

const usuario = new userModel({ user:user , pass:pass });
await usuario.save();
res.send("Usuario agregado");

}
// const loguear = async (req, res) => {
//   const { user, pass } = req.body;

// const usuario =  userModel.findOne({ user: user }).exec();
// if (!usuario) res.status(404).send("No se encontro el usuario");
// if(!bcrypt.compareSync(pass, usuario.pass)) res.status(404).send("Contraseña incorrecta");
// res.send("Usuario logueado");
//  };

module.exports = {
 registro
//  loguear,
};
