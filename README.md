# Paraiso Tropical - Restaurant Landing Page

Una landing page moderna y responsiva para el restaurante "Paraiso Tropical", ubicado en Playa Bávaro, Punta Cana, República Dominicana. El sitio web presenta la gastronomía dominicana auténtica con vista al océano.

 Demo: https://pip3-00.github.io/Landing-page-de-conversion/

![Paraiso Tropical](https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1920&h=1080&fit=crop)

## 📋 Características

- **Diseño Mobile-First**: Optimizado para dispositivos móviles desde su concepción
- **Totalmente Responsivo**: Se adapta perfectamente a pantallas de escritorio, tablet y móvil
- **Hero Section Impactante**: Imagen de fondo con overlay y animación de entrada
- **Menú Destacados**: Grid de platos principales con precios
- **Testimonios**: Reseñas de clientes en formato de tarjetas
- **Sección de Características**: ¿Por qué visitar el restaurante?
- **Formulario de Reservas**: Formulario completo para reservaciones
- **Navegación Fija**: Header que permanece visible al hacer scroll
- **Menú Hamburguesa**: Funcionalidad de menú móvil
- **Smooth Scroll**: Desplazamiento suave entre secciones

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos con variables CSS, flexbox y grid
- **JavaScript (Vanilla)**: Interactividad sin dependencias externas
- **Google Fonts**: Playfair Display y Poppins
- **Imágenes**: Unsplash para imágenes de stock

## 📁 Estructura del Proyecto

```
landing pages-conversiones/
├── index.html      # Archivo principal HTML
├── styles.css      # Estilos CSS
├── app.js          # Funcionalidad JavaScript
└── README.md       # Documentación del proyecto
```

## 🚀 Cómo Usar

### Ver el Proyecto Localmente

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador

```bash
# O si tienes Python instalado, puedes usar un servidor local:
python -m http.server 8000
# Luego visita http://localhost:8000
```

### Personalización

#### Cambiar Imágenes

Las imágenes se encuentran en `index.html`. Busca las etiquetas `<img>` y `<background-url>` en `styles.css` para cambiar:

- Hero: Línea 170 en `styles.css`
- Platos del menú: En las tarjetas de `index.html`

#### Colores del Tema

En `styles.css`, sección `:root`, puedes modificar:

```css
:root {
  --primary-color: #00796b; /* Verde caribe */
  --secondary-color: #ff8f00; /* Naranja tropical */
  --accent-color: #ffd54f; /* Amarillo dorado */
  --ocean: #0077b6; /* Azul océano */
}
```

#### Datos del Restaurante

Edita directamente en `index.html`:

- Nombre del restaurante (líneas 7, 25, 26)
- Información de contacto (sección footer)
- Horarios de operación
- Platos del menú y precios

## 📱 Secciones del Sitio

| Sección             | Descripción                                       |
| ------------------- | ------------------------------------------------- |
| **Header**          | Logo, navegación y menú móvil                     |
| **Hero**            | Título principal, subtítulo y llamada a la acción |
| **Menú**            | Platos destacados con imágenes y precios          |
| **Testimonios**     | Reseñas de clientes satisfechos                   |
| **Características** | Ventajas del restaurante                          |
| **Reservas**        | Formulario de reservación                         |
| **Footer**          | Contacto, horarios y redes sociales               |

## 🔧 Funcionalidades JavaScript

El archivo `app.js` incluye:

- **Toggle de Menú Móvil**: Abre/cierra el menú de navegación en dispositivos móviles
- **Cerrar Menú al Clicar**: El menú se cierra automáticamente al seleccionar un enlace
- **Smooth Scroll**: Desplazamiento suave hacia las secciones al hacer clic en los enlaces

## 🎨 Compatibilidad

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- iOS Safari
- Chrome Android

## 📝 Notas

- El formulario de reservación es visual (no envía datos a ningún servidor)
- Las imágenes son de Unsplash (licencia gratuita)
- Hay un error tipográfico en la etiqueta `<srcript>` en `index.html` que debería ser `<script>`

## 📄 Licencia

Este proyecto es solo para fines educativos y de demostración.

---

_Paraiso Tropical - Sabores del Caribe en Punta Cana_ 🌴🍹
