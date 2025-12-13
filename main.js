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

  executives: {
    heading: "EXECUTIVE COUNCIL",
    description: `The Executive Council of the Aeronautics Engineering Students' Society (AERSSOC)
    leads the organization in fulfilling the vision, and executing dynamic development
    initiatives. From the President who oversees, implements, and evaluates Student
    Development and Academic Management programs and facilities, and the other officers
    who administer specific units, relationships, and individuals within the Aeronautics
    Engineering student body, the AERSSOC officers work together to create alignment
    among the organization’s mission, vision, and values. The Executive Council also
    adopts specific processes, together with general planning and decision-making
    strategies to ensure the growth, consistency, and long-term success of the
    organization.`,
    members: [
      { name: "Cejay Cena", position: "President", photo: "img/executives/president.png" },
      { name: "Ahron Martinez", position: "Vice President for Internal Affairs", photo: "img/executives/vp-internal.png" },
      { name: "Keith Humprey Uaje", position: "Vice President for External Affairs", photo: "img/executives/vp-external.png" },
      { name: "Lanz Pelaga", position: "Secretary", photo: "img/executives/secretary.png" },
      { name: "Janjohn Ryan Catibog", position: "Treasurer", photo: "img/executives/treasurer.png" },
      { name: "Irish Mercado", position: "Assistant Treasurer", photo: "img/executives/asst-treasurer.png" },
      { name: "Franz Angeline Austria", position: "Auditor", photo: "img/executives/auditor.png" },
      { name: "Avriel Raine Arellano", position: "Business Manager 1", photo: "img/executives/business1.png" },
      { name: "Gian Maverick Estiandan", position: "Business Manager 2", photo: "img/executives/business2.png" },
      { name: "Chezka Mae Nuñez", position: "P.R.O. 1", photo: "img/executives/pro1.png" },
      { name: "Ma. Lia Isobel Aligada", position: "P.R.O. 2", photo: "img/executives/pro2.png" }
    ]
  },

  academic: {
    heading: "ACADEMIC & WELFARE COMMITTEE",
    description: `The Academic and Welfare Committee is in charge of academic and welfare-related
    concerns of the students. They are responsible for organizing events and activities
    that promote academic excellence and student welfare. They also serve as the bridge
    between the students and the faculty in addressing academic-related concerns.`,
    members: [
      { name: "Jay Hannah Dela Cruz", position: "AWC COMMITTEE HEAD", photo: "img/academic/awc-committee-head.png" },
      { name: "Drexian Ramirez", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-1.png" },
      { name: "EJ - John Kyle Garcia", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-2.png" },
      { name: "Rona Astrodomo", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-3.png" },
      { name: "Mystan Dann Fabelloen", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-4.png" },
      { name: "Ranz Ivann Hortaleza", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-5.png" },
      { name: "John Benedict Lumyk", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-6.png" },
      { name: "Kirby Tamesis", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-7.png" },
      { name: "Azalia Lux", position: "AWC COMMITTEE MEMBER", photo: "img/academic/awc-committee-member-8.png" }
    ]
  },

  publicinfo: {
    heading: "PUBLIC INFORMATION COMMITTEE",
    description: `The Public Information Committee is responsible for helping the Public Relations
    Officers on making publicity materials that will be used by the organization in the
    promotion of their activities and shall be responsible for answering queries in the
    official accounts of the organization.`,
    members: [
      { name: "Jhet Ashley Santos", position: "PIC COMMITTEE HEAD", photo: "img/publicinfo/pic-committee-head.png" },
      { name: "Angela Sophia Cabral", position: "PIC COMMITTEE MEMBER", photo: "img/publicinfo/pic-committee-member-1.png" },
      { name: "LN Nicol Castillo", position: "PIC COMMITTEE MEMBER", photo: "img/publicinfo/pic-committee-member-2.png" },
      { name: "Myanne Valene De Asis", position: "PIC COMMITTEE MEMBER", photo: "img/publicinfo/pic-committee-member-3.png" },
      { name: "Marianne Charisse Magnayi", position: "PIC COMMITTEE MEMBER", photo: "img/publicinfo/pic-committee-member-4.png" },
      { name: "Stanley Jacob Pasia", position: "PIC COMMITTEE MEMBER", photo: "img/publicinfo/pic-committee-member-5.png" }
    ]
  },

  finance: {
    heading: "FINANCE COMMITTEE",
    description: `The Finance Committee cooperates with the Treasurer and Auditor to provide the
    organization a strategic and expert oversight of short and long-term financial plans,
    operational issues, financial risks, and budgetary decisions.`,
    members: [
      { name: "Richmond Alexander Resuello", position: "FINANCE COMMITTEE HEAD", photo: "img/finance/finance-committee-head.png" },
      { name: "Mark Andrew Cabile", position: "FINANCE COMMITTEE MEMBER", photo: "img/finance/finance-committee-member-1.png" },
      { name: "Joshua Andrei Doctora", position: "FINANCE COMMITTEE MEMBER", photo: "img/finance/finance-committee-member-2.png" },
      { name: "Louie Alyzza Gerona", position: "FINANCE COMMITTEE MEMBER", photo: "img/finance/finance-committee-member-3.png" },
      { name: "Angel Mae Lobo", position: "FINANCE COMMITTEE MEMBER", photo: "img/finance/finance-committee-member-4.png" },
      { name: "Bianca Eloise Pocamas", position: "FINANCE COMMITTEE MEMBER", photo: "img/finance/finance-committee-member-5.png" }
    ]
  },

  technical: {
    heading: "TECHNICAL COMMITTEE",
    description: `The Technical Committee is in charge of the behind-the-scenes aspects for all of
    the productions such as lights, sounds, and other technical needs. They also help
    with the setup and teardown of the stage and other equipment.`,
    members: [
      { name: "Kyla Chrisly Balsote", position: "TECHNICAL COMMITTEE HEAD", photo: "img/technical/technical-committee-head.png" },
      { name: "Drianne Andrei Alcantara", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-1.png" },
      { name: "Janrick Kayne Caringal", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-2.png" },
      { name: "Gian Jazhiel Crisologo", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-3.png" },
      { name: "Jeremy Emmanuelle Engay", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-4.png" },
      { name: "Joelle Kim Judacna", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-5.png" },
      { name: "Nathaniel Macapagal", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-6.png" },
      { name: "Lamuel Nikko Aguilar Magnayon", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-7.png" },
      { name: "Kim Allyson Soliva", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-8.png" },
      { name: "Charles Roland Tamlang", position: "TECHNICAL COMMITTEE MEMBER", photo: "img/technical/technical-committee-member-9.png" }
    ]
  },

  drrm: {
    heading: "DISASTER AND RISK REDUCTION MANAGEMENT COMMITTEE",
    description: `The Disaster and Risk Reduction Management Committee (DRRMC) is in charge of
    strategizing and coordinating disaster risk reduction management activities, such as
    assessing the organization’s risks, helping to mitigate risks and establish risk
    reduction plans, aiding in the monitoring and evaluation of DRRM activities, and
    assisting in the coordination of DRRM programs and services within the school.`,
    members: [
      { name: "Alyzza Camille Comia", position: "DRRM COMMITTEE HEAD", photo: "img/drrm/drrm-committee-head.png" },
      { name: "Emilio Raphael Azcué", position: "DRRM COMMITTEE MEMBER", photo: "img/drrm/drrm-committee-member-1.png" },
      { name: "Aaron Bacarro", position: "DRRM COMMITTEE MEMBER", photo: "img/drrm/drrm-committee-member-2.png" },
      { name: "Richter Castillo", position: "DRRM COMMITTEE MEMBER", photo: "img/drrm/drrm-committee-member-3.png" },
      { name: "Franco Zacharias De Guzman", position: "DRRM COMMITTEE MEMBER", photo: "img/drrm/drrm-committee-member-4.png" }
    ]
  },

  classreps: {
    heading: "CLASS REPRESENTATIVES",
    description: `Class representatives serve as the voice of the student body in their respective
    classes. They are responsible for communicating student concerns, organizing class
    activities, and fostering a positive learning environment.`,
    members: [
      { name: "Kevin Florence Osis", position: "1101 REPRESENTATIVE", photo: "img/classreps/1101.png" },
      { name: "Jhakelle Ree Avecin", position: "1102 REPRESENTATIVE", photo: "img/classreps/1102.png" },
      { name: "Kisha Pineda", position: "1103 REPRESENTATIVE", photo: "img/classreps/1103.png" },
      { name: "Jarmal Jack Vickman", position: "1104 REPRESENTATIVE", photo: "img/classreps/1104.png" },
      { name: "Zander Vincent Guile", position: "1105 REPRESENTATIVE", photo: "img/classreps/1105.png" },
      { name: "Karylle Enzhayn Umali", position: "2101 REPRESENTATIVE", photo: "img/classreps/2101-1.png" },
      { name: "John Kenneth Samson", position: "2101 REPRESENTATIVE", photo: "img/classreps/2101-2.png" },
      { name: "Yuja Karlo Alabanan", position: "2102 REPRESENTATIVE", photo: "img/classreps/2102-1.png" },
      { name: "Christine Kare Cusa", position: "2102 REPRESENTATIVE", photo: "img/classreps/2102-2.png" },
      { name: "Chad Kenne Marcelo", position: "3103 REPRESENTATIVE", photo: "img/classreps/3103.png" },
      { name: "Jon Denzel Almonte", position: "4101 REPRESENTATIVE", photo: "img/classreps/4101.png" },
      { name: "Gabrielle Siast", position: "4102 REPRESENTATIVE", photo: "img/classreps/4102.png" },
      { name: "Portia Mae Allasas", position: "4103 REPRESENTATIVE", photo: "img/classreps/4103.png" }
    ]
  }

};


// ================================
// CARD GENERATOR
// ================================

function loadCategory(category) {
  const data = categories[category];

  // Update heading + description
  document.querySelector(".exec-heading").textContent = data.heading;
  document.querySelector(".exec-body").textContent = data.description;

  // Load members
  const grid = document.getElementById("execGrid");
  grid.innerHTML = "";

  data.members.forEach(member => {
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
// DEFAULT LOAD
// ================================

loadCategory("executives");

document.querySelectorAll(".sidebar-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".sidebar-item.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    loadCategory(category);
  });
});


