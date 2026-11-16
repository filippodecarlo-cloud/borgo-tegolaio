/* Testi fissi dell'interfaccia (di norma non serve toccarli) */
const UI = {
  it:{navCasa:"L'appartamento",navFoto:"Foto",navDove:"Posizione",navInfo:"Info",navContatti:"Contatti",navLunghi:"1–12 mesi",occLunghi:"Soggiorni lunghi",ctaLunghi:"Chiedi il canone mensile",fTipo:"Tipo di soggiorno",tipoBreve:"Vacanza o soggiorno breve",tipoLungo:"Soggiorno lungo (1–12 mesi)",mTipo:"Soggiorno",ancheMesi:"Anche per 1–12 mesi",
    luogo:"Firenze · Oltrarno",cta:"Chiedi disponibilità",
    occCasa:"La casa",titCasa:"Vivere Firenze da fiorentini",
    vantaggio:"<b>Prenotazione diretta.</b> Scrivendo a noi parli con il proprietario e non paghi le commissioni dei portali.",
    occFoto:"Galleria",titFoto:"Uno sguardo all'interno",
    occServizi:"Comfort",titServizi:"Cosa trovate in casa",
    occDove:"Posizione",titDove:"Tutto a piedi",testoDove:"Dal portone si raggiungono a piedi tutti i luoghi simbolo della città.",
    occInfo:"Prima di partire",titInfo:"Informazioni utili",titOrari:"Arrivo e partenza",titRegole:"Regole della casa",
    occContatti:"Contatti",titContatti:"Chiedi disponibilità e prezzo",
    introContatti:"Indica le date e quanti siete: ti rispondiamo personalmente con disponibilità e prezzo, senza impegno.",
    fNome:"Nome",fArrivo:"Arrivo",fPartenza:"Partenza",fOspiti:"Ospiti",fMessaggio:"Messaggio (facoltativo)",
    inviaWa:"Scrivi su WhatsApp",inviaMail:"Invia un'email",
    avviso:"Contatti non ancora configurati: inserisci WhatsApp o email nel file contenuti.js.",
    cinEtichetta:"CIN",minuti:"min",ospitiMax:"Fino a 4 ospiti",recensioni:"recensioni",
    msgIntro:"Buongiorno, vorrei informazioni sull'appartamento in",msgOggetto:"Richiesta disponibilità",
    mNome:"Nome",mArrivo:"Arrivo",mPartenza:"Partenza",mOspiti:"Ospiti",altraLingua:"EN",
    portone:"Apriamo il portone",titCal:"Disponibilità",calLibero:"Libero",calOccupato:"Occupato",calAgg:"Aggiornato il",calMesePrec:"Mese precedente",calMeseSucc:"Mese successivo",
    avvisoDate:"Alcune delle date scelte risultano già occupate. Puoi comunque scriverci: ti proponiamo le date libere più vicine.",
    giorni:["L","M","M","G","V","S","D"]},
  en:{navCasa:"The apartment",navFoto:"Photos",navDove:"Location",navInfo:"Info",navContatti:"Contact",navLunghi:"1–12 months",occLunghi:"Mid-term stays",ctaLunghi:"Ask for the monthly rate",fTipo:"Type of stay",tipoBreve:"Holiday or short stay",tipoLungo:"Mid-term stay (1–12 months)",mTipo:"Stay",ancheMesi:"Also for 1–12 months",
    luogo:"Florence · Oltrarno",cta:"Check availability",
    occCasa:"The home",titCasa:"Live Florence like a local",
    vantaggio:"<b>Book direct.</b> Write to us and you deal with the owner, with no booking-platform fees.",
    occFoto:"Gallery",titFoto:"A look inside",
    occServizi:"Comforts",titServizi:"What you'll find",
    occDove:"Location",titDove:"Everything on foot",testoDove:"All the city's landmarks are a short walk from the front door.",
    occInfo:"Before you travel",titInfo:"Good to know",titOrari:"Arrival and departure",titRegole:"House rules",
    occContatti:"Contact",titContatti:"Ask for availability and price",
    introContatti:"Tell us your dates and how many you are: we reply personally with availability and price, no obligation.",
    fNome:"Name",fArrivo:"Arrival",fPartenza:"Departure",fOspiti:"Guests",fMessaggio:"Message (optional)",
    inviaWa:"Message on WhatsApp",inviaMail:"Send an email",
    avviso:"Contact details not configured yet: add WhatsApp or email in contenuti.js.",
    cinEtichetta:"CIN (national ID code)",minuti:"min",ospitiMax:"Up to 4 guests",recensioni:"reviews",
    msgIntro:"Hello, I'd like some information about the apartment at",msgOggetto:"Availability request",
    mNome:"Name",mArrivo:"Arrival",mPartenza:"Departure",mOspiti:"Guests",altraLingua:"IT",
    portone:"Opening the door",titCal:"Availability",calLibero:"Available",calOccupato:"Booked",calAgg:"Updated",calMesePrec:"Previous month",calMeseSucc:"Next month",
    avvisoDate:"Some of the selected dates are already booked. Feel free to write to us anyway: we'll suggest the nearest available dates.",
    giorni:["M","T","W","T","F","S","S"]}
};

