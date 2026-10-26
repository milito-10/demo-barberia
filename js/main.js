"use strict";

// Textos de interfaz y metadatos para cambiar el idioma sin recargar.
const copy = {
  es: {
    pageTitle: "Barbería El Filo | Estilo que habla por ti",
    pageDescription: "Barbería El Filo: cortes precisos, barba impecable y estilo propio en El Poblado, Medellín. Reserva tu turno por WhatsApp.",
    ogTitle: "Barbería El Filo — Estilo que habla por ti",
    ogDescription: "Cortes precisos, barba impecable y estilo propio en El Poblado, Medellín.",
    skipContent: "Saltar al contenido",
    lightboxFallback: "ESTILO CON CARÁCTER",
    brandHome: "Barbería El Filo, inicio", starRating: "5 de 5 estrellas",
    brandTagline: "BARBERÍA · MEDELLÍN",
    localFallback: "UN ESPACIO HECHO PARA TI", photoSince: "DESDE 2018",
    galleryFallback1: "DEGRADADO / 01", galleryFallback2: "TEXTURA / 02", galleryFallback3: "BARBA / 03", galleryFallback4: "CLÁSICO / 04", galleryFallback5: "CONTEMPORÁNEO / 05",
    galleryCaption1: "01 / DEGRADADO", galleryCaption2: "02 / TEXTURA", galleryCaption3: "03 / BARBA", galleryCaption4: "04 / CLÁSICO", galleryCaption5: "05 / CONTEMPORÁNEO",
    demoBanner: "PÁGINA DE DEMOSTRACIÓN", demoBy: "Diseñada por Juan Camilo Vergara",
    menuOpen: "Abrir menú", menuClose: "Cerrar menú", mainNavigation: "Navegación principal", languageLabel: "Seleccionar idioma",
    navServices: "Servicios", navAbout: "Nosotros", navGallery: "Galería", navBarbers: "Barberos", navLocation: "Ubicación", navBook: "Reserva ahora",
    heroEyebrow: "BARBERÍA DE AUTOR · MEDELLÍN", heroLine1: "ESTILO QUE", heroLine2: "HABLA POR TI.", heroCopy: "No es solo un corte. Es llegar con actitud y salir dejando huella.",
    heroBook: "Reserva tu turno por WhatsApp", heroExplore: "Explora la barbería", heroAddress: "EL POBLADO · MEDELLÍN, COLOMBIA", scroll: "DESLIZA", heroSideNote: "PRECISIÓN · ACTITUD · ESTILO",
    trustLabel: "Cifras de Barbería El Filo", counterCuts: "CORTES REALIZADOS", counterHappy: "CLIENTES FELICES", counterYears: "AÑOS DE EXPERIENCIA", trustNote: "Datos de ejemplo para esta demostración.",
    priceClassic: "$35.000", priceCombo: "$55.000", priceBeard: "$28.000", priceBrows: "$15.000", priceVip: "$85.000",
    servicesEyebrow: "ELIGE TU EXPERIENCIA", servicesTitle: "SERVICIOS <span class=\"gold-text\">CON CARÁCTER.</span>", servicesIntro: "Un buen corte cambia cómo te ves. Uno impecable cambia cómo entras a cualquier lugar.",
    serviceClassic: "Corte clásico", serviceClassicDesc: "Precisión, textura y acabado a tu medida.", serviceCombo: "Corte + barba", serviceComboDesc: "El combo que pone todo en su lugar.",
    serviceBeard: "Arreglo de barba", serviceBeardDesc: "Diseño, definición y toalla caliente.", serviceBrows: "Perfilado de cejas", serviceBrowsDesc: "Un detalle preciso que hace la diferencia.",
    serviceColor: "Tinte / color", serviceColorDesc: "Color con personalidad, acabado profesional.", serviceVip: "Paquete completo VIP", serviceVipDesc: "Corte, barba, toalla caliente y mascarilla facial.",
    mostOrdered: "MÁS PEDIDO", bookService: "Reservar <span>↗</span>", priceFrom: "$50.000+", priceNote: "Precios de demostración · Valores sujetos a consulta según estilo y longitud.",
    whyEyebrow: "MÁS QUE UNA BARBERÍA", whyTitle: "TU SILLA.<br><span class=\"gold-text\">TU MOMENTO.</span>", whyCopy: "Un lugar para bajar el ritmo, conversar sin afán y salir con la versión más segura de ti.",
    whyExperts: "Barberos expertos", whyExpertsDesc: "Técnica, criterio y atención a cada detalle.", whyComfort: "Ambiente cómodo", whyComfortDesc: "Buena música, buen café y cero afán.",
    whyProducts: "Productos de calidad", whyProductsDesc: "Marcas profesionales que cuidan tu estilo.", whyEnglish: "We speak English", whyEnglishDesc: "Welcome in. We’ll help you feel at home.",
    galleryEyebrow: "DETALLES QUE SE NOTAN", galleryTitle: "EL TRABAJO <span class=\"gold-text\">HABLA.</span>", galleryIntro: "Una muestra de estilos. Haz clic en cualquier imagen para verla con más detalle.",
    galleryOpen1: "Ampliar foto: corte degradado", galleryOpen2: "Ampliar foto: corte texturizado", galleryOpen3: "Ampliar foto: barba definida", galleryOpen4: "Ampliar foto: corte clásico", galleryOpen5: "Ampliar foto: corte contemporáneo",
    barbersEyebrow: "MANOS EXPERTAS. BUENA ENERGÍA.", barbersTitle: "CONOCE AL <span class=\"gold-text\">EQUIPO.</span>", barbersIntro: "Cada estilo tiene su especialista. Elige el tuyo y reserva directamente.",
    barberLead: "BARBERO PRINCIPAL", barberJuanSpecialty: "Degradados & diseño", barberSpecialist: "ESPECIALISTA EN BARBA", barberDanielSpecialty: "Barba & cortes clásicos", barberCreative: "BARBERO CREATIVO", barberSantiagoSpecialty: "Textura & color",
    bookWith: "Reserva con Juan", bookWithDaniel: "Reserva con Daniel", bookWithSantiago: "Reserva con Santiago",
    testimonialsEyebrow: "PALABRA DE CLIENTE", testimonialsTitle: "Lo que dicen de nosotros", sampleReview: "(testimonio de ejemplo)", previousTestimonial: "Testimonio anterior", nextTestimonial: "Siguiente testimonio", testimonialPages: "Seleccionar testimonio",
    faqEyebrow: "ANTES DE SENTARTE EN LA SILLA", faqTitle: "PREGUNTAS <span class=\"gold-text\">FRECUENTES.</span>", faqIntro: "¿Tienes dudas? Aquí te ayudamos. Si necesitas algo más, escríbenos.",
    faqAppointment: "¿Necesito cita para ir?", faqAppointmentAnswer: "Recomendamos reservar para asegurar tu espacio y elegir barbero. También recibimos clientes sin cita según disponibilidad.",
    faqDuration: "¿Cuánto dura un corte?", faqDurationAnswer: "Un corte clásico toma entre 30 y 45 minutos. Los servicios combinados o VIP pueden tomar alrededor de 60 a 90 minutos.",
    faqPayment: "¿Qué medios de pago aceptan?", faqPaymentAnswer: "Aceptamos efectivo, tarjetas y transferencias por Nequi o Bancolombia. (Información de ejemplo, confirma al reservar.)",
    faqSunday: "¿Atienden los domingos?", faqSundayAnswer: "Abrimos de lunes a sábado. Los domingos y festivos descansamos para volver con toda la energía.",
    faqEnglish: "¿Hablan inglés?", faqEnglishAnswer: "Yes! We welcome international clients and can help you choose your style in English.",
    locationEyebrow: "PÁSATE POR EL POBLADO", locationTitle: "AQUÍ TE <span class=\"gold-text\">ESPERAMOS.</span>", addressLabel: "Dirección de ejemplo", address: "Carrera 35 # 8A-50, El Poblado<br>Medellín, Antioquia",
    hoursTitle: "HORARIOS", hoursWeek: "Lunes – viernes <span>9:00 a. m. – 8:00 p. m.</span>", hoursSaturday: "Sábados <span>9:00 a. m. – 6:00 p. m.</span>", hoursSunday: "Domingos <span>Cerrado</span>",
    openMaps: "Cómo llegar", mapLabel: "EL POBLADO · MEDELLÍN", ctaEyebrow: "TU PRÓXIMO BUEN CORTE ESTÁ A UN MENSAJE", ctaTitle: "¿LISTO PARA<br><span class=\"gold-text\">EL CAMBIO?</span>", ctaCopy: "Elige tu horario. Nosotros ponemos el filo.", ctaBook: "Reserva tu turno por WhatsApp", callUs: "O llámanos",
    footerNote: "Estilo que habla por ti. Medellín, Colombia.", footerDemo: "SITIO DE DEMOSTRACIÓN · DATOS DE EJEMPLO · FOTOS: UNSPLASH", footerCredit: "Página de demostración – diseñada por Juan Camilo Vergara", backTop: "Volver arriba", floatingWhatsApp: "Reserva tu turno por WhatsApp", floatingBook: "Reserva tu turno",
    lightboxLabel: "Vista ampliada de la imagen", closeImage: "Cerrar imagen"
  },
  en: {
    pageTitle: "Barbería El Filo | Style That Speaks for You",
    pageDescription: "Barbería El Filo: precise cuts, impeccable beards, and personal style in El Poblado, Medellín. Book on WhatsApp.",
    ogTitle: "Barbería El Filo — Style That Speaks for You",
    ogDescription: "Precise cuts, impeccable beards, and personal style in El Poblado, Medellín.",
    skipContent: "Skip to content",
    lightboxFallback: "STYLE WITH CHARACTER",
    brandHome: "Barbería El Filo, home", starRating: "5 out of 5 stars",
    brandTagline: "BARBERSHOP · MEDELLÍN",
    localFallback: "A SPACE MADE FOR YOU", photoSince: "SINCE 2018",
    galleryFallback1: "FADE / 01", galleryFallback2: "TEXTURE / 02", galleryFallback3: "BEARD / 03", galleryFallback4: "CLASSIC / 04", galleryFallback5: "CONTEMPORARY / 05",
    galleryCaption1: "01 / FADE", galleryCaption2: "02 / TEXTURE", galleryCaption3: "03 / BEARD", galleryCaption4: "04 / CLASSIC", galleryCaption5: "05 / CONTEMPORARY",
    demoBanner: "DEMO WEBSITE", demoBy: "Designed by Juan Camilo Vergara",
    menuOpen: "Open menu", menuClose: "Close menu", mainNavigation: "Main navigation", languageLabel: "Select language",
    navServices: "Services", navAbout: "About", navGallery: "Gallery", navBarbers: "Barbers", navLocation: "Location", navBook: "Book now",
    heroEyebrow: "SIGNATURE BARBERSHOP · MEDELLÍN", heroLine1: "STYLE THAT", heroLine2: "SPEAKS FOR YOU.", heroCopy: "It’s more than a haircut. Show up with confidence, leave a lasting impression.",
    heroBook: "Book your appointment on WhatsApp", heroExplore: "Explore the barbershop", heroAddress: "EL POBLADO · MEDELLÍN, COLOMBIA", scroll: "SCROLL", heroSideNote: "PRECISION · ATTITUDE · STYLE",
    trustLabel: "Barbería El Filo at a glance", counterCuts: "HAIRCUTS COMPLETED", counterHappy: "HAPPY CLIENTS", counterYears: "YEARS OF EXPERIENCE", trustNote: "Sample figures for this demo.",
    priceClassic: "COP 35,000", priceCombo: "COP 55,000", priceBeard: "COP 28,000", priceBrows: "COP 15,000", priceVip: "COP 85,000",
    servicesEyebrow: "CHOOSE YOUR EXPERIENCE", servicesTitle: "SERVICES <span class=\"gold-text\">WITH CHARACTER.</span>", servicesIntro: "A good cut changes how you look. A great one changes how you walk into any room.",
    serviceClassic: "Classic haircut", serviceClassicDesc: "Precision, texture, and a finish made for you.", serviceCombo: "Haircut + beard", serviceComboDesc: "The combo that brings it all together.",
    serviceBeard: "Beard trim", serviceBeardDesc: "Shape, definition, and a hot towel.", serviceBrows: "Eyebrow shaping", serviceBrowsDesc: "A precise detail that makes a difference.",
    serviceColor: "Color / dye", serviceColorDesc: "Personality in color, professionally finished.", serviceVip: "Complete VIP package", serviceVipDesc: "Haircut, beard, hot towel, and facial mask.",
    mostOrdered: "MOST POPULAR", bookService: "Book now <span>↗</span>", priceFrom: "COP 50,000+", priceNote: "Demo prices · Final quote may vary by style and length.",
    whyEyebrow: "MORE THAN A BARBERSHOP", whyTitle: "YOUR CHAIR.<br><span class=\"gold-text\">YOUR MOMENT.</span>", whyCopy: "A place to slow down, enjoy a conversation, and leave feeling like the best version of yourself.",
    whyExperts: "Expert barbers", whyExpertsDesc: "Technique, good judgment, and attention to detail.", whyComfort: "A comfortable vibe", whyComfortDesc: "Good music, great coffee, and no rush.",
    whyProducts: "Quality products", whyProductsDesc: "Professional brands that care for your style.", whyEnglish: "We speak English", whyEnglishDesc: "Welcome in. We’ll help you feel at home.",
    galleryEyebrow: "DETAILS THAT STAND OUT", galleryTitle: "LET THE WORK <span class=\"gold-text\">TALK.</span>", galleryIntro: "A showcase of styles. Click any photo to see it up close.",
    galleryOpen1: "Enlarge photo: fade haircut", galleryOpen2: "Enlarge photo: textured haircut", galleryOpen3: "Enlarge photo: shaped beard", galleryOpen4: "Enlarge photo: classic haircut", galleryOpen5: "Enlarge photo: contemporary haircut",
    barbersEyebrow: "EXPERT HANDS. GOOD ENERGY.", barbersTitle: "MEET THE <span class=\"gold-text\">TEAM.</span>", barbersIntro: "Every style has its specialist. Pick yours and book directly.",
    barberLead: "LEAD BARBER", barberJuanSpecialty: "Fades & design", barberSpecialist: "BEARD SPECIALIST", barberDanielSpecialty: "Beards & classic cuts", barberCreative: "CREATIVE BARBER", barberSantiagoSpecialty: "Texture & color",
    bookWith: "Book with Juan", bookWithDaniel: "Book with Daniel", bookWithSantiago: "Book with Santiago",
    testimonialsEyebrow: "CLIENT STORIES", testimonialsTitle: "What our clients say", sampleReview: "(sample testimonial)", previousTestimonial: "Previous testimonial", nextTestimonial: "Next testimonial", testimonialPages: "Choose testimonial",
    faqEyebrow: "BEFORE YOU TAKE A SEAT", faqTitle: "FREQUENTLY <span class=\"gold-text\">ASKED.</span>", faqIntro: "Got questions? We’ve got answers. For anything else, just message us.",
    faqAppointment: "Do I need an appointment?", faqAppointmentAnswer: "We recommend booking to secure your spot and choose your barber. Walk-ins are welcome based on availability.",
    faqDuration: "How long does a haircut take?", faqDurationAnswer: "A classic haircut takes 30–45 minutes. Combination or VIP services may take around 60–90 minutes.",
    faqPayment: "Which payment methods do you accept?", faqPaymentAnswer: "We accept cash, cards, and transfers through Nequi or Bancolombia. (Sample info—please confirm when booking.)",
    faqSunday: "Are you open on Sundays?", faqSundayAnswer: "We’re open Monday through Saturday. We take Sundays and public holidays off to recharge.",
    faqEnglish: "Do you speak English?", faqEnglishAnswer: "Yes! We welcome international clients and can help you choose your style in English.",
    locationEyebrow: "COME BY EL POBLADO", locationTitle: "WE’LL <span class=\"gold-text\">BE HERE.</span>", addressLabel: "Sample address", address: "Carrera 35 # 8A-50, El Poblado<br>Medellín, Antioquia",
    hoursTitle: "OPENING HOURS", hoursWeek: "Monday – Friday <span>9:00 a.m. – 8:00 p.m.</span>", hoursSaturday: "Saturday <span>9:00 a.m. – 6:00 p.m.</span>", hoursSunday: "Sunday <span>Closed</span>",
    openMaps: "Get directions", mapLabel: "EL POBLADO · MEDELLÍN", ctaEyebrow: "YOUR NEXT GREAT CUT IS ONE MESSAGE AWAY", ctaTitle: "READY FOR<br><span class=\"gold-text\">A CHANGE?</span>", ctaCopy: "Pick a time. We’ll bring the edge.", ctaBook: "Book your appointment on WhatsApp", callUs: "Or call us",
    footerNote: "Style that speaks for you. Medellín, Colombia.", footerDemo: "DEMO WEBSITE · SAMPLE INFORMATION · PHOTOS: UNSPLASH", footerCredit: "Demo website – designed by Juan Camilo Vergara", backTop: "Back to top", floatingWhatsApp: "Book your appointment on WhatsApp", floatingBook: "Book your appointment",
    lightboxLabel: "Enlarged image view", closeImage: "Close image"
  }
};

