'use strict';
var mongoose = require('mongoose')
var livro = mongoose.model('livro')

// get all
exports.lista_todos_os_livros = function(req, res){
    livro.find({}, function(err, livros){
        if(err){
            res.send(err)
        }
        res.json(livros)
    })
}

// get id
exports.lista_um_livro = function(req, res) {
    livro.find({"_id": req.params.livroId}, function(err, livro){
        if(err) {
            res.send(err)
        }
        res.json(livro)
    })
}

// post 
exports.adiciona_um_livro = function(req, res){
    novo_livro = new livro(req.body)
    novo_livro.save(function(err, livro){
        if(err){
            res.send(err)
        }
        res.json(livro)
    })
}

// put
exports.atualiza_um_livro = function(req, res){
    livro.findOneAndUpdate({_id: req.params.livroId}, req.body, {new: true}, 
        function(err, livro){
            if(err){
                res.send(err);
            }
            res.json(livro);
    });
}

// delete
exports.remove_um_livro = function(req, res){
    livro.remove({_id: req.params.livroId}, function(err, livro){
        if(err){
            res.send(err)
        }
        res.json({"Mensagem": "Livro deletado com sucesso"})
    })
}
