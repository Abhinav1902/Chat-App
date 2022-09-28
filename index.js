
const io=require('socket.io')(8000)

const users={};

io.on('connecton',socket =>{
    socket.on('new-user-joined',name=>{
        console.log("new user",name);
   users[socket.id]=name;
   socket.broadcost.emit('user joined',name);
    });
    socket.on('send',massege=>{
        socket.broadcost.emit('recived',{massege:massege,name :users[socket.id]});
    })
})