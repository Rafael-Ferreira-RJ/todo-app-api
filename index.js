const express = require('express') // importa o express
const app = express() // app recebe tudo da função express
const port = 3000 // definindo a porta do servidor que receberá as requisições

//Definindo a Rota '/' para mostrar a mensagem Olá Mundo
app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

// O servidor está escutando na porta 3000. Subiu o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})