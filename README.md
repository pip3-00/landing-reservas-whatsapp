# Plantilla de Landing Page con Reservas

Landing page lista para negocios que reciben citas o reservas: restaurantes, spas, salones de belleza, consultorios, hoteles pequeños, etc.

- 100% HTML, CSS y JavaScript puro — sin frameworks, sin instalación.
- Diseño mobile-first, rápido y responsive.
- El formulario envía la reserva directo a tu WhatsApp, sin backend ni servidor.
- Toda la personalización se hace en **un solo archivo**: `config.js`.

## 🚀 Cómo personalizarla (5 minutos)

1. Abre el archivo **`config.js`** con cualquier editor de texto (VS Code, Notepad, etc.).
2. Cambia los valores entre comillas por los datos de tu negocio:
   - `businessName`, `heroTitle`, `heroSubtitle`
   - `whatsappNumber` (código de país + número, sin `+` ni espacios. Ejemplo RD: `18095551234`)
   - `address`, `email`, `hoursLine1`, `hoursLine2`
   - `social` (enlaces a tus redes)
3. Edita el arreglo `services` para tus productos o servicios (agrega o quita bloques `{ }` según necesites).
4. Edita `testimonials` con reseñas reales de tus clientes.
5. Edita `features` con tus propios diferenciadores.
6. Guarda el archivo. **No necesitas tocar `index.html`, `styles.css` ni `app.js`.**

## 🖼️ Cambiar imágenes

Las imágenes de ejemplo vienen de Unsplash (gratuitas) solo para la demo. Para tu sitio real:

1. Sube tus propias fotos a una carpeta `images/` en el mismo proyecto.
2. En `config.js`, reemplaza las URLs de `heroImage` y de cada `image` dentro de `services` por la ruta de tus fotos, ej. `images/mi-foto.jpg`.

## 🎨 Cambiar colores

Abre `styles.css` y edita las variables al principio del archivo (línea ~7):

```css
:root {
    --primary-color: #00796B;
    --secondary-color: #FF8F00;
    ...
}
```

Cambia los códigos de color y se actualiza todo el sitio automáticamente.

## 📱 Cómo funciona el botón de reserva

Cuando alguien completa el formulario y presiona el botón, se abre WhatsApp (web o app) con un mensaje ya redactado con todos los datos de la reserva, listo para enviarte. No requiere servidor, correo ni base de datos.

## 🌐 Cómo publicar tu sitio (gratis)

**Opción 1 — GitHub Pages**
1. Crea un repositorio en GitHub y sube estos 4 archivos.
2. Ve a Settings → Pages → selecciona la rama principal.
3. Tu sitio queda publicado en `tu-usuario.github.io/tu-repo`.

**Opción 2 — Netlify o Vercel**
1. Crea una cuenta gratuita.
2. Arrastra la carpeta del proyecto al panel de "Deploy".
3. Obtienes un enlace público al instante, con opción de dominio propio.

## 📄 Estructura del proyecto

```
├── index.html      → Estructura del sitio (no requiere edición)
├── styles.css       → Estilos y colores
├── config.js        → ⭐ Aquí editas TODO tu contenido
├── app.js           → Lógica del sitio (no requiere edición)
└── README.md         → Esta guía
```

## Licencia de uso

Esta plantilla puede usarse en un sitio web comercial por proyecto adquirido. La reventa o redistribución del código fuente como plantilla (en Gumroad, CodeCanyon u otras plataformas) no está permitida sin autorización del autor original.

---

¿Necesitas ayuda personalizando tu sitio o quieres una versión con funciones adicionales (galería, blog, múltiples idiomas)? Contáctame.