# To Do APP API
1ª PARTE - AULA 03 - MÓDULO 05 (PROGRAMADORES CARIOCAS)

Atividade: GET API

Utilizando o express e com base nas entidades e atributos definidos como prioritários na atividade anterior, criem rotas que:<br>
⇨ Utilizem ‘/<nome da entidade>’ como path (caminho) para a ativação da rota<br>
⇨ Utilizem o verbo GET<br>
⇨ Respondam a requisição com: ‘Rota ativada com GET e recurso <nome da entidade>: valores de <nome da entidade> devem ser retornados’<br>
◼ Utilize como base o “Hello world” implementado com express;<br>
◼ Utilize o insomnia para testar as rotas criadas<br>
◼ Crie um repositório “todo app api” no github e suba este projeto na plataforma<br>

2ª PARTE - AULA 04 - MÓDULO 05 (PROGRAMADORES CARIOCAS)

Atividade: Organizando o projeto

Na pasta do projeto TODO app API crie as seguintes pastas e arquivos seguindo a estrutura fornecida:<br>
⇨ Pasta src - Onde todo código da aplicação será criado<br>
⇨ Pastas models e controllers dentro da pasta src<br>
⇨ Mova o arquivo com o app/servidor para a pasta src<br>
⇨ Crie os arquivos usuario-controller.js e tarefa-controller.js dentro da pasta controller<br>
⇨ Transfira as rotas de usuario e tarefa presentes no app/servidor para os arquivos correspondentes de controller<br>
⇨ Crie nos arquivos do controller uma função que recebe como parâmetro o app e configura as rotas<br>
⇨ Importe os controllers no app/servidor e utilize a função importada para configurar as rotas<br>

3ª PARTE - AULA 05 - MÓDULO 05 (PROGRAMADORES CARIOCAS)

Atividade: POST API

Utilizando o que desenvolvemos até aqui da TODO app api, implemente:<br>
⇨ Uma nova rota para usuário dentro do usuario-controller que:<br>
⇨ Utilize o verbo POST<br>
⇨ Utilize o caminho/path de usuário (‘usuario’)<br>
⇨ Responda a requisição com o texto: “Rota POST de usuario ativada: usuário adicionado ao banco de dados”<br>
⇨ Uma nova rota para tarefas dentro do tarefa-controller que:<br>
⇨ Utilize o verbo POST<br>
⇨ Utilize o caminho/path de tarefa (‘tarefa”)<br>
⇨ Responda a requisição com o texto: “Rota POST de tarefa ativada: tarefa adicionada ao banco de dados”<br>

4ª PARTE - AULA 05 - MÓDULO 05 (PROGRAMADORES CARIOCAS)

Atividade: POST & body-parser

Utilizando o que desenvolvemos até aqui da TODO app api, faça o que se pede:<br>
➔ No arquivo do servidor, adicione o body-parser como middleware (com o método use do express), para processar requisições com corpo JSON<br>
➔ Implemente nas rotas de POST dos controllers uma verificação do corpo (body) do objeto de requisição. Para cada valor recebido faça um console.log simples.<br>
Obs: Utilize o insomnia/postman para testar as novas rotas criadas, utilizando o método POST, com um JSON sendo passado no corpo da Requisição<br>
