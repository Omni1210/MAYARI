let launchDate = null; // will be set after API loads

function updateCountdown() {
    if (!launchDate) return; // wait until API provides the date

    const now = new Date();
    const diff = launchDate - now;

    const countdownEl = document.getElementById("launchCountdown");

    if (diff <= 0) {
        countdownEl.textContent = "LAUNCHED";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const h = hours.toString().padStart(2, "0");
    const m = minutes.toString().padStart(2, "0");
    const s = seconds.toString().padStart(2, "0");

    countdownEl.textContent = `T- ${days} DAYS ${h}:${m}:${s}`;
}

// ✅ Fetch launch data from backend
fetch("http://localhost:3000/api/next-launch")
  .then(res => res.json())
  .then(data => {
    console.log("Next Launch:", data);

    // ✅ Update UI
    document.getElementById("mission").textContent = data.mission;
    document.getElementById("rocket").textContent = data.rocket;
    document.getElementById("agency").textContent = data.agency;
    document.getElementById("launch-site").textContent = data.launch_site;

    // ✅ Set launchDate for countdown
    launchDate = new Date(data.launch_date);

    // ✅ Show formatted date
    document.getElementById("launch-date").textContent =
      launchDate.toLocaleString();

    // ✅ Start countdown immediately
    updateCountdown();
  })
  .catch(err => console.error("API error:", err));

// ✅ Update every second
setInterval(updateCountdown, 1000);
