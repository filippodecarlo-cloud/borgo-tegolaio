# Sito dell'appartamento — Borgo Tegolaio 4, Firenze

Sito statico bilingue per GitHub Pages. Non richiede installazioni né programmi.

- Inglese (pagina principale): `https://filippodecarlo-cloud.github.io/borgo-tegolaio/`
- Italiano: `https://filippodecarlo-cloud.github.io/borgo-tegolaio/it/`

## File

- `contenuti.js` — **tutti i testi, le foto, i contatti, in italiano e in inglese**. È il file da modificare.
- `index.html` — pagina inglese. `it/index.html` — pagina italiana.
- `stile.css`, `app.js` — grafica e funzionamento. Di norma non vanno toccati.
- `foto/` — le foto e il logo.
- `sitemap.xml` — elenco delle pagine per Google.

## Pubblicare su GitHub Pages

1. Su github.com crea un repository pubblico chiamato **`borgo-tegolaio`**
   (il nome conta: gli indirizzi dentro le pagine e la sitemap lo usano).
2. *Add file → Upload files*: trascina tutto il contenuto dello zip, comprese le cartelle `foto` e `it`.
3. *Settings → Pages → Branch: main, cartella / (root) → Save*.
4. Dopo un paio di minuti il sito è online.

## Cose da fare subito

1. **Contatti**: in `contenuti.js`, sezione `contatti`, inserisci il numero WhatsApp
   (formato `393331234567`) e/o l'email. Finché sono vuoti i pulsanti di invio restano nascosti.
2. **Google**: registra il sito su Google Search Console (search.google.com/search-console),
   verifica la proprietà e invia la sitemap: `https://filippodecarlo-cloud.github.io/borgo-tegolaio/sitemap.xml`.

## Modifiche frequenti

Tutto da github.com: apri `contenuti.js`, clicca la matita, modifica, *Commit changes*.

- **Cambiare un testo**: modifica la frase tra virgolette (versione `it` e `en`).
- **Aggiungere una foto**: caricala in `foto` e copia una riga `{ file: "foto/nome.jpg", it: "...", en: "..." },` nell'elenco `foto`.
- **Aggiungere un servizio o una regola**: copia una riga nell'elenco corrispondente.
- **Nascondere la sezione soggiorni lunghi**: in `lunghi` metti `mostra: false`.
- **Mostrare un prezzo**: compila `prezzo`, es. `it: "da 120 € a notte"`.

Attenzione a non cancellare virgolette e virgole: se la pagina appare vuota, quasi sempre manca una di queste.

## Nota per i motori di ricerca

Le due pagine HTML contengono già una copia dei testi, così i motori di ricerca li leggono subito.
I visitatori vedono sempre la versione aggiornata di `contenuti.js`. Dopo modifiche importanti ai testi
conviene far rigenerare le due pagine, e aggiornare titolo e descrizione per Google
(righe `<title>` e `<meta name="description">` in cima a `index.html` e `it/index.html`).

## Dominio personalizzato (facoltativo)

In *Settings → Pages → Custom domain* puoi collegare un dominio tuo. In quel caso vanno aggiornati
gli indirizzi nelle due pagine e in `sitemap.xml`.

## Calendario delle disponibilità (sincronizzato con Airbnb)

Nella sezione Contatti c'è un calendario con i giorni liberi e occupati. Si aggiorna da solo
ogni 3 ore leggendo il calendario Airbnb: un'automazione di GitHub (`.github/workflows/calendario.yml` + `strumenti/calendario.py`)
scarica il calendario e salva in `disponibilita.json` **solo le date occupate**, senza dati degli ospiti.

**Da fare una volta sola**
1. Su Airbnb (account che gestisce l'annuncio): Calendario → Disponibilità → Collega calendari →
   **Esporta calendario** → copia il link (finisce con `.ics`).
2. Su GitHub, nella repo: **Settings → Secrets and variables → Actions → New repository secret**.
   Name: `AIRBNB_ICAL_URL` · Secret: incolla il link → **Add secret**.
3. Scheda **Actions** → "Aggiorna calendario" → **Run workflow** per il primo aggiornamento.

Note
- Il link Airbnb è come una password: non va mai scritto nei file del sito, solo nel segreto.
- Se il calendario non viene aggiornato per più di 7 giorni (es. link cambiato) il sito lo nasconde
  da solo, per non mostrare date sbagliate. GitHub ti avvisa via email se l'aggiornamento fallisce.
- Per nascondere il calendario: in `contenuti.js` metti `mostraCalendario: false`.
- Le prenotazioni dirette vanno bloccate a mano anche su Airbnb (d'accordo con la host).
