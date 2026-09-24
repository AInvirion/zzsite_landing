/* ZapZapSites landing, mockup 01.
 * Everything here is an enhancement: without it the page reads in English,
 * the sample order stays filled in, and both stubs still submit.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");

  var ES = {
    skip: "Ir a los talones de registro",
    padTitle: "Libro de pedidos web · Solo con invitación mientras lo construimos",
    formId: "Formulario ZZ-1 · Pedido de sitio web",
    orderNo: "N.º",
    h1: "Un sitio web para tu negocio, sin tener que ocuparte de la parte web.",
    lede: "Elige una plantilla o pega el sitio que ya tienes. Averiguamos qué debe poder editarse y te armamos un formulario como este. Lo llenas, apuntas tu dominio hacia nosotros y listo.",
    stamp: "Muestra",
    sampleNote: "Hay un pedido de muestra ya llenado. Escribe encima y mira la copia.",
    fBiz: "1 · Nombre del negocio",
    fWhat: "2 · Qué haces, en una línea",
    fPhone: "3 · Teléfono",
    fHours: "4 · Horario",
    fStart: "5 · Empiezas desde",
    optTemplate: "Una de sus plantillas",
    optPaste: "El sitio que ya tengo",
    copyTab: "Copia 2 · Tu sitio web",
    m1: "Pan de masa madre", m2: "Croissant de almendra", m3: "Café de filtro",
    sHome: "Inicio", sMenu: "Menú", sContact: "Contacto", sCall: "Llamar", sOpen: "Abierto",
    cfBuilt: "Hecho desde",
    cfPaste: "El sitio que ya tienes",
    cfTemplate: "La plantilla Comida y bebida",
    cfSearch: "Lo encuentran",
    cfSearchV: "Buscadores y asistentes de IA",
    stubA: "Únete a la lista de espera",
    stubAp: "Estamos dejando entrar a la gente de a poco. Deja tu correo y te escribimos cuando sea tu turno.",
    email: "Correo",
    stubAbtn: "Agrégame a la lista",
    stubAfine: "Lo que haces, de la línea 2, va con él. Nada más.",
    stubB: "Tengo un código",
    stubBp: "Alguien te invitó. Escribe el código y luego entra con Google o GitHub.",
    code: "Código de invitación",
    stubBbtn: "Usar mi código",
    stubBfine: "Sin contraseñas, nunca.",
    partsH: "Cómo avanza un pedido",
    partsP: "Cuatro partes, una sola pasada. Sin repositorio, sin compilar, sin cuenta de hosting, sin CSS.",
    p1t: "Blanca · Entrar",
    p1: "Entra con Google o GitHub. Esa es toda la cuenta.",
    p2t: "Canario · Empezar",
    p2: "Elige una plantilla o trae el sitio que tienes: pégalo, sube el archivo o un zip, o danos su dirección.",
    p3t: "Rosa · Llenar",
    p3: "Llena el formulario que armamos a partir de él. Guardar publica, y deshacer siempre está ahí.",
    p4t: "Dorada · Publicar",
    p4: "Apunta tu dominio hacia nosotros. Te mostramos los pasos exactos para tu registrador y vigilamos hasta que esté en línea. Una dirección gratis en zzsites.com funciona desde el primer minuto.",
    looksH: "Un pedido, seis estilos",
    looksP: "Las mismas respuestas, impresas en seis copias. Cada estilo mueve color, tipografía, espaciado y esquinas a la vez, así que nada de lo que elijas puede volver tu sitio difícil de leer. No hay selector de colores, a propósito.",
    lLook: "Estilo", lType: "Letra", lCorners: "Esquinas",
    cSoft: "Suaves", cCrisp: "Nítidas", cSquare: "Rectas", cRound: "Redondas", cRounder: "Más redondas",
    scopeH: "Simple, a propósito",
    scopeP: "Pocas funciones es la función. Si necesitas algo más, te ayudamos puntualmente en vez de meterlo en el producto.",
    onH: "En el formulario",
    on1: "Páginas rápidas, servidas como HTML simple",
    on2: "Bien leído por buscadores y asistentes de IA",
    on3: "Un formulario de contacto, con los mensajes a tu correo",
    on4: "Tu propio dominio, con HTTPS",
    on5: "Hasta cinco sitios, uno por negocio",
    offH: "Fuera del formulario",
    off1: "Arrastrar cosas por la página",
    off2: "Editar CSS",
    off3: "Plugins y scripts",
    off4: "Tienda, pagos o reservas",
    off5: "Contraseñas",
    totalH: "Total del pedido",
    totalP: "Hoy no se cobra nada. Sin suscripción, sin planes, sin licencias por persona.",
    ledgerCap: "Lo que cuesta un sitio hoy",
    tItem: "Concepto", tQty: "Cant.", tAmt: "Importe",
    r1: "Hosting, páginas y HTTPS",
    r2: "Dirección gratis en zzsites.com",
    r3: "Conectar tu propio dominio",
    r4: "Formulario de contacto",
    r5: "Créditos de IA, cada mes",
    incl: "Incluido",
    tTotal: "Total",
    totalFine: "Pasados los 100 créditos al mes, los créditos vienen en paquetes que no vencen. Los precios de los paquetes aún no están definidos.",
    closeH: "Arranca un talón.",
    foot: "Un producto de AInvirion LLC.",
    fPricing: "Precios, en texto simple",
    fLlms: "Para asistentes de IA"
  };

  /* ---------- language ---------- */
  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (n) { EN[n.getAttribute("data-i18n")] = n.textContent; });
  EN.cfTemplate = "The Food and drink template";
  EN.cfPaste = EN.cfPaste || "The site you already have";

  var lang = "en";
  function dict() { return lang === "es" ? ES : EN; }
  function t(key) { return dict()[key] || EN[key] || ""; }

  function setLang(next) {
    lang = next === "es" ? "es" : "en";
    root.lang = lang;
    swapSamples(lang);
    nodes.forEach(function (n) {
      var key = n.getAttribute("data-i18n");
      if (n.hasAttribute("data-show")) return; /* owned by the binding */
      var v = dict()[key];
      if (v) n.textContent = v;
    });
    document.querySelectorAll(".lang a").forEach(function (a) {
      a.setAttribute("aria-current", a.getAttribute("data-lang") === lang ? "true" : "false");
    });
    render();
    try { localStorage.setItem("zz-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      setLang(a.getAttribute("data-lang"));
    });
  });

  /* ---------- the carbon: top sheet presses through to every copy ---------- */
  var fields = {};
  document.querySelectorAll("[data-field]").forEach(function (el) {
    fields[el.getAttribute("data-field")] = fields[el.getAttribute("data-field")] || [];
    fields[el.getAttribute("data-field")].push(el);
  });
  var SAMPLES = {
    en: { biz: "Marisol's Bakery", what: "Sourdough, pastries and coffee", phone: "(206) 555-0142", hours: "Tue to Sun, 7 am to 3 pm" },
    es: { biz: "Panadería Marisol", what: "Masa madre, pastelería y café", phone: "(206) 555-0142", hours: "Mar a dom, 7 a 15 h" }
  };
  var samples = SAMPLES.en;
  /* a field still holding the other language's sample follows the switch */
  function swapSamples(next) {
    var from = samples, to = SAMPLES[next] || SAMPLES.en;
    Object.keys(to).forEach(function (k) {
      var el = fields[k] && fields[k][0];
      if (el && (el.value === from[k] || el.value === "")) el.value = to[k];
    });
    samples = to;
  }

  function val(k) {
    if (k === "start") {
      var on = fields.start.filter(function (r) { return r.checked; })[0];
      return on ? on.value : "paste";
    }
    var v = fields[k][0].value.trim();
    return v || samples[k];
  }

  function slug(s) {
    var out = s.normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return out.slice(0, 40).replace(/-+$/, "") || "your-business";
  }

  function render() {
    var values = {
      biz: val("biz"),
      what: val("what"),
      phone: val("phone"),
      hours: val("hours"),
      slug: slug(val("biz")),
      startLabel: val("start") === "template" ? t("cfTemplate") : t("cfPaste")
    };
    document.querySelectorAll("[data-show]").forEach(function (n) {
      var k = n.getAttribute("data-show");
      if (values[k] != null && n.textContent !== values[k]) n.textContent = values[k];
    });
  }

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pressTimer;
  var copies = document.querySelectorAll(".sheet--copy, .looks");
  function press() {
    render();
    if (reduced) return;
    copies.forEach(function (c) { c.classList.add("is-pressing"); });
    clearTimeout(pressTimer);
    pressTimer = setTimeout(function () {
      copies.forEach(function (c) { c.classList.remove("is-pressing"); });
    }, 60);
  }

  Object.keys(fields).forEach(function (k) {
    fields[k].forEach(function (el) {
      el.addEventListener(el.type === "radio" ? "change" : "input", press);
    });
  });

  /* ---------- stubs ---------- */
  var code = document.getElementById("c-code");
  if (code) {
    code.addEventListener("input", function () {
      var raw = code.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
      var parts = [raw.slice(0, 2), raw.slice(2, 6), raw.slice(6, 10)].filter(Boolean);
      code.value = parts.join("-");
    });
  }
  document.querySelectorAll("form").forEach(function (f) {
    f.addEventListener("submit", function () {
      var btn = document.querySelector('button[form="' + f.id + '"]') || f.querySelector("button");
      if (btn) { btn.disabled = true; btn.setAttribute("aria-busy", "true"); }
    });
  });

  /* ---------- start ---------- */
  var saved = null;
  try { saved = localStorage.getItem("zz-lang"); } catch (e) {}
  var wanted = new URLSearchParams(location.search).get("lang") || saved ||
    ((navigator.language || "").slice(0, 2) === "es" ? "es" : "en");
  setLang(wanted);
})();
