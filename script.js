// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.getElementById("navbar");

  // Mobile menu toggle
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Active navigation link highlighting
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        if (navLink) {
          navLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Typing animation for hero title
  function typeWriter() {
    const text = "Ziad Mohamed Amer";
    const typingElement = document.querySelector(".typing-text");
    let i = 0;

    function type() {
      if (i < text.length) {
        typingElement.textContent = text.substring(0, i + 1);
        i++;
        setTimeout(type, 100);
      }
    }

    // Start typing animation after a delay
    setTimeout(type, 1000);
  }

  typeWriter();

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate skill bars when skills section is visible
        if (entry.target.id === "skills") {
          animateSkillBars();
        }
      }
    });
  }, observerOptions);

  // Observe all sections and animation elements
  const animatedElements = document.querySelectorAll(
    "section, .fade-in, .slide-in-left, .slide-in-right"
  );
  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Skill bars animation
  function animateSkillBars() {
    const skillBars = document.querySelectorAll(".skill-progress");

    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      setTimeout(() => {
        bar.style.width = width + "%";
      }, 200);
    });
  }

  // Matrix rain effect
  function createMatrixRain() {
    const matrixContainer = document.querySelector(".matrix-rain");
    const characters = "01";

    for (let i = 0; i < 50; i++) {
      const span = document.createElement("span");
      span.textContent =
        characters[Math.floor(Math.random() * characters.length)];
      span.style.position = "absolute";
      span.style.left = Math.random() * 100 + "%";
      span.style.animationDelay = Math.random() * 20 + "s";
      span.style.fontSize = Math.random() * 10 + 10 + "px";
      span.style.color = "rgba(0, 255, 136, 0.1)";
      span.style.animation = "matrix-fall 20s linear infinite";
      matrixContainer.appendChild(span);
    }
  }

  createMatrixRain();

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".hero-background");

    parallaxElements.forEach((element) => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Dynamic grid animation
  function animateGrid() {
    const gridItems = document.querySelectorAll(".grid-item");

    setInterval(() => {
      gridItems.forEach((item) => {
        if (Math.random() > 0.7) {
          item.classList.toggle("active");
        }
      });
    }, 2000);
  }

  animateGrid();

  // Dashboard chart animation
  function animateDashboardChart() {
    const chartLine = document.querySelector(".chart-line");
    if (chartLine) {
      setInterval(() => {
        const randomHeight = Math.random() * 40 + 40;
        chartLine.style.height = randomHeight + "%";
      }, 3000);
    }
  }

  animateDashboardChart();

  // Hover effects for cards
  const cards = document.querySelectorAll(
    ".tool-card, .cert-card, .platform-card, .education-card, .experience-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Glitch effect for hero title on hover
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    heroTitle.addEventListener("mouseenter", function () {
      this.style.animation = "glitch 0.3s ease-in-out";
    });

    heroTitle.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  }

  // Add glitch keyframes dynamically
  const style = document.createElement("style");
  style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
  document.head.appendChild(style);

  // Particle system for background
  function createParticles() {
    const particleContainer = document.createElement("div");
    particleContainer.style.position = "fixed";
    particleContainer.style.top = "0";
    particleContainer.style.left = "0";
    particleContainer.style.width = "100%";
    particleContainer.style.height = "100%";
    particleContainer.style.pointerEvents = "none";
    particleContainer.style.zIndex = "1";
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "2px";
      particle.style.height = "2px";
      particle.style.background = "rgba(0, 255, 136, 0.3)";
      particle.style.borderRadius = "50%";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animation = `float ${
        Math.random() * 10 + 10
      }s ease-in-out infinite`;
      particleContainer.appendChild(particle);
    }
  }

  // Add float animation
  const floatStyle = document.createElement("style");
  floatStyle.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-10px); }
            75% { transform: translateY(-30px) translateX(5px); }
        }
    `;
  document.head.appendChild(floatStyle);

  createParticles();

  // Loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  // Scroll to top functionality
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
  scrollToTopBtn.className = "scroll-to-top";
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--gradient-primary);
        border: none;
        border-radius: 50%;
        color: var(--bg-primary);
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 255, 136, 0.3);
    `;

  document.body.appendChild(scrollToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Add hover effect to scroll to top button
  scrollToTopBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.1)";
  });

  scrollToTopBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function () {
  // Scroll-based animations can be added here
}, 10);

window.addEventListener("scroll", debouncedScrollHandler);
