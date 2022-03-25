
const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const query = req.query

    res.json({
        msg: 'get APi - controlador',
        query
    })
}
const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'Post APi - controlador',
        nombre,
        edad
    })
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete APi - controlador'
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch APi - controlador'
    })
}
const usuariosPut = (req, res = response) => {

    const id = req.params.id

    res.json({
        msg: 'Put APi - controlador',
        id
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
}