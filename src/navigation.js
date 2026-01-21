document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // BURGER MENU
  // ============================================
  const burgerBtn = document.querySelector(".header__burger");
  const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

  function closeMobileMenu() {
    burgerBtn?.setAttribute("aria-expanded", "false");
    burgerBtn?.classList.remove("header__burger--active");
    mobileNavOverlay?.classList.remove("active");
    document.body.classList.remove("active");
  }

  function openMobileMenu() {
    burgerBtn?.setAttribute("aria-expanded", "true");
    burgerBtn?.classList.add("header__burger--active");
    mobileNavOverlay?.classList.add("active");
    document.body.classList.add("active");
  }

  burgerBtn?.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close mobile menu when clicking a link
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        closeMobileMenu();
        const sectionId = href.substring(1);
        // Small delay to let the menu close animation start
        setTimeout(() => {
          scrollTo(sectionId);
        }, 100);
      } else {
        closeMobileMenu();
      }
    });
  });

  // Close mobile menu when clicking outside (on overlay background)
  mobileNavOverlay?.addEventListener("click", function (e) {
    if (e.target === mobileNavOverlay) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileNavOverlay?.classList.contains("active")) {
      closeMobileMenu();
    }
  });

  // Close mobile menu when clicking the close button
  const mobileNavClose = document.getElementById("mobile-nav-close");
  mobileNavClose?.addEventListener("click", closeMobileMenu);

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
        const sectionId = href.substring(1);
        scrollTo(sectionId);
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
  const header = document.getElementById("header");
  const heroSection = document.getElementById("hero");

  function onScroll() {
    // Compact header after hero section
    if (header && heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 100) {
        header.classList.add("header--compact");
      } else {
        header.classList.remove("header--compact");
      }
    }

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
