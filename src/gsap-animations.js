import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// REDUCED MOTION CHECK
// ============================================
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  // Make everything visible immediately
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
  // Reveal all highlights (both HTML class and SCSS @extend mixin elements)
  document.querySelectorAll(
    ".highlighted, .hero__title-highlighted, .about__title span, .work__title span, .exph__title span, .exph__cols-left p span, .exps__title span, .exps__card-title, .project__title span, .contact__title span"
  ).forEach((el) => {
    el.classList.add("highlighted--revealed");
  });
} else {
  initGSAP();
}

// ============================================
// TEXT SPLIT UTILITY
// ============================================
function splitTextIntoChars(element) {
  const text = element.textContent;
  element.textContent = "";
  const chars = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === " ") {
      element.appendChild(document.createTextNode(" "));
    } else {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = char;
      element.appendChild(span);
      chars.push(span);
    }
  }
  return chars;
}

// ============================================
// MAIN INIT
// ============================================
function initGSAP() {
  // Inject a style rule that makes ::after use our custom property
  const style = document.createElement("style");
  style.textContent = `
    .gsap-highlight::after {
      clip-path: inset(0 var(--highlight-clip, 100%) 0 0) !important;
    }
  `;
  document.head.appendChild(style);

  initHero();
  initAbout();
  initWork();
  initHardSkills();
  initSoftSkills();
  initProjects();
  initContact();
  initBackgroundParallax();
}

// ============================================
// HERO SECTION — Immediate on load
// ============================================
function initHero() {
  const heroName = document.querySelector(".hero__title-name");
  const heroHighlighted = document.querySelector(".hero__title-highlighted");
  const heroDescription = document.querySelector(".hero__description");
  const heroSocials = document.querySelectorAll(".hero__socials-item");
  const heroCta = document.querySelector(".hero__cta");

  if (!heroName) return;

  // Hide hero elements immediately before animation
  if (heroDescription) gsap.set(heroDescription, { opacity: 0, y: 30 });
  if (heroSocials.length) gsap.set(heroSocials, { opacity: 0, y: 40 });
  if (heroCta) gsap.set(heroCta, { opacity: 0, y: 20 });

  const masterTL = gsap.timeline({ delay: 0.3 });

  // 1. Typewriter "Clément Maillet"
  const nameChars = splitTextIntoChars(heroName);
  masterTL.to(nameChars, {
    opacity: 1,
    duration: 0.03,
    stagger: 0.04,
    ease: "none",
  });

  // 2. Typewriter "Développeur Full Stack" + highlight
  if (heroHighlighted) {
    heroHighlighted.classList.add("gsap-highlight");
    heroHighlighted.style.setProperty("--highlight-clip", "100%");
    const highlightedChars = splitTextIntoChars(heroHighlighted);

    masterTL.to(
      highlightedChars,
      {
        opacity: 1,
        duration: 0.03,
        stagger: 0.04,
        ease: "none",
      },
      "+=0.2"
    );

    // Highlight sweep
    masterTL.to(
      heroHighlighted,
      {
        "--highlight-clip": "0%",
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.15"
    );
  }

  // 3. Description fade up
  if (heroDescription) {
    masterTL.to(
      heroDescription,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "+=0.1"
    );
    // Reveal inline highlights in description
    heroDescription.querySelectorAll(".highlighted").forEach((hl) => {
      hl.classList.add("gsap-highlight");
      hl.style.setProperty("--highlight-clip", "100%");
    });
    masterTL.to(
      heroDescription.querySelectorAll(".highlighted"),
      {
        "--highlight-clip": "0%",
        duration: 0.4,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }

  // 4. Social icons stagger bottom→up with back.out
  if (heroSocials.length) {
    masterTL.to(
      heroSocials,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "+=0.1"
    );
  }

  // 5. CTA bounce in
  if (heroCta) {
    masterTL.to(
      heroCta,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "+=0.1"
    );
  }
}

// ============================================
// SCROLL-TRIGGERED TITLE HELPER
// ============================================
function createScrollTitle(titleSpan, { triggerEl, highlight = true } = {}) {
  if (!titleSpan) return null;

  const trigger = triggerEl || titleSpan;
  titleSpan.classList.add("gsap-highlight");
  titleSpan.style.setProperty("--highlight-clip", "100%");

  const chars = splitTextIntoChars(titleSpan);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger,
      start: "top 85%",
      once: true,
    },
  });

  // Typewriter
  tl.to(chars, {
    opacity: 1,
    duration: 0.03,
    stagger: 0.04,
    ease: "none",
  });

  // Highlight
  if (highlight) {
    tl.to(
      titleSpan,
      {
        "--highlight-clip": "0%",
        duration: 0.5,
        ease: "power2.out",
      },
      "+=0.15"
    );
  }

  return tl;
}

