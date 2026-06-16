const express = require('express');

const app = express();

app.use(express.json());

const { listarUfs, buscarUfPorId } = require('./servicos/servicos');

app.get('/ufs', (req, res) => {

    const resultado = listarUfs(req.query.busca);

    res.json(resultado);

});

app.get('/ufs/:id', (req, res) => {

    const id = req.params.id
    console.log(id)
    if (isNaN(id)) {
        return res.status(400).json({ erro: 'ID deve ser um número' });
    }

    const uf = buscarUfPorId(id);

    if (!uf) return res.status(404).json({ erro: 'UF não encontrada' });

    res.json(uf);

});

app.listen(3000, () => console.log(' http://localhost:3000'))