const $ = id => document.getElementById(id);
const el = (tag, testo) => { const e = document.createElement(tag); if (testo != null) e.textContent = testo; return e; };
/* La lingua dipende dalla pagina: index.html = inglese, it/index.html = italiano */
const lingua = document.documentElement.lang === "it" ? "it" : "en";
const BASE = window.BASE || "";
const percorso = f => /^https?:/.test(f) ? f : BASE + f;

function riempi(id, voci) { const u = $(id); u.replaceChildren(...voci.map(v => el("li", v))); }

function disegna() {
  const t = UI[lingua];
  document.documentElement.lang = lingua;
  document.querySelectorAll("[data-t]").forEach(n => { n.innerHTML = t[n.dataset.t]; });
  $("marchio").replaceChildren(document.createTextNode(SITO.nomeSito));
  if (SITO.logo) { const lg = el("img"); lg.src = percorso(SITO.logo); lg.alt = ""; $("marchio").prepend(lg); }
  $("titolo").textContent = SITO.titolo[lingua];
  $("sottotitolo").textContent = SITO.sottotitolo[lingua];

  const d = [];
  if (SITO.valutazione && SITO.valutazione.voto) d.push("★ " + (lingua === "en" ? SITO.valutazione.voto.replace(",", ".") : SITO.valutazione.voto) + " · " + SITO.valutazione.recensioni + " " + t.recensioni);
  d.push(t.ospitiMax);
  const L = SITO.lunghi, conLunghi = !!(L && L.mostra);
  if (conLunghi) d.push(t.ancheMesi);
  $("lunghi").hidden = !conLunghi; $("navLunghi").hidden = !conLunghi;
  if (conLunghi) { $("lunghiTitolo").textContent = L.titolo[lingua]; $("lunghiTesto").textContent = L.testo[lingua]; riempi("lunghiPunti", L.punti.map(x => x[lingua])); $("lunghiFoto").hidden = !L.foto; if (L.foto) $("lunghiFoto").src = percorso(L.foto); }
  const sel = $("tipo"), scelto = sel.value || "breve";
  sel.replaceChildren(...[["breve", t.tipoBreve], ["lungo", t.tipoLungo]].map(([v, x]) => { const o = el("option", x); o.value = v; return o; }));
  sel.value = scelto; sel.parentElement.hidden = !conLunghi;
  if (SITO.prezzo && SITO.prezzo[lingua]) d.push(SITO.prezzo[lingua]);
  $("distintivi").replaceChildren(...d.map(x => { const s = el("span", x); s.className = "distintivo"; return s; }));

  $("descrizione").replaceChildren(...SITO.descrizione[lingua].map(p => el("p", p)));
  $("numeri").replaceChildren(...SITO.numeri.map(n => { const b = el("div"); b.append(el("b", n.valore), el("span", n[lingua])); return b; }));
  riempi("servizi-lista", SITO.servizi.map(s => s[lingua]));
  const piuLontano = Math.max(...SITO.distanze.map(x => parseFloat(x.min) || 0)) || 1;
  $("distanze").replaceChildren(...SITO.distanze.map(x => { const li = el("li"); li.append(el("span", x[lingua]), el("b", x.min + " " + t.minuti)); li.style.setProperty("--q", ((parseFloat(x.min) || 0) / piuLontano).toFixed(3)); return li; }));
  riempi("orari", SITO.orari[lingua]);
  riempi("regole", SITO.regole[lingua]);

  $("galleria").replaceChildren(...SITO.foto.map((f, i) => {
    const b = el("button"); b.type = "button"; b.setAttribute("aria-label", f[lingua]);
    const im = el("img"); im.src = percorso(f.file); im.alt = f[lingua]; im.loading = i ? "lazy" : "eager";
    im.onerror = () => { b.style.display = "none"; };
    b.append(im); b.onclick = () => apri(i); return b;
  }));
}

