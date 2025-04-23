// LOGIN VALIDATION
function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "password123") {
      window.location.href = "hometest.html";
      return false;
  } else {
      errorMessage.innerText = "Invalid username or password";
      return false;
  }
}

// LIVE DATA FETCH FROM THINGSPEAK
const channelID = "2898773";
const apiKey = "VYGE0P5GU3QGGBTV";
const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=1`;

async function fetchData() {
  try {
      const response = await fetch(url);
      const data = await response.json();
      const lastEntry = data.feeds[data.feeds.length - 1];

      document.getElementById("temperature").innerText = lastEntry.field2 + " °C";
      document.getElementById("humidity").innerText = lastEntry.field1 + " %";
      document.getElementById("voltage").innerText = lastEntry.field3 + " V";
      document.getElementById("ldrLeft").innerText = lastEntry.field4;
      document.getElementById("ldrRight").innerText = lastEntry.field5;
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}
fetchData();
setInterval(fetchData, 2000);

// CARD EXPAND / COLLAPSE FUNCTIONALITY
function toggleCard(card, btn) {
  const allCards = document.querySelectorAll('.sensor-cards .card');
  const isOpening = !card.classList.contains('open');

  // Reset all
  allCards.forEach(c => {
      c.classList.remove('open', 'shrink');
      c.querySelector('.toggle-arrow').classList.remove('rotate');
  });

  if (isOpening) {
      card.classList.add('open');
      btn.classList.add('rotate');
      allCards.forEach(c => {
          if (c !== card) c.classList.add('shrink');
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-arrow').forEach(btn => {
      btn.addEventListener('click', () => {
          const card = btn.closest('.card');
          toggleCard(card, btn);
      });
  });
});