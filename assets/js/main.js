(function () {
  "use strict";

  const data = window.siteData;
  const page = document.body.dataset.page || "accueil";

  const icon = (name, size = 18) => {
    const icons = {
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/>',
      external: '<path d="M14 3h7v7m0-7L10 14M5 7v14h14v-5"/>',
      moon: '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>'
    };
    return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name] || ""}</svg>`;
  };

  const navItems = [
    ["accueil", "Accueil", "index.html"],
    ["documents", "Travaux", "documents.html"],
    ["cv", "CV", "index.html#cv"],
    ["contact", "Contact", "contact.html"]
  ];

  const header = document.querySelector("[data-site-header]");
  if (header) {
    header.innerHTML = `
      <a class="skip-link" href="#contenu">Aller au contenu</a>
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="Accueil — Stéphane Tholon">
          <span class="brand-mark" aria-hidden="true">S</span>
          <span>Stéphane Tholon</span>
        </a>
        <button class="menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span></button>
        <nav class="main-nav" aria-label="Navigation principale">
          ${navItems.map(([id, label, href]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <button class="language" type="button" aria-label="Langue française. Version anglaise à venir"><strong>FR</strong><span>/ EN</span></button>
          <button class="theme-toggle" type="button" aria-label="Activer le mode sombre">${icon("moon", 17)}</button>
        </div>
      </div>`;
  }

  const footer = document.querySelector("[data-site-footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="footer-grid">
        <div><a class="footer-name" href="index.html">Stéphane Tholon</a><p>CV et travaux en mathématiques</p></div>
        <div class="footer-links"><a href="documents.html">Travaux</a><a href="index.html#cv">Curriculum vitæ</a></div>
        <div class="footer-contact"><a href="mailto:${data.profile.email}">${data.profile.email}</a><span>${data.profile.situation}</span></div>
      </div>`;
  }

  const root = document.documentElement;
  const themeButton = document.querySelector(".theme-toggle");
  const savedTheme = localStorage.getItem("st-theme");
  if (savedTheme) root.dataset.theme = savedTheme;
  function refreshThemeButton() {
    if (!themeButton) return;
    const dark = root.dataset.theme === "dark";
    themeButton.innerHTML = icon(dark ? "sun" : "moon", 17);
    themeButton.setAttribute("aria-label", dark ? "Activer le mode clair" : "Activer le mode sombre");
  }
  refreshThemeButton();
  themeButton?.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("st-theme", root.dataset.theme);
    refreshThemeButton();
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    menuToggle.setAttribute("aria-label", open ? "Ouvrir le menu" : "Fermer le menu");
    mainNav?.classList.toggle("is-open", !open);
    document.body.classList.toggle("menu-open", !open);
  });

  document.querySelector(".language")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.classList.add("notice");
    button.setAttribute("aria-label", "La version anglaise sera ajoutée prochainement");
    window.setTimeout(() => button.classList.remove("notice"), 1200);
  });

  const renderTimeline = () => {
    const target = document.querySelector("[data-timeline]");
    if (!target) return;
    target.innerHTML = data.timeline.map((item, index) => `
      <article class="timeline-item reveal${item.accent ? " timeline-featured" : ""}">
        <div class="timeline-marker"><span>${String(index + 1).padStart(2, "0")}</span></div>
        <div class="timeline-period">${item.period}</div>
        <div class="timeline-content">
          <p class="eyebrow">${item.place}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>
      </article>`).join("");
  };

  const renderCoursework = () => {
    const target = document.querySelector("[data-coursework]");
    if (target) target.innerHTML = data.coursework.map((course, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span>${course}</li>`).join("");
  };

  const renderInterests = () => {
    const target = document.querySelector("[data-interests]");
    if (!target) return;
    target.innerHTML = data.interests.map(item => `
      <article class="interest-card reveal">
        <span class="interest-number">${item.number}</span>
        <h2>${item.title}</h2>
        <p>${item.summary}</p>
        <ul>${item.topics.map(topic => `<li>${topic}</li>`).join("")}</ul>
      </article>`).join("");
  };

  const renderProjects = () => {
    const target = document.querySelector("[data-projects]");
    if (!target) return;
    target.innerHTML = data.projects.map(project => `
      <article class="project-card reveal">
        <div class="project-year">${project.year}</div>
        <div class="project-main">
          <p class="eyebrow">${project.institution}</p>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <p class="project-supervisor"><span>Encadrement</span>${project.supervisor}</p>
          <div class="tag-list">${project.topics.map(topic => `<span>${topic}</span>`).join("")}</div>
        </div>
        <div class="project-action">
          ${data.documentsPublic && project.file ? `<a class="button button-outline" href="${project.file}" target="_blank" rel="noopener">Lire le rapport ${icon("external", 15)}</a>` : ''}
        </div>
      </article>`).join("");
  };

  function resourceCard(doc) {
    return `<article class="resource-card reveal">
      <div class="resource-meta"><span>${doc.level}</span><time datetime="${doc.date}">${doc.dateLabel}</time></div>
      <h3>${doc.title}</h3><p>${doc.description}</p>
      <div class="tag-list">${doc.keywords.slice(0, 3).map(k => `<span>${k}</span>`).join("")}</div>
      <div class="card-actions"><a href="${doc.file}" target="_blank" rel="noopener">Consulter ${icon("external", 14)}</a><a href="${doc.file}" download>Télécharger ${icon("download", 14)}</a></div>
    </article>`;
  }

  const teachingDocs = data.documents.filter(doc => ["PCSI", "BCPST"].includes(doc.level));
  const teachingGrid = document.querySelector("[data-teaching-resources]");
  if (teachingGrid) {
    const filters = document.querySelectorAll("[data-resource-filter]");
    const paint = filter => {
      const docs = filter === "Tous" ? teachingDocs : teachingDocs.filter(doc => doc.level === filter || doc.type === filter);
      teachingGrid.innerHTML = docs.map(resourceCard).join("") || '<p class="empty-state">Aucune ressource dans cette catégorie.</p>';
    };
    filters.forEach(button => button.addEventListener("click", () => {
      filters.forEach(item => item.classList.remove("is-active"));
      button.classList.add("is-active");
      button.setAttribute("aria-pressed", "true");
      filters.forEach(item => { if (item !== button) item.setAttribute("aria-pressed", "false"); });
      paint(button.dataset.resourceFilter);
    }));
    paint("Tous");
  }

  function documentCard(doc, index) {
    const abstract = doc.abstract?.trim() || "Résumé à venir.";
    const pending = !doc.abstract?.trim();
    return `<article class="work-entry reveal" data-doc-id="${doc.id}">
      <div class="work-index">${String(index + 1).padStart(2, "0")}</div>
      <div class="work-content">
        <p class="work-meta"><span>${doc.kind}</span><span>${doc.context}</span></p>
        <h3>${doc.title}</h3>
        <div class="work-abstract">
          <span>Résumé</span>
          <p${pending ? ' class="abstract-pending"' : ""}>${abstract}</p>
        </div>
      </div>
      <div class="work-actions">
        <button class="button button-primary" type="button" data-preview="${doc.id}">Consulter</button>
        <a class="button button-outline" href="${doc.file}" download>Télécharger</a>
      </div>
    </article>`;
  }

  const documentGrid = document.querySelector("[data-document-grid]");
  if (documentGrid) {
    const count = document.querySelector("[data-result-count]");
    documentGrid.innerHTML = data.documents.map(documentCard).join("") || '<div class="empty-state"><h3>Aucun document</h3><p>Le dépôt sera complété prochainement.</p></div>';
    if (count) count.textContent = `${data.documents.length} document${data.documents.length > 1 ? "s" : ""}`;
    documentGrid.addEventListener("click", event => {
      const trigger = event.target.closest("[data-preview]");
      if (trigger) openPdf(trigger.dataset.preview);
    });
  }

  const modal = document.querySelector("[data-pdf-modal]");
  function openPdf(id) {
    const doc = data.documents.find(item => item.id === id);
    if (!modal || !doc) return;
    modal.querySelector("[data-modal-title]").textContent = doc.title;
    modal.querySelector("iframe").src = `${doc.file}#view=FitH`;
    modal.querySelector("[data-modal-download]").href = doc.file;
    modal.showModal();
  }
  if (modal) {
    modal.querySelector("[data-close-modal]")?.addEventListener("click", () => modal.close());
    modal.addEventListener("click", event => { if (event.target === modal) modal.close(); });
    modal.addEventListener("close", () => { modal.querySelector("iframe").src = "about:blank"; });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    const status = document.querySelector("#form-status");
    form.addEventListener("submit", event => {
      event.preventDefault();
      form.querySelectorAll(".field-error").forEach(el => el.textContent = "");
      let valid = true;
      form.querySelectorAll("[required]").forEach(field => {
        const error = document.querySelector(`#${field.id}-error`);
        if (!field.value.trim()) { error.textContent = "Ce champ est requis."; valid = false; }
        else if (field.type === "email" && !/^\S+@\S+\.\S+$/.test(field.value)) { error.textContent = "Saisissez une adresse électronique valide."; valid = false; }
      });
      if (!valid) { status.textContent = "Vérifiez les champs signalés."; status.className = "form-status is-error"; form.querySelector("[aria-describedby]:invalid")?.focus(); return; }
      const subject = encodeURIComponent(form.elements.subject.value);
      const body = encodeURIComponent(`Nom : ${form.elements.name.value}\nAdresse : ${form.elements.email.value}\n\n${form.elements.message.value}`);
      status.textContent = "Votre application de messagerie va s’ouvrir pour finaliser l’envoi.";
      status.className = "form-status is-success";
      window.location.href = `mailto:${data.profile.email}?subject=${subject}&body=${body}`;
    });
  }

  renderTimeline(); renderCoursework(); renderInterests(); renderProjects();

  const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.08 }) : null;
  document.querySelectorAll(".reveal").forEach(element => revealObserver ? revealObserver.observe(element) : element.classList.add("is-visible"));
})();