// ============================================
// ABOUT SECTION
// ============================================
function initAbout() {
  const titleSpan = document.querySelector(".about__title span");
  const section = document.querySelector("#about");
  if (!section) return;

  // Title: typewriter + highlight
  createScrollTitle(titleSpan, { triggerEl: section });

  // Paragraphs stagger from left
  const paragraphs = section.querySelectorAll(".about__col--left p, .about__cta");
  if (paragraphs.length) {
    gsap.set(paragraphs, { opacity: 0, x: -30 });
    gsap.to(paragraphs, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.querySelector(".about__cols"),
        start: "top 80%",
        once: true,
      },
    });
  }

  // Inline highlights in about paragraphs
  section.querySelectorAll(".about__col--left .highlighted").forEach((hl) => {
    hl.classList.add("gsap-highlight");
    hl.style.setProperty("--highlight-clip", "100%");
    gsap.to(hl, {
      "--highlight-clip": "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hl,
        start: "top 85%",
        once: true,
      },
    });
  });

  // Image scale + parallax
  const image = section.querySelector(".about__col--right img");
  if (image) {
    gsap.set(image, { scale: 0.92, opacity: 0 });
    gsap.to(image, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: image,
        start: "top 85%",
        once: true,
      },
    });

    // Parallax on image
    gsap.to(image, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  }
}

// ============================================
// WORK SECTION
// ============================================
function initWork() {
  const titleSpan = document.querySelector(".work__title span");
  const section = document.querySelector("#work");
  if (!section) return;

  // Title: typewriter + highlight
  createScrollTitle(titleSpan, { triggerEl: section });

  // Panel content slide up
  const content = section.querySelector(".work__content");
  if (content) {
    gsap.set(content, { opacity: 0, y: 40 });
    gsap.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: content,
        start: "top 85%",
        once: true,
      },
    });
  }

  // Tabs stagger from right with back.out
  const tabs = section.querySelectorAll(".work__tab");
  if (tabs.length) {
    gsap.set(tabs, { opacity: 0, x: 30 });
    gsap.to(tabs, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: section.querySelector(".work__tabs"),
        start: "top 85%",
        once: true,
      },
    });
  }
}

// ============================================
// HARD SKILLS SECTION
// ============================================
function initHardSkills() {
  const titleSpan = document.querySelector(".exph__title span");
  const section = document.querySelector("#exph");
  if (!section) return;

  // Title: typewriter + highlight
  createScrollTitle(titleSpan, { triggerEl: section });

  // Text blocks cascade from left
  const textBlocks = section.querySelectorAll(".exph__cols-left > div");
  if (textBlocks.length) {
    gsap.set(textBlocks, { opacity: 0, x: -30 });
    gsap.to(textBlocks, {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.querySelector(".exph__cols"),
        start: "top 80%",
        once: true,
      },
    });
  }

  // Inline highlights in hard skills text (these spans use @extend .highlighted via SCSS mixin)
  section.querySelectorAll(".exph__cols-left p span").forEach((hl) => {
    hl.classList.add("gsap-highlight");
    hl.style.setProperty("--highlight-clip", "100%");
    gsap.to(hl, {
      "--highlight-clip": "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hl,
        start: "top 85%",
        once: true,
      },
    });
  });

  // Tech grid items: stagger with scale + rotation
  const techItems = section.querySelectorAll(".exph__tech-item");
  if (techItems.length) {
    gsap.set(techItems, { opacity: 0, scale: 0.7, rotation: -8 });
    gsap.to(techItems, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: section.querySelector(".exph__tech-grid"),
        start: "top 85%",
        once: true,
      },
    });
  }
}

