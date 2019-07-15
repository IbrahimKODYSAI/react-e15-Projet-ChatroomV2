/*
 * Require
 */
const express = require('express');
const { join } = require('path');
const { Server } = require('http');
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);


/*
 * Express
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Vous êtes bien connecté au server!</h1>
  `);
});

/*
 * Socket.io
 */
let id = 0;
io.on('connection', (socket) => {
  console.log('>> socket.io - connected');
  socket.on('send_message', (message) => {
    // eslint-disable-next-line no-plusplus
    // console.log(message);
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    console.log(message);
    io.emit('send_message', message);
  });
});

/*
 * Server
 */
server.listen(3001, () => {
  console.log('listening on *:3001');
});
