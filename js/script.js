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

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.products-row img');  // Selecciona todas las imágenes dentro de .products-row
    images.forEach((img) => {
        img.style.width = '250px';  // Ajusta el tamaño según lo necesites
        img.style.height = '250px'; // Ajusta el tamaño según lo necesites
        img.style.objectFit = 'cover';  // Hace que la imagen se recorte adecuadamente para llenar el espacio
    });
});