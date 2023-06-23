
const ropa = [

    {
        id: 1,
        nombre: "conjunto negro",
        tipo: "con encaje",
        precio: 800,
        imagen: "../assens/img/primero.png",
        stock: "30 uni",

    },


    {
        id: 2,
        nombre: "brasier",
        tipo: "con encaje",
        precio: 600,
        imagen: "../assens/img/conjuntorojo.png",
        stock: "20 uni",
    },

    {
        id: 3,
        nombre: "conjunto blanco",
        tipo: "clasico",
        precio: 700,
        imagen: "../assens/img/conjuntoblanco.png",
        stock: "15 uni",
    },
    {
        id: 4,
        nombre: "conjunto kaury",
        tipo: "corpiño con tiras, comodo al uso",
        precio: 900,
        imagen: "../assens/img/corpiño y colaless.png",
        stock: "10 uni",
    },
    {
        id: 5,
        nombre: "Ropa interior",
        tipo: "tanga de encaje",
        precio: 600,
        imagen: "../assens/img/ropainterior.png",
        stock: "-",
    },
    {
        id: 6,
        nombre: "ropa interior con hebilla de mujer",
        tipo: "conjunto de sujetador de encaje fino",
        precio: 1100,
        imagen: "../assens/img/conjuntonegro.png",
        stock: "-",
    },
    {
        id: 7,
        nombre: "conjunto (color) negro",
        tipo: "sujetador fino sin hebilla",
        precio: 1500,
        imagen: "../assens/img/conjunto negro con encaje.png",
        stock: "-",
    },
    {
        id: 8,
        nombre: "bombachas clasicas",
        tipo: "de algodon con encaje",
        precio: 800,
        imagen: "../assens/img/bombachaconencaje.png",
        stock: "-",
    },
    {
        id: 9,
        nombre: "pijama",
        tipo: "de algodon",
        precio: 100,
        imagen: "../assens/img/pijama.png",
        stock: "-",
    },
    {
        id: 10,
        nombre: "ropa interior",
        tipo: "de seda sin costura",
        precio: 800,
        imagen: "../assens/img/bombachones.png",
        stock: "-",
    },
    {
        id: 11,
        nombre: "sevanda",
        tipo: "vestido negro con encaje ajustable",
        precio: 2500,
        imagen: "../assens/img/sevanda-ropainterior.png",
        stock: "14 uni",
    },
    {
        id: 12,
        nombre: "vestido de lenceria",
        tipo: "de alta calidad,con encaje,noche,novedad",
        precio: 1900,
        imagen: "../assens/img/vestidoencajenoche.png",
        stock: "-",
    },

]

let carrito = []

let contenedor = document.getElementById("contenedorlenceria");


ropa.forEach((productotienda) => {

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
    contenedorlenceria.append(contenedor)


    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    contenedor.append(comprar)

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
    })

});

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
    
        alert("gracias por tu compra")
      
    })

    botoncomprar.className = "botoncomprar"
    botoncomprar.innerHTML = ` finalizar compra!`;

    modalcontainer.append(botoncomprar);
    
});
  




const guardarlocal = (clave,valor) => {
    localStorage.setItem(clave,valor)
};

for (const producto of ropa){
    guardarlocal(producto.id , JSON.stringify (producto));
}
console.log(ropa)

let recuperadolocal = JSON.parse(localStorage.getItem("ropa"));

console.log(ropa)

