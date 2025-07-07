document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('userInput');
  const responseDiv = document.getElementById('response');

  let mistralApiKey = "";

  // 1. Lade den API-Key aus api-key.txt (funktioniert nur über lokalen Server)
  fetch('api-key.txt')
    .then(res => res.text())
    .then(key => {
      mistralApiKey = key.trim();
    })
    .catch(err => {
      console.error("API Key konnte nicht geladen werden", err);
      responseDiv.textContent = "API-Key Fehler ⚠️";
    });

  // 2. Wenn Enter gedrückt → Anfrage an Mistral senden
  input.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
      const prompt = input.value.trim();
      if (!prompt || mistralApiKey === '') return;

      responseDiv.textContent = "Antwort wird geladen... 🔄";

      try {
        const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${mistralApiKey}`
          },
          body: JSON.stringify({
            model: "mistral-tiny",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
          })
        });

        const data = await res.json();
        const answer = data.choices?.[0]?.message?.content || "Keine Antwort erhalten.";
        responseDiv.textContent = answer;
      } catch (err) {
        console.error(err);
        responseDiv.textContent = "Fehler bei der Anfrage ❌";
      }

      input.value = '';
    }
  });
});
