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

function updateTime() {
  var now = new Date();
  var timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  const timeElement = document.getElementById("time");
  if (timeElement) timeElement.innerText = timeString;
}
setInterval(updateTime, 1000);

const channelID = "2898773";
const apiKey = "VYGE0P5GU3QGGBTV";
const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=1`;

async function fetchData() {
  try {
      const response = await fetch(url);
      const data = await response.json();
      const lastEntry = data.feeds[data.feeds.length - 1];

      document.getElementById("temperature").innerText = lastEntry.field1 + " °C";
      document.getElementById("humidity").innerText = lastEntry.field2 + " %";
      document.getElementById("voltage").innerText = lastEntry.field3 + " V";
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}
fetchData();
setInterval(fetchData, 2000);
