const express = require('express')
const app = express()
const port = 3000

// Importação Função "configTarefa"
const configTarefa = require('./controllers/tarefa-controller');
configTarefa(app);

// Importação Função "configUser"
const configUser = require('./controllers/usuario-controller');
configUser(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})