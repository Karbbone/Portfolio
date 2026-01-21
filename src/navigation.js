document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // BURGER MENU
  // ============================================
  const burgerBtn = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__navigation");

  burgerBtn?.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("active");
    nav?.classList.toggle("header__navigation--active");
    this.classList.toggle("header__burger--active");
  });

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  const menuLinks = document.querySelectorAll(".header__menu-link");

  function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const header = document.getElementById("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: "smooth",
      });
    }
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        if (nav?.classList.contains("header__navigation--active")) {
          nav.classList.remove("header__navigation--active");
          burgerBtn?.setAttribute("aria-expanded", "false");
          burgerBtn?.classList.remove("header__burger--active");
          document.body.classList.remove("active");
        }
        const sectionId = href.substring(1);
        scrollTo(sectionId);
      } else {
        if (nav?.classList.contains("header__navigation--active")) {
          nav.classList.remove("header__navigation--active");
          burgerBtn?.setAttribute("aria-expanded", "false");
          burgerBtn?.classList.remove("header__burger--active");
          document.body.classList.remove("active");
        }
      }
    });
  });

  // ============================================
  // ACTIVE NAV HIGHLIGHTING
  // ============================================
  const sectionGroups = [
    {
      menuClass: "header__menu-link--about",
      link: document.querySelector(".header__menu-link--about"),
      sections: ["about", "work"],
    },
    {
      menuClass: "header__menu-link--skills",
      link: document.querySelector(".header__menu-link--skills"),
      sections: ["exph", "exps"],
    },
    {
      menuClass: "header__menu-link--projects",
      link: document.querySelector(".header__menu-link--projects"),
      sections: ["project"],
    },
  ];

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll("[data-reveal]");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

  // Reveal hero elements immediately with stagger
  document.querySelectorAll("#hero [data-reveal]").forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("revealed");
    }, 100 + index * 100);
  });

  // ============================================
  // SCROLL EVENT HANDLER
  // ============================================
  function onScroll() {
    // Update nav highlighting
    sectionGroups.forEach(({ link, menuClass }) => {
      if (link) {
        link.classList.remove(menuClass);
      }
    });

    for (const { menuClass, link, sections } of sectionGroups) {
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 350 && rect.bottom > 350) {
          link.classList.add(menuClass);
          return;
        }
      }
    }

  }

  // ============================================
  // HERO CTA
  // ============================================
  const heroCta = document.querySelector(".hero__cta-button");
  if (heroCta) {
    heroCta.addEventListener("click", function (e) {
      e.preventDefault();
      scrollTo("about");
    });
  }

  // ============================================
  // INIT
  // ============================================
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
