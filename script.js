function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "admin" && password === "password123") {
      window.location.href = "hometest.html";
      return false; // Prevent form from submitting normally
    } else {
      errorMessage.innerText = "Invalid username or password";
      return false;
    }
  }
  
  // Updating time dynamically
  function updateTime() {
    var now = new Date();
    var timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById("time").innerText = timeString;
  }
  setInterval(updateTime, 1000);
  
  // Fetching and updating data for static values (Battery, Last Cleaned, Cleaning Interval)
  function fetchData() {
    // Replace with your actual logic if needed
    var data = {
      battery: "85%",
      lastCleaned: "2 days",
      cleaningInterval: "7 days"
    };
  
    document.getElementById("battery").innerText = data.battery;
    document.getElementById("last-cleaned").innerText = data.lastCleaned;
    document.getElementById("cleaning-interval").innerText = data.cleaningInterval;
  }
  setInterval(fetchData, 5000);
  fetchData();
  