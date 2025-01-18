// Función para cargar productos desde el JSON
async function cargarProductos() {
    try {
        const response = await fetch('../json/todosLosProductos.json'); // Verifica esta ruta
        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
        }
        const productos = await response.json();
        mostrarProductos(productos); // Mostrar todos los productos al inicio
        agregarFiltros(productos);   // Configurar filtros dinámicamente
    } catch (error) {
        console.error(error);
    }
}

// Función para mostrar productos en el contenedor
function mostrarProductos(productos) {
    const container = document.querySelector('.boxContainer');
    container.innerHTML = ''; // Limpiar contenedor

    productos.forEach(producto => {
        const box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="productTxt">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio.toFixed(2)}</p>
                <button onclick="add('${producto.nombre}', '${producto.precio}')" class="btn3">Agregar al carrito</button>
            </div>
        `;
        container.appendChild(box);
    });
}

// Función para filtrar productos por categoría
function filtrarPorCategoria(productos, categoria) {
    const productosFiltrados = productos.filter(producto =>
        producto.categorias.includes(categoria) // Verifica si la categoría está en el array
    );
    mostrarProductos(productosFiltrados); // Muestra solo los productos filtrados
}

// Agregar eventos para los filtros
function agregarFiltros(productos) {
    document.getElementById('filtro-todos').addEventListener('click', () => {
        mostrarProductos(productos); // Mostrar todos los productos
    });

    document.getElementById('filtro-accesorios').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Accesorios');
    });

    document.getElementById('filtro-alcohol-azufre').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Alcohol/Azufre');
    });

    document.getElementById('filtro-alfajores').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Alfajores')
    });

    document.getElementById('filtro-algodones').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Algodones')
    });

    document.getElementById('filtro-almacen').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Almacen')
    });

    document.getElementById('filtro-bebidas').addEventListener('click', () =>{
        filtrarPorCategoria(productos, 'Bebidas')
    });

    document.getElementById('filtro-bombones').addEventListener('click', () => {
        filtrarPorCategoria(productos, "Bombones")
    });

    document.getElementById('filtro-caramelos').addEventListener('click', () => {
        filtrarPorCategoria(productos, "Caramelos")
    });

    document.getElementById('filtro-cepillos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Cepillos');
    });
    
    document.getElementById('filtro-cereales').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Cereales');
    });
    
    document.getElementById('filtro-chicles').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Chicles');
    });
    
    document.getElementById('filtro-chocolates').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Chocolates');
    });
    
    document.getElementById('filtro-chupetines').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Chupetines');
    });

    document.getElementById('filtro-condimentos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Condimentos');
    });
    
    document.getElementById('filtro-confites').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Confites');
    });
    
    document.getElementById('filtro-copetin').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Copetin');
    });
    
    document.getElementById('filtro-cordones-hilos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Cordones/Hilos');
    });
    
    document.getElementById('filtro-cotillon').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Cotillon');
    });
    
    document.getElementById('filtro-desodorante').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Desodorante');
    });
    
    document.getElementById('filtro-detergente').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Detergentes');
    });
    
    document.getElementById('filtro-dulce').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Dulce');
    });
    
    document.getElementById('filtro-esmalte').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Esmaltes');
    });
    
    document.getElementById('filtro-esponja').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Esponja');
    });
    
    document.getElementById('filtro-fijadores').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Fijadores');
    });
    
    document.getElementById('filtro-filos-velas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Filos/Velas');
    });
    
    document.getElementById('filtro-fosforos-encendedores').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Fosforos/Encendedores');
    });
    
    document.getElementById('filtro-galatinas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Gelatinas');
    });
    
    document.getElementById('filtro-galletitas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Galletitas');
    });
    
    document.getElementById('filtro-gomitas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Gomitas');
    });
    
    document.getElementById('filtro-harinas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Harinas');
    });
    
    document.getElementById('filtro-higienicos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Higienicos');
    });

    document.getElementById('filtro-hogar').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Hogar');
    });
    
    document.getElementById('filtro-infusiones').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Infusiones');
    });

    document.getElementById('filtro-insectisidas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Insectisidas');
    });
    
    document.getElementById('filtro-jabon').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Jabon');
    });
    
    document.getElementById('filtro-jabon-tocador').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Jabon tocador');
    });
    
    document.getElementById('filtro-jugos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Jugos');
    });
    
    document.getElementById('filtro-lacteos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Lácteos');
    });

    document.getElementById('filtro-lamparas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Lamparas');
    });
    
    document.getElementById('filtro-latex').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Latex');
    });
    
    document.getElementById('filtro-lavandina').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Lavandina');
    });
    
    
    document.getElementById('filtro-limpiadores').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Limpiadores');
    });
    
    document.getElementById('filtro-naipes').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Naipes');
    });
    
    document.getElementById('filtro-obleas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Obleas');
    });
    
    document.getElementById('filtro-ofertas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Ofertas');
    });

    document.getElementById('filtro-otros').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Otros');
    });

    document.getElementById('filtro-panificados').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Panificados');
    });
    
    document.getElementById('filtro-panales').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Pañales');
    });
    
    document.getElementById('filtro-papeles').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Papeles');
    });
    
    document.getElementById('filtro-papelera').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Papelera');
    });
    
    document.getElementById('filtro-pastas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Pastas');
    });
    
    document.getElementById('filtro-pastillas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Pastillas');
    });
    
    document.getElementById('filtro-pegamentos').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Pegamentos');
    });
    
    document.getElementById('filtro-pepsico').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Pepsico');
    });
    
    document.getElementById('filtro-snacks').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Snacks');
    });

    document.getElementById('filtro-salsas').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Salsas');
    });
    
    document.getElementById('filtro-yerba').addEventListener('click', () => {
        filtrarPorCategoria(productos, 'Yerba');
    });

}

// Llamar a la función para cargar los productos al cargar la página
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
    const numeroWhatsApp = "1168025977"; // Reemplaza con tu número
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
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "adios": "¡Hasta luego! Nos vemos en nuestro Local Dolores de Huci 3214.",
        "precios": "Nuestros precios son muy competitivos. Los puedes encontrar en la seccion de nuestros productos.",
        "horarios": "Estamos abiertos de lunes a viernes de 08:00 a 17:00 horas, Sabados de 08:00 a 13:00",
        "gracias": "¡De nada! Estoy aquí para ayudarte.",
        "default": "Lo siento, no entiendo tu mensaje. ¿Puedes reformularlo?",
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

