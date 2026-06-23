# Decisiones técnicas

## Stack — React 19 + Vite
Se mantuvo el mismo stack que hipotecavenezolanos por:
- Coherencia técnica entre ambos proyectos de i-credit
- Experiencia previa adquirida en el primer proyecto
- Facilidad de mantenimiento futuro al compartir patrones

## React Router — _redirects
Se añadió el archivo public/_redirects con /* /index.html 200 porque:
- Netlify no sabe manejar rutas de React Router por defecto
- Sin este archivo las rutas /services, /about, /contact daban error 404

## Deploy — Netlify
- Se eligió Netlify por los mismos motivos que hipotecavenezolanos: gratuito, compatible con React + Vite, deploy automático con cada push, HTTPS incluido.

## SEO básico — robots.txt, sitemap y meta description
Se añadió un archivo robots.txt, un sitemap.xml generado automáticamente y una meta description en el HTML para mejorar la indexación del sitio en buscadores. El sitemap usa la URL temporal de Netlify y se actualizará cuando se conecte el dominio definitivo.

## Internacionalización — react-i18next
Se eligió react-i18next en lugar de duplicar páginas por idioma porque:
- Antonio solicitó 6 idiomas (inglés, español, francés, alemán, italiano, portugués)
- Duplicar páginas para 6 idiomas habría sido insostenible de mantener
- Permite añadir nuevos idiomas sin tocar componentes, solo traduciendo archivos JSON

## Persistencia de idioma — i18next-browser-languagedetector
Se añadió este plugin porque:
- Sin él, el idioma seleccionado se perdía al recargar la página
- Detecta automáticamente el idioma del navegador como fallback
- Guarda la preferencia del usuario en localStorage

## Identidad visual — Logo y colores propios
Se creó un logo SVG propio (concepto diamante con check) en lugar de reutilizar el de hipotecavenezolanos porque:
- El público objetivo es distinto (compradores americanos vs. venezolanos)
- Permite usar el mismo logo en futuros dominios de la marca (.es, .us, .com)
- Paleta navy + dorado transmite mayor formalidad para el mercado anglosajón

## Formulario — Formspree (endpoint propio)
Se creó un formulario nuevo en Formspree (no se reutilizó el de hipotecavenezolanos) porque:
- Cada proyecto necesita su propio endpoint para no mezclar leads
- Mismo motivo que hipotecavenezolanos: gratuito, sin backend propio, fácil integración

## Refactorización CSS
Se unificaron clases repetidas (icon-circle, card-simple, section-title, page-hero-title/text, trust-band) en index.css porque:
- El archivo App.css había crecido mucho con patrones idénticos repetidos en varias páginas
- Mejora la mantenibilidad: un cambio de estilo se aplica en un solo lugar
- Reduce el tamaño del CSS y mejora la legibilidad del código

## Imágenes — WebP
Mismo motivo que hipotecavenezolanos: menor peso, mejor rendimiento, compatibilidad total.

## Dominios — estructura multi-TLD

Antonio adquirió los dominios el 23/06/2026 a través de Nominalia. Dominio principal: hipotecainspain.com. El resto actúan como aliases en Netlify, redirigiendo al principal.

Dominios adquiridos: hipotecainspain.com (principal), hipotecainspain.es, hipotecainspain.uk, hipotecainspain.fr, hipotecainspain.de, mortgageinspain.fr, mortgageinspain.de, hipotecaenespana.es, mortgagespain.es. Pendientes de ticket: .pt, .it. Descartado .us (restringido a empresas registradas en EEUU).

## Detección de idioma por TLD

Se implementó un useEffect en App.jsx que detecta el TLD del dominio al cargar la web y cambia el idioma automáticamente si el usuario no ha guardado preferencia manual en localStorage. Así cada dominio sirve el idioma correspondiente a su mercado por defecto (.es → español, .fr → francés, .de → alemán, etc.), sin duplicar código ni despliegues — una sola web, múltiples dominios.