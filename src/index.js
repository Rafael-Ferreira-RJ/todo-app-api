const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// Importação Função "configTarefa"

//const configTarefa = require('./controllers/tarefa-controller');
//configTarefa(app);

const {configTarefaGet, configTarefaPost} = require('./controllers/tarefa-controller')
configTarefaGet(app)
configTarefaPost(app)

// Importação Função "configUser"

//const configUser = require('./controllers/usuario-controller');
//configUser(app);

const {configUserGet, configUserPost} = require('./controllers/usuario-controller')
configUserGet(app)
configUserPost(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})