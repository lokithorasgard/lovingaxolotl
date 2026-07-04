console.log("Loving Axolotl está funcionando 🫧");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* Efecto de burbujas al abrir y cambiar de página */
function createBubbleTransition(type = "enter") {
  const existingTransition = document.querySelector(".bubble-transition");

  if (existingTransition) {
    existingTransition.remove();
  }

  const transition = document.createElement("div");
  transition.className = `bubble-transition ${type}`;

  const bubbleCount = type === "enter" ? 48 : 34;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("span");

    let size;
    const bubbleType = Math.random();

    if (bubbleType < 0.50) {
      // Burbujas pequeñas
      size = Math.floor(Math.random() * 28) + 14;
    } else if (bubbleType < 0.85) {
      // Burbujas medianas
      size = Math.floor(Math.random() * 50) + 52;
    } else {
      // Burbujas grandes
      size = Math.floor(Math.random() * 90) + 120;
    }

    const left = Math.floor(Math.random() * 96) + 2;

    /*
      Truco para que no salgan todas juntas:
      - cada burbuja tiene un retraso diferente
      - algunas empiezan más abajo que otras
      - algunas tardan más en subir
    */
    const delay = type === "enter"
      ? Math.random() * 2.8
      : Math.random() * 1.4;

    const duration = Math.random() * 3.2 + 5.2;
    const startOffset = Math.floor(Math.random() * 260) + 80;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `-${startOffset}px`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.animationDuration = `${duration}s`;

    transition.appendChild(bubble);
  }

  document.body.appendChild(transition);

  setTimeout(() => {
    transition.classList.add("fade-out");
  }, type === "enter" ? 4200 : 2200);

  setTimeout(() => {
    transition.remove();
  }, type === "enter" ? 6200 : 4200);
}

window.addEventListener("load", () => {
  createBubbleTransition("enter");
});

const pageLinks = document.querySelectorAll(
  'a[href$=".html"], a[href="./"], a[href="/"]'
);

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      link.target === "_blank"
    ) {
      return;
    }

    event.preventDefault();

    createBubbleTransition("leave");

    setTimeout(() => {
      window.location.href = href;
    }, 1600);
  });
});