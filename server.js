
const { Server } = require("socket.io");
const http =require('http');
const express = require('express');
const app =express();
const { join } = require('node:path');
const port = process.env.PORT || 9000;



const users={};
 const server =http.createServer(app);
 const io=new Server(server);
 app.use(express.static('public'));
 app.get('/',async(req,res)=>{
    res.sendFile(join(__dirname,'index.html'));

 });

 server.listen(port,()=>{
    console.log(`Server running at port: ${port}`);
 });


io.on("connection",socket=>{
    socket.on('new-user-joined',name=>{
    users[socket.id]=name;
    socket.broadcast.emit('user-joined',name);
});
    socket.on('send',message=>{
        socket.broadcast.emit('recieve',{message:message,name:users[socket.id]});
    });
    socket.on('disconnect',message=>{
        socket.broadcast.emit('left',users[socket.id]);
        delete users[socket.id]

    })
})

