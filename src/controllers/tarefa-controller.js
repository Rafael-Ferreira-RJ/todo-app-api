// Tarefas não está completa. Falta implementar as funcionalidades

// Importa o bd.js para poder usar o banco de dados simulado
const { bdTarefas } = require("../infra/bd.js")

class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/tarefa', tarefaController.listar)
        app.post('/tarefa', tarefaController.inserir)
        app.put('/usuario/email/:email', tarefaController.atualizaTarefa)
        app.delete('/usuario/email/:email', tarefaController.deletarTarefa)

    }

    static listar(req, res){
        const tarefas = bdTarefas
        // Devolve a lista de tarefas
        res.status(200).send(tarefas)
    }

    static inserir(req, res){

        const tarefa = new Tarefa(req.body.titulo, req.body.descricao, req.body.status,req.body.data)
      
        /* const usuario = {
         usuario.nome = req.body.nome
         usuario.email = req.body.email
         usuario.senha = req.body.senha} */
  
          bdTarefas.push(tarefa)
          res.status(201).send(bdTarefas)
          // Console log do corpo da requisição
          console.log(req.body)        
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        // Console log do corpo da requisição
    }

    static deletarTarefa(req, res){
        // Busca o email na lista de usuarios
        const tarefa = bdUsuarios.find(tarefa => tarefa.titulo === req.params.titulo)
        // Se o usuario não for encontrado, devolve um erro
        if(!tarefa){
            res.status(404).send('Tarefa não encontrada')
        }
        // Se o usuario for encontrado, deleta o usuario
        const index = bdTarefas.indexOf(tarefa)
        bdTarefas.splice(index, 1)
        // Devolve o usuario deletado
        res.status(204).send({"Mensagem: ": `A ${tarefa.titulo} foi deletada`} )
    }


    static atualizaTarefa (req, res) {
        const tarefa = tarefa.find(tarefa => tarefa.titulo === req.params.titulo)

        if(!tarefa){
            res.send('tarefa não encontrada')
            return
        }


        tarefa.titulo = req.body.titulo
        tarefa.descricao = req.body.descricao
        tarefa.status = req.body.status
        tarefa.data = req.body.data




        res.send(bdTarefas)





    }


}

module.exports = tarefaController