/* parti che non cambiano con la lingua */
$("copFoto").style.backgroundImage = 'url("' + percorso(SITO.foto[0].file) + '")';
$("mappa").src = "https://www.google.com/maps?q=" + encodeURIComponent(SITO.indirizzo) + "&z=16&output=embed";
$("indirizzo").textContent = SITO.indirizzo;
$("pieNome").textContent = SITO.nomeSito;
$("pieIndirizzo").textContent = SITO.indirizzo;
$("cin").textContent = SITO.cin;

$("lunghiCta").onclick = () => { $("tipo").value = "lungo"; };
const suScorri = () => $("barra").classList.toggle("solida", window.scrollY > window.innerHeight * 0.6);
window.addEventListener("scroll", suScorri, { passive: true }); suScorri();

/* galleria a tutto schermo */
let corrente = 0;
function mostra(i) { corrente = (i + SITO.foto.length) % SITO.foto.length; const f = SITO.foto[corrente]; $("lucImg").src = percorso(f.file); $("lucImg").alt = f[lingua]; $("lucTesto").textContent = f[lingua] + " · " + (corrente + 1) + "/" + SITO.foto.length; }
function apri(i) { mostra(i); $("lucernario").classList.add("aperto"); }
function chiudi() { $("lucernario").classList.remove("aperto"); }
const luc = $("lucernario");
luc.querySelector(".chiudi").onclick = chiudi;
luc.querySelector(".prec").onclick = e => { e.stopPropagation(); mostra(corrente - 1); };
luc.querySelector(".succ").onclick = e => { e.stopPropagation(); mostra(corrente + 1); };
luc.onclick = e => { if (e.target === luc) chiudi(); };
document.addEventListener("keydown", e => { if (!luc.classList.contains("aperto")) return;
  if (e.key === "Escape") chiudi(); if (e.key === "ArrowLeft") mostra(corrente - 1); if (e.key === "ArrowRight") mostra(corrente + 1); });

/* modulo di contatto: apre WhatsApp o il programma di posta con il messaggio già scritto */
const modulo = $("modulo"), c = SITO.contatti;
const oggi = new Date().toISOString().slice(0, 10);
modulo.arrivo.min = oggi; modulo.partenza.min = oggi;
modulo.arrivo.onchange = () => { modulo.partenza.min = modulo.arrivo.value || oggi; };
$("btnWa").hidden = !c.whatsapp;
$("btnMail").hidden = !c.email;
$("avviso").hidden = !!(c.whatsapp || c.email);
const data = v => v ? v.split("-").reverse().join("/") : "";
modulo.onsubmit = e => {
  e.preventDefault();
  const t = UI[lingua], f = modulo;
  const testo = t.msgIntro + " " + SITO.indirizzo + ".\n\n" +
    t.mNome + ": " + f.nome.value + "\n" + t.mTipo + ": " + f.tipo.options[f.tipo.selectedIndex].text + "\n" + t.mArrivo + ": " + data(f.arrivo.value) + "\n" +
    t.mPartenza + ": " + data(f.partenza.value) + "\n" + t.mOspiti + ": " + f.ospiti.value +
    (f.messaggio.value ? "\n\n" + f.messaggio.value : "");
  const via = e.submitter && e.submitter.value;
  if (via === "wa") window.open("https://wa.me/" + c.whatsapp + "?text=" + encodeURIComponent(testo), "_blank");
  else window.location.href = "mailto:" + c.email + "?subject=" + encodeURIComponent(t.msgOggetto + " – " + SITO.nomeSito) + "&body=" + encodeURIComponent(testo);
};

