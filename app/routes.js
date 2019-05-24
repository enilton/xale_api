const express = require('express');
const routes = express.Router();
const UsuarioController = require("./controller/usuarioController");
const CidadeController = require("./controller/cidadeController");

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

module.exports = routes;