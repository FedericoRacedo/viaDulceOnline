async function cargarProductos() {
    try {
        const response = await fetch('../json/libreria.json');
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
        }
        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error(error);
    }    
}

function mostrarProductos(productos) {
    const container = document.querySelector('.boxContainer');
    container.innerHTML = ''; // Limpiar contenedor

    productos.forEach( producto => {
        const box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="productTxt">
                <h3> ${producto.nombre} </h3>
                <p> ${producto.descripcion} </p>
                <p class="precio"> $${producto.precio} </p>
                <button onclick="add('${producto.nombre}', '${producto.precio}')" class="btn3">Agregar al carrito</button>
            </div>
        `;
        container.appendChild(box);
    });
}

//Llamar a la funcion para cargar los productos al inicial la pagina
document.addEventListener('DOMContentLoaded', cargarProductos);

// Carrito
// Variables globales
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Agregar producto al carrito
function add(nombre, precio) {
    const productoExistente = carrito.find(item => item.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio: parseFloat(precio.replace('.', '').replace(',', '.')), cantidad: 1 });
    }
    actualizarCarrito();
}

// Actualizar carrito
function actualizarCarrito() {
    const carritoContainer = document.querySelector('.carrito-container');
    carritoContainer.innerHTML = '';

    let total = 0;
    carrito.forEach((producto, index) => {
        total += producto.precio * producto.cantidad;

        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            <p>${producto.nombre} x${producto.cantidad}</p>
            <p>$${(producto.precio * producto.cantidad).toFixed(2)}</p>
            <button class="btn3" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(item);
    });

    document.getElementById('carrito-total').textContent = total.toFixed(2);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Vaciar carrito
document.getElementById('vaciar-carrito').addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Inicializar carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});
// Mostrar/Ocultar el carrito
const carritoElement = document.querySelector('.carrito');
const toggleCarritoButton = document.getElementById('toggle-carrito');

toggleCarritoButton.addEventListener('click', () => {
    carritoElement.classList.toggle('oculto');
    toggleCarritoButton.textContent = carritoElement.classList.contains('oculto') ? 'Mostrar Carrito' : 'Ocultar Carrito';
});

/// Envio
document.getElementById("confirmarPedido").addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
        alert("Tu carrito está vacío");
        return;
    }

    // Formatear el mensaje del pedido
    let mensaje = "Hola, quiero realizar un pedido:\n\n";
    let total = 0;

    carrito.forEach(item => {
        mensaje += `- ${item.nombre} (Cantidad: ${item.cantidad}) - $${item.precio * item.cantidad}\n`;
        total += item.precio * item.cantidad;
    });

    mensaje += `\nTotal: $${total.toFixed(2)}`;

    // Enviar por WhatsApp
    const numeroWhatsApp = "1165692697"; // Reemplaza con tu número
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(urlWhatsApp, "_blank");

    // Si prefieres correo electrónico
    // const correo = "example@gmail.com";
    // const asunto = "Pedido desde la tienda";
    // const urlMail = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;
    // window.open(urlMail, "_blank");
});

///
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos(); // Cargar productos al inicio
    mostrarCarrito();  // Mostrar el carrito inicial si hay datos en localStorage

    // Evento para alternar el carrito
    document.getElementById("carritoBtn").addEventListener("click", () => {
        const carrito = document.querySelector(".carrito");
        if (carrito.style.display === "block") {
            // Ocultar carrito y limpiar el localStorage
            carrito.style.display = "none";
            localStorage.removeItem("carrito"); // Limpiamos los datos
            mostrarCarrito(); // Actualizamos la vista del carrito
        } else {
            // Mostrar carrito
            carrito.style.display = "block";
            mostrarCarrito(); // Cargamos los datos existentes o vacíos
        }
    });

    // Otros eventos, por ejemplo, para vaciar el carrito
    document.getElementById("vaciarCarritoBtn").addEventListener("click", () => {
        localStorage.removeItem("carrito");
        mostrarCarrito(); // Actualizar la vista
    });
});