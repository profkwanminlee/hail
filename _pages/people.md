---
layout: default
title: "People"
permalink: /people/
slug: people
hero:
  title: "People"
  subtitle: "HAIL | Meet Our Team"
---

<!-- 1. Lab Director & Leadership Spotlight -->
{% assign director = site.data.members | first %}
{% if director %}
<div class="director-card">
  <img src="{{ director.image | relative_url }}" alt="{{ director.name }}" class="director-card__photo">
  <div class="director-card__content">
    <div class="director-card__badge">Lab Director &amp; Founder</div>
    <h2 class="director-card__name">{{ director.name }}</h2>
    <div class="director-card__title">{{ director.title }}</div>
    <div class="director-card__affiliation">
      Wee Kim Wee School of Communication and Information (WKWSCI) · Asian Communication Research Centre (ACRC), NTU Singapore
    </div>
    {% if director.focus %}
    <div class="director-card__focus">
      <i class="fa-solid fa-compass"></i>
      <span>{{ director.focus }}</span>
    </div>
    {% endif %}
    <div class="director-card__highlights">
      <span><i class="fa-solid fa-award"></i> ICA Fellow</span>
      <span><i class="fa-solid fa-building"></i> Former VP, Samsung Electronics (UX &amp; C-Lab)</span>
      <span><i class="fa-solid fa-sack-dollar"></i> $12M+ Research Grants</span>
      <span><i class="fa-solid fa-certificate"></i> 10 U.S. Patents</span>
    </div>
    <div class="director-card__links">
      {% for link in director.links %}
      <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="person-link-pill">
        <i class="{{ link.icon }}"></i>
        <span>{{ link.title }}</span>
      </a>
      {% endfor %}
    </div>
  </div>
</div>
{% endif %}

<!-- 2. Lab Researchers & Doctoral Candidates -->
<div class="section-title-wrap" style="margin-top: 3.5rem;">
  <h2 class="section-title">Researchers &amp; Doctoral Candidates</h2>
  <div class="section-accent-bar"></div>
</div>

<div class="members-grid">
  {% for member in site.data.members offset:1 %}
  <article class="member-card">
    <img src="{{ member.image | relative_url }}" alt="{{ member.name }}" class="member-card__avatar" loading="lazy">
    <div class="member-card__info">
      <div class="member-card__header">
        <h3 class="member-card__name">{{ member.name }}</h3>
        <span class="member-card__role">{{ member.role_tag | default: member.title }}</span>
      </div>
      <div class="member-card__dept">WKWSCI · NTU Singapore</div>
      {% if member.focus %}
      <div class="member-card__focus">
        <i class="fa-solid fa-compass"></i>
        <span>{{ member.focus }}</span>
      </div>
      {% endif %}
      {% if member.links.size > 0 %}
      <div class="member-card__links">
        {% for link in member.links %}
        <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="member-link-pill" title="{{ link.title }}">
          <i class="{{ link.icon }}"></i>
          <span>{{ link.title }}</span>
        </a>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </article>
  {% endfor %}
</div>

<!-- 3. Lab Alumni -->
<div class="section-title-wrap" style="margin-top: 4rem;">
  <h2 class="section-title">Lab Alumni</h2>
  <div class="section-accent-bar"></div>
</div>
<p class="page-lead" style="margin-bottom: 1.5rem;">Past postdoctoral fellows, research assistants, and student researchers who contributed to HAIL's treatises.</p>

<div class="alumni-grid">
  {% for alum in site.data.alumni %}
  <div class="alumni-card">
    <img src="{{ alum.image | relative_url }}" alt="{{ alum.name }}" class="alumni-card__photo" loading="lazy">
    <div class="alumni-card__info">
      <h4 class="alumni-card__name">{{ alum.name }}</h4>
      <div class="alumni-card__role">{{ alum.role }}</div>
    </div>
  </div>
  {% endfor %}
</div>