const services = {
  classic: { es: "Corte clásico", en: "Classic haircut" },
  combo: { es: "Corte + barba", en: "Haircut + beard" },
  beard: { es: "Arreglo de barba", en: "Beard trim" },
  brows: { es: "Perfilado de cejas", en: "Eyebrow shaping" },
  color: { es: "Tinte / color", en: "Color / dye" },
  vip: { es: "Paquete completo VIP", en: "Complete VIP package" }
};
const barbers = {
  juan: { es: "Juan Moreno", en: "Juan Moreno" },
  daniel: { es: "Daniel Ríos", en: "Daniel Ríos" },
  santiago: { es: "Santiago López", en: "Santiago López" }
};
const testimonials = {
  es: [
    ["“Salí con el corte que llevaba meses buscando. La atención, la música y el detalle: todo de otro nivel.”", "— Andrés M."],
    ["“Por fin encontré un lugar donde entienden exactamente cómo quiero la barba. Volveré, seguro.”", "— Mateo G."],
    ["“Ambiente increíble y un corte impecable. Se nota el cuidado en cada detalle.”", "— Sebastián R."]
  ],
  en: [
    ["“I left with the haircut I’d been looking for. The service, music, and attention to detail were next level.”", "— Andrés M."],
    ["“Finally found a place that gets exactly how I want my beard. I’ll definitely be back.”", "— Mateo G."],
    ["“Great atmosphere and an impeccable cut. You can tell they care about every detail.”", "— Sebastián R."]
  ]
};
const whatsappNumber = "573000000000";
let language = "es";
let testimonialIndex = 0;
let imageObserver;

function whatsAppLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function languageSuffix() {
  return language.charAt(0).toUpperCase() + language.slice(1);
}

function updateWhatsAppLinks() {
  const defaultMessage = language === "es"
    ? "Hola, quiero reservar un turno en Barbería El Filo."
    : "Hi, I’d like to book an appointment at Barbería El Filo.";
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = whatsAppLink(defaultMessage);
  });
}

function updateTranslations() {
  document.documentElement.lang = language;
  document.title = copy[language].pageTitle;
  document.querySelector('meta[name="description"]').content = copy[language].pageDescription;
  document.querySelector('meta[property="og:title"]').content = copy[language].ogTitle;
  document.querySelector('meta[property="og:description"]').content = copy[language].ogDescription;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[language][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[language][element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const suffix = languageSuffix();
  document.querySelectorAll("img[data-alt-es]").forEach((image) => {
    image.alt = image.dataset[`alt${suffix}`];
  });
  document.querySelectorAll(".gallery-tile").forEach((tile) => {
    tile.setAttribute("aria-label", tile.dataset[`i18nAria`]
      ? copy[language][tile.dataset.i18nAria]
      : tile.getAttribute("aria-label"));
    const image = tile.querySelector("img");
    image.alt = tile.dataset[`alt${suffix}`];
  });
  const map = document.querySelector(".map-wrap iframe");
  map.title = map.dataset[`title${suffix}`];
  document.querySelector(".menu-toggle").setAttribute("aria-label", copy[language][document.querySelector(".main-nav").classList.contains("is-open") ? "menuClose" : "menuOpen"]);
  document.querySelectorAll(".counter[data-complete='true']").forEach((counter) => {
    counter.textContent = Number(counter.dataset.target).toLocaleString(language === "es" ? "es-CO" : "en-US");
  });
  renderTestimonial();
  updateWhatsAppLinks();
}

function renderTestimonial() {
  document.querySelector("#testimonial-quote").textContent = testimonials[language][testimonialIndex][0];
  document.querySelector("#testimonial-name").textContent = testimonials[language][testimonialIndex][1];
  const dots = document.querySelector(".carousel-dots");
  dots.replaceChildren(...testimonials[language].map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `${copy[language].testimonialPages} ${index + 1}`);
    dot.setAttribute("aria-current", String(index === testimonialIndex));
    dot.addEventListener("click", () => {
      testimonialIndex = index;
      renderTestimonial();
    });
    return dot;
  }));
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    updateTranslations();
  });
});

