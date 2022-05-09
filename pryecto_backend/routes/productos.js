var express = require('express');
var router = express.Router();
const {token,ValiarAdmin_Role  }= require ('../middleware/validar-token');
 

const { getAllProductos,getProducto,createProducto,añadirCarrito ,updateProducto,deleteProducto,uploadAvatar} = require ('../controllers/productos'); 


router.get('/todos',token,getAllProductos);
router.get('/miProducto/:id',token, getProducto);
router.post('/create/:id',token, ValiarAdmin_Role,uploadAvatar.single('imagen'),createProducto);
router.post ('/carrito/:id',añadirCarrito)
router.put('/update/:id',ValiarAdmin_Role, updateProducto);
router.delete('/delete/:id',token,ValiarAdmin_Role ,deleteProducto);

module.exports = router;