const colecaoUf = require('../dados/dados');

const listarUfs = (busca) => {
    if (busca) {
        return colecaoUf.filter(uf =>
            uf.nome.toLowerCase().includes(busca.toLowerCase())
        );
    }
    return colecaoUf;
};

function buscarUfPorId(id){
    const dados = colecaoUf.find(uf => uf.id === parseInt(id));
    return dados;
};

module.exports = { listarUfs, buscarUfPorId };