document.querySelectorAll("[data-reserve-service]").forEach((button) => {
  button.addEventListener("click", () => {
    const service = services[button.dataset.reserveService][language];
    const message = language === "es"
      ? `Hola, quiero reservar el servicio de ${service} en Barbería El Filo.`
      : `Hi, I’d like to book the ${service} service at Barbería El Filo.`;
    window.open(whatsAppLink(message), "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll("[data-reserve-barber]").forEach((button) => {
  button.addEventListener("click", () => {
    const barber = barbers[button.dataset.reserveBarber][language];
    const message = language === "es"
      ? `Hola, quiero reservar un turno con ${barber} en Barbería El Filo.`
      : `Hi, I’d like to book an appointment with ${barber} at Barbería El Filo.`;
    window.open(whatsAppLink(message), "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll("[data-testimonial-step]").forEach((button) => {
  button.addEventListener("click", () => {
    testimonialIndex = (testimonialIndex + Number(button.dataset.testimonialStep) + testimonials[language].length) % testimonials[language].length;
    renderTestimonial();
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", copy[language][isOpen ? "menuClose" : "menuOpen"]);
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", copy[language].menuOpen);
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxFallback = lightbox.querySelector(".lightbox-fallback");
lightboxImage.addEventListener("load", () => {
  lightboxImage.classList.remove("is-loading", "is-failed");
  lightboxFallback.classList.remove("is-visible");
});
lightboxImage.addEventListener("error", () => {
  lightboxImage.classList.remove("is-loading");
  lightboxImage.classList.add("is-failed");
  lightboxFallback.classList.add("is-visible");
});
document.querySelectorAll("[data-lightbox]").forEach((tile) => {
  tile.addEventListener("click", () => {
    lightboxFallback.classList.add("is-visible");
    lightboxImage.classList.add("is-loading");
    lightboxImage.classList.remove("is-failed");
    lightboxImage.src = tile.dataset.lightbox;
    lightboxImage.alt = tile.dataset[`alt${languageSuffix()}`];
    lightbox.querySelector(".lightbox-caption").textContent = lightboxImage.alt;
    lightbox.showModal();
    lightbox.querySelector(".lightbox-close").focus();
  });
});
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => {
  lightboxImage.removeAttribute("src");
  lightboxImage.classList.add("is-loading");
  lightboxImage.classList.remove("is-failed");
  lightboxFallback.classList.remove("is-visible");
});

if ("IntersectionObserver" in window) {
  imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      revealElement(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
}

function revealElement(element) {
  if (element.classList.contains("reveal")) element.classList.add("is-visible");
  if (element.classList.contains("counter") && !element.dataset.started) {
    element.dataset.started = "true";
    animateCounter(element);
  }
}

function checkRevealPositions() {
  const activationPoint = window.innerHeight * 0.9;
  document.querySelectorAll(".reveal, .counter").forEach((element) => {
    if (element.classList.contains("is-visible") && !element.classList.contains("counter")) return;
    if (element.dataset.started) return;
    const bounds = element.getBoundingClientRect();
    if (bounds.top < activationPoint && bounds.bottom > 0) revealElement(element);
  });
}

let revealCheckPending = false;
// Respaldo ligero para revelar contenido durante el desplazamiento.
function scheduleRevealCheck() {
  if (revealCheckPending) return;
  revealCheckPending = true;
  requestAnimationFrame(() => {
    revealCheckPending = false;
    checkRevealPositions();
  });
}

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counter.textContent = target.toLocaleString(language === "es" ? "es-CO" : "en-US");
    counter.dataset.complete = "true";
    return;
  }
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    counter.textContent = Math.round(target * eased).toLocaleString(language === "es" ? "es-CO" : "en-US");
    if (progress < 1) requestAnimationFrame(tick);
    else counter.dataset.complete = "true";
  }
  requestAnimationFrame(tick);
}

document.querySelectorAll(".image-frame img").forEach((image) => {
  const frame = image.closest(".image-frame");
  // Conserva el fondo de respaldo si todavía no existe la fotografía.
  if (image.complete && image.naturalWidth > 0) frame.classList.add("is-loaded");
  if (image.complete && image.naturalWidth === 0) image.classList.add("is-failed");
  image.addEventListener("load", () => {
    image.classList.remove("is-failed");
    frame.classList.add("is-loaded");
  });
  image.addEventListener("error", () => {
    frame.classList.remove("is-loaded");
    image.classList.add("is-failed");
  });
});

if (imageObserver) {
  document.querySelectorAll(".reveal, .counter").forEach((element) => imageObserver.observe(element));
}

window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
window.addEventListener("resize", scheduleRevealCheck);
checkRevealPositions();
updateTranslations();
