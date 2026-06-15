(function () {
  'use strict';

  if (window.TwojingjoksI18n) {
    window.TwojingjoksI18n.init();
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // Header shadow on scroll
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener(
      'scroll',
      function () {
        if (window.scrollY > 20) {
          header.style.boxShadow = '0 4px 20px rgba(179, 49, 241, 0.1)';
        } else {
          header.style.boxShadow = 'none';
        }
      },
      { passive: true }
    );
  }
})();
