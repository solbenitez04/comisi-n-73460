const IVA = 1.21; // constante
let total = 0; // variable
let productos = []; // array

function agregarProducto() {
  let nombre = prompt("¿Qué producto desea agregar?");
  let precio = parseFloat(prompt("¿Cuál es el precio del producto?"));

  if (nombre && !isNaN(precio)) {
    productos.push(nombre);
    total += precio * IVA;
    alert("Producto agregado: " + nombre);
  } else {
    alert("Datos inválidos.");
  }
}

function verResumen() {
  if (productos.length === 0) {
    alert("No hay productos en el carrito.");
  } else {
    alert("Productos: " + productos.join(", ") + "\nTotal con IVA: $" + total.toFixed(2));
  }
}

function simulador() {
  let seguir = true;

  while (seguir) {
    let opcion = prompt("1 - Agregar producto\n2 - Ver resumen\n3 - Salir");

    if (opcion === "1") {
      agregarProducto();
    } else if (opcion === "2") {
      verResumen();
    } else if (opcion === "3") {
      alert("Gracias por usar el simulador");
      seguir = false;
    } else {
      alert("Opción inválida");
    }
  }
}

simulador();