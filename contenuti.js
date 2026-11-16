/* =====================================================================
   CONTENUTI DEL SITO  —  questo è l'UNICO file da modificare.
   Cambia i testi tra virgolette, salva, e il sito si aggiorna.
   Ogni testo ha la versione italiana (it) e inglese (en).
   ===================================================================== */

const SITO = {

  /* ---------- CONTATTI (da compilare!) ---------- */
  contatti: {
    nome: "Filippo",
    // WhatsApp ed email sono salvati in forma codificata (base64) e ricostruiti solo
    // quando il visitatore preme il pulsante: così non compaiono in chiaro nel sito
    // e i programmi che raccolgono indirizzi per lo spam non li trovano.
    // Per cambiarli chiedimelo, oppure scrivi il nuovo valore codificato dentro atob("...").
    // Lascia "" per nascondere il relativo pulsante.
    get whatsapp() { return atob("MzkzNDc3ODQ3MDU5"); },
    get email() { return atob("ZmlsaXBwb2RlY2FybG9AZ21haWwuY29t"); }
  },


  /* ---------- DATI GENERALI ---------- */
  // Calendario delle disponibilità nella sezione Contatti, aggiornato in automatico
  // dal calendario Airbnb (vedi README). Metti false per nasconderlo.
  mostraCalendario: true,
  // Contatore delle visite (GoatCounter): scrivi tra le virgolette il nome scelto
  // quando ti registri su goatcounter.com (es. "borgotegolaio"). Vuoto = nessun contatore.
  contatoreVisite: "",
  nomeSito: "Borgo Tegolaio 4",
  // Logo accanto al nome e icona della scheda del browser ("" per toglierlo)
  logo: "foto/logo.png",
  indirizzo: "Borgo Tegolaio 4, 50125 Firenze",
  cin: "IT048017C2LM6VFVW9",
  // Valutazione mostrata in alto. Lascia "" per non mostrarla.
  valutazione: { voto: "4,88", recensioni: "75" },
  // Prezzo indicativo, es. "da 120 € a notte". Lascia "" per non mostrarlo.
  prezzo: { it: "", en: "" },

  titolo: {
    it: "Accogliente appartamento a Santo Spirito",
    en: "A cosy apartment in Santo Spirito"
  },
  sottotitolo: {
    it: "Nel cuore dell'Oltrarno, tra Piazza Santo Spirito e Palazzo Pitti",
    en: "In the heart of the Oltrarno, between Piazza Santo Spirito and Palazzo Pitti"
  },

  /* ---------- FOTO ----------
     Le foto stanno nella cartella "foto". Per aggiungerne una: caricala lì
     e copia una riga qui sotto con il nome del file.
     La prima dell'elenco è quella grande di copertina. */
  foto: [
    { file: "foto/01-camera.jpg", it: "La camera da letto", en: "The bedroom" },
    { file: "foto/02-soggiorno.jpg", it: "Il soggiorno con cucina e tavolo da pranzo", en: "The living room with kitchen and dining table" },
    { file: "foto/03-cucina-e-pranzo.jpg", it: "La cucina e la zona pranzo alla finestra", en: "The kitchen and dining area by the window" },
    { file: "foto/04-camera-ampia.jpg", it: "La camera, ampia e luminosa", en: "The spacious, bright bedroom" },
    { file: "foto/05-camera-tv.jpg", it: "La camera con TV e aria condizionata", en: "The bedroom with TV and air conditioning" },
    { file: "foto/06-zona-pranzo.jpg", it: "La zona pranzo", en: "The dining area" },
    { file: "foto/07-postazione-lavoro.jpg", it: "Il tavolo come postazione di lavoro", en: "The table as a workspace" },
    { file: "foto/08-cucina.jpg", it: "La cucina", en: "The kitchen" },
    { file: "foto/09-bagno.jpg", it: "Il bagno", en: "The bathroom" },
    { file: "foto/10-doccia.jpg", it: "La doccia", en: "The shower" },
    { file: "foto/11-biancheria.jpg", it: "Biancheria e set di cortesia", en: "Linen and toiletries" },
    { file: "foto/12-camera-verso-soggiorno.jpg", it: "Dalla camera verso il soggiorno", en: "From the bedroom towards the living room" },
    { file: "foto/13-divano.jpg", it: "Il divano letto", en: "The sofa bed" },
    { file: "foto/14-tavola.jpg", it: "La tavola apparecchiata", en: "The table, set for two" },
    { file: "foto/15-soffitto.jpg", it: "Il soffitto a travi originale", en: "The original beamed ceiling" },
    { file: "foto/16-porta-antica.jpg", it: "L'antica porta restaurata", en: "The restored antique door" },
    { file: "foto/17-ingresso.jpg", it: "L'ingresso", en: "The entrance" },
    { file: "foto/18-silhouette.jpg", it: "Un angolo del soggiorno", en: "A corner of the living room" },
    { file: "foto/19-caffe.jpg", it: "La macchina per il caffè", en: "The coffee machine" },
    { file: "foto/20-piazza-santo-spirito.jpg", it: "Piazza Santo Spirito, a due passi", en: "Piazza Santo Spirito, steps away" }
  ],

  /* ---------- NUMERI IN EVIDENZA ---------- */
  numeri: [
    { valore: "4", it: "ospiti",            en: "guests" },
    { valore: "1", it: "camera da letto",   en: "bedroom" },
    { valore: "2", it: "letti",             en: "beds" },
    { valore: "1", it: "bagno",             en: "bathroom" }
  ],

  /* ---------- DESCRIZIONE (un paragrafo per riga) ---------- */
  descrizione: {
    it: [
      "Un appartamento ristrutturato di recente in Borgo Tegolaio, una strada tranquilla dell'Oltrarno a due passi da Piazza Santo Spirito e da Palazzo Pitti: il quartiere più autentico di Firenze, fatto di botteghe artigiane, trattorie e caffè all'aperto.",
      "La zona giorno ha un divano letto, il tavolo da pranzo e una cucina attrezzata. La camera ha un letto matrimoniale king size a baldacchino, cabina armadio, TV e bagno privato con doccia. Aria condizionata in entrambe le stanze.",
      "L'appartamento è al primo piano, senza ascensore. In casa troverete una guida con i nostri consigli su ristoranti, gelaterie, musei e visite."
    ],
    en: [
      "A recently renovated apartment in Borgo Tegolaio, a quiet street in the Oltrarno just steps from Piazza Santo Spirito and Palazzo Pitti: the most authentic neighbourhood in Florence, full of artisan workshops, trattorias and open-air cafés.",
      "The living area has a sofa bed, a dining table and a fully equipped kitchen. The bedroom has a king-size four-poster bed, a walk-in wardrobe, TV and a private bathroom with shower. Air conditioning in both rooms.",
      "The apartment is on the first floor, with no lift. Inside you will find a guide with our tips on restaurants, gelato shops, museums and tours."
    ]
  },

  /* ---------- SOGGIORNI LUNGHI (1–12 mesi) ----------
     Per nascondere tutta la sezione metti: mostra: false */
  lunghi: {
    mostra: true,
    foto: "foto/07-postazione-lavoro.jpg",   // foto accanto al testo ("" per toglierla)
    titolo: {
      it: "Una casa a Firenze per 1–12 mesi",
      en: "A home in Florence for 1–12 months"
    },
    testo: {
      it: "Per professionisti in trasferta, docenti in visita e aziende che cercano un alloggio per i propri collaboratori: una casa vera, storica ma efficiente, con soffitti a travi e pavimenti in cotto, pronta da abitare.",
      en: "For professionals on assignment, visiting academics and companies looking for staff accommodation: a real home, historic yet efficient, with original beamed ceilings and terracotta floors, ready to live in."
    },
    punti: [
      { it: "Postazione di lavoro luminosa e fibra ultra-veloce",
        en: "Bright workspace and ultra-fast fibre internet" },
      { it: "Canone mensile tutto incluso: utenze e spese comprese, nessuna voltura",
        en: "All-inclusive monthly rate: utilities and building fees included, no paperwork" },
      { it: "Contratti transitori da 1 a 12 mesi",
        en: "Mid-term contracts from 1 to 12 months" },
      { it: "Uso foresteria per aziende, con fattura",
        en: "Corporate housing with invoice available" },
      { it: "Strada silenziosa e letto king size a baldacchino",
        en: "Quiet street and king-size four-poster bed" }
    ]
  },

  /* ---------- SERVIZI ---------- */
  servizi: [
    { it: "Wi-Fi gratuito",                    en: "Free Wi-Fi" },
    { it: "Aria condizionata",                 en: "Air conditioning" },
    { it: "Riscaldamento",                     en: "Heating" },
    { it: "Cucina con piano a induzione e microonde", en: "Kitchen with induction hob and microwave" },
    { it: "Macchina per il caffè e bollitore", en: "Coffee machine and kettle" },
    { it: "Frigorifero (senza freezer)",       en: "Fridge (no freezer)" },
    { it: "Lavatrice",                         en: "Washing machine" },
    { it: "TV",                                en: "TV" },
    { it: "Asciugacapelli",                    en: "Hair dryer" },
    { it: "Ferro e asse da stiro",             en: "Iron and ironing board" },
    { it: "Biancheria e set di cortesia",      en: "Linen and toiletries" },
    { it: "Cuscini e piumoni extra",           en: "Extra pillows and duvets" },
    { it: "Luce e gas inclusi",                en: "Utilities included" }
  ],

  /* ---------- DISTANZE A PIEDI ---------- */
  distanze: [
    { min: "1",  it: "Palazzo Pitti e Giardino di Boboli", en: "Palazzo Pitti and Boboli Gardens" },
    { min: "5",  it: "Ponte Vecchio",                      en: "Ponte Vecchio" },
    { min: "6",  it: "Galleria degli Uffizi",              en: "Uffizi Gallery" },
    { min: "7",  it: "Palazzo Vecchio",                    en: "Palazzo Vecchio" },
    { min: "10", it: "Santa Croce",                        en: "Santa Croce" },
    { min: "12", it: "Duomo",                              en: "Duomo" },
    { min: "15–20", it: "Galleria dell'Accademia",         en: "Accademia Gallery" }
  ],

  /* ---------- INFORMAZIONI UTILI ---------- */
  orari: {
    it: [
      "Check-in: dalle 15:00 alle 19:30",
      "Check-out: entro le 10:00",
      "Arrivo dopo le 19:30 solo su appuntamento (supplemento 20 €)",
      "Arrivo dopo le 22:00: supplemento 40 €"
    ],
    en: [
      "Check-in: 3:00 pm to 7:30 pm",
      "Check-out: by 10:00 am",
      "Arrival after 7:30 pm by appointment only (€20 extra)",
      "Arrival after 10:00 pm: €40 extra"
    ]
  },
  regole: {
    it: [
      "Non si fuma in casa",
      "Non sono ammessi animali",
      "Niente feste o eventi",
      "Massimo 4 ospiti",
      "Alla partenza: chiavi sul tavolo, luci e aria condizionata spente"
    ],
    en: [
      "No smoking indoors",
      "No pets",
      "No parties or events",
      "Maximum 4 guests",
      "On departure: keys on the table, lights and air conditioning off"
    ]
  }
};
