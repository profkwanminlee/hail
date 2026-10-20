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
  }

  // 3. Project Accordion Item Expansion (About Page & Home)
  document.addEventListener('click', (e) => {
    const header = e.target.closest('.project-header');
    if (!header) return;
    if (e.target.closest('a') || e.target.closest('button')) return;

    const item = header.closest('.project-item');
    if (!item) return;

    item.classList.toggle('is-open');
    const icon = header.querySelector('.project-toggle-icon i');
    if (icon) {
      if (item.classList.contains('is-open')) {
        icon.className = 'fa-solid fa-minus';
      } else {
        icon.className = 'fa-solid fa-plus';
      }
    }
  });

  // 4. Abstract Drawer Toggle (Universal delegate for Publications page)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-toggle-abstract');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    // Sibling lookup inside .paper-item
    const paperItem = btn.closest('.paper-item');
    let drawer = null;

    if (paperItem) {
      drawer = paperItem.querySelector('.paper-abstract');
    }

    // Fallback to data-target ID if sibling not found
    if (!drawer) {
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        drawer = document.getElementById(targetId);
      }
    }

    if (drawer) {
      const isVisible = drawer.classList.toggle('is-visible');
      if (isVisible) {
        drawer.style.display = 'block';
        btn.innerHTML = '<i class="fa-solid fa-angle-up"></i> Hide Abstract';
      } else {
        drawer.style.display = 'none';
        btn.innerHTML = '<i class="fa-solid fa-angle-down"></i> Abstract';
      }
    }
  });

  // 5. Copy Email Utility
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = copyBtn.getAttribute('data-email') || 'kwanminlee@ntu.edu.sg';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Email Copied!';
          setTimeout(() => {
            copyBtn.innerHTML = originalText;
          }, 2200);
        }).catch(() => {
          window.location.href = `mailto:${email}`;
        });
      } else {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 6. People Bio Drawer Toggle (Mobile & Desktop)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-toggle-bio');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const card = btn.closest('.member-card') || btn.closest('.member-card__body') || btn.closest('.person-details') || btn.closest('.person-entry');
    if (!card) return;

    const bioWrap = card.querySelector('.js-bio-wrap');
    if (!bioWrap) return;

    const isExpanded = bioWrap.classList.toggle('is-expanded');
    btn.classList.toggle('is-expanded', isExpanded);

    const textSpan = btn.querySelector('.btn-bio-toggle__text') || btn.querySelector('span');
    const icon = btn.querySelector('i');

    if (textSpan) {
      textSpan.textContent = isExpanded ? 'Show Less' : 'Read Bio';
    }
    if (icon) {
      icon.className = isExpanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
    }
  });
});
