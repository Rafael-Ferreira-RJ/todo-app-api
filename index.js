const express = require('express')
const app = express()
const port = 3000

app.get('/usuario', (req, res) => {
  res.send('Rota ativada com GET e recurso usuário:nome, email e senha devem ser retornados')
})

app.get('/tarefas', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefas: título, data, status e descrição devem ser retornados')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})