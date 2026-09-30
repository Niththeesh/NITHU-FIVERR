const portrait = 'https://s3-alpha-sig.figma.com/img/3d1c/210a/47d4a2e248993e948ba0cbdc006e3375?Expires=1791763200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MrlZ-4uZudBqygLBI4qJjUqpVifOD7-M25CEQy066H4cOJqgNZpDBT9OWQwat7zldZLjOaGC0kpctKMa3zL0u4nYIi1SFVbyGWWTAEFm3VaiUk3DodKhRp5Y7yymd4T~PCe5MmwDBn6M7PZhs-NKrEpH2IW-eG5F0h6gok-rrjEYnfDB3Xki5uZjqe14Cq1KePnsWIUWR2MDby~TQ8lUbOJdHSipCrCVkfLqmlQk78Nwds3aCDznYdoHCuoncy~3-HrU-tzgHpdhrnBy03TZoAw5D0KbqCRZiypBhvUaVSrdxb9xAOAJxlaWJUvUsFub6xH5T0N1A1Bfz1Uo4015Kw__'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Niththeesh home">N<span>.</span></a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#work">Selected work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="header-meta"><span class="status-dot"></span> Available for select projects</div>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
  </header>

  <nav id="mobile-menu" class="mobile-menu" aria-label="Mobile navigation">
    <a href="#work">Selected work</a><a href="#about">About</a><a href="#contact">Contact</a>
  </nav>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Independent designer / developer</p>
        <h1 id="hero-title">I make digital<br><em>things feel clear.</em></h1>
        <p class="hero-intro">Niththeesh is a multidisciplinary creative building identities, interfaces, and thoughtful web experiences for ambitious people and teams.</p>
        <a class="text-link" href="#work">Explore selected work <span>↘</span></a>
      </div>
      <div class="hero-portrait" id="about">
        <div class="portrait-frame"><img src="${portrait}" alt="Portrait of Niththeesh" /></div>
        <span class="portrait-note">Based in Colombo<br>Working everywhere</span>
        <span class="portrait-index">01 / 04</span>
      </div>
    </section>

    <section class="expertise" aria-label="Areas of expertise">
      <p class="section-label">What I do</p>
      <div class="expertise-list"><span>01 Brand systems</span><span>02 Digital products</span><span>03 Creative direction</span></div>
    </section>

    <section class="work" id="work" aria-labelledby="work-title">
      <div class="section-heading"><p class="section-label">Selected work</p><h2 id="work-title">A few things<br><em>worth looking at.</em></h2></div>
      <div class="project-grid">
        <article class="project project-wide" data-category="identity"><div class="project-art art-saffron"><span>studio<br>no. 07</span><b>07</b></div><div class="project-info"><span>Identity / 2024</span><h3>Studio No. 07</h3><span class="arrow">↗</span></div></article>
        <article class="project project-tall" data-category="digital"><div class="project-art art-blue"><span>north<br>star</span><i></i></div><div class="project-info"><span>Digital product / 2023</span><h3>Northstar</h3><span class="arrow">↗</span></div></article>
        <article class="project project-wide" data-category="direction"><div class="project-art art-paper"><span>Notes on<br>making</span><b>III</b></div><div class="project-info"><span>Art direction / 2023</span><h3>Notes on making</h3><span class="arrow">↗</span></div></article>
      </div>
    </section>

    <section class="closing" id="contact"><p class="section-label">Have a good one?</p><h2>Let’s make<br><em>something useful.</em></h2><a class="contact-link" href="mailto:hello@niththeesh.com">hello@niththeesh.com <span>↗</span></a></section>
  </main>
  <footer><span>© 2024 Niththeesh</span><span>Instagram&nbsp;&nbsp;&nbsp; LinkedIn&nbsp;&nbsp;&nbsp; Behance</span></footer>
`

const menuButton = document.querySelector('.menu-button')
const mobileMenu = document.querySelector('.mobile-menu')
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!open))
  mobileMenu.classList.toggle('is-open', !open)
})

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false')
  mobileMenu.classList.remove('is-open')
}))
