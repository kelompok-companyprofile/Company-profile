// Contoh animasi sederhana saat scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(15, 25, 45, 0.7)";
  } else {
    header.style.background = "transparent";
  }
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Generate Particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration = Math.random() * 20 + 10 + "s";
    particlesContainer.appendChild(particle);
  }
}

createParticles();

// Enhanced Animate cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

let countersAnimated = false;

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const decimals = target % 1 !== 0 ? 1 : 0;
    const increment = target / 150;
    let current = 0;
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        counter.textContent = current.toFixed(decimals);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toFixed(decimals);
        if (decimals === 0) counter.textContent += "+";
      }
    };
    updateCounter();
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      if (entry.target.classList.contains("stat-item") && !countersAnimated) {
        setTimeout(animateCounters, 200);
        countersAnimated = true;
      }
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".feature-card, .workflow-card, .testimonial-card, .stat-item"
  )
  .forEach((card) => {
    observer.observe(card);
  });

// Enhanced Parallax for light effects
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const lights = document.querySelectorAll(".light-effect");
  lights.forEach((light, index) => {
    const speed = 0.3 + index * 0.1;
    light.style.transform = `translateY(${scrolled * speed}px) rotate(45deg)`;
  });
});

// Smooth scroll for internal links if needed
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
