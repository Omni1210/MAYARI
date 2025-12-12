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
fetch("https://YOUR-RENDER-URL.onrender.com/api/next-launch")
  .then(res => res.json())
  .then(data => {
    console.log("Next Launch:", data);

    // ✅ Extract the object correctly
    const launch = data.nextLaunch;

    // ✅ Update UI (only if these elements exist)
    if (document.getElementById("mission"))
      document.getElementById("mission").textContent = launch.mission_name;

    if (document.getElementById("rocket"))
      document.getElementById("rocket").textContent = launch.rocket_name;

    if (document.getElementById("launch-site"))
      document.getElementById("launch-site").textContent = launch.launch_site;

    // ✅ Set launchDate for countdown
    launchDate = new Date(launch.launch_date);

    // ✅ Show formatted date
    if (document.getElementById("launch-date"))
      document.getElementById("launch-date").textContent =
        launchDate.toLocaleString();

    // ✅ Start countdown immediately
    updateCountdown();
  })
  .catch(err => console.error("API error:", err));

// ✅ Update every second
setInterval(updateCountdown, 1000);
