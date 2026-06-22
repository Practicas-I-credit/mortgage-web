# Registro de progreso

## 11/06/2026

### Actividades realizadas

- Definición del proyecto: web hipotecaria para compradores estadounidenses en España.
- Investigación de mercado: ciudades más buscadas por americanos (Madrid, Costa del Sol, Valencia).
- Análisis de webs de referencia: Mortgage Direct, i-credit, hipotecas.com.ve.
- Propuesta visual: paleta navy #0A1628 + dorado #C9922A inspirada en referencias.
- Decisión de stack: React 19 + Vite + React Router + CSS Variables.
- Creación del repositorio en cuenta Practicas-I-credit.
- Inicialización del proyecto con Vite.
- Configuración de React Router.
- Creación de páginas: Home, Services, About, Contact, Privacy, NotFound.
- Creación de componentes: Header, NavBar, Footer.
- Desarrollo del Hero con efecto glassmorphism.
- Desarrollo de Trust Band con datos de i-credit.
- Desarrollo de sección Stats.
- Primer deploy y push al repositorio.
- Desarrollo de sección Pain Points con nuevo estilo de cards.
- Desarrollo de sección How it works con diseño de timeline horizontal.
- Actualización del README con información completa del proyecto.

### Resultado

- Proyecto inicializado y subido a GitHub.
- Estructura base completa con navegación operativa.
- Hero con glassmorphism funcional pendiente de imagen de fondo.
- Identidad visual definida y aplicada.
- Home avanzando con secciones clave completadas.

---

## 12/06/2026

### Actividades realizadas

- Diseño y creación de logo SVG y favicon (concepto diamante con check).
- Implementación de logo y favicon en mortgage-web.
- Corrección de NavBar: eliminado enlace Calculator (pendiente de implementar).
- Implementación de banderas decorativas en Header (España) y NavBar (EEUU, UK, Canadá).
- Header preparado para selector de idioma EN/ES (pendiente de versión en español).
- Añadida imagen hero (Costa del Sol) y crédito de ubicación.
- Implementadas imágenes en Services (Madrid), About (Barcelona) y Contact (Málaga).
- Desarrollo de sección Testimonials con testimonios reales de i-credit adaptados al inglés.
- Simplificación visual de Pain Points para coherencia con el resto de secciones.
- Desarrollo de sección CTA final con botón de WhatsApp.
- Desarrollo de calculadora hipotecaria funcional e interactiva en el hero (componente MortgageCalculator).
- Página Services completa: hero, grid de servicios, why choose us.
- Página About completa: hero, intro, stats, valores.
- Página Contact completa: hero con imagen, info de contacto, formulario funcional con Formspree.
- Corrección: eliminada referencia incorrecta a firma remota vía Power of Attorney — la firma final es presencial.
- Añadida información de autoría (meta tag + README).

### Resultado

- Identidad visual unificada con logo propio.
- Header y NavBar con detalle visual de banderas.
- Base lista para futura versión bilingüe.
- Las 4 páginas principales (Home, Services, About, Contact) están completas y funcionales.
- Formulario de contacto conectado a Formspree (endpoint propio de mortgage-web).

---

## 15/06/2026

### Actividades realizadas

- Desarrollo del componente FAQ con 7 preguntas clave para compradores americanos (US residents y expats).
- Integración del FAQ en página Services.
- Añadido checkbox de aceptación de Política de Privacidad en formulario de Contact (RGPD).
- Desarrollo de página Privacy Policy con datos reales de i-credit.
- Desarrollo de página 404 personalizada.
- Añadido botón flotante de WhatsApp.
- Preload de imágenes críticas en index.html de ambos proyectos para mejorar velocidad de carga.
- Corrección: enlace al home añadido en el logo del header.

### Resultado

- Web mortgage-web prácticamente completa en versión inglés.
- Ambos proyectos con mejoras de rendimiento y cumplimiento RGPD.

---

## 16/06/2026

### Actividades realizadas

- Migración completa de mortgage-web a sistema de internacionalización (react-i18next), preparando la web para múltiples idiomas (inglés, español, y próximamente francés, alemán, italiano, portugués según solicitud de Antonio).
- Creación de estructura de traducciones (src/locales/en.json, es.json).
- Desarrollo de componente LanguageSwitcher con dropdown de banderas.
- Migración completa de Home, Footer, Services, FAQ, About, Contact, Privacy y NotFound a i18next.
- Ajuste de copys para eliminar referencias específicas a un idioma ("explained in English" → "without the hassle / sin complicaciones") por incompatibilidad con sistema multiidioma.
- Mejora de legibilidad: doble text-shadow en todos los heros con imagen de fondo (Home, Services, About, Contact).
- Añadido enlace al home en el logo del header.
- Checkbox de política de privacidad.

### Resultado

- mortgage-web es ahora completamente bilingüe (EN/ES) con selector de idioma funcional.
- Arquitectura preparada para añadir francés, alemán, italiano y portugués sin tocar componentes — solo se requiere crear y traducir los archivos JSON correspondientes.
- Legibilidad de texto sobre imágenes mejorada en todas las páginas.
- Identificada necesidad de refactorización de CSS (clases repetidas: icon-circle, section-tag, page-hero) — pendiente.

---

## 17/06/2026

### Actividades realizadas

