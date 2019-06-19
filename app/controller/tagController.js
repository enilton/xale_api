const mongoose = require("mongoose");
const Tag = mongoose.model("Tag");

module.exports = {
    async buscarTodos(req, res){               
        const tags = await Tag.find({ });
        return res.json(tags);
    },
    
    async detalharTag(req,res){    
        const tag = await Tag.findById(req.params.id);
        return res.json(tag);
    },
    
    async criar(req,res){
       let tag = req.body;               
       tag = await Tag.create(tag);           
       return res.json(tag);    
    },

    async atualizar(req,res){
        const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(tag);
    },

    async desativar (req, res){
        let tag = req.body;
        tag.ativo = false;        
        await Tag.findByIdAndUpdate(req.params.id, tag, {new: true});
        return res.json(tag);
    },
};
