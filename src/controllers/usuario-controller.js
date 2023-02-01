const express = require('express');

function configUser(app) {
    app.get('/usuario', (req, res) => {
        res.send('Rota ativada com GET e recurso usuário:nome, email e senha devem ser retornados')
    })
}

module.exports = configUser;