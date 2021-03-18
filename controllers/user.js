const { response, request } = require('express');

const userGet = ( req = request, res = response ) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query; //query params - ej: api/user?q=hola&limit=10

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });

}

const userPut = ( req, res = response ) => {

    const { id } = req.params; //id es el nombre puesto en la ruta

    res.status(500).json({
        msg: 'put API - Controller',
        id
    });

}

const userPost = ( req, res = response ) => {

    const { name, age } = req.body;

    res.json({
        msg: 'post API - Controller',
        name,
        age
    });

}

const userDelete = ( req, res = response ) => {
    res.json({
        msg: 'delete API -. Controller'
    });
}

const userPatch = ( req, res = response ) => {
    res.json({
        msg: 'patch API - Controller'
    });
}


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}