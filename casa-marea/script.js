const items = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 80, 220)}ms`;
    observer.observe(item);
  });
} else {
  items.forEach((item) => item.classList.add("is-visible"));
}

const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const syncHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (hero && !reducedMotion) {
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const ratio = (event.clientX - bounds.left) / bounds.width - 0.5;
    hero.style.setProperty("--mx", `${ratio * 48}px`);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--mx", "0px");
  });
}
