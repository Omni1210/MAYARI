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

// ================================
// CATEGORY DATA
// ================================

const categories = {

  executives: [
    // your executives data here
  ],

  academic: [
    {
      name: "Jay Hannah Dela Cruz",
      position: "AWC COMMITTEE HEAD",
      photo: "img/academic/awc-committee-head.png"
    },
    {
      name: "Drexian Ramirez",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-1.png"
    },
    {
      name: "EJ - John Kyle Garcia",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-2.png"
    },
    {
      name: "Rona Astrodomo",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-3.png"
    },
    {
      name: "Mystan Dann Fabelloen",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-4.png"
    },
    {
      name: "Ranz Ivann Hortaleza",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-5.png"
    },
    {
      name: "John Benedict Lumyk",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-6.png"
    },
    {
      name: "Kirby Tamesis",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-7.png"
    },
    {
      name: "Azalia Lux",
      position: "AWC COMMITTEE MEMBER",
      photo: "img/academic/awc-committee-member-8.png"
    }
  ],

  publicinfo: [
    {
      name: "Jhet Ashley Santos",
      position: "PIC COMMITTEE HEAD",
      photo: "img/publicinfo/pic-committee-head.png"
    },
    {
      name: "Angela Sophia Cabral",
      position: "PIC COMMITTEE MEMBER",
      photo: "img/publicinfo/pic-committee-member-1.png"
    },
    {
      name: "LN Nicol Castillo",
      position: "PIC COMMITTEE MEMBER",
      photo: "img/publicinfo/pic-committee-member-2.png"
    },
    {
      name: "Myanne Valene De Asis",
      position: "PIC COMMITTEE MEMBER",
      photo: "img/publicinfo/pic-committee-member-3.png"
    },
    {
      name: "Marianne Charisse Magnayi",
      position: "PIC COMMITTEE MEMBER",
      photo: "img/publicinfo/pic-committee-member-4.png"
    },
    {
      name: "Stanley Jacob Pasia",
      position: "PIC COMMITTEE MEMBER",
      photo: "img/publicinfo/pic-committee-member-5.png"
    }
  ],

  finance: [
    {
      name: "Richmond Alexander Resuello",
      position: "FINANCE COMMITTEE HEAD",
      photo: "img/finance/finance-committee-head.png"
    },
    {
      name: "Mark Andrew Cabile",
      position: "FINANCE COMMITTEE MEMBER",
      photo: "img/finance/finance-committee-member-1.png"
    },
    {
      name: "Joshua Andrei Doctora",
      position: "FINANCE COMMITTEE MEMBER",
      photo: "img/finance/finance-committee-member-2.png"
    },
    {
      name: "Louie Alyzza Gerona",
      position: "FINANCE COMMITTEE MEMBER",
      photo: "img/finance/finance-committee-member-3.png"
    },
    {
      name: "Angel Mae Lobo",
      position: "FINANCE COMMITTEE MEMBER",
      photo: "img/finance/finance-committee-member-4.png"
    },
    {
      name: "Bianca Eloise Pocamas",
      position: "FINANCE COMMITTEE MEMBER",
      photo: "img/finance/finance-committee-member-5.png"
    }
  ],

  technical: [
    {
      name: "Kyla Chrisly Balsote",
      position: "TECHNICAL COMMITTEE HEAD",
      photo: "img/technical/technical-committee-head.png"
    },
    {
      name: "Drianne Andrei Alcantara",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-1.png"
    },
    {
      name: "Janrick Kayne Caringal",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-2.png"
    },
    {
      name: "Gian Jazhiel Crisologo",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-3.png"
    },
    {
      name: "Jeremy Emmanuelle Engay",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-4.png"
    },
    {
      name: "Joelle Kim Judacna",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-5.png"
    },
    {
      name: "Nathaniel Macapagal",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-6.png"
    },
    {
      name: "Lamuel Nikko Aguilar Magnayon",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-7.png"
    },
    {
      name: "Kim Allyson Soliva",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-8.png"
    },
    {
      name: "Charles Roland Tamlang",
      position: "TECHNICAL COMMITTEE MEMBER",
      photo: "img/technical/technical-committee-member-9.png"
    }
  ],

  drrm: [
    {
      name: "Alyzza Camille Comia",
      position: "DRRM COMMITTEE HEAD",
      photo: "img/drrm/drrm-committee-head.png"
    },
    {
      name: "Emilio Raphael Azcué",
      position: "DRRM COMMITTEE MEMBER",
      photo: "img/drrm/drrm-committee-member-1.png"
    },
    {
      name: "Aaron Bacarro",
      position: "DRRM COMMITTEE MEMBER",
      photo: "img/drrm/drrm-committee-member-2.png"
    },
    {
      name: "Richter Castillo",
      position: "DRRM COMMITTEE MEMBER",
      photo: "img/drrm/drrm-committee-member-3.png"
    },
    {
      name: "Franco Zacharias De Guzman",
      position: "DRRM COMMITTEE MEMBER",
      photo: "img/drrm/drrm-committee-member-4.png"
    }
  ],

  classreps: [
    {
      name: "Kevin Florence Osis",
      position: "1101 REPRESENTATIVE",
      photo: "img/classreps/1101.png"
    },
    {
      name: "Jhakelle Ree Avecin",
      position: "1102 REPRESENTATIVE",
      photo: "img/classreps/1102.png"
    },
    {
      name: "Kisha Pineda",
      position: "1103 REPRESENTATIVE",
      photo: "img/classreps/1103.png"
    },
    {
      name: "Jarmal Jack Vickman",
      position: "1104 REPRESENTATIVE",
      photo: "img/classreps/1104.png"
    },
    {
      name: "Zander Vincent Guile",
      position: "1105 REPRESENTATIVE",
      photo: "img/classreps/1105.png"
    },
    {
      name: "Karylle Enzhayn Umali",
      position: "2101 REPRESENTATIVE",
      photo: "img/classreps/2101-1.png"
    },
    {
      name: "John Kenneth Samson",
      position: "2101 REPRESENTATIVE",
      photo: "img/classreps/2101-2.png"
    },
    {
      name: "Yuja Karlo Alabanan",
      position: "2102 REPRESENTATIVE",
      photo: "img/classreps/2102-1.png"
    },
    {
      name: "Christine Kare Cusa",
      position: "2102 REPRESENTATIVE",
      photo: "img/classreps/2102-2.png"
    },
    {
      name: "Chad Kenne Marcelo",
      position: "3103 REPRESENTATIVE",
      photo: "img/classreps/3103.png"
    },
    {
      name: "Jon Denzel Almonte",
      position: "4101 REPRESENTATIVE",
      photo: "img/classreps/4101.png"
    },
    {
      name: "Gabrielle Siast",
      position: "4102 REPRESENTATIVE",
      photo: "img/classreps/4102.png"
    },
    {
      name: "Portia Mae Allasas",
      position: "4103 REPRESENTATIVE",
      photo: "img/classreps/4103.png"
    }
  ]

};

// ================================
// CARD GENERATOR
// ================================

function loadCategory(category) {
  const data = categories[category];
  const grid = document.getElementById("execGrid");

  grid.innerHTML = "";

  data.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("exec-card");

    card.innerHTML = `
      <img src="${member.photo}" alt="${member.name}" class="exec-photo">
      <div class="exec-position">${member.position}</div>
      <div class="exec-name">${member.name}</div>
    `;

    grid.appendChild(card);

    requestAnimationFrame(() => {
      card.classList.add("loaded");
    });
  });
}

// ================================
// SIDEBAR BUTTONS
// ================================

document.querySelectorAll(".sidebar-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".sidebar-item.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    loadCategory(category);
  });
});

// ================================
// DEFAULT LOAD
// ================================

loadCategory("executives");

