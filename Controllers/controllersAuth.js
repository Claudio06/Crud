const express = require('express');
const router = express.Router();
const db_personas = require('../db_personas.js')

const autenticado = (req, res) => {
        const {email, password} = req.body;
       
        if(!email || !password) res.status(400).send();
    
        const user = db_personas.find((user) => user.email === email);
        if(!user) res.status(401).send();
        
        if(user.password !== password) res.status(401).send();
    
         res.send(`Usuario ${user.name} Autenticado`);
     }

const autorizado = (req, res) => {
    
        const {email, password} = req.body;
        
        if(!email || !password) res.status(400).send();
    
        const user = db_personas.find((user) => user.email === email);
        if(!user) res.status(401).send();
        
        if(user.password !== password) res.status(401).send();
     
        if(user.role !=='admin') res.status(403).send()
    
         res.send(`Usuario ${user.name} Autorizado`);
     }
     const publico = (req, res) => {

        res.send('endpoint publico');
    }




module.exports = {
    publico,
    autenticado,
    autorizado
}