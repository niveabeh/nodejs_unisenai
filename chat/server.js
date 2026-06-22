const express = require('express');
const http = require('http');
const { Server } = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = new Server(server); // conecta o socket ao servidor

app.use(express.static('public')); // Torna acessivel a pasta public

const port = 3000;

app.listen(port, ()=>{

    console.log(`Servidor rodando em http://localhost:${port}`);

});

const users = {}; 


app.get('/', (req,res)=>{

    res.sendFile(__dirname + '/public/index.html');
    
});


io.on('connection',(socket)=>{

    console.log('Usuário novo conectado');

    socket.on('set name', (name) =>{
        users[socket.id] = name;
    });

    socket.on("chat message", (msg)=>{

        const name = user[socket.id] || 'Anônimo';
        io.emit('chat message', {name, message: msg}); //Enviando mensagens para todos os usuários

    });

    socket.on('disconect', ()=>{

        delete users[socket.id];
        console.log("Usuário deslogado");

    });

});

