const express = require('express');
const routes = express.Router();
const UsuarioController = require("./controller/usuarioController");
const CidadeController = require("./controller/cidadeController");
const TipoTagController = require("./controller/tipoTagController");

routes.get("/",(req, res) => {
    return res.send("xale api");
});

routes.get("/usuarios", UsuarioController.buscarTodos);
routes.get('/usuarios/:id', UsuarioController.detalharUsuario);
routes.post("/usuarios", UsuarioController.criar);
routes.delete("/usuarios", UsuarioController.desativar);

routes.get("/cidades", CidadeController.buscarTodos);
routes.get('/cidades/:id', CidadeController.detalhar);
routes.post("/cidades", CidadeController.criar);
routes.delete("/cidades", CidadeController.desativar);
routes.put("/cidades", CidadeController.atualizar);

routes.get("/tipoTags", TipoTagController.buscarTodos);
routes.get('/tipoTags/:id', TipoTagController.detalhar);
routes.post("/tipoTags", TipoTagController.criar);
routes.put("/tipoTags/desativar/:id", TipoTagController.desativar);
routes.put("/tipoTags/ativar/:id", TipoTagController.ativar);
routes.put("/tipoTags", TipoTagController.atualizar);

module.exports = routes;