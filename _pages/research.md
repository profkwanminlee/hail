---
layout: default
title: "Research"
permalink: /research/
hero_title: "Research"
hero_subtitle: "Exploring human cognition, behavioral responses, and societal transformations across physical and virtual AI environments."
hero_image: "/images/hero/research.jpg"
hero_crop: "center 48%"
description: "Research pillars and active empirical projects at the Human-AI Interaction Lab (HAIL) and Interaction Lab, NTU Singapore."
---

<div class="editorial-prose">
  <h2>Research Pillars</h2>
  <p class="lead-text">
    Our research program investigates the psychological, cognitive, and social dimensions of interacting with intelligent technologies through five core pillars:
  </p>

  <ul class="pillar-bullet-list">
    <li>
      <h3>Human-AI Interaction</h3>
      <p>
        How people communicate with, rely on, and respond to AI agents, from conversational assistants to embodied robots, avatars, and autonomous systems. Key themes include agent design, social presence, user experience, and immersive AI experiences in virtual and mixed reality.
      </p>
    </li>
    <li>
      <h3>Perception &amp; Agent Design</h3>
      <p>
        Investigating visual perception (human, robotic, avatar, and deepfake faces), social presence, and user experience (UX) design across physical, virtual, and AI-mediated environments.
      </p>
    </li>
    <li>
      <h3>Trust &amp; Human-Technology Dynamics</h3>
      <p>
        Analyzing the psychological, behavioral, and neural mechanisms of trust formation across critical domains, including autonomous vehicles, mobile banking, AI medicine, explainable AI (XAI), and sustainable systems.
      </p>
    </li>
    <li>
      <h3>AI Ethics, Philosophy &amp; Policy</h3>
      <p>
        Ethical and culturally sensitive agent design, philosophical questions raised by human-like machines, and evidence to guide AI governance and policy.
      </p>
    </li>
    <li>
      <h3>AI-Enhanced Research &amp; Media Integrity</h3>
      <p>
        Developing novel computational methodologies - such as synthetic panels, artificial societies, and AI co-scientists - alongside deep learning and LLM applications for detecting fake news and synthetic media.
      </p>
    </li>
  </ul>

  <h2>Active Research Projects</h2>
  <p>
    Current experimental and empirical investigations conducted by lab researchers and collaborators:
  </p>

  <ul class="clean-bullet-list project-bullet-list">
    {% for project in site.data.projects %}
    <li>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <p class="project-investigators"><strong>Investigators:</strong> {{ project.members }}</p>
    </li>
    {% endfor %}
  </ul>
</div>

