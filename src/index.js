// Importando o packages
const express = require('express')

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// Importação Função "configTarefa"

//const configTarefa = require('./controllers/tarefa-controller');
//configTarefa(app);

// const {configTarefaGet, configTarefaPost} = require('./controllers/tarefa-controller')
// configTarefaGet(app)
// configTarefaPost(app)

const TarefaController = require('./controllers/tarefa-controller')
TarefaController.rotas(app)

// Importação Função "configUser"

//const configUser = require('./controllers/usuario-controller');
//configUser(app);

// const {configUserGet, configUserPost} = require('./controllers/usuario-controller')
// configUserGet(app)
// configUserPost(app)

const UsuarioController = require('./controllers/usuario-controller')
UsuarioController.rotas(app)

module.exports = app

