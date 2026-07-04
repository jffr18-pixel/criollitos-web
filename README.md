# Criollitos Venezuelan Food — Web

Web de una sola página (one-page), rápida y optimizada para SEO local, para el restaurante
**Criollitos Venezuelan Food** (C/ Río Valdeyernos, 9 · 45007 Toledo · Sta. Mª de Benquerencia).

> 📗 **Guía de la ficha de Google:** en el escritorio tienes
> `Criollitos-Guia-Ficha-Google.html` con el plan completo de 30 días,
> textos listos para copiar (descripción, posts, respuestas a reseñas) y el checklist de directorios.

---

## ⚠️ AVISO IMPORTANTE: dirección inconsistente

Hemos detectado que tus fichas online **no coinciden**: unas dicen *C/ Río Valdeyernos, 9*
y otras (Uber Eats) dicen *C.C. Luz del Tajo, local 219-222*. Esto **resta posicionamiento**.
Confirma cuál es la dirección real y unifícala en Google, Glovo, Uber Eats, Just Eat,
Instagram y en esta web (la web usa ahora Río Valdeyernos, 9).

---

## Qué incluye la web

- **Hero** con indicador dinámico **"Abierto ahora / Cerrado"** (se calcula con JS según el horario)
- Barra superior de promo + **barra CTA fija en móvil** (Llamar · Pedir · Llegar)
- **Especialidades** con badges "Top ventas" y salsas caseras (guasacaca, ajo)
- Sección **"¿Por qué Criollitos?"** (diferenciación frente a la competencia)
- **Galería** (usa iconos hasta que pongas fotos reales)
- **Opiniones** con citas reales de clientes + botón "Déjanos tu reseña en Google"
- **A domicilio** (teléfono primero — sin comisiones — y luego Glovo/Uber Eats/Just Eat) + zonas de reparto por barrios
- **FAQ** con desplegables + datos estructurados FAQPage (alimenta a la IA de Google Maps)
- **Ubicación** con mapa, horario por días y servicios
- SEO: title/description optimizados, Open Graph, canonical, geo-tags, JSON-LD `Restaurant`
  (con menú, barrios servidos y redes) + `FAQPage`, robots.txt y sitemap.xml

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página web completa |
| `styles.css` | Diseño y estilos |
| `script.js` | Menú móvil, animaciones e indicador abierto/cerrado |
| `favicon.svg` / `site.webmanifest` | Icono y metadatos de instalación |
| `robots.txt` / `sitemap.xml` | Para que Google la rastree bien |
| `img/` | Aquí van tus fotos (ver `img/LEEME.txt`) |

---

## ✏️ Cosas que debes editar

1. **Horario real** (ahora hay un placeholder de 12:00–23:00 todos los días) en TRES sitios:
   - `index.html` → tabla de la sección Ubicación (busca `TODO`)
   - `index.html` → bloque JSON-LD (`openingHoursSpecification`)
   - `script.js` → constante `SCHEDULE` (controla el badge "Abierto ahora")
2. **Fotos** en `img/` (nombres en `img/LEEME.txt`). Compraños en tinypng.com.
3. **WhatsApp**: si activas WhatsApp Business, en `index.html` hay un bloque comentado
   listo para el botón "Pedir por WhatsApp" (busca `wa.me`). Ningún competidor en Toledo lo tiene.
4. **Dominio**: cuando tengas dominio propio, reemplaza `https://www.criollitostoledo.es/`
   en `index.html`, `robots.txt` y `sitemap.xml`.

---

## 🌐 Publicar (necesario para posicionar)

**Opción rápida (gratis):** arrastra la carpeta `criollitos-web` a https://app.netlify.com/drop

**Opción recomendada:** compra `criollitostoledo.es` (IONOS, Namecheap...) y conéctalo
a Netlify/Vercel. Luego: alta en **Google Search Console** + enviar `sitemap.xml`.

## 🚀 Después de publicar

1. Sigue la guía `Criollitos-Guia-Ficha-Google.html` (ficha de Google = 80% del SEO local).
2. Enlaza la web desde la ficha de Google, Instagram y TikTok.
3. Pide reseñas con QR (explicado en la guía).
