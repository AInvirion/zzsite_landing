/* ZapZapSites landing, mockup 02.
 * Enhancement only: without it the page reads in English, the Labels / Form
 * switch still works (it is two radios and CSS), and both forms submit.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var ES = {
    skip: "Ir al registro",
    topNote: "Solo con invitación mientras lo construimos",
    h1: ["Un sitio web para", "tu negocio, sin", "ocuparte de", "la parte web."],
    lede: "Trae el sitio que ya tienes o elige una de nuestras plantillas. Etiquetamos las partes que vale la pena editar, y esas etiquetas se vuelven un formulario que llenas. Apunta tu dominio hacia nosotros y listo.",
    aWait: "Únete a la lista de espera",
    aWaitP: "Estamos dejando entrar a la gente de a poco. Te escribimos cuando sea tu turno.",
    email: "Correo",
    aWaitB: "Anótame",
    aCode: "Tengo un código",
    aCodeP: "Alguien te invitó. Escríbelo y entra con Google o GitHub.",
    code: "Código de invitación",
    aCodeB: "Usarlo",
    benchH: "Un sitio de muestra, etiquetado",
    vLabels: "Página etiquetada",
    vForm: "El formulario que resulta",
    sample: "Sitio de muestra",
    sampleForm: "El formulario, armado desde las etiquetas",
    tName: "Nombre del negocio",
    tHeadline: "Titular",
    tPhone: "Teléfono · 3 lugares",
    tFaq: "5 preguntas",
    tHours: "Horario",
    psP: "Cuidado de jardines familiar en Tacoma.",
    psCall: "Llamar",
    psFaqH: "Preguntas",
    q1: "¿Dan presupuestos gratis?",
    q2: "¿Qué barrios cubren?",
    q3: "¿Se llevan los restos de poda?",
    q4: "¿Puedo pedir una limpieza puntual?",
    q5: "¿Tienen seguro?",
    qMore: "y 3 más",
    psOpen: "Abierto",
    fFound: "Encontramos",
    f1: "1 nombre del negocio",
    f2: "1 titular",
    f3: "1 teléfono, en 3 lugares",
    f4: "5 preguntas",
    f5: "1 horario",
    phEmail: "tu@tunegocio.com",
    foundGo: "Hacerlas editables",
    hPhone: "Lo cambias una vez; se actualizan los tres lugares.",
    hList: "Agrega, quita o reordena. El diseño no se mueve.",
    save: "Guardar es publicar",
    saveNote: "Deshacer siempre está ahí.",
    aiH: "Tu IA te hizo un sitio web. Aquí es donde vive.",
    aiP: "ChatGPT, o cualquier otro chat de IA, te escribe una página completa en un minuto. Después te entrega un bloque de código y te deja preguntándote dónde ponerlo. Ponlo aquí.",
    aiQ1: "¿Dónde lo subo?", aiA1: "Aquí. Pega el código, o sube el archivo o un zip.",
    aiQ2: "¿Cómo lo cambio después?", aiA2: "En un formulario. Etiquetamos las partes que vale la pena editar; no vuelves a tocar el código.",
    aiQ3: "¿Cómo queda en línea?", aiA3: "Al guardar se publica en una dirección gratis en zzsites.com. Tu propio dominio está a unos pocos pasos exactos.",
    aiGo: "Dale un hogar",
    codeTag: "Lo que te dio tu IA",
    codeCap: "Una página de código de muestra hecha por un chat de IA, con etiquetas pegadas en las partes que se vuelven editables.",
    codeNowhere: "Todavía sin hogar",
    tPhoneOne: "Teléfono",
    coloursH:"En tu sitio, cada color de cinta significa algo",
    coloursP: "Una etiqueta dice qué tipo de cosa hay debajo, y ese tipo decide qué puedes hacer con ella. Nada más en la página se puede tocar, así que nada más se puede romper.",
    kText: "Texto", kTextP: "Titulares y párrafos. Escribe las palabras; el diseño se encarga del resto.",
    kContact: "Contacto", kContactP: "Teléfono, correo, dirección. Se escriben una vez y se usan en todos lados.",
    kList: "Lista", kListP: "Preguntas, servicios, un menú. Agrega, quita y reordena.",
    kHours: "Horario", kHoursP: "El horario, en un solo lugar, y legible para los buscadores.",
    kPhoto: "Foto", kPhotoP: "Ajustada a cada pantalla, sin los datos de ubicación.",
    stepsH: "Cuatro pasos, de cero a publicado",
    stepsP: "Sin repositorio, sin compilar, sin cuenta de hosting, sin CSS.",
    s1t: "Entra", s1: "Con Google o GitHub. Sin contraseñas.",
    s2t: "Tráelo", s2: "Pega tu sitio, sube el archivo o un zip, danos su dirección, o parte de una plantilla.",
    s3t: "Llénalo", s3: "Revisa las etiquetas y llena el formulario. Guardar publica.",
    s4t: "Publica", s4: "Apunta tu dominio hacia nosotros. Te mostramos los pasos exactos para tu registrador. Una dirección gratis en zzsites.com funciona desde el primer minuto.",
    looksH: "Mismas etiquetas, seis estilos",
    looksP: "Eliges un estilo y cambian juntos color, tipografía, espaciado y esquinas. No hay selector de colores, así que ninguna elección puede volver tu sitio difícil de leer.",
    offH: "Lo que dejamos fuera",
    offP: "Pocas funciones es la idea. Si necesitas algo más, te ayudamos puntualmente en vez de meterlo en el producto.",
    o1: "Arrastrar y soltar", o2: "Editar CSS", o3: "Plugins", o4: "Tienda o reservas", o5: "Un blog", o6: "Contraseñas",
    priceH: "Precio",
    priceLead: "Hoy no se cobra nada.",
    pr1: "Hosting, páginas, HTTPS", pr2: "Una dirección gratis en zzsites.com", pr3: "Tu propio dominio, conectado", pr4: "Formulario de contacto", pr5: "Créditos de IA al mes, por sitio",
    free: "Gratis",
    priceFine: "Sin suscripción, sin planes, sin licencias por persona. Pasados los 100 créditos al mes, vienen en paquetes que no vencen. Los precios de los paquetes aún no están definidos.",
    closeH: ["Dos etiquetas.", "Elige una."],
    foot: "Un producto de AInvirion LLC.",
    fPricing: "Precios, en texto simple",
    fLlms: "Para asistentes de IA"
  };

  var SAMPLES = {
    en: { name: "Peña Landscaping", headline: "Lawns, hedges and gardens, kept.", phone: "(253) 555-0187", hours: "Mon to Sat, 7 am to 6 pm" },
    es: { name: "Jardinería Peña", headline: "Césped, setos y jardines, bien cuidados.", phone: "(253) 555-0187", hours: "Lun a sáb, 7 a 18 h" }
  };

  /* ---------- language ---------- */
  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var lineNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-lines]"));
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.textContent; });
  var ENLINES = {};
  lineNodes.forEach(function (n) {
    ENLINES[n.getAttribute("data-i18n-lines")] = Array.prototype.map.call(n.querySelectorAll(".tape"), function (t) { return t.textContent; });
  });
  var lineClass = {};
  lineNodes.forEach(function (n) {
    lineClass[n.getAttribute("data-i18n-lines")] = Array.prototype.map.call(n.querySelectorAll(".tape"), function (t) { return t.className; });
  });

  var fields = {};
  document.querySelectorAll("[data-field]").forEach(function (el) { fields[el.getAttribute("data-field")] = el; });
  var samples = SAMPLES.en;
  var lang = "en";

  function setLines(n, lines, classes) {
    n.textContent = "";
    lines.forEach(function (text, i) {
      var s = document.createElement("span");
      s.className = classes[i % classes.length].replace(/\btape--cut\b/, "").trim() + (i % 2 === 1 ? " tape--cut" : "");
      var b = document.createElement("span"); b.className = "tape__b";
      var ink = document.createElement("span"); ink.className = "tape__i"; ink.textContent = text;
      b.appendChild(ink); s.appendChild(b);
      n.appendChild(s);
      if (i < lines.length - 1) n.appendChild(document.createTextNode(" "));
    });
  }

  function setLang(next) {
    lang = next === "es" ? "es" : "en";
    root.lang = lang;
    var d = lang === "es" ? ES : EN;
    document.querySelectorAll("[data-i18n-ph]").forEach(function (n) {
      var k = n.getAttribute("data-i18n-ph");
      if (!n.dataset.phEn) n.dataset.phEn = n.placeholder;
      n.placeholder = (lang === "es" && ES[k]) || n.dataset.phEn;
    });
    nodes.forEach(function (n) {
      var v = d[n.getAttribute("data-i18n")] || EN[n.getAttribute("data-i18n")];
      if (v && n.textContent !== v) n.textContent = v;
    });
    lineNodes.forEach(function (n) {
      var key = n.getAttribute("data-i18n-lines");
      setLines(n, (lang === "es" ? ES[key] : null) || ENLINES[key], lineClass[key]);
    });
    /* a field still holding the other language's sample follows the switch */
    var to = SAMPLES[lang];
    Object.keys(to).forEach(function (k) {
      var el = fields[k];
      if (el && (el.value === samples[k] || el.value === "")) el.value = to[k];
    });
    samples = to;
    document.querySelectorAll(".lang a").forEach(function (a) {
      a.setAttribute("aria-current", a.getAttribute("data-lang") === lang ? "true" : "false");
    });
    render();
    try { localStorage.setItem("zz-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang a").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); setLang(a.getAttribute("data-lang")); });
  });

  /* ---------- form edits land back on the labelled page ---------- */
  function render() {
    document.querySelectorAll("[data-show]").forEach(function (n) {
      var k = n.getAttribute("data-show");
      var el = fields[k];
      var v = el ? (el.value.trim() || samples[k]) : null;
      if (v != null && n.textContent !== v) n.textContent = v;
    });
  }
  Object.keys(fields).forEach(function (k) { fields[k].addEventListener("input", render); });

  /* ---------- the Labels / Form switch, with a view transition ---------- */
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function go(id) {
    var input = document.getElementById(id);
    if (!input || input.checked) return;
    var flip = function () { input.checked = true; };
    if (document.startViewTransition && !reduced) document.startViewTransition(flip);
    else flip();
  }
  document.querySelectorAll('label[for="v-labels"], label[for="v-form"]').forEach(function (l) {
    l.addEventListener("click", function (e) { e.preventDefault(); go(l.getAttribute("for")); });
  });
  var goBtn = document.querySelector(".found__go");
  if (goBtn) {
    goBtn.setAttribute("role", "button");
    goBtn.setAttribute("tabindex", "0");
    goBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go("v-form"); document.getElementById("e-name").focus({ preventScroll: true }); }
    });
  }

  /* ---------- actions ---------- */
  var code = document.getElementById("c-code");
  if (code) {
    code.addEventListener("input", function () {
      var raw = code.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
      code.value = [raw.slice(0, 2), raw.slice(2, 6), raw.slice(6, 10)].filter(Boolean).join("-");
    });
  }
  document.querySelectorAll("form").forEach(function (f) {
    f.addEventListener("submit", function () {
      var b = f.querySelector("button");
      if (b) { b.disabled = true; b.setAttribute("aria-busy", "true"); }
    });
  });

  /* ---------- start ---------- */
  var saved = null;
  try { saved = localStorage.getItem("zz-lang"); } catch (e) {}
  setLang(new URLSearchParams(location.search).get("lang") || saved ||
    ((navigator.language || "").slice(0, 2) === "es" ? "es" : "en"));
})();