/* calendario delle disponibilità: legge disponibilita.json, aggiornato in automatico dal calendario Airbnb */
const ymd = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
let occupato = [], meseIniziale = 0;
const notteOccupata = g => occupato.some(([a, b]) => g >= a && g < b);
function controllaDate() {
  const a = modulo.arrivo.value, p = modulo.partenza.value;
  let conflitto = false;
  if (a && occupato.length) {
    const fine = p && p > a ? p : ymd(new Date(+a.slice(0, 4), +a.slice(5, 7) - 1, +a.slice(8) + 1));
    conflitto = occupato.some(([x, y]) => x < fine && y > a);
  }
  $("avvisoDate").hidden = !conflitto;
}
function disegnaCalendario() {
  const t = UI[lingua], quanti = window.innerWidth >= 700 ? 2 : 1, ora = new Date(), oggiL = ymd(ora);
  const a = modulo.arrivo.value, p = modulo.partenza.value;
  const nomeMese = new Intl.DateTimeFormat(lingua === "it" ? "it-IT" : "en-GB", { month: "long", year: "numeric" });
  $("calMesi").classList.toggle("due", quanti === 2);
  $("calMesi").replaceChildren(...Array.from({ length: quanti }, (_, k) => {
    const primo = new Date(ora.getFullYear(), ora.getMonth() + meseIniziale + k, 1);
    const box = el("div"); box.className = "cal-mese"; box.append(el("b", nomeMese.format(primo)));
    const g = el("div"); g.className = "cal-griglia"; g.append(...t.giorni.map(x => el("span", x)));
    for (let i = 0; i < (primo.getDay() + 6) % 7; i++) g.append(el("i"));
    const ultimo = new Date(primo.getFullYear(), primo.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= ultimo; d++) {
      const gg = ymd(new Date(primo.getFullYear(), primo.getMonth(), d)), b = el("button", d); b.type = "button";
      const pass = gg < oggiL, occ = notteOccupata(gg), puoUscire = occ && a && !p && gg > a && !occupato.some(([x, y]) => x < gg && y > a);
      if (pass) { b.className = "pass"; b.disabled = true; }
      else if (occ) { b.className = "occ" + (puoUscire ? " uscita" : ""); b.title = t.calOccupato; if (!puoUscire) b.disabled = true; }
      if (gg === oggiL) b.classList.add("oggi");
      if (gg === a || gg === p) b.classList.add("sel"); else if (a && p && gg > a && gg < p) b.classList.add("tra");
      if (!b.disabled) b.onclick = () => scegliGiorno(gg);
      g.append(b);
    }
    box.append(g); return box;
  }));
  $("calPrec").disabled = meseIniziale <= 0; $("calSucc").disabled = meseIniziale >= 12 - quanti + 1;
}
function scegliGiorno(gg) {
  const a = modulo.arrivo.value, p = modulo.partenza.value;
  if (!a || p || gg <= a) { modulo.arrivo.value = gg; modulo.partenza.value = ""; modulo.partenza.min = gg; }
  else modulo.partenza.value = gg;
  controllaDate(); disegnaCalendario();
}
$("calPrec").onclick = () => { meseIniziale--; disegnaCalendario(); };
$("calSucc").onclick = () => { meseIniziale++; disegnaCalendario(); };
$("calPrec").setAttribute("aria-label", UI[lingua].calMesePrec); $("calSucc").setAttribute("aria-label", UI[lingua].calMeseSucc);
modulo.arrivo.addEventListener("change", () => { controllaDate(); if (occupato.length) disegnaCalendario(); });
modulo.partenza.addEventListener("change", () => { controllaDate(); if (occupato.length) disegnaCalendario(); });
if (SITO.mostraCalendario !== false) {
  fetch(percorso("disponibilita.json?t=" + Date.now()), { cache: "no-store" }).then(r => r.ok ? r.json() : null).then(j => {
    if (!j || !j.aggiornato || !Array.isArray(j.occupato)) return;
    const eta = (Date.now() - new Date(j.aggiornato + "T12:00:00")) / 864e5;
    if (eta > 7) return;   /* dati vecchi di oltre una settimana: meglio non mostrarli */
    occupato = j.occupato;
    $("calAgg").textContent = "· " + UI[lingua].calAgg + " " + j.aggiornato.split("-").reverse().join("/");
    $("calendario").hidden = false; disegnaCalendario(); controllaDate();
    let largo = window.innerWidth >= 700;
    window.addEventListener("resize", () => { const l = window.innerWidth >= 700; if (l !== largo) { largo = l; meseIniziale = Math.min(meseIniziale, 11); disegnaCalendario(); } });
  }).catch(() => {});
}

