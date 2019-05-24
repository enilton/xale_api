const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuario");
const cloudinary = require('cloudinary');

module.exports = {
    async buscarTodos(req, res){               
        const usuarios = await Usuario.find({ });
        return res.json(usuarios);
    },
    
    async detalharUsuario(req,res){    
        const usuario = await Usuario.findById(req.params.id);             
        usuario.fotoPerfil = cloudinary.image(usuario._id.toString(), { format: "jpg", crop: "fill", width: 200, height: 200 });
        return res.json(usuario);
    },
    
    async criar(req,res){
        let usuario = req.body;               
       
        if (usuario.fotoPerfil != null){     
            await cloudinary.v2.uploader.upload('data:image/jpeg;base64,' + usuario.fotoPerfil.data).then((result) => {                               
                usuario.fotoPerfil = result;
            });    
        }      
        
       usuario = await Usuario.create(usuario);           
       return res.json(usuario);    
    },

    //ainda não vai ser usado na primeira release //usar put
    async atualizar(req,res){
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(usuario);
    },
   
    //ainda não será usado na primeira release
    async desativar (req, res){
        const usuario = await Usuario.findByIdAndRemove(req.params.id);
        return res.send();
    },
};
