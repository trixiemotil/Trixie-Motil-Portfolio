const projects = [
  {title: 'CIT Scheduler · Capstone Project', role: 'Frontend Developer',
    description: 'Co-developed a web-based scheduling platform, leading the design and implementation of responsive UI components and connecting frontend modules with backend REST APIs.',
    tags: ['Node.js', 'MongoDB Atlas', 'REST APIs', 'Vercel', 'Render'], visual: 'scheduler', latest: true,
  },
  {title: 'Sweet Brews Website', role: 'Front-end Developer',
    description: 'A modern coffee shop website with a built-in online ordering system, developed using HTML, CSS, and JavaScript to allow users to browse the menu, add items to a cart, and place orders seamlessly.',
    tags: ['HTML', 'CSS', 'JavaScript'], visual: 'sweet',
  },
  {title: 'CFE Reviewer for CMA Students', role: 'Frontend Developer',
    description: 'Designed responsive web and mobile interfaces for an exam preparation app, helping CMA students access study materials and interactive practice tests.',
    tags: ['React', 'JavaScript', 'Responsive Design'], visual: 'reviewer',
  },
  {title: 'Registration Management System', role: 'Frontend Developer',
    description: 'Built clean, role-based interfaces for students, teachers, and administrators, supporting registration forms, profile management, and admin controls.',
    tags: ['React', 'JavaScript', 'Responsive UI'], visual: 'registration',
  },
  {title: 'Money Manager Website', role: 'Frontend Developer',
    description: 'Designed an interactive personal finance dashboard with income and expense charts, savings goal progress, and category-based analytics.',
    tags: ['JavaScript', 'Responsive Design', 'Data Visualization'], visual: 'money',
  },
  {title: 'Nature Memory Game', role: 'Full Stack Developer',
    description: 'Test your memory and enjoy the beauty of nature with our fun and relaxing matching game. Flip cards, find pairs, and explore stunning nature-themed images as you play!',
    tags: ['HTML', 'CSS', 'JavaScript'], visual: 'game',
  },
];

const mockups = {
  sweet: `<div class="mock-browser sweet-preview"><div class="sweet-browser-bar"><span class="browser-dots"><i></i><i></i><i></i></span><span class="browser-url">▣　sweetbrews.com　↻</span><span class="browser-menu">•••</span></div><img class="project-screenshot" src="assets/sweet-brews-page.png" alt="Sweet Brews website homepage with coffee and donuts" /></div>`,
  scheduler: `<div class="mock-browser scheduler-preview"><div class="mock-top"><i></i><i></i><i></i><span>CIT Scheduler · Sign in</span></div><img class="scheduler-screenshot" src="assets/cit-scheduler.png" alt="CIT Scheduler sign-in page" /></div>`,
  reviewer: `<div class="mock-browser cfe-preview"><div class="mock-top"><i></i><i></i><i></i><span>CFE Reviewer for CMA Students</span></div><img class="cfe-screenshot" src="assets/cmacfe.png" alt="CFE Reviewer for CMA Students website homepage" /></div>`,
  registration: `<div class="mock-browser rms-preview"><div class="mock-top"><i></i><i></i><i></i><span>Registration Management System</span></div><img class="rms-screenshot" src="assets/rms.png" alt="PHINMA Araullo University registration management website" /></div>`,
  coffee: `<div class="mock-browser inventory-browser"><div class="mock-top"><i></i><i></i><i></i><span>Joshoeixi Coffee Shop - Manage</span></div><header>Joshoeixi Coffee Shop<small>Premium Coffee Experience</small></header><div class="inventory-panel"><h4>Coffee Products</h4><div class="table-row">Image　 Name　　　 Description　　　 Price　 Category　 In Stock</div><p>☕　Espresso Classic　 Strong and aromatic single shot espresso　 $3.50</p><p>🥛　Caramel Latte　 Smooth latte with caramel syrup　 $4.75</p><p>🧋　Iced Americano　 Chilled americano with ice cubes　 $4.00</p></div></div>`,
  money: `<div class="mock-browser money-preview"><div class="mock-top"><i></i><i></i><i></i><span>Money Manager · Dashboard</span></div><img class="money-screenshot" src="assets/money-manager.png" alt="Money Manager dashboard with income, expenses, and savings charts" /></div>`,
  game: `<div class="mock-browser game-preview"><div class="mock-top"><i></i><i></i><i></i><span>Nature Memory Game</span></div><img class="game-screenshot" src="assets/memory-game.png" alt="Nature Memory Game with a grid of matching cards" /></div>`,
};

