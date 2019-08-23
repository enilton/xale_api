const mongoose = require("mongoose");
const Cidade = mongoose.model("Cidade");

module.exports = {
    async buscarTodos(req, res){               
        const cidades = await Cidade.find({ }).populate('estado');       
        return res.json(cidades);
    },
    
    async detalhar(req,res){    
        const cidade = await Cidade.findById(req.params.id).populate('estado');       
        return res.json(cidade);
    },
    
    async criar(req,res){
       let cidade = req.body;           
       cidade = await Cidade.create(cidade); 
       return res.json(cidade);    
    },  
};
