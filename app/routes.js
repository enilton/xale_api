const express = require('express');
const routes = express.Router();
const UsuarioController = require('./controller/usuarioController');
const CidadeController = require('./controller/cidadeController');
const TipoTagController = require('./controller/tipoTagController');
const TagController = require('./controller/tagController');
const TarefaController = require('./controller/tarefaController');

routes.get('/',(req, res) => {
    return res.send('xale api');
});

routes.get('/usuarios', UsuarioController.buscarTodos);
routes.get('/usuarios/:id', UsuarioController.detalharUsuario);
routes.post('/usuarios', UsuarioController.criar);
routes.delete('/usuarios', UsuarioController.desativar);

routes.get('/cidades', CidadeController.buscarTodos);
routes.get('/cidades/:id', CidadeController.detalhar);
routes.post('/cidades', CidadeController.criar);
routes.delete('/cidades', CidadeController.desativar);
routes.put('/cidades', CidadeController.atualizar);

routes.get('/tipoTags', TipoTagController.buscarTodos);
routes.get('/tipoTags/:id', TipoTagController.detalhar);
routes.post('/tipoTags', TipoTagController.criar);
routes.put('/tipoTags/desativar/:id', TipoTagController.desativar);
routes.put('/tipoTags/ativar/:id', TipoTagController.ativar);
routes.put('/tipoTags', TipoTagController.atualizar);

routes.get('/tags', TagController.buscarTodos);
routes.get('/tags/:id', TagController.detalhar);
routes.post('/tags', TagController.criar);
routes.put('/tags/desativar/:id', TagController.desativar);
routes.put('/tags/ativar/:id', TagController.ativar);
routes.put('/tags', TagController.atualizar);

routes.get('/tarefas', TarefaController.buscarTodos);
routes.get('/tarefas/:id', TarefaController.detalhar);
routes.post('/tarefas', TarefaController.criar);
routes.put('/tarefas/desativar/:id', TarefaController.desativar);
routes.put('/tarefas/ativar/:id', TarefaController.ativar);
routes.put('/tarefas', TarefaController.atualizar);

module.exports = routes;