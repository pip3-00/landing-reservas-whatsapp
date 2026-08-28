/* ============================================
   LÓGICA DE LA PLANTILLA
   No necesitas editar este archivo para
   personalizar tu sitio — usa config.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Rellenar textos simples marcados con data-config ---
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.getAttribute('data-config');
        if (CONFIG[key] !== undefined) {
            el.textContent = CONFIG[key];
        }
    });

    // --- 2. Imagen de fondo del hero ---
    const hero = document.querySelector('.hero');
    if (hero && CONFIG.heroImage) {
        hero.style.backgroundImage = `url('${CONFIG.heroImage}')`;
    }

    // --- 3. Teléfono en el footer (formateado con +) ---
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) {
        footerPhone.textContent = '+' + CONFIG.whatsappNumber;
    }

    // --- 4. Redes sociales ---
    const socialLinks = { facebook: 'social-facebook', instagram: 'social-instagram', tripadvisor: 'social-tripadvisor' };
    Object.keys(socialLinks).forEach(key => {
        const el = document.getElementById(socialLinks[key]);
        if (el && CONFIG.social[key]) el.href = CONFIG.social[key];
    });

    // --- 5. Año actual en el footer ---
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // --- 6. Renderizar servicios/productos ---
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && CONFIG.services) {
        servicesGrid.innerHTML = CONFIG.services.map(item => `
            <div class="menu-card">
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="menu-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <span class="menu-price">${item.price}</span>
                </div>
            </div>
        `).join('');
    }

    // --- 7. Renderizar testimonios ---
    const testimonialsGrid = document.getElementById('testimonials-grid');
    if (testimonialsGrid && CONFIG.testimonials) {
        testimonialsGrid.innerHTML = CONFIG.testimonials.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
                <p class="testimonial-comment">"${t.comment}"</p>
                <div class="testimonial-author">- ${t.author}</div>
            </div>
        `).join('');
    }

    // --- 8. Renderizar "por qué elegirnos" ---
    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid && CONFIG.features) {
        featuresGrid.innerHTML = CONFIG.features.map(f => `
            <div class="option-card">
                <div class="option-icon">${f.icon}</div>
                <h3>${f.title}</h3>
                <p>${f.description}</p>
            </div>
        `).join('');
    }

    // --- 9. Menú móvil ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // --- 10. Scroll suave para anclas ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- 11. Formulario -> abre WhatsApp con los datos ---
    const form = document.getElementById('reservation-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;
            const message = document.getElementById('message').value;

            let text = `¡Hola ${CONFIG.businessName}! Quisiera hacer una reserva:\n\n`;
            text += `Nombre: ${name}\n`;
            text += `Teléfono: ${phone}\n`;
            text += `Fecha: ${date}\n`;
            text += `Hora: ${time}\n`;
            text += `Personas: ${guests}\n`;
            if (message) text += `Mensaje: ${message}\n`;

            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});