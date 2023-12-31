// Productos
class Videojuego { 
  constructor (id, name, price, plataforma, company, description, discount, image) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.plataforma = plataforma;
  this.company = company;
  this.description = description;
  this.discount = discount;
  this.image = image;
}
}
function cargarVideojuegos() {
  const rutaArchivo = 'datagames.json';

  fetch(rutaArchivo)
      .then(response => response.json())
      .then(data => {
          const videojuegos = data.map(Juego => new Videojuego(Juego.id, Juego.name, Juego.price, Juego.plataforma, Juego.company, Juego.description, Juego.discount, Juego.image));

          // Mostrar los videojuegos en el HTML
          mostrarVideojuegos(videojuegos);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));


}

//Funcion para vaciar carrito de comprar


const vaciarCarrito = document.getElementById('vaciar');
vaciarCarrito.addEventListener('click', function vaciarCarrito(){
  localStorage.removeItem('carrito');
  mostrarCarrito();
  });

function mostrarVideojuegos(videojuegos) {

  videojuegos.forEach(juego => {
    let div= document.createElement("div"); 
    div.className ="card";
    container_card.appendChild(div);
    
    let div1= document.createElement("div");
    div1.className = "imgBx";
    div1.innerHTML= `
                  <img src="${juego.image}"></img>
    `;
    div.appendChild(div1);
  
    let div2= document.createElement("div");
    div2.className = "contentBx";
    div2.innerHTML= `<h2>${juego.name}</h2>
                      <h3><span>$${juego.price}</span></h3>
                      <a onclick="agregarAlCarrito('${juego.name}', ${juego.price}, '${juego.plataforma}', '${juego.image}')">Comprar</a>
                      <`;
  
    div.appendChild(div2);
  
    let div3= document.createElement("div");
    div3.className = "consola";
    div3.innerHTML= `<h3><span>${juego.plataforma}</span></h3>
                              `
  
    div2.appendChild(div3);
  
  
    
  })
  
}

cargarVideojuegos();

//Funcion para agregar los productos del carrito de compras al localStorage

function agregarAlCarrito(id, name, price, plataforma, company, description, discount, image) {
  const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
  const videojuego = new Videojuego(id, name, price, plataforma, company, description, discount, image);
  CARRITO.push(videojuego);
  localStorage.setItem('carrito', JSON.stringify(CARRITO));
  mostrarCarrito();
}

//Funcion para agregar al carrito de compras los productos

function mostrarCarrito()  {
const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
const listaJuegos = document.getElementById('listaJuegos');
const totalJuegosSpan = document.getElementById('totalJuegos');
let totalJuegos = 0;

listaJuegos.innerHTML = ' ';

CARRITO.forEach(juego => {
  const listItem = document.createElement('div');
  listItem.className = 'cartStyle';
    listItem.innerHTML = `
  <h2 class="titleGame">${juego.id}</h2>
  <p class="cartPrice">$${juego.name}</p>
  <h3 class="cartPlataforma">${juego.price}</h3>
  <img class="cartimg" src="${juego.plataforma}"></img>
            
    `
    listaJuegos.appendChild(listItem);

    totalJuegos += parseFloat(juego.name);
});

totalJuegosSpan.textContent = totalJuegos.toFixed(2);

};

/* agregarAlCarrito(); */
mostrarCarrito();


