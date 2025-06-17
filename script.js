// Configurar año actual
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear()
})

// Crear partículas animadas
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    // Posición aleatoria
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 3 + "s"
    particle.style.animationDuration = Math.random() * 3 + 2 + "s"

    particlesContainer.appendChild(particle)
  }
}

// Efectos de hover mejorados para las cards
function enhanceCardEffects() {
  const cards = document.querySelectorAll(".social-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.05)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })

    // Efecto de click
    card.addEventListener("click", function () {
      this.style.transform = "translateY(-5px) scale(0.98)"
      setTimeout(() => {
        this.style.transform = "translateY(-15px) scale(1.05)"
      }, 150)
    })
  })
}

// Efecto parallax suave para las formas flotantes
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const shapes = document.querySelectorAll(".shape")

    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.5
      shape.style.transform = `translateY(${scrolled * speed}px)`
    })
  })
}

// Animación de typing para elementos de texto (opcional)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Detectar cuando los elementos entran en viewport para animaciones adicionales
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observar elementos para animaciones adicionales
  document.querySelectorAll(".social-card").forEach((card) => {
    observer.observe(card)
  })
}

// Función para manejar el smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Función para manejar el redimensionamiento de ventana
function handleResize() {
  window.addEventListener("resize", () => {
    // Recrear partículas si es necesario
    const particles = document.querySelectorAll(".particle")
    if (particles.length === 0) {
      createParticles()
    }
  })
}

// Función para precargar recursos
function preloadResources() {
  // Precargar fuentes de Google Fonts
  const link = document.createElement("link")
  link.rel = "preload"
  link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
  link.as = "style"
  document.head.appendChild(link)
}

// Inicializar todo cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
  // Precargar recursos
  preloadResources()

  // Crear partículas
  createParticles()

  // Mejorar efectos de cards
  enhanceCardEffects()

  // Inicializar parallax
  initParallax()

  // Inicializar animaciones de scroll
  initScrollAnimations()

  // Inicializar smooth scroll
  initSmoothScroll()

  // Manejar redimensionamiento
  handleResize()

  // Agregar clase loaded para animaciones
  setTimeout(() => {
    document.body.classList.add("loaded")
  }, 100)

  console.log("🚀 Página de Thomas Pacheco cargada correctamente!")
})

// Función para manejar errores de carga
window.addEventListener("error", (e) => {
  console.warn("Error cargando recurso:", e.target.src || e.target.href)
})

// Función para optimizar rendimiento
function optimizePerformance() {
  // Reducir animaciones si el usuario prefiere menos movimiento
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.setProperty("--animation-duration", "0.1s")

    // Desactivar partículas para mejor rendimiento
    const particles = document.getElementById("particles")
    if (particles) {
      particles.style.display = "none"
    }
  }
}

// Inicializar optimizaciones
document.addEventListener("DOMContentLoaded", optimizePerformance)
