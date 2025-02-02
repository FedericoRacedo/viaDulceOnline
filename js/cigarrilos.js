async function cargarProductos() {
    try {
        const response = await fetch('../json/cigarrilos.json'); // const response = await fetch('https://federicoracedo.github.io/viaDulceOnline/json/cigarrilos.json');
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

    productos.forEach(producto => {
        const box = document.createElement('div');
        box.classList.add('box');

        // Crear un select para elegir 5 o 10 unidades
        const unidadesSelect = `
            <select id="unidades-${producto.nombre}">
                <option value="5">5 unidades</option>
                <option value="10">10 unidades</option>
            </select>
        `;

        box.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="productTxt">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                ${unidadesSelect}
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
    // Convertir el precio al formato numérico
    const precioNumerico = parseFloat(precio.replace(/\./g, '').replace(',', '.'));

    // Obtener la cantidad seleccionada por el usuario (5 o 10 unidades)
    const cantidadSeleccionada = parseInt(document.getElementById(`unidades-${nombre}`).value, 10);

    // Calcular el precio total según la cantidad seleccionada
    const precioTotal = precioNumerico * cantidadSeleccionada;

    // Buscar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === nombre);
    if (productoExistente) {
        productoExistente.cantidad += cantidadSeleccionada;
    } else {
        carrito.push({ nombre, precio: precioNumerico, cantidad: cantidadSeleccionada });
    }

    // Actualizar el carrito
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
    const numeroWhatsApp = "5491165692697"; // Reemplaza con tu número
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

//CARRUSEL
window.onload = () => {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,  // El carrusel cambiará cada 3 segundos
            disableOnInteraction: false,  // Esto permite que el autoplay siga funcionando incluso después de interactuar con el carrusel
        },
    });
};
//CARRUSEL

//CHAT
document.addEventListener("DOMContentLoaded", () => {
    const openChatButton = document.getElementById("openChat");
    const chatContainer = document.getElementById("chatContainer");
    const closeChatButton = document.getElementById("closeChat");
    const chatForm = document.getElementById("chatForm");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    // Respuestas automáticas predefinidas
    const responses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?, (horarios, ubicacion, precios, contacto)",
        "adios": "¡Hasta luego! Nos vemos en nuestro Local Dolores de Huci 3214.",
        "precios": "Nuestros precios son muy competitivos. Los puedes encontrar en la seccion de nuestros productos.",
        "horarios": "Estamos abiertos de lunes a viernes de 08:00 a 17:00 horas, Sabados de 08:00 a 13:00",
        "gracias": "¡De nada! Estoy aquí para ayudarte.",
        "default": "Lo siento, no entiendo tu mensaje. ¿Puedes reformularlo?",
        "a que hora abren": "Estamos abiertos de lunes a viernes de 08:00 a 17:00 horas, Sabados de 08:00 a 13:00",
        "direccion": "Estamos ubicados en dolores de Huici 3214, entre Villegas y Esquel a tres cuadras de la estacion William Morris",
        "ubicacion": "Estamos ubicados en dolores de Huici 3214, entre Villegas y Esquel a tres cuadras de la estacion William Morris",
        "contacto": "Aca te dejo nuestro numero de WathShap 11 65692-697",
        "cuales son los horarios de atencion": "Estamos abiertos de lunes a viernes de 08:00 a 17:00 horas, Sabados de 08:00 a 13:00",
    };

    // Abrir el chat
    openChatButton.addEventListener("click", () => {
        chatContainer.style.display = "flex";
        openChatButton.style.display = "none";
    });

    // Cerrar el chat
    closeChatButton.addEventListener("click", () => {
        chatContainer.style.display = "none";
        openChatButton.style.display = "block";
    });

    // Enviar mensaje
    chatForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = chatInput.value.trim();

        if (message) {
            appendMessage("usuario", message); // Muestra el mensaje del usuario
            chatInput.value = "";

            // Respuesta automática después de un pequeño retraso
            setTimeout(() => {
                const reply = getResponse(message.toLowerCase());
                appendMessage("bot", reply);
            }, 1000); // Respuesta después de 1 segundo
        }
    });

    // Agregar mensaje al área del chat
    function appendMessage(sender, text) {
        const messageElement = document.createElement("p");
        messageElement.textContent = text;

        if (sender === "usuario") {
            messageElement.style.textAlign = "right"; // Mensaje alineado a la derecha
            messageElement.style.backgroundColor = "#d1f7c4"; // Color verde claro
        } else {
            messageElement.style.textAlign = "left"; // Mensaje alineado a la izquierda
            messageElement.style.backgroundColor = "#f1f1f1"; // Color gris claro
        }

        messageElement.style.padding = "8px 10px";
        messageElement.style.borderRadius = "5px";
        messageElement.style.margin = "5px 0";
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplaza al último mensaje
    }

    // Obtener respuesta automática
    function getResponse(message) {
        return responses[message] || responses["default"];
    }
});
//CHAT

