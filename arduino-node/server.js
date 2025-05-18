const express = require('express'); //Framework para crear aplicaciones web en Node.js
const http = require('http'); //Módulo nativo de Node para crear servidores HTTP
const { Server } = require('socket.io'); // Biblioteca para comunicación en tiempo real mediante WebSockets

// Si más adelante querés usar el puerto serial:
// const { SerialPort } = require('@serialport/stream');
// const { ReadlineParser } = require('@serialport/parser-readline');
// const { default: SerialPortBinding } = require('@serialport/bindings-cpp');

const app = express(); //Crea una aplicación Express
const server = http.createServer(app); //Crea un servidor HTTP usando la app Express
const io = new Server(server); //Inicializa Socket.io vinculado al servidor HTTP

// Servir archivos desde "public"
app.use(express.static('public')); 

//Configuración de WebSocket (Socket.io)
// WebSocket: Enviar datos cada 2 segundos simulados
io.on('connection', (socket) => {
  console.log('Cliente conectado');

  setInterval(() => {
    const valorSimulado = Math.floor(Math.random() * 100);
    socket.emit('medicion', valorSimulado); // simula una distancia
  }, 60000);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
