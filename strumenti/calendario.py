"""Legge il calendario Airbnb (link .ics, nel segreto AIRBNB_ICAL_URL) e scrive
disponibilita.json con le sole date occupate: nessun dato degli ospiti finisce nel sito.
Ogni intervallo è [arrivo, partenza): la notte del giorno di partenza è di nuovo libera."""
import datetime as dt, json, os, sys, urllib.request

URL = os.environ.get("AIRBNB_ICAL_URL", "").strip()
FILE = "disponibilita.json"

def leggi_ics(testo):
    righe, eventi, ev = [], [], None
    for r in testo.replace("\r\n", "\n").split("\n"):          # righe "piegate" dello standard iCal
        if r[:1] in (" ", "\t") and righe: righe[-1] += r[1:]
        else: righe.append(r)
    for r in righe:
        if r == "BEGIN:VEVENT": ev = {}
        elif r == "END:VEVENT":
            if ev and "DTSTART" in ev: eventi.append(ev)
            ev = None
        elif ev is not None and ":" in r:
            k, v = r.split(":", 1); k = k.split(";")[0]
            if k in ("DTSTART", "DTEND"): ev[k] = dt.date(int(v[:4]), int(v[4:6]), int(v[6:8]))
    return eventi

def intervalli(eventi, oggi):
    iv = []
    for e in eventi:
        a = e["DTSTART"]; b = e.get("DTEND", a + dt.timedelta(days=1))
        if b <= a: b = a + dt.timedelta(days=1)
        if b > oggi and a < oggi + dt.timedelta(days=550): iv.append([max(a, oggi), b])
    iv.sort(); unito = []
    for a, b in iv:                                            # unisce periodi attaccati o sovrapposti
        if unito and a <= unito[-1][1]: unito[-1][1] = max(unito[-1][1], b)
        else: unito.append([a, b])
    return [[a.isoformat(), b.isoformat()] for a, b in unito]

def main():
    if not URL:
        print("Segreto AIRBNB_ICAL_URL non impostato: nessun aggiornamento."); return
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0 (calendario Borgo Tegolaio 4)"})
    testo = urllib.request.urlopen(req, timeout=60).read().decode("utf-8", "replace")
    if "BEGIN:VCALENDAR" not in testo:
        sys.exit("Il link non ha restituito un calendario: controlla AIRBNB_ICAL_URL.")
    oggi = dt.datetime.now(dt.timezone(dt.timedelta(hours=1))).date()
    occ = intervalli(leggi_ics(testo), oggi)
    with open(FILE, "w", encoding="utf-8") as f:
        f.write('{\n  "aggiornato": "%s",\n  "occupato": [\n' % oggi.isoformat())
        f.write(",\n".join("    " + json.dumps(x) for x in occ))
        f.write("\n  ]\n}\n" if occ else "  ]\n}\n")
    print(f"{len(occ)} periodi occupati salvati in {FILE}")

if __name__ == "__main__":
    main()
