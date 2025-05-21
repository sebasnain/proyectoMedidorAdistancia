console.log("iniciando...")

let listaDeMediciones = [];


//////////////////////////// npm server.js
//////////////////////////


 const socket = io();
    socket.on('medicion', (dato) => {
     
      document.getElementById('litros').textContent = dato + ' lts';
      pasarALitros(dato)
    });

 

   const pasarALitros = (dato) =>{
    let distancia = dato
     let alturaTotal = 90; // en cm
     let litrosTotales = 1000;
     let alturaAgua = alturaTotal - distancia; 
     let loslitros = Math.floor((alturaAgua / alturaTotal) * litrosTotales); // litros actuales
    document.getElementById('litros').textContent = loslitros + ' lts';
    console.log("los litros son:" + loslitros)
     
  const porcentajeDelLiquido = (loslitros / litrosTotales) * 100;
   const animacionLiquido = document.getElementById('liquido');
   animacionLiquido.style.height = `${porcentajeDelLiquido}%`;


   listaDeMediciones.push(loslitros);
     if (listaDeMediciones.length > 10) {
        listaDeMediciones = listaDeMediciones.slice(-10);  // Conserva solo los últimos 10 elementos
    }
   console.log(listaDeMediciones)


   if (porcentajeDelLiquido < 20){
    animacionLiquido.style.backgroundColor = 'red'
   } else {
    animacionLiquido.style.backgroundColor = 'rgb(51, 155, 120)'
   }
   }
  
   
     
   
