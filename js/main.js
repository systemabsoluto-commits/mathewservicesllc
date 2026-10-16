// Bilingual toggle (EN / ES) — one set of pages, text swapped instantly.
const I18N = {
  es: {
    "nav.services": "Servicios",
    "nav.process": "Cómo trabajamos",
    "nav.reviews": "Reseñas",
    "nav.contact": "Contacto",
    "cta.call": "Llama",
    "cta.callNow": "Llamar ahora",
    "cta.text": "Envíanos un texto",
    "cta.estimate": "Pide tu estimado gratis",
    "hero.eyebrow": "Oklahoma City · Jardinería y Concreto",
    "hero.title": "Embellezcamos tu espacio juntos",
    "hero.lead": "Jardinería, mantenimiento de pasto, concreto y árboles — a tiempo, con trabajo de calidad y precios justos.",
    "trust.google": "17 reseñas en Google",
    "trust.free": "Estimados gratis",
    "trust.spanish": "Hablamos español",
    "services.eyebrow": "Lo que hacemos",
    "services.title": "Todo lo que tu exterior necesita",
    "s.concrete.t": "Concreto",
    "s.concrete.d": "Entradas de auto (driveways), patios, banquetas y trabajos de concreto a la medida, hechos para durar.",
    "s.landscape.t": "Diseño de jardines",
    "s.landscape.d": "Camas de flores, piedra, mulch, pasto en rollo y pasto artificial diseñados para tu casa.",
    "s.lawn.t": "Mantenimiento de pasto",
    "s.lawn.d": "Corte, orillado y recorte regular para que tu jardín se vea impecable toda la temporada.",
    "s.trees.t": "Servicio de árboles",
    "s.trees.d": "Poda, remoción completa de árboles y molienda de tocones.",
    "s.fences.t": "Cercas",
    "s.fences.d": "Cercas nuevas y reparaciones para privacidad, seguridad y buena presentación.",
    "s.drains.t": "Drenajes y sistemas de riego",
    "s.drains.d": "Drenajes franceses (French drains) e instalación y reparación de sistemas de riego para proteger tu jardín.",
    "process.eyebrow": "Cómo trabajamos",
    "process.title": "Tres pasos sencillos",
    "p1.t": "Llámanos, escríbenos o mándanos un mensaje",
    "p1.d": "Cuéntanos qué necesitas por teléfono, texto o redes sociales.",
    "p2.t": "Agendamos tu visita",
    "p2.d": "Buscamos el día que te acomode y te damos un estimado gratis.",
    "p3.t": "Transformamos tu espacio",
    "p3.d": "Nuestro equipo hace el trabajo — y te pedimos revisarlo antes de pagar.",
    "about.eyebrow": "Quiénes somos",
    "about.title": "Un equipo local que cuida tu casa como si fuera nuestra",
    "about.p1": "Mathew Services LLC es una empresa de jardinería y concreto en Oklahoma City. Combinamos buen diseño, trabajo de calidad y atención real al cliente.",
    "about.p2": "Nuestra meta no es solo terminar un trabajo, sino construir una relación a largo plazo con cada cliente.",
    "reviews.eyebrow": "Lo que dicen nuestros clientes",
    "reviews.title": "5.0 en Google · 17 reseñas",
    "reviews.note": "Reseñas originales en inglés, tal como las escribieron nuestros clientes en Google.",
    "contact.eyebrow": "Estimado gratis",
    "contact.title": "¿Listo para transformar tu exterior?",
    "contact.lead": "Llámanos, mándanos un texto o escríbenos y te respondemos rápido. Hablamos español.",
    "contact.phone": "Teléfono / Texto",
    "contact.area": "Área de servicio",
    "contact.areaVal": "Oklahoma City + 20 millas",
    "contact.cities": "Atendemos:",
    "contact.hours": "Horario",
    "contact.hoursVal": "Lun–Vie 7 AM–6:30 PM · Sáb 7 AM–3:30 PM",
    "reviews.more": "Ver todas las reseñas en Google",
    "thanks.title": "¡Gracias! Recibimos tu solicitud",
    "thanks.lead": "Te contactaremos muy pronto. Si es urgente, llámanos o mándanos un texto.",
    "thanks.back": "Volver al inicio",
    "form.name": "Nombre",
    "form.phone": "Teléfono",
    "form.service": "Servicio que necesitas",
    "form.other": "Otro",
    "form.msg": "Cuéntanos sobre tu proyecto",
    "form.send": "Pedir mi estimado gratis"
  }
};

const html = document.documentElement;
const nodes = [...document.querySelectorAll("[data-i18n]")];
nodes.forEach(n => { n.dataset.en = n.innerHTML; });

function setLang(lang) {
  nodes.forEach(n => {
    const k = n.dataset.i18n;
    n.innerHTML = lang === "es" && I18N.es[k] !== undefined ? I18N.es[k] : n.dataset.en;
  });
  html.lang = lang;
  document.querySelector("[data-lang-label]").textContent = lang === "es" ? "EN" : "ES";
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelector(".lang-toggle")?.addEventListener("click", () => {
  setLang(html.lang === "es" ? "en" : "es");
});

let saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}
if (saved === "es" || (!saved && (navigator.language || "").toLowerCase().startsWith("es"))) setLang("es");

const y=document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
