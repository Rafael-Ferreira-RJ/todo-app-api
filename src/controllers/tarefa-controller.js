const express = require('express');

function configTarefa(app) {
    app.get('/tarefas', (req, res) => {
        res.send('Rota ativada com GET e recurso tarefas: título, data, status e descrição devem ser retornados')
    })
}

module.exports = configTarefa;