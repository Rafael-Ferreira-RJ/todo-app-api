const express = require('express');

function configUserGet(app) {
    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuário:nome, email e senha devem ser retornados')
    })
}

function configUserPost(app) {
    app.post('/usuario', (req, res) => {
        res.send('Rota POST de usuario ativada: usuário adicionado ao banco de dados')
    })
}

// Exportação da Função
module.exports = {configUserGet, configUserPost}