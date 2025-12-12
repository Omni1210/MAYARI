// ✅ Hardcoded launch date (dynamic countdown still works)
let launchDate = new Date("2025-12-21T15:00:00Z");

function updateCountdown() {
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

// ✅ Update every second
setInterval(updateCountdown, 1000);
updateCountdown();

window.addEventListener("scroll", () => {
  const header = document.querySelector("header.frame");
  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

