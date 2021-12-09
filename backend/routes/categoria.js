const { Router } = require('express');
const { registrar, obtener_categoria, editar, eliminar, listar } = require('../controllers/categoriaController');

const router = Router();

router.post( '/registrarCategoria' , registrar );
router.get('/cat/:id', obtener_categoria);
router.put('/editar/:id', editar);
router.delete('/eliminar/:id',eliminar);
router.get('/:nombre?', listar);

module.exports = router;