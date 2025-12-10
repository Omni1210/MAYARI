window.addEventListener("scroll", function () {
  const header = document.querySelector("header.frame");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// =========================
// REAL COUNTDOWN TIMER
// =========================

// ✅ Set your launch date here
const launchDate = new Date("2025-11-10T00:00:00"); // <-- change this

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    const countdownEl = document.getElementById("launchCountdown");

    // ✅ If countdown is finished
    if (diff <= 0) {
        countdownEl.textContent = "LAUNCHED";
        return;
    }

    // ✅ Time calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // ✅ Format with leading zeros
    const h = hours.toString().padStart(2, "0");
    const m = minutes.toString().padStart(2, "0");
    const s = seconds.toString().padStart(2, "0");

    // ✅ Update UI
    countdownEl.textContent = `T- ${days} DAYS ${h}:${m}:${s}`;
}

// ✅ Update immediately on load
updateCountdown();

// ✅ Update every second
setInterval(updateCountdown, 1000);

