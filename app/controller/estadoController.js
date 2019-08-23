const mongoose = require("mongoose");
const Estado = mongoose.model("Estado");

module.exports = {
    async buscarTodos(req, res){               
        const estados = await Estado.find({ });       
        return res.json(estados);
    },
    
    async detalhar(req,res){    
        const estado = await Estado.findById(req.params.id);       
        return res.json(estado);
    },
    
    async criar(req,res){
       let estado = req.body;           
       estado = await Estado.create(estado); 
       return res.json(estado);    
    },  
};
