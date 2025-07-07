
```markdown
# 🧠 Mistral Chat UI (Frontend-Only Demo)

Dieses kleine Projekt ermöglicht dir, über eine einfache Weboberfläche Fragen an **Mistral AI** zu stellen und die Antwort direkt im Browser zu erhalten – ohne Verlauf und mit reiner Einzelfrage.

---

## 📂 Projektstruktur

```

/mistral-chat/
├── index.html        # HTML-Struktur
├── style.css         # Visuelles Styling
├── script.js         # JS-Logik: Eingabe, Anfrage & Ausgabe
├── api-key.txt       # Dein privater Mistral API Key
└── README.md         # Projektbeschreibung

````

---

## 🔧 Voraussetzungen

1. **API-Key von Mistral AI**
   - Hol ihn dir über: [https://console.mistral.ai](https://console.mistral.ai)
   - Speichere ihn in die Datei `api-key.txt` (nicht in den Code direkt schreiben!)

   ```txt
   sk-your-mistral-api-key-here
````

2. **Lokalen Webserver starten**

   > Der Browser blockiert lokale Datei-Lesezugriffe (`fetch('api-key.txt')`), daher ist ein Webserver nötig.

   **Python Beispiel:**

   ```bash
   python -m http.server 5500
   ```

   Danach öffnest du im Browser:
   👉 [http://localhost:5500](http://localhost:5500)

---

## ✨ Nutzung

1. Öffne die Seite lokal im Browser (`localhost:5500`)
2. Gib deine Frage im Eingabefeld ein
3. Drücke `Enter` – Mistral AI liefert dir die Antwort

---

## ⚠️ Hinweise

* **Sicherheit**: Im echten Einsatz darf der API-Key **niemals direkt im Frontend** erscheinen.

  * Verwende ein Backend, um den Key zu schützen.
* Dieses Projekt dient zu **Demo- und Entwicklungszwecken**.

---

## 💡 Nächste Schritte (optional)

* Verlauf integrieren
* Multiple Modelle wählbar machen
* Node.js Backend zur Key-Verwaltung
* Deployment (Netlify, Vercel, etc.)

---

Viel Spaß beim Chatten mit Mistral! 🤖💬
Bei Fragen → [openai.com](https://www.openai.com) oder [mistral.ai](https://mistral.ai) anschauen.

```

✅ Du kannst diesen Inhalt einfach als `README.md` speichern!  
Wenn du magst, generiere ich dir auch direkt ein komplettes GitHub-Projekt mit `.gitignore`, `package.json` etc. Sag nur Bescheid 😎📦
```
