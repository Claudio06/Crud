 const express = require('express');
 const router = express.Router()
 const  db_personas = require('../db_personas.js'); // Importo el array de personas

 const {
listarPersonas,
agregarPersonas,
actualizarPersonas,
eliminarPersonas,
} = require('../controllers/controllersPersonas.js');
 
router.post('/', agregarPersonas);
 
router.get("/:guid", listarPersonas);

router.patch("/:guid" , actualizarPersonas);




router.delete('/:guid', eliminarPersonas)


 module.exports = router;