function projectCard(project, compact = false) {
  return `<article class="project-card ${compact ? 'compact' : ''}">${project.latest ? '<span class="latest-badge">LATEST PROJECT</span>' : ''}<a class="project-image" href="#projects" aria-label="View ${project.title}">${mockups[project.visual]}</a><div class="project-info"><h3>${project.title}</h3><p class="project-role">${project.role}</p><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>${compact ? `<a class="text-link" href="#projects">View Project <span>→</span></a>` : ''}</div></article>`;
}

function homePage() {
  return `<section class="hero editorial-hero" id="home"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow">FRONTEND DEVELOPER · INTERNSHIP / OJT SEEKER <span>✦</span></p><h1>Building thoughtful<br/><em>web experiences</em><br/>with purpose.</h1><p class="hero-intro">I’m <strong>Trixie Mae DG. Motil</strong>, a 4th-year Information Technology student focused on responsive interfaces, React, and turning ideas into polished, accessible web experiences.</p><div class="hero-actions"><a class="pill-link" href="#contact">LET'S CONNECT <span>→</span></a><a class="pill-link hero-secondary" href="#projects">VIEW MY WORK <span>↗</span></a></div><div class="hero-stats"><div><strong>React</strong><span>Frontend focus</span></div><div><strong>2023–27</strong><span>BSIT · System Development</span></div><div><strong>OJT</strong><span>Open to internship</span></div></div></div><div class="hero-art"><div class="hero-halo"></div><div class="portrait-frame"><img class="hero-photo" src="assets/trixie-portrait-new-cutout.png" alt="Trixie Mae DG. Motil" /></div><span class="hero-corner-note">LEARN · BUILD · GROW</span></div></div></section><section class="about-teaser" id="about-teaser"><div class="about-teaser-inner"><div class="desk-art"><div class="desk-circle"></div><div class="desk-window"><div class="window-bar">✦　My creative corner</div><div class="window-content"><b>Ideas into<br/>beautiful things.</b><span>✿</span></div></div><div class="coffee-cup"></div><div class="experience-badge"><b>4</b><small>YEAR<br/>BSIT</small></div></div><div class="teaser-copy"><p class="eyebrow">A LITTLE ABOUT ME <span>♡</span></p><h2>Frontend developer<br/>in the making, building<br/><em>for people and the web.</em></h2><p>I’m a 4th-year BSIT student at PHINMA Araullo University, majoring in System Development. I enjoy translating Figma wireframes into responsive interfaces, connecting them to APIs, and refining the details that make products accessible and easy to use.</p><div class="qualities"><span>✳<small>DETAIL ORIENTED</small></span><span>⌕<small>PROBLEM SOLVER</small></span><span>✧<small>CREATIVE THINKER</small></span><span>♡<small>LIFELONG LEARNER</small></span></div><a class="pill-link outline-link" href="#about">MORE ABOUT ME <span>→</span></a></div></div></section><section class="work-section" id="featured"><div class="section-heading"><div><p class="eyebrow">SELECTED PROJECTS <span>✦</span></p><h2>Featured <em>work</em></h2></div><a class="subtle-link" href="#projects">VIEW ALL PROJECTS <span>→</span></a></div><div class="work-grid">${[projects[0], projects[3], projects[2]].map((project,i)=>`<article class="work-tile">${project.latest ? '<span class="latest-badge">LATEST PROJECT</span>' : ''}<a class="project-image" href="#projects" aria-label="View ${project.title}">${mockups[project.visual]}</a><div class="work-caption"><span>0${i+1}</span><div><b>${project.title}</b><small>${project.role}</small></div></div></article>`).join('')}</div></section><section class="services-strip"><div class="service-item"><span>⌘</span><div><b>DEVELOPMENT</b><p>Writing clean, reliable code that solves real problems.</p></div></div><div class="service-item"><span>✎</span><div><b>DESIGN</b><p>Thoughtful interfaces made to feel clear and intuitive.</p></div></div><div class="service-item"><span>▯</span><div><b>RESPONSIVE</b><p>Experiences that work beautifully across screen sizes.</p></div></div><div class="service-item"><span>♡</span><div><b>USER EXPERIENCE</b><p>Useful details that make every interaction feel natural.</p></div></div></section><section class="quote-band"><span class="quote-mark">“</span><p>“Every great project begins with curiosity<br/>and a little <em>imagination.</em>”</p><span class="quote-credit">— TRIXIE MOTIL<br/><small>STUDENT · DEVELOPER</small></span></section><section class="contact-band" id="contact-teaser"><div><p class="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s create something<br/><em>meaningful together.</em></h2></div><div class="contact-quick"><a href="mailto:trixiemotil@gmail.com">✉　trixiemotil@gmail.com</a><span>⌖　Nueva Ecija, Philippines</span><a class="pill-link" href="#contact">LET'S CONNECT <span>→</span></a></div><div class="contact-stilllife"><span>✿</span><b>good things<br/>take time</b></div></section>`;
}

