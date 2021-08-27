const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res){
        const { nome, cargo, dia, mes, ano, estadoCivil, sexo, cep, rua, bairro, cidade, estado, telefone1,
        telefone2, celular, email, identidade, cpf, veiculo, habilitacao, escolaridade, instituicao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.dia = dia;
        newCandidate.mes = mes;
        newCandidate.ano = ano;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.rua = rua;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.celular = celular;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;
        newCandidate.escolaridade = escolaridade;
        newCandidate.instituicao = instituicao;
        
        newCandidate.save((err, savedCandidate) =>{
            if (err){
                console.log(err);
                return res.status(500).send();
            }
            return res.status(200).send(savedCandidate);
        });
    }
}