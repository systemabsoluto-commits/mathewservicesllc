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
    "contact.hoursVal": "Lun–Vie 7 AM–5 PM",
    "reviews.more": "Ver todas las reseñas en Google",
    "thanks.title": "¡Gracias! Recibimos tu solicitud",
    "thanks.lead": "Te contactaremos muy pronto. Si es urgente, llámanos o mándanos un texto.",
    "thanks.back": "Volver al inicio",
    "form.name": "Nombre",
    "form.phone": "Teléfono",
    "form.service": "Servicio que necesitas",
    "form.other": "Otro",
    "form.xmas": "Luces de Navidad (15% de descuento hasta el 15 de nov.)",
    "xmas.badge": "Reserva anticipada",
    "xmas.title": "Luces de Navidad, instaladas por nosotros",
    "xmas.lead": "Agenda la instalación de tus luces de Navidad antes del 15 de noviembre y ahorra un 15%. Nuestro equipo se encarga de todo; tú solo disfruta.",
    "xmas.cta": "Reserva y ahorra 15%",
    "xmas.fine": "Oferta válida para instalaciones agendadas hasta el 15 de noviembre de 2026.",
    "xmas.badge2": "Hasta el 15 de noviembre",
    "xmas.title2": "Ilumina tu casa esta temporada",
    "xmas.lead2": "Iluminación profesional y limpia en el techo de tu casa, por un equipo local. Reserva tu fecha con tiempo: los mejores días se llenan rápido.",
    "xmas.cta2": "Reservar mi fecha",
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

// ---------- Hero slider ----------
(function () {
  const root = document.querySelector(".hero-slider");
  if (!root) return;
  const today = new Date();
  // Remove promo slides whose end date has passed
  root.querySelectorAll(".slide[data-until]").forEach(s => {
    if (today >= new Date(s.dataset.until + "T00:00:00")) s.remove();
  });
  const slides = [...root.querySelectorAll(".slide")];
  if (!slides.length) return;
  slides.forEach(s => s.classList.remove("is-active"));
  if (slides.length < 2) { root.classList.add("single"); slides[0].classList.add("is-active"); return; }

  const dotsBox = root.querySelector(".slider-dots");
  const dots = slides.map((_, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-label", "Slide " + (i + 1));
    b.addEventListener("click", () => { go(i); restart(); });
    dotsBox.appendChild(b); return b;
  });
  let cur = 0, timer = null;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function go(i) {
    cur = (i + slides.length) % slides.length;
    slides.forEach((s, k) => {
      const on = k === cur;
      s.classList.toggle("is-active", on);
      s.setAttribute("aria-hidden", on ? "false" : "true");
      s.querySelectorAll("a,button").forEach(el => on ? el.removeAttribute("tabindex") : el.setAttribute("tabindex", "-1"));
    });
    dots.forEach((d, k) => d.setAttribute("aria-selected", k === cur ? "true" : "false"));
  }
  function start() { if (!reduce) timer = setInterval(() => go(cur + 1), 7000); }
  function stop() { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }
  root.querySelector(".prev").addEventListener("click", () => { go(cur - 1); restart(); });
  root.querySelector(".next").addEventListener("click", () => { go(cur + 1); restart(); });
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  let x0 = null;
  root.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  root.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); restart(); }
    x0 = null;
  });
  go(0); start();
})();

// Promo buttons pre-select "Christmas lights" in the form
document.querySelectorAll('[data-service="xmas"]').forEach(a => a.addEventListener("click", () => {
  const sel = document.querySelector('.contact-form select[name="service"]');
  const opt = sel && [...sel.options].find(o => o.value === "Christmas lights");
  if (opt) sel.value = opt.value;
}));