// ============================================
// SOFT SKILLS SECTION
// ============================================
function initSoftSkills() {
  const titleSpan = document.querySelector(".exps__title span");
  const section = document.querySelector("#exps");
  if (!section) return;

  // Title: typewriter + highlight
  createScrollTitle(titleSpan, { triggerEl: section });

  // Cards: 3D entry
  const cards = section.querySelectorAll(".exps__card");
  if (cards.length) {
    gsap.set(cards, { opacity: 0, rotateX: 8, y: 40, transformPerspective: 800 });
    gsap.to(cards, {
      opacity: 1,
      rotateX: 0,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      transformPerspective: 800,
      scrollTrigger: {
        trigger: section.querySelector(".exps__grid"),
        start: "top 85%",
        once: true,
      },
    });
  }

  // Card title highlights (use @extend .highlighted via SCSS mixin) + inline .highlighted
  const cardHighlights = section.querySelectorAll(".exps__card-title, .exps__card .highlighted");
  cardHighlights.forEach((hl) => {
    hl.classList.add("gsap-highlight");
    hl.style.setProperty("--highlight-clip", "100%");
    gsap.to(hl, {
      "--highlight-clip": "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hl,
        start: "top 85%",
        once: true,
      },
    });
  });
}

// ============================================
// PROJECTS SECTION
// ============================================
function initProjects() {
  const titleSpan = document.querySelector(".project__title span");
  const section = document.querySelector("#project");
  if (!section) return;

  // Title: typewriter + highlight
  createScrollTitle(titleSpan, { triggerEl: section });

  // Project items: alternating slide directions
  const items = section.querySelectorAll(".project__item");
  items.forEach((item, index) => {
    const isEven = index % 2 === 0;
    const imgCol = item.querySelector(".project__item__col-left");
    const textCol = item.querySelector(".project__item__col-right");

    if (imgCol) {
      gsap.set(imgCol, { opacity: 0, x: isEven ? -50 : 50 });
      gsap.to(imgCol, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
      });
    }

    if (textCol) {
      gsap.set(textCol, { opacity: 0, x: isEven ? 50 : -50 });
      gsap.to(textCol, {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
      });
    }
  });

  // Inline highlights in projects
  section.querySelectorAll(".project__item .highlighted").forEach((hl) => {
    hl.classList.add("gsap-highlight");
    hl.style.setProperty("--highlight-clip", "100%");
    gsap.to(hl, {
      "--highlight-clip": "0%",
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hl,
        start: "top 85%",
        once: true,
      },
    });
  });
}

// ============================================
// CONTACT SECTION
// ============================================
function initContact() {
  const titleSpan = document.querySelector(".contact__title span");
  const section = document.querySelector("#contact");
  if (!section) return;

  // Title: typewriter + highlight
  createScrollTitle(titleSpan, { triggerEl: section });

  // Email info fade in
  const emailInfo = section.querySelector(".contact__email-info");
  if (emailInfo) {
    gsap.set(emailInfo, { opacity: 0, y: 20 });
    gsap.to(emailInfo, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: emailInfo,
        start: "top 85%",
        once: true,
      },
    });
  }

  // Form fields stagger from bottom
  const formGroups = section.querySelectorAll(".contact__form-group");
  if (formGroups.length) {
    gsap.set(formGroups, { opacity: 0, y: 30 });
    gsap.to(formGroups, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section.querySelector(".contact__form"),
        start: "top 85%",
        once: true,
      },
    });
  }

  // Submit button bounce in
  const submitBtn = section.querySelector(".contact__form-submit");
  if (submitBtn) {
    gsap.set(submitBtn, { opacity: 0, scale: 0.8 });
    gsap.to(submitBtn, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: submitBtn,
        start: "top 90%",
        once: true,
      },
    });
  }
}

// ============================================
// BACKGROUND SHAPES PARALLAX
// ============================================
function initBackgroundParallax() {
  // Disable on mobile
  if (window.innerWidth < 576) return;

  const circles = document.querySelectorAll(".bg-shapes__circle");
  circles.forEach((circle, index) => {
    const speed = (index % 3 + 1) * 15;
    const direction = index % 2 === 0 ? 1 : -1;

    gsap.to(circle, {
      y: speed * direction,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
      },
    });
  });

  // Hero floating shapes parallax
  const heroShapes = document.querySelectorAll(".hero__floating-shape");
  heroShapes.forEach((shape, index) => {
    const speed = (index + 1) * 20;
    gsap.to(shape, {
      y: speed,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
}
