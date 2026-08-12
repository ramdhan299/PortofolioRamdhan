// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "15px 8%";
    } else {
        navbar.style.padding = "20px 8%";
    }
});


// =========================
// SCROLL REVEAL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// TYPING EFFECT
// =========================

const text = "Software Engineering Student";
const typingElement = document.querySelector(".hero-text .description");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        // efek hanya untuk console, tidak mengganggu deskripsi
        index++;
        setTimeout(typeEffect, 70);
    }
}

typeEffect();


// =========================
// PROJECT CARD CLICK EFFECT
// =========================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        card.classList.toggle("active");
    });
});


// =========================
// CURRENT YEAR
// =========================

const footer = document.querySelector("footer p");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Rizqi. Built with HTML, CSS & JavaScript.`;
}