disegna();

/* contatore delle visite (GoatCounter): si attiva scrivendo il codice in contenuti.js → contatoreVisite */
if (SITO.contatoreVisite && !navigator.webdriver && !/^(localhost|127\.|$)/.test(location.hostname)) {
  const g = el("script"); g.async = true; g.src = "https://gc.zgo.at/count.js";
  g.dataset.goatcounter = "https://" + SITO.contatoreVisite + ".goatcounter.com/count"; document.body.append(g);
}

/* barra di avanzamento, pulsante fisso su telefono, foto di copertina che si muove con lo scorrimento */
const ANIMA = document.documentElement.classList.contains("anima");
const alloScorrere = () => {
  const y = window.scrollY, vh = window.innerHeight, tot = document.documentElement.scrollHeight - vh;
  $("avanzamento").style.transform = "scaleX(" + (tot > 0 ? Math.min(1, y / tot) : 0) + ")";
  $("ctaFissa").classList.toggle("su", y > vh * 0.7 && $("contatti").getBoundingClientRect().top > vh * 0.8);
  if (ANIMA && y < vh * 1.1) $("copFoto").style.translate = "0 " + (y * 0.22).toFixed(1) + "px";
};
window.addEventListener("scroll", alloScorrere, { passive: true }); alloScorrere();

/* animazioni: attive solo se il visitatore non ha chiesto di ridurre i movimenti (vedi <head>) */
if (ANIMA) {
  /* titolo che sale parola per parola */
  const tit = $("titolo"), parole = tit.textContent.trim().split(/\s+/);
  tit.replaceChildren(...parole.flatMap((p, i) => { const m = el("span"); m.className = "par"; const s = el("span", p); s.style.transitionDelay = (0.25 + i * 0.08) + "s"; m.append(s); return [m, " "]; }));

  /* portone: conta fino a 100 mentre arriva la foto di copertina, poi si apre */
  let n = 0, pronto = false;
  const foto = new Image(); foto.onload = foto.onerror = () => { pronto = true; }; foto.src = percorso(SITO.foto[0].file);
  setTimeout(() => { pronto = true; }, 3000);
  const conta = () => {
    n = Math.min(100, n + (pronto ? 3 : n < 80 ? 1 : 0.08)); $("portonePerc").textContent = Math.floor(n);
    if (n < 100) requestAnimationFrame(conta);
    else { document.documentElement.classList.add("aperto"); setTimeout(() => { const p = $("portone"); if (p) p.remove(); }, 1500); }
  };
  requestAnimationFrame(conta);

  /* nastro con i luoghi raggiungibili a piedi */
  const voci = () => SITO.distanze.map(x => { const s = el("span"); s.append(el("i", x[lingua]), el("b", x.min + " " + UI[lingua].minuti)); return s; });
  const pista = el("div"); pista.className = "pista"; pista.append(...voci(), ...voci(), ...voci(), ...voci());
  $("nastro").append(pista); $("nastro").hidden = false;

  /* comparsa degli elementi quando entrano nello schermo */
  const oss = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visto"); oss.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll("main h2, .galleria button, #lunghiFoto, .distanze").forEach((x, i) => {
    if (x.matches(".galleria button")) x.style.transitionDelay = (i % 4 * 0.09) + "s";
    if (x.matches("h2")) { const r = el("span"); r.className = "riga"; r.append(...x.childNodes); x.append(r); }
    x.classList.add("riv"); oss.observe(x);
  });
}
