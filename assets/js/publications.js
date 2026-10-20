/**
 * HAIL Publications Interactive Module: Timeline vs Theme view + Live Search + Abstract toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  const timelineBtn = document.getElementById('tabTimeline');
  const themeBtn = document.getElementById('tabTheme');
  const timelineView = document.getElementById('timelineView');
  const themeView = document.getElementById('themeView');
  const searchInput = document.getElementById('pubSearchInput');
  const countDisplay = document.getElementById('pubCountDisplay');

  // 1. Tab Switching
  if (timelineBtn && themeBtn && timelineView && themeView) {
    const activateTimeline = () => {
      timelineBtn.classList.add('is-active');
      themeBtn.classList.remove('is-active');
      timelineView.style.display = 'block';
      themeView.style.display = 'none';
      if (searchInput) runFilter();
    };

    const activateTheme = () => {
      themeBtn.classList.add('is-active');
      timelineBtn.classList.remove('is-active');
      timelineView.style.display = 'none';
      themeView.style.display = 'block';
      if (searchInput) runFilter();
    };

    timelineBtn.addEventListener('click', activateTimeline);
    themeBtn.addEventListener('click', activateTheme);

    // Hash routing support (/publications/#themes vs /publications/#timeline)
    if (window.location.hash === '#themes' || window.location.hash === '#theme') {
      activateTheme();
    } else {
      activateTimeline();
    }

    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#themes' || window.location.hash === '#theme') {
        activateTheme();
      } else if (window.location.hash === '#timeline') {
        activateTimeline();
      }
    });
  }

  // 2. Abstract Drawer Toggle
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.js-toggle-abstract');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const paperItem = btn.closest('.paper-item');
    let drawer = null;
    if (paperItem) {
      drawer = paperItem.querySelector('.paper-abstract');
    }
    if (!drawer) {
      const targetId = btn.getAttribute('data-target');
      if (targetId) drawer = document.getElementById(targetId);
    }

    if (drawer) {
      const isVisible = drawer.classList.toggle('is-visible');
      drawer.style.display = isVisible ? 'block' : 'none';
      btn.innerHTML = isVisible
        ? '<i class="fa-solid fa-angle-up"></i> Hide Abstract'
        : '<i class="fa-solid fa-angle-down"></i> Abstract';
    }
  });

  // 3. Live Search & Keyword Filtering
  function runFilter() {
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase().trim();
    const activeView = (timelineView && timelineView.style.display !== 'none') ? timelineView : themeView;
    if (!activeView) return;

    let totalVisible = 0;
    const groups = activeView.querySelectorAll('.pub-group');

    groups.forEach(group => {
      let groupVisible = 0;
      const items = group.querySelectorAll('.paper-item');

      items.forEach(item => {
        const title = (item.getAttribute('data-title') || '').toLowerCase();
        const meta = (item.getAttribute('data-meta') || '').toLowerCase();
        const year = (item.getAttribute('data-year') || '').toLowerCase();
        const text = item.textContent.toLowerCase();

        const match = !query || title.includes(query) || meta.includes(query) || year.includes(query) || text.includes(query);

        if (match) {
          item.style.display = '';
          groupVisible++;
          totalVisible++;
        } else {
          item.style.display = 'none';
        }
      });

      // Show/hide group heading
      group.style.display = groupVisible > 0 ? '' : 'none';
      const countBadge = group.querySelector('.pub-group__count');
      if (countBadge) {
        countBadge.textContent = groupVisible;
      }
    });

    if (countDisplay) {
      const countSpan = countDisplay.querySelector('span');
      const text = `Showing ${totalVisible} publication${totalVisible === 1 ? '' : 's'}`;
      if (countSpan) {
        countSpan.textContent = text;
      } else {
        countDisplay.textContent = text;
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', runFilter);
  }
});
