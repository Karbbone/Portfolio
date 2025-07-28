document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__navigation");

  burgerBtn?.addEventListener("click", function () {
    const expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("active");
    nav?.classList.toggle("header__navigation--active");
    this.classList.toggle("header__burger--active");
  });

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

  function onScroll() {
    sectionGroups.forEach(({ link, menuClass }) => {
      if (link) {
        link.classList.remove(menuClass);
      }
    });

    for (const { menuClass, link, sections } of sectionGroups) {
      // Vérifie si l'une des sections du groupe est visible
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
  const heroCta = document.querySelector(".hero__cta-button");
  if (heroCta) {
    heroCta.addEventListener("click", function (e) {
      e.preventDefault();
      scrollTo("about");
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
