---
layout: default
title: "People"
permalink: /people/
hero_title: "People"
hero_subtitle: "Faculty investigators, doctoral researchers, visiting scholars, and student collaborators."
hero_image: "/images/hero/people.jpg"
hero_crop: "center 17%"
description: "Faculty, researchers, students, and alumni of the Human-AI Interaction Lab (HAIL) and Interaction Lab, NTU Singapore."
---

<div class="editorial-prose">
  <h2>Director</h2>

  <div class="director-profile-wrap">
    <div class="director-avatar-wrap">
      <img src="{{ '/images/people/kwanminlee.jpg' | relative_url }}" alt="Prof. Kwan Min Lee" class="director-avatar-img">
    </div>
    <div class="director-meta-wrap">
      <h3 class="director-name-title"><a href="https://profkwanminlee.github.io" target="_blank" rel="noopener noreferrer" class="person-profile-link" title="Visit my website!" style="text-decoration: none;">Kwan Min Lee</a></h3>
      <p class="director-role-title">Director, Human-AI Interaction Lab &amp; Interaction Lab</p>
      <div class="person-website-wrap">
        <a href="https://profkwanminlee.github.io" target="_blank" rel="noopener noreferrer" class="person-website-link">kwanminlee.com</a>
      </div>
      <p class="director-affil-text">
        Korea Foundation Endowed Chair Professor<br>
        Wee Kim Wee School of Communication and Information (WKWSCI), NTU Singapore
      </p>
    </div>
  </div>

  <h2>Researchers &amp; Doctoral Candidates</h2>

  <div class="people-list-container">
    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/shreyagopi.jpg' | relative_url }}" alt="Shreya Gopi" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">Shreya Gopi</h3>
        <p class="person-role-title">Doctoral Candidate · Lead Researcher</p>
        <p class="person-affil-text">
          Wee Kim Wee School of Communication and Information, NTU Singapore<br>
          <em>Focus:</em> Explainable AI (XAI) &amp; Psychological Trust
        </p>
      </div>
    </div>

    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/lixie.jpg' | relative_url }}" alt="Li Xie (Sherry)" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">Li Xie (Sherry)</h3>
        <p class="person-role-title">Doctoral Student · Researcher</p>
        <p class="person-affil-text">
          Wee Kim Wee School of Communication and Information, NTU Singapore<br>
          <em>Focus:</em> AI in Journalism &amp; Media Psychology
        </p>
      </div>
    </div>

    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/yanqinwu.jpg' | relative_url }}" alt="Yanqin Wu (Yasmin)" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">Yanqin Wu (Yasmin)</h3>
        <p class="person-role-title">Doctoral Student · Researcher</p>
        <p class="person-affil-text">
          Wee Kim Wee School of Communication and Information, NTU Singapore<br>
          <em>Focus:</em> Mental Health Communication &amp; AI Well-Being
        </p>
      </div>
    </div>

    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/heyongsunim.jpg' | relative_url }}" alt="Heyongsun Im" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">Heyongsun Im</h3>
        <p class="person-role-title">Doctoral Student · Researcher</p>
        <p class="person-affil-text">
          Wee Kim Wee School of Communication and Information, NTU Singapore<br>
          <em>Focus:</em> HCI &amp; Social Simulation with Agentic AI
        </p>
      </div>
    </div>

    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/keqichen.jpg' | relative_url }}" alt="Keqi Chen" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">Keqi Chen</h3>
        <p class="person-role-title">Doctoral Student · Automotive HCI</p>
        <p class="person-affil-text">
          School of Mechanical and Aerospace Engineering (MAE), NTU Singapore<br>
          <em>Focus:</em> Autonomous Vehicles &amp; Smart Cockpit UX
        </p>
      </div>
    </div>

    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/youngeunkim.jpg' | relative_url }}" alt="Young Eun Kim" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">Young Eun Kim</h3>
        <p class="person-role-title">Visiting Doctoral Scholar · SKKU</p>
        <p class="person-affil-text">
          Department of Interaction Science, Sungkyunkwan University (SKKU)<br>
          <em>Focus:</em> Interaction Science &amp; User Experience
        </p>
      </div>
    </div>
  </div>

  <h2>Web Master</h2>

  <div class="people-list-container">
    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ '/images/people/manan.jpg' | relative_url }}" alt="Manan Sethia" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title"><a href="https://manansethia.com" target="_blank" rel="noopener noreferrer" class="person-profile-link" title="Visit my website!" style="text-decoration: none;">Manan Sethia</a></h3>
        <p class="person-role-title">Web Master</p>
        <div class="person-website-wrap">
          <a href="https://manansethia.com" target="_blank" rel="noopener noreferrer" class="person-website-link">manansethia.com</a>
        </div>
        <p class="person-affil-text">
          Computer Science (Honours) Year 1, S&amp;T Scholar<br>
          Nanyang Technological University, Singapore
        </p>
      </div>
    </div>
  </div>

  <h2>Lab Alumni</h2>

  <div class="people-list-container">
    {% for alum in site.data.alumni %}
    <div class="person-list-row">
      <div class="person-avatar-wrap">
        <img src="{{ alum.image | relative_url }}" alt="{{ alum.name }}" class="person-avatar-img">
      </div>
      <div class="person-meta-wrap">
        <h3 class="person-name-title">{{ alum.name }}</h3>
        <p class="person-role-title">{{ alum.role }}</p>
        <p class="person-affil-text">
          Human-AI Interaction Lab, NTU Singapore
        </p>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
