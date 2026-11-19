/**
 * HAIL Website Core Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar scroll elevation
  const navbar = document.getElementById('siteNavbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Menu Drawer Toggle
  const hamburger = document.getElementById('mobileNavToggle');
  const overlay = document.getElementById('mobileNavOverlay');

  if (hamburger && overlay) {
    const toggleMenu = () => {
      const isOpen = hamburger.classList.toggle('is-active');
      overlay.classList.toggle('is-active');
      hamburger.setAttribute('aria-expanded', isOpen);
      overlay.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleMenu);

    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (hamburger.classList.contains('is-active')) {
          toggleMenu();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980 && hamburger.classList.contains('is-active')) {
        toggleMenu();
      }
    }, { passive: true });

    // Mobile submenu accordion toggle
    const toggleSubmenu = function(e) {
      e.preventDefault();
      const trigger = e.currentTarget;
      const parentItem = trigger.closest('.has-mobile-submenu');
      if (!parentItem) return;
      const submenu = parentItem.querySelector('.mobile-submenu');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        parentItem.classList.remove('is-open');
        if (submenu) {
          submenu.setAttribute('aria-hidden', 'true');
        }
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        parentItem.classList.add('is-open');
        if (submenu) {
          submenu.setAttribute('aria-hidden', 'false');
        }
      }
    };

    overlay.querySelectorAll('.mobile-nav-trigger').forEach(function(trigger) {
      trigger.addEventListener('click', toggleSubmenu);
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleSubmenu(e);
        }
      });
    });
  }

  // 3. Jump to Top Floating Button
  const jumpTopBtn = document.getElementById('jumpToTopBtn');
  if (jumpTopBtn) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPos > 320) {
        jumpTopBtn.classList.add('is-visible');
      } else {
        jumpTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    jumpTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
