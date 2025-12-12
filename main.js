// ✅ Hardcoded launch date (dynamic countdown still works)
let launchDate = new Date("2025-12-21T15:00:00Z");

function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    const el1 = document.getElementById("launchCountdown");
    const el2 = document.getElementById("launchCountdown2");

    if (diff <= 0) {
        if (el1) el1.textContent = "LAUNCHED";
        if (el2) el2.textContent = "LAUNCHED";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const h = hours.toString().padStart(2, "0");
    const m = minutes.toString().padStart(2, "0");
    const s = seconds.toString().padStart(2, "0");

    const text = `T‑${days} DAYS ${h}:${m}:${s} UNTIL LAUNCH`;

    if (el1) el1.textContent = text;
    if (el2) el2.textContent = text;
}

// ✅ Update every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ✅ Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header.frame");
  if (window.scrollY > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
