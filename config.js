/* ============================================
   CONFIGURACIÓN DEL NEGOCIO
   Edita SOLO este archivo para personalizar
   toda la landing page. No necesitas tocar
   el HTML, CSS ni el resto del JavaScript.
   ============================================ */

const CONFIG = {

    // --- Datos generales del negocio ---
    businessName: "Tu Negocio",
    logoIcon: "✨", // Puedes usar cualquier emoji como logo rápido
    heroTitle: "El título principal que llama la atención",
    heroSubtitle: "Una frase corta que explica qué ofreces y por qué elegirte",
    heroImage: "./images/hero-image.png",

    // --- WhatsApp (para el botón de reserva/contacto) ---
    // Formato: código de país + número, sin +, espacios ni guiones
    // Ejemplo República Dominicana: "18095551234"
    whatsappNumber: "18095551234",

    // --- Contacto y horarios ---
    address: "Tu dirección, Ciudad",
    email: "contacto@tunegocio.com",
    hoursLine1: "Lunes - Domingo",
    hoursLine2: "9:00 AM - 9:00 PM",

    // --- Redes sociales (deja "#" si no aplica) ---
    social: {
        facebook: "#",
        instagram: "#",
        tripadvisor: "#"
    },

    // --- Sección de servicios/productos destacados ---
    // Agrega, quita o edita tantos como necesites
    sectionServicesTitle: "Lo que ofrecemos",
    sectionServicesSubtitle: "Descubre nuestras opciones más populares",
    services: [
        {
            image: "./images/product-1.png",
            title: "Servicio o producto 1",
            description: "Describe brevemente en qué consiste este servicio o producto",
            price: "Consultar precio"
        },
        {
            image: "./images/product-2.png",
            title: "Servicio o producto 2",
            description: "Describe brevemente en qué consiste este servicio o producto",
            price: "Consultar precio"
        },
        {
            image: "./images/product-3.png",
            title: "Servicio o producto 3",
            description: "Describe brevemente en qué consiste este servicio o producto",
            price: "Consultar precio"
        },
        {
            image: "./images/product-4.png",
            title: "Servicio o producto 4",
            description: "Describe brevemente en qué consiste este servicio o producto",
            price: "Consultar precio"
        }
    ],

    // --- Testimonios ---
    testimonials: [
        {
            stars: 5,
            comment: "Escribe aquí una reseña real de un cliente satisfecho.",
            author: "Nombre del cliente"
        },
        {
            stars: 5,
            comment: "Escribe aquí una reseña real de un cliente satisfecho.",
            author: "Nombre del cliente"
        },
        {
            stars: 4,
            comment: "Escribe aquí una reseña real de un cliente satisfecho.",
            author: "Nombre del cliente"
        },
        {
            stars: 5,
            comment: "Escribe aquí una reseña real de un cliente satisfecho.",
            author: "Nombre del cliente"
        }
    ],

    // --- Sección "Por qué elegirnos" ---
    sectionFeaturesTitle: "¿Por qué elegirnos?",
    features: [
        { icon: "⭐", title: "Beneficio 1", description: "Explica brevemente esta ventaja" },
        { icon: "🕒", title: "Beneficio 2", description: "Explica brevemente esta ventaja" },
        { icon: "💬", title: "Beneficio 3", description: "Explica brevemente esta ventaja" },
        { icon: "🌿", title: "Beneficio 4", description: "Explica brevemente esta ventaja" }
    ],

    // --- Formulario de reserva/contacto ---
    formTitle: "Haz tu Reserva",
    formSubtitle: "Completa el formulario y te contactaremos por WhatsApp",
    formButtonText: "Enviar por WhatsApp"
};