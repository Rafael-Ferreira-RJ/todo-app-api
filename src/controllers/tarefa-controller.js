const express = require('express');

function configTarefaGet(app) {
    app.get('/tarefa', (req, res) => {
        res.send('Rota ativada com GET e recurso tarefas: título, data, status e descrição devem ser retornados')
    })
}

function configTarefaPost(app) {
    app.post('/tarefa', (req, res) => {
        res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados')
    })
}

// Exportação da Função
module.exports = {configTarefaGet, configTarefaPost}