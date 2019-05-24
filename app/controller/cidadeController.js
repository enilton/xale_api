const mongoose = require("mongoose");
const Cidade = mongoose.model("Cidade");

module.exports = {
    async buscarTodos(req, res){               
        const cidades = await Cidade.find({ });       
        return res.json(cidades);
    },
    
    async detalhar(req,res){    
        const cidade = await Cidade.findById(req.params.id);       
        return res.json(cidade);
    },
    
    async criar(req,res){
       let cidade = req.body;           
       cidade = await Cidade.create(cidade); 
       return res.json(cidade);    
    },

    //ainda não vai ser usado na primeira release //usar put
    async atualizar(req,res){
        const cidade = await Cidade.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(cidade);
    },
   
    //ainda não será usado na primeira release
    async desativar (req, res){
        const cidade = await Cidade.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
