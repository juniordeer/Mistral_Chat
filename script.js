document.addEventListener('DOMContentLoaded', () => {
  const keyInput = document.getElementById('apiKeyInput');
  const saveBtn = document.getElementById('saveKeyBtn');
  const input = document.getElementById('userInput');
  const responseDiv = document.getElementById('response');
  const keySection = document.getElementById('key-section');
  const chatSection = document.getElementById('chat-section');

  // 1. Check ob API-Key im localStorage ist
  const savedKey = localStorage.getItem('mistral_api_key');
  if (savedKey) {
    keySection.style.display = 'none';
    chatSection.style.display = 'flex';
  }

  // 2. API-Key speichern
  saveBtn.addEventListener('click', () => {
    const key = keyInput.value.trim();
    if (key) {
      localStorage.setItem('mistral_api_key', key);
      keySection.style.display = 'none';
      chatSection.style.display = 'flex';
    }
  });

  // 3. Anfrage an Mistral senden
  input.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
      const prompt = input.value.trim();
      const apiKey = localStorage.getItem('mistral_api_key');
      if (!prompt || !apiKey) return;

      responseDiv.textContent = "Antwort wird geladen... 🔄";

      try {
        const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
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
