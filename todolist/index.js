const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


let tarefas = ['Estudar Node.js', 'Fazer exercícios'];


app.get('/', (req, res) => {

    res.render('index', { lista: tarefas });

});

app.post('/adicionar', (req, res) => {

    const novaTarefa = req.body.tarefa;
    tarefas.push(novaTarefa);
    res.redirect('/');
});


app.post('/deletar/:id', (req, res) => {

    tarefas.splice(req.params.id, 1);
    res.redirect('/');   

});
app.listen(3000, () => console.log('http://localhost:3000'));