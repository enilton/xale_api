const mongoose = require("mongoose");
const TipoTag = mongoose.model("TipoTag");

module.exports = {
    async buscarTodos(req, res){               
        const tipoTags = await TipoTag.find({ });
        return res.json(tipoTags);
    },
    
    async detalhar(req,res){    
        const tipoTag = await TipoTag.findById(req.params.id);
        return res.json(tipoTag);
    },
    
    async criar(req,res){
       let tipoTag = req.body;               
       tipoTag = await TipoTag.create(tipoTag);           
       return res.json(tipoTag);    
    },

    async atualizar(req,res){
        const tipoTag = await TipoTag.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(tipoTag);
    },

    async desativar (req, res){
        let tipoTag = req.body;
        tipoTag.ativo = false;        
        await TipoTag.findByIdAndUpdate(req.params.id, tipoTag, {new: true});
        return res.json(tipoTag);
    },

    async ativar (req, res){
        let tipoTag = req.body;
        tipoTag.ativo = true;        
        await TipoTag.findByIdAndUpdate(req.params.id, tipoTag, {new: true});
        return res.json(tipoTag);
    },
};
