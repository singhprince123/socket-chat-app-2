const express = require("express");
const socket = require("socket.io");
//app setup

const app = express();

//static
app.use(express.static("public"));

const server = app.listen(4000, () =>
  console.log("Listening to request on port 4000")
);

//socket setup
const io = socket(server);

io.on("connection", socket => {
  socket.on('chat' , (data)=> {
      io.sockets.emit('chat', data)
  });

  socket.on('typing', (data)=> {
     socket.broadcast.emit('typing', data)
  })
});