- Refactorización completa de CSS de mortgage-web: unificación de clases repetidas en index.css (icon-circle, card-simple, card-simple-title/text, section-title, page-hero-title/text, trust-band).
- Corrección de legibilidad de .section-tag-light sobre fondos claros (doble text-shadow).
- Instalación y configuración de i18next-browser-languagedetector para persistir el idioma seleccionado entre recargas de página.
- Traducción completa de mortgage-web a francés.
- Traducción completa de mortgage-web a alemán.
- Traducción completa de mortgage-web a italiano.
- Traducción completa de mortgage-web a portugués.
- Añadidas banderas de Francia, Alemania, Italia y Portugal al componente Flags y al LanguageSwitcher.
- Ajuste del checkbox de términos en Contact para soportar estructuras gramaticales distintas según idioma (formTerms1/2/3).
- Añadido campo idioma_formulario al envío de Formspree para dar contexto a i-credit sobre el idioma usado por el cliente.
- Confirmado funcionamiento del formulario de contacto en producción local — los mensajes llegan correctamente a info@i-credit.es.
- Corrección: menú móvil se cierra automáticamente al seleccionar un enlace de navegación.
- Implementación de ScrollToTop — la página vuelve al inicio automáticamente al cambiar de ruta.
- Corrección de responsive del header: badge decorativo de España se ocultaba parcialmente sobre el logo en pantallas pequeñas.
- Creación de docs/decisiones-tecnicas.md documentando el porqué de las decisiones técnicas del proyecto.

### Resultado

- mortgage-web está completamente traducida a los 6 idiomas solicitados por Antonio: inglés, español, francés, alemán, italiano y portugués.
- Selector de idioma funcional con persistencia mediante localStorage.
- CSS de mortgage-web significativamente más limpio tras la refactorización.
- Formulario de contacto verificado y funcionando correctamente.
- Mejoras de UX en navegación móvil.
- Header responsive corregido para pantallas pequeñas.
- Documentación técnica del proyecto completada.

---

## 18/06/2026

### Actividades realizadas

- Mejora de Performance (Lighthouse): optimización de peso de imágenes.
- Resaltado del enlace activo en NavBar usando NavLink.
- Añadida meta description al index.html para mejorar SEO.
- Añadido robots.txt apuntando a sitemap.xml.
- Instalación de vite-plugin-sitemap y configuración de dynamicRoutes (mortgage-web).
- Deploy de mortgage-web en Netlify de i-credit — URL temporal: mortgage-in-spain.netlify.app.
- Añadido archivo public/_redirects para que React Router funcione correctamente en Netlify.
- Mejora de legibilidad: text-shadow en badge "Licensed by Bank of Spain" y en textos de la calculadora del hero.
- Añadido enlace verificado a reseñas de Google de i-credit (4,8★, 335 reseñas) en sección de testimonios.
- Corrección de la calculadora hipotecaria: eliminado bug del cero inicial pegado al escribir, mejorada compatibilidad con teclado numérico en móvil.

### Resultado

- mortgage-web desplegada en producción (Netlify, cuenta i-credit) con rutas funcionando correctamente.
- Puntajes de Lighthouse mejorados significativamente.
- Calculadora hipotecaria corregida y verificada en móvil.

---

## 19/06/2026

### Actividades realizadas

- Rediseño visual de botones en mortgage-web: border-radius reducido a 6px, font-weight a 600, color de texto navy en botones dorados.
- Ajuste de tipografía: font-weight de títulos hero y CTA bajado a 600.
- Ampliación de banderas en NavBar: añadidas FR, DE, IT, PT junto a US, UK, CA — todos los idiomas representados.
- Corrección de flex-wrap en #nav-flags para móvil — 7 banderas se distribuyen en 2 filas.
- Análisis de accesibilidad con Lighthouse en todas las páginas — puntuaciones altas en todas.
- Corrección de accesibilidad en Contact: vinculado label con select mediante htmlFor/id.
- Enlace a reseñas de Google de i-credit.
- Generación de sitemap y robots.txt en mortgage-web; meta description añadida al index.html.

### Resultado

- Puntuaciones Lighthouse mortgage-web: 98-99/95/100/100 en todas las páginas.
- Ambas webs con accesibilidad WCAG correcta.

---

## 22/06/2026

### Actividades realizadas

- Configuración para que la web abra siempre en inglés por defecto — el idioma solo se recuerda si el usuario lo cambió manualmente.
- Implementación de título dinámico por página e idioma en todas las páginas.
- Smooth scroll al hacer clic en "How it works" — desplaza suavemente hasta la sección del proceso.
- Añadidas estrellas de valoración en los testimonios.
- Enlace al registro oficial del Banco de España en el badge de acreditación del hero.
- Scroll automático al mensaje de confirmación tras enviar el formulario de contacto.
- Animación suave al abrir/cerrar respuestas del FAQ.
- Rediseño del mensaje de éxito del formulario — estilo navy+dorado coherente con el diseño general.
- Open Graph meta tags añadidos para compartir en redes sociales.
- Lang dinámico en el HTML según idioma activo.
- Headers de seguridad HTTP añadidos mediante archivo _headers.
- Revisión de la web en distintos navegadores.
- Pendiente: confirmación de dominios de Nominalia.

### Resultado

- mortgage-web completamente pulida con mejoras de UX, SEO y seguridad.
- Pendiente únicamente la configuración de dominios definitivos.

---

## Próximos pasos

- Confirmar dominios con Nominalia y conectarlos en Netlify.
- Actualizar robots.txt, sitemap.xml, og:url y vite.config.js con dominio definitivo (mortgageinspain.com).
- Implementar detección automática de idioma por dominio.
- Hacer push final con todos los cambios acumulados.
- Actualizar documento de entrega con URLs definitivas.
- Entregar documentos de entrega a Antonio el 24/06.