function aboutPage() {
  return `<section class="about-page wrap">
    <div class="about-hero">
      <div class="about-visual">
        <div class="about-visual-orb"></div>
        <img class="about-photo" src="assets/trixie-portrait.png" alt="Portrait of Trixie Mae DG. Motil" />
        <div class="about-year-chip"><strong>4th</strong><span>YEAR<br/>BSIT</span></div>
      </div>
      <div class="about-intro">
        <p class="eyebrow">A LITTLE ABOUT ME <span>✦</span></p>
        <h1>Hi, I’m Trixie.</h1>
        <p class="about-lead">I’m a detail-oriented Information Technology student focused on building responsive, accessible web experiences.</p>
        <p>I’m currently seeking a Frontend Developer internship / OJT. I enjoy turning Figma wireframes into polished interfaces with React.js, JavaScript, and Tailwind CSS, then connecting them to REST APIs. I bring a collaborative mindset, careful UI debugging, and a focus on the details that make a product feel clear and easy to use.</p>
        <div class="about-tech-pills"><span>React & Next.js</span><span>Responsive UI</span><span>Figma to code</span><span>Accessibility</span></div>
        <a class="pill-link about-contact-link" href="#contact">LET’S CONNECT <span>→</span></a>
      </div>
    </div>
    <div class="about-details">
      <section class="about-panel education-panel">
        <p class="eyebrow">MY ACADEMIC JOURNEY</p><h2>Education</h2>
        <ol class="education-list">
          <li><span class="education-year">2023–2027</span><div><strong>BS Information Technology</strong><span>Major in System Development</span><small>PHINMA Araullo University · Cabanatuan City, Nueva Ecija</small></div></li>
          <li><span class="education-year">2020–2023</span><div><strong>Senior High School · STEM</strong><small>Nova Schola · Tanauan City, Batangas</small></div></li>
          <li><span class="education-year">2017–2020</span><div><strong>Junior High School · Special Program in Arts</strong><small>Juan R. Liwag Memorial High School · Gapan City, Nueva Ecija</small></div></li>
        </ol>
      </section>
      <section class="about-panel skills-panel">
        <p class="eyebrow">WHAT I WORK WITH</p><h2>Technical skills</h2>
        <div class="about-skill-grid">
          <article><span>01</span><div><strong>Frontend</strong><p>React, Next.js, React Native, HTML, CSS, JavaScript</p></div></article>
          <article><span>02</span><div><strong>Styling</strong><p>Tailwind CSS, Bootstrap, responsive design, Flexbox, CSS Grid</p></div></article>
          <article><span>03</span><div><strong>UI / UX</strong><p>Figma to code, UI/UX principles, WCAG accessibility</p></div></article>
          <article><span>04</span><div><strong>Backend</strong><p>Node.js, Express, REST APIs, Next.js API routes</p></div></article>
          <article><span>05</span><div><strong>Tools & deployment</strong><p>Git, GitHub, Render, Vercel</p></div></article>
          <article><span>06</span><div><strong>How I work</strong><p>Problem-solving, UI debugging, teamwork, time management, attention to detail</p></div></article>
        </div>
      </section>
    </div>
  </section>`;
}

