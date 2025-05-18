console.log("desde app.js")

 const socket = io();
    socket.on('medicion', (dato) => {
      document.getElementById('valor').textContent = dato + ' cm';
    });

   
