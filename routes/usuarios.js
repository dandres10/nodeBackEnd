const { Router } = require('express');
const router = Router();
const userController = require('../controllers/usuarios');

router.get('/', userController.usuariosGet);

router.put('/:id', userController.usuariosPut)

router.post('/', userController.usuariosPost)

router.delete('/', userController.usuariosDelete)

router.patch('/', userController.usuariosPatch)


module.exports = router;