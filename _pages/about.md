---
layout: default
title: "About Us"
permalink: /about/
slug: about
hero:
  title: "About Us"
  subtitle: "HAIL | Research Mission, Thrusts & Projects"
---

<!-- Lab Mission & Theoretical Framework Narrative -->
<section class="about-intro-section" style="margin-bottom: 3.5rem;">
  <div class="section-title-wrap">
    <h2 class="section-title">Our Mission &amp; Approach</h2>
    <div class="section-accent-bar"></div>
  </div>
  <p class="page-lead" style="margin-bottom: 1.5rem;">
    The <strong>Human-AI Interaction Lab (HAIL)</strong> is directed by <a href="https://profkwanminlee.github.io/" target="_blank" rel="noopener noreferrer" class="external-text-link">Kwan M. Lee, Ph.D.</a>, Korea Foundation Endowed Chair Professor at Nanyang Technological University's Wee Kim Wee School of Communication and Information (WKWSCI) and the Asian Communication Research Centre (ACRC).
  </p>
  <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-body); margin-bottom: 1.25rem;">
    HAIL bridges rigorous experimental communication science with human-centered interaction design. Our laboratory investigates how humans form mental models of generative agents, calibrate interpersonal trust with algorithmic decision systems, and experience psychological presence in synthetic environments.
  </p>
  <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-body);">
    By combining laboratory experiments, behavioral tracking, and collaborative technology prototyping, HAIL produces foundational empirical treatises and actionable guidelines for industry leaders and public policymakers worldwide.
  </p>
</section>

<!-- Core Research Thrusts Grid -->
<div class="section-title-wrap" style="margin-top: 3.5rem;">
  <h2 class="section-title">Core Research Thrusts</h2>
  <div class="section-accent-bar"></div>
</div>

<div class="pillars-grid">
  {% for area in site.data.research_areas %}
  <div class="pillar-card">
    <div class="pillar-card__icon">
      <i class="{{ area.icon }}"></i>
    </div>
    <h3 class="pillar-card__title">{{ area.title }}</h3>
    <p class="pillar-card__desc">{{ area.summary }} {{ area.details }}</p>
  </div>
  {% endfor %}
</div>

<!-- Active Research Projects Accordion -->
<div class="section-title-wrap" style="margin-top: 4.5rem;">
  <h2 class="section-title">Active Research Projects</h2>
  <div class="section-accent-bar"></div>
</div>
<p class="page-lead">
  Click on any research project below to inspect the empirical methodology, abstract, and contributing researchers.
</p>

<div class="projects-list">
  {% for project in site.data.projects %}
  <div class="project-item">
    <div class="project-header">
      <div class="project-header__left">
        <span class="project-num">{{ project.id }}</span>
        <h3 class="project-title">{{ project.title }}</h3>
      </div>
      <div class="project-toggle-icon">
        <i class="fa-solid fa-plus"></i>
      </div>
    </div>
    <div class="project-body">
      <p class="project-desc">{{ project.description }}</p>
      {% if project.members != "" %}
      <div class="project-members-pointer">
        <i class="fa-solid fa-user-group"></i>
        <span>{{ project.members }}</span>
      </div>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>

<!-- Opportunities & Joining HAIL -->
<div class="section-title-wrap" style="margin-top: 4.5rem;">
  <h2 class="section-title">Opportunities &amp; Joining HAIL</h2>
  <div class="section-accent-bar"></div>
</div>
<p class="page-lead">
  HAIL regularly recruits motivated Ph.D. candidates, postdoctoral scholars, and research assistants with backgrounds in Communication, Cognitive Psychology, Computer Science, or HCI.
</p>

<div class="distinctions-grid">
  <div class="distinction-card">
    <div class="distinction-card__header">
      <i class="fa-solid fa-graduation-cap"></i>
      <span>Mentorship</span>
    </div>
    <p class="distinction-card__text">
      Work directly under Professor Kwan M. Lee on high-impact publications targeting premier venues (ACM CHI, CSCW, ICA).
    </p>
  </div>

  <div class="distinction-card">
    <div class="distinction-card__header">
      <i class="fa-solid fa-microscope"></i>
      <span>Empirical Facilities</span>
    </div>
    <p class="distinction-card__text">
      Access specialized experimental laboratories at WKWSCI equipped for behavioral tracking, physiological sensing, and XR experiments.
    </p>
  </div>

  <div class="distinction-card">
    <div class="distinction-card__header">
      <i class="fa-solid fa-coins"></i>
      <span>Funded Positions</span>
    </div>
    <p class="distinction-card__text">
      Supported by competitive Singapore federal (NRF, MOE) and industry research grants with full tuition and competitive stipends.
    </p>
  </div>
</div>

<!-- Lab Contact & Location -->
<div id="contact" class="contact-card" style="margin-top: 4rem;">
  <h2 class="contact-card__title">Laboratory Contact &amp; Location</h2>
  <div class="contact-card__grid">
    <div>
      <h4><i class="fa-solid fa-location-dot"></i> Physical Location</h4>
      <p>
        4F, Communication &amp; Informatics Laboratory Asia<br>
        Wee Kim Wee School of Communication and Information (WKWSCI)<br>
        Nanyang Technological University (NTU Singapore)<br>
        31 Nanyang Link, Singapore 637718
      </p>
    </div>
    <div>
      <h4><i class="fa-solid fa-envelope"></i> Inquiries</h4>
      <p>
        <strong>Lab Director:</strong> <a href="mailto:{{ site.lab.email }}" class="contact-link">{{ site.lab.email }}</a><br>
        <strong>Research Inquiries:</strong> <a href="mailto:{{ site.lab.ra_contact }}" class="contact-link">{{ site.lab.ra_contact }}</a><br>
        <strong>Director Website:</strong> <a href="{{ site.lab.director_url }}" target="_blank" rel="noopener noreferrer" class="contact-link">profkwanminlee.github.io</a>
      </p>
    </div>
  </div>
</div>
