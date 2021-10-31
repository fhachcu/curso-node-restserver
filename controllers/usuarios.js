const { response, request } = require('express'); //No es obligarorio esta importación, solo se la realiza para poder obtener el tipado en el visualstudio ej: req.status()

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body; 

    res.json({
        ok: true,
        msg: 'post API - usuariosPost',
        nombre,
        edad
    })
};

const usuariosGet = (req = request, res = response) => {

    const {q, nombre = 'No name', apiKey, page = 1, limit } = req.query;

    res.json({
        ok: true,
        msg: 'get API - usuariosGet',
        q,
        nombre,  
        apiKey,
        page,
        limit
    })
};


const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'put API - usuariosPut',
        id:id
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - usuariosPatch'
    })
};


const usuariosDelete = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - usuariosDelete'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}