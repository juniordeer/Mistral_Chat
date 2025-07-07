🧠 Mistral Chat UI (Frontend-Only Demo)

Dieses kleine Projekt ermöglicht dir, über eine einfache Weboberfläche Fragen an Mistral AI zu stellen und die Antwort direkt im Browser zu erhalten – ohne Verlauf und mit reiner Einzelfrage.
📂 Projektstruktur

/mistral-chat/
├── index.html        # HTML-Struktur
├── style.css         # Visuelles Styling
├── script.js         # JS-Logik: Eingabe, Anfrage & Ausgabe
├── api-key.txt       # Dein privater Mistral API Key
└── README.md         # Projektbeschreibung

🔧 Voraussetzungen

    API-Key von Mistral AI

        Hol ihn dir über: https://console.mistral.ai

        Speichere ihn in die Datei api-key.txt (nicht in den Code direkt schreiben!)

    Inhalt von api-key.txt:

sk-your-mistral-api-key-here

Lokalen Webserver starten

    Der Browser blockiert lokale Datei-Lesezugriffe (fetch('api-key.txt')), daher ist ein Webserver nötig.

Python (schnell & einfach):

    python -m http.server 5500

    Danach öffne im Browser:
    👉 http://localhost:5500

✨ Nutzung

    Öffne http://localhost:5500 im Browser

    Gib deine Frage im Eingabefeld ein

    Drücke Enter – Mistral AI liefert dir die Antwort direkt im Chatfenster

⚠️ Sicherheitshinweis

    Der API-Key darf nicht im Frontend verwendet werden!

    Für produktive Nutzung solltest du ein Node.js oder Python Backend verwenden, das den Key sicher verwaltet.

    Dieses Projekt dient zu Demo- und Entwicklungszwecken.

💡 Erweiterungsideen

    Chatverlauf anzeigen

    Auswahl zwischen mehreren Mistral-Modellen

    Node.js-Backend zur sicheren Key-Nutzung

    Deployment auf Netlify/Vercel

    Ladeanzeige, Markdown-Rendering, etc.

Viel Spaß beim Coden & Fragenstellen!
Made with ☕ + 🤖 using Mistral AI
