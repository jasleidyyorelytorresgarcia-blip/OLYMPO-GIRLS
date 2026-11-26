// TUS 3 PRODUCTOS REALES - AQUÍ LOS CAMBIAS
let productos = [
  { nombre: "Jabón de Rosa", precio: 15000, desc: "Hidrata y huele delicioso" },
  { nombre: "Jabón de Lavanda", precio: 18000, desc: "Relaja y cuida tu piel" },
  { nombre: "Jabón de Miel", precio: 20000, desc: "Suaviza y da brillo" }
];

// MOSTRAR PRODUCTOS EN LA TIENDA
let grid = document.getElementById("productos-grid");
if (grid) {
  grid.innerHTML = "";
  productos.forEach(p => {
    grid.innerHTML += `
      <div style="background:white;padding:20px;border-radius:20px;text-align:center">
        <h3>${p.nombre}</h3>
        <p>${p.desc}</p>
        <p><b>$${p.precio.toLocaleString()}</b></p>
        <button onclick="agregar('${p.nombre}', ${p.precio})" style="background:#7a1f3d;color:white;padding:10px 20px;border:none;border-radius:20px;cursor:pointer">Agregar al Carrito</button>
      </div>
    `;
  });
}

// AGREGAR AL CARRITO Y GUARDAR
function agregar(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre: nombre, precio: precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(nombre + " agregado ♛");
  actualizarContador();
}

function actualizarContador() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let cont = document.getElementById("contador");
  if (cont) cont.textContent = carrito.length;
}
actualizarContador();