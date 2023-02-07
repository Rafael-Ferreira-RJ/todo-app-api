class UsuarioController {
    static rotas(app) {
        app.get('/usuario', UsuarioController.listar)
        app.post('/usuario', UsuarioController.inserir)
    }

    // GET
    static listar(req, res) {
        res.send('Rota GET do usuário ativada')
    }

    // POST
    static inserir(req, res) {
        res.send('Rota POST do usuário ativada')
    }
}

module.exports = UsuarioController