function projectsPage() {
  const latest = projects[0];
  return `<section class="projects-page wrap">
    <header class="projects-heading">
      <div><p class="eyebrow">SELECTED WORK <span>✦</span></p><h1>Projects built<br/>with <em>purpose.</em></h1><p class="projects-intro">A collection of web experiences, tools, and coursework shaped by curiosity and a focus on making things useful.</p></div>
      <div class="projects-count"><strong>${String(projects.length).padStart(2, '0')}</strong><span>PROJECTS<br/>AND COUNTING</span></div>
    </header>
    <article class="projects-featured">
      <div class="projects-featured-image">${mockups[latest.visual]}</div>
      <div class="projects-featured-copy"><p class="eyebrow">LATEST PROJECT <span>✦</span></p><h2>${latest.title}</h2><p class="project-role">${latest.role} · Capstone</p><p>${latest.description}</p><div class="tags">${latest.tags.map(tag => `<span>${tag}</span>`).join('')}</div><a class="text-link" href="#contact">LET’S TALK ABOUT IT <span>→</span></a></div>
    </article>
    <div class="projects-list-heading"><div><p class="eyebrow">MORE FROM MY WORK</p><h2>More projects</h2></div><span>${projects.length - 1} PROJECTS</span></div>
    <div class="projects-grid">${projects.slice(1).map(project => projectCard(project)).join('')}</div>
  </section>`;
}

function contactPage() {
  return `<section class="contact-page wrap">
    <header class="contact-heading"><p class="eyebrow">LET’S CONNECT <span>✦</span></p><h1>Have a project<br/>or opportunity <em>in mind?</em></h1><p>I’m currently seeking a Frontend Developer internship / OJT. I’d love to hear from you.</p></header>
    <div class="contact-layout">
      <section class="contact-details"><p class="eyebrow">GET IN TOUCH</p><h2>Let’s start a conversation.</h2>
        <a class="contact-row" href="mailto:trixiemotil@gmail.com"><span class="contact-icon">✉</span><span><small>EMAIL</small><strong>trixiemotil@gmail.com</strong></span><b>↗</b></a>
        <a class="contact-row" href="tel:+639926731512"><span class="contact-icon">☎</span><span><small>PHONE</small><strong>+63 992 673 1512</strong></span><b>↗</b></a>
        <a class="contact-row" href="https://github.com/trixiemotil" target="_blank" rel="noreferrer"><span class="contact-icon">⌘</span><span><small>GITHUB</small><strong>github.com/trixiemotil</strong></span><b>↗</b></a>
        <div class="contact-row"><span class="contact-icon">⌖</span><span><small>LOCATION</small><strong>Nueva Ecija, Philippines</strong></span></div>
        <div class="contact-availability"><span class="availability-dot"></span><p><strong>Open to internship / OJT</strong><small>Frontend Development · UI implementation · Responsive web</small></p></div>
      </section>
      <aside class="contact-resume"><div class="resume-icon">PDF</div><p class="eyebrow">A QUICK OVERVIEW</p><h2>Want to know more?</h2><p>See my education, technical skills, and selected project experience in my resume.</p><a class="button button-primary resume-button" href="assets/trixie-motil-resume.pdf" download>DOWNLOAD RESUME <span>↓</span></a><small class="resume-format">PDF · Trixie Mae DG. Motil</small></aside>
    </div>
  </section>`;
}

const routes = { home: homePage, about: aboutPage, projects: projectsPage, contact: contactPage };
const app = document.querySelector('#app');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

function render() {
  const route = location.hash.slice(1).split('/')[0] || 'home';
  const page = routes[route] || homePage;
  app.innerHTML = page();
  document.body.dataset.page = routes[route] ? route : 'home';
  document.title = route === 'home' ? "Trixie's Portfolio" : `${route[0].toUpperCase()}${route.slice(1)} | Trixie's Portfolio`;
  nav.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.dataset.route === route));
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
window.addEventListener('hashchange', render);
render();
