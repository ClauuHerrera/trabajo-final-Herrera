


let carrito = []

let contenedorprincipal = document.getElementById("contenedorlenceria");


   
      const pedirpost = async () => {
      const resp = await fetch("productos.json");
      const data = await resp.json()
      console.log(data);
    

      data.forEach((productotienda) => {
        let contenedor = document.createElement("div")

        contenedor.innerHTML = `
        
        <div class="col">
        <div class="card">
            <img src="${productotienda.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productotienda.nombre}</h5>
                <p class="card-text">${productotienda.tipo}</p>
                <p> $ ${productotienda.precio}</p>
                <p>Consulte talles</p>
                <p>${productotienda.stock}</p>
            </div>
        </div>
    </div>
         
        `
        contenedorprincipal.append(contenedor);

 //boton de comprar 
        
            let comprar = document.createElement("button")
            comprar.innerText = "comprar";
            comprar.className = "comprar";
        
            contenedorprincipal.append(comprar)
        
            comprar.addEventListener("click", () => {
               carrito.push({
                id : productotienda.id,
                nombre : productotienda.nombre,
                tipo : productotienda.tipo,
                precio : productotienda.precio,
                imagen : productotienda.imagen,
                stock : productotienda.stock,
               })
               console.log(carrito)
            });
        
        });
        

 };

pedirpost()
   

   

//icono carrito

let vercarrito = document.getElementById("vercarrito");

const modalcontainer = document.getElementById("modal-container");


vercarrito.addEventListener("click", () => {

    modalcontainer.innerHTML = "";
    modalcontainer.style.display = "flex" 
    const modalheader = document.createElement("div");
    modalheader.className ="modal-header"
    modalheader.innerHTML = `
    
    <h1 class="modal-header-title">carrito.</h1>

    `;

    modalcontainer.append(modalheader);






    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", ()=> {
    modalcontainer.style.display = "none";

    })

    modalheader.append(modalbutton);




    carrito.forEach((productotienda) =>{

        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${productotienda.imagen}">
        <h3>${productotienda.nombre}</h3>
        <p> $ ${productotienda.precio}</p>
        `;
        modalcontainer.append(carritoContent);
    })
    const total = carrito.reduce ((acc , el) => acc + el.precio, 0);




    const totalbuying = document.createElement("div")
    totalbuying.className = "total-Content"
    totalbuying.innerHTML = `total a pagar : $ ${total} `;
    
    modalcontainer.append(totalbuying);

    const botoncomprar = document.createElement("button")

    botoncomprar.addEventListener("click", ()=> {
    
        Swal.fire({
            title: 'Gracias por tu compra! esperamos volver a verte por aca',
            width: 600,
            padding: '20px',
            color: '#121212',
            background: '#bdb76b',
            backdrop: `
              rgba(157, 133, 13, 0.153)
             
            `
          })
      
    })

    botoncomprar.className = "botoncomprar"
    botoncomprar.innerHTML = ` finalizar compra!`;

    modalcontainer.append(botoncomprar);
    
});
  


//localstorage//
  
const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
  };
  
  data.forEach((producto) => {
    guardarLocal(producto.id, JSON.stringify(producto));
  });
  console.log(data);
  
  let recuperadoLocal = [];
  for (let i = 0; i < localStorage.length; i++) {
    const clave = localStorage.key(i);
    const valor = JSON.parse(localStorage.getItem(clave));
    recuperadoLocal.push(valor);
  }
  
  console.log(recuperadoLocal);
  
