const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Pessoa = mongoose.model('Pessoa', { 
    nome: String,
    sobrenome: String,
    cpf: String,
    dataNascimento: Date
});

module.exports = Pessoa;