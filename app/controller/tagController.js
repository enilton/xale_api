const mongoose = require("mongoose");
const Tag = mongoose.model("Tag");
const TipoTag = mongoose.model("TipoTag");

module.exports = {
    async buscarTodos(req, res){               
        let tags = await Tag.find({ }).populate('tpTag');
        return res.json(tags);
    },
    
    async detalhar(req,res){    
        const tag = await Tag.findById(req.params.id).populate('tpTag');;
        return res.json(tag);
    },
    
    async criar(req,res) {
       let tag = await Tag.create(req.body);           
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

    async ativar (req, res){
        let tag = req.body;
        tag.ativo = true;        
        await Tag.findByIdAndUpdate(req.params.id, tag, {new: true});
        return res.json(tag);
    },
};
