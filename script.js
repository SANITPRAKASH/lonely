// Messages
const messages = {
  lonely: "You're not alone, even when it feels like it. I'm proud of you 💜",
  meh: "It’s okay to feel meh sometimes. You’re doing better than you think ✨",
  happy: "Yay! Keep that glow, keep being the sunshine ☀️"
};

// Set Mood & Save
function setMood(mood) {
  document.getElementById("affirmation").innerText = messages[mood] || "";
  localStorage.setItem("lastMood", mood);
}

// Save Journal
function saveVent() {
  const text = document.getElementById("ventArea").value;
  localStorage.setItem("journalText", text);
  alert("Saved! 💾 You got this!");
}

// Clear Journal
function clearVent() {
  document.getElementById("ventArea").value = "";
  localStorage.removeItem("journalText");
  localStorage.removeItem("lastMood");
  document.getElementById("affirmation").innerText = "";
  alert("Cleared! 🧼 Breathe in, breathe out.");
}

// Load on Page Open
window.onload = () => {
  const savedMood = localStorage.getItem("lastMood");
  const savedText = localStorage.getItem("journalText");

  if (savedMood) {
    document.getElementById("affirmation").innerText = messages[savedMood];
  }

  if (savedText) {
    document.getElementById("ventArea").value = savedText;
  }
};