---
layout: default
title: "Publications"
permalink: /publications/
custom_js: "/assets/js/publications.js"
hero_title: "Publications"
hero_subtitle: "Journal articles, conference proceedings, book chapters, and theoretical treatises in human-AI interaction and cognitive presence."
hero_image: "/images/hero/publications.jpg"
hero_crop: "center 42%"
description: "Complete archive of refereed journal articles, conference papers, and treatises by researchers at the Human-AI Interaction Lab, NTU Singapore."
---

<div class="pub-controls">
  <div class="pub-tabs" role="tablist" aria-label="Publication View Filter">
    <button id="tabTimeline" class="pub-tab is-active" role="tab" aria-selected="true">
      Timeline View
    </button>
    <button id="tabTheme" class="pub-tab" role="tab" aria-selected="false">
      Theme View
    </button>
  </div>

  <div class="pub-search">
    <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
    <input type="text" id="pubSearchInput" placeholder="Filter by keyword, author, year, or title..." aria-label="Search Publications">
  </div>

  <div class="pub-count-badge" id="pubCountDisplay">
    <span>Showing {{ site.data.publications.size }} publications</span>
  </div>
</div>

<!-- 1. Timeline View (Default) -->
<div id="timelineView" class="pub-view-container">
  {% assign years = site.data.publications | map: "year" | uniq | sort | reverse %}
  {% for year in years %}
  {% assign year_papers = site.data.publications | where: "year", year %}
  <div class="pub-group" data-group-year="{{ year }}">
    <h2 class="pub-group__heading">
      <span>{{ year }}</span>
      <span class="pub-group__count">{{ year_papers.size }}</span>
    </h2>

    <div class="pub-group__items">
      {% for pub in year_papers %}
      <article class="paper-item" data-title="{{ pub.title | escape }}" data-meta="{{ pub.meta | escape }}" data-year="{{ pub.year }}">
        <h3 class="paper-title">{{ pub.title }}</h3>
        <p class="paper-meta">{{ pub.meta }}</p>
        <div class="paper-links">
          {% if pub.abstract and pub.abstract != "" %}
          <button type="button" class="btn-paper js-toggle-abstract" data-target="abstract-time-{{ forloop.parentloop.index }}-{{ forloop.index }}">
            <i class="fa-solid fa-angle-down"></i> Abstract
          </button>
          {% endif %}
          {% if pub.url and pub.url != "" %}
          <a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer" class="btn-paper btn-paper--link">
            View Paper / DOI &rarr;
          </a>
          {% endif %}
        </div>
        {% if pub.abstract and pub.abstract != "" %}
        <div id="abstract-time-{{ forloop.parentloop.index }}-{{ forloop.index }}" class="paper-abstract">
          {{ pub.abstract }}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- 2. Theme View -->
<div id="themeView" class="pub-view-container" style="display: none;">
  {% for theme_item in site.data.publication_themes %}
  {% assign theme = theme_item.name %}
  {% assign theme_papers = "" | split: "" %}
  {% for pub in site.data.publications %}
    {% if pub.themes contains theme %}
      {% assign theme_papers = theme_papers | push: pub %}
    {% endif %}
  {% endfor %}
  {% if theme_papers.size > 0 %}
  <div class="pub-group" data-group-theme="{{ theme }}">
    <h2 class="pub-group__heading">
      <span>{{ theme }}</span>
      <span class="pub-group__count">{{ theme_papers.size }}</span>
    </h2>

    <div class="pub-group__items">
      {% for pub in theme_papers %}
      <article class="paper-item" data-title="{{ pub.title | escape }}" data-meta="{{ pub.meta | escape }}" data-year="{{ pub.year }}">
        <h3 class="paper-title">{{ pub.title }}</h3>
        <p class="paper-meta">{{ pub.meta }}</p>
        <div class="paper-links">
          {% if pub.abstract and pub.abstract != "" %}
          <button type="button" class="btn-paper js-toggle-abstract" data-target="abstract-theme-{{ forloop.parentloop.index }}-{{ forloop.index }}">
            <i class="fa-solid fa-angle-down"></i> Abstract
          </button>
          {% endif %}
          {% if pub.url and pub.url != "" %}
          <a href="{{ pub.url }}" target="_blank" rel="noopener noreferrer" class="btn-paper btn-paper--link">
            View Paper / DOI &rarr;
          </a>
          {% endif %}
        </div>
        {% if pub.abstract and pub.abstract != "" %}
        <div id="abstract-theme-{{ forloop.parentloop.index }}-{{ forloop.index }}" class="paper-abstract">
          {{ pub.abstract }}
        </div>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
  {% endif %}
  {% endfor %}
</div>
