document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Selector de Tema (Oscuro / Claro)
  // =========================================================================
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

  // Cargar preferencia guardada o respetar la del sistema
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
      themeToggle.setAttribute('title', 'Cambiar a modo claro');
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeToggle.setAttribute('title', 'Cambiar a modo oscuro');
    }
  }

  // =========================================================================
  // 2. Efecto de Escritura Dinámica (Typing Effect)
  // =========================================================================
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.txtElement.innerHTML = this.txt;

      let typeSpeed = 90;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 400;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  const txtElement = document.querySelector('.txt-type');
  if (txtElement) {
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
  }

  // =========================================================================
  // 3. Filtros de Proyectos
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Activar botón seleccionado
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === cardCategory) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 4. Copiar Correo al Portapapeles con Feedback
  // =========================================================================
  const copyBtn = document.getElementById('copy-email-btn');
  const emailInput = document.getElementById('email-input');
  const copyIcon = document.getElementById('copy-icon');
  const copyText = document.getElementById('copy-text');

  if (copyBtn && emailInput) {
    copyBtn.addEventListener('click', async () => {
      const email = emailInput.value.trim();
      try {
        await navigator.clipboard.writeText(email);
        
        // Feedback visual
        if (copyIcon) copyIcon.className = 'fa-solid fa-check';
        if (copyText) copyText.textContent = '¡Copiado!';
        copyBtn.style.backgroundColor = 'var(--primary)';
        copyBtn.style.color = '#0b0f19';

        setTimeout(() => {
          if (copyIcon) copyIcon.className = 'fa-regular fa-copy';
          if (copyText) copyText.textContent = 'Copiar Correo';
          copyBtn.style.backgroundColor = '';
          copyBtn.style.color = '';
        }, 2200);
      } catch (err) {
        // Fallback seleccionando el texto
        emailInput.select();
        document.execCommand('copy');
        if (copyText) copyText.textContent = '¡Copiado!';
        setTimeout(() => {
          if (copyText) copyText.textContent = 'Copiar Correo';
        }, 2000);
      }
    });
  }

  // =========================================================================
  // 5. Menú Móvil
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // =========================================================================
  // 6. Efecto Sombra en la Barra de Navegación al Scrollear
  // =========================================================================
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
});

