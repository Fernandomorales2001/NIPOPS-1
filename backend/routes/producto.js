const { Router } = require('express');
var productoController = require('../controllers/productoController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir: './uploads/productos'});

const router = Router();

router.post('/producto/registrar',path,productoController.registrar);
router.get('/productos/:titulo?',productoController.listar);
router.put('/producto/editar/:id/:img?',path,productoController.editar);
router.get('/producto/:id',productoController.obtener_producto);
router.delete('/producto/:id',productoController.eliminar);
router.put('/producto/stock/:id',productoController.update_stock);
router.get('/producto/img/:img',productoController.get_img)

module.exports = router;