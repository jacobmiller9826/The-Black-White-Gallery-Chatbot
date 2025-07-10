document.addEventListener('DOMContentLoaded', () => {
  loadChatHistory();
  document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
});

function handleUserInput() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  saveMessage("user", message);

  const response = getRandomQuote();
  typewriterBotMessage(`"${response.quote}" — ${response.author}\n\n${response.advice}`);

  input.value = "";
}

function appendMessage(sender, text, withCopy = false) {
  const chatLog = document.getElementById("chat-log");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;

  if (sender === "bot" && withCopy) {
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.className = "copy-btn";
    copyBtn.onclick = () => copyToClipboard(text);
    messageDiv.appendChild(copyBtn);
  }

  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function typewriterBotMessage(text) {
  let i = 0;
  let current = "";
  const chatLog = document.getElementById("chat-log");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", "bot");
  chatLog.appendChild(messageDiv);

  const interval = setInterval(() => {
    if (i < text.length) {
      current += text[i];
      messageDiv.textContent = current;
      i++;
      chatLog.scrollTop = chatLog.scrollHeight;
    } else {
      clearInterval(interval);
      // Add copy button
      const copyBtn = document.createElement("button");
      copyBtn.textContent = "Copy";
      copyBtn.className = "copy-btn";
      copyBtn.onclick = () => copyToClipboard(text);
      messageDiv.appendChild(copyBtn);
      saveMessage("bot", text);
    }
  }, 20);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied to clipboard!");
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

(function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') document.body.classList.add('dark');
})();

function saveMessage(sender, text) {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
  history.push({ sender, text });
  localStorage.setItem('chatHistory', JSON.stringify(history));
}

function loadChatHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
  history.forEach(msg => {
    appendMessage(msg.sender, msg.text, msg.sender === "bot");
  });
}
