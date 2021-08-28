const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: {type: String, unique: false, required: true},
    cargo: {type: String, unique: false, required: true},
    dia: {type: String, unique: false, required: true},
    mes: {type: String, unique: false, required: true},
    ano: {type: String, unique: false, required: true},
    estadoCivil: {type: String, unique: false, required: false},
    sexo: {type: String, unique: false, required: true},
    cep: {type: String, unique: false, required: true},
    rua: {type: String, unique: false, required: true},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    estado: {type: String, unique: false, required: true},
    telefone1: {type: String, unique: false, required: true},
    telefone2: {type: String, unique: false, required: false},
    celular: {type: String, unique: false, required: true},
    email: {type: String, unique: true, required: true},
    identidade: {type: String, unique: true, required: false},
    cpf: {type: String, unique: true, required: true},
    veiculo: {type: String, unique: false, required: true},
    habilitacao: {type: String, unique: false, required: true},
    escolaridade: {type: String, unique: false, required: false},
    instituicao: {type: String, unique: false, required: false},
},{
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
