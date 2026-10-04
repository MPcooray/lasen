const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const year = document.querySelector("#year");
const form = document.querySelector("#contact-form");
const status = document.querySelector(".form-status");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const onScroll = () => {
  nav.classList.toggle("is-stuck", window.scrollY > 8);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const setMenu = (open) => {
  siteNav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  const label = toggle.querySelector(".sr-only");
  if (label) label.textContent = open ? "Close menu" : "Open menu";
};

toggle.addEventListener("click", () => {
  setMenu(!siteNav.classList.contains("is-open"));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

document.querySelectorAll(".social a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href").startsWith("#")) {
      event.preventDefault();
      status.textContent = "Add your GitHub and LinkedIn URLs in index.html, then this link will work.";
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "";

  const email = document.body.dataset.email.trim();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const from = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !from || !message) {
    status.textContent = "Add your name, email, and a message.";
    return;
  }

  if (!email || email === "you@email.com") {
    status.textContent = "Add Lasen’s email on the <body> tag in index.html, then this form can open a mail draft.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${from}>`);
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  status.textContent = "Your email app should open with the message ready to send.";
  form.reset();
});

const finePointer = window.matchMedia("(pointer: fine)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (document.body.dataset.cursor === "probe" && finePointer && !reduceMotion) {
  const glow = document.createElement("div");
  glow.className = "cursor-follow";
  glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);

  let x = 0;
  let y = 0;
  let cx = 0;
  let cy = 0;
  let seen = false;

  const follow = () => {
    cx += (x - cx) * 0.2;
    cy += (y - cy) * 0.2;
    glow.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      if (!seen) {
        cx = x;
        cy = y;
        seen = true;
        glow.classList.add("is-on");
      }
    },
    { passive: true }
  );

  window.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const node = document.createElement("span");
    node.className = "click-node";
    node.setAttribute("aria-hidden", "true");
    node.style.left = `${event.clientX}px`;
    node.style.top = `${event.clientY}px`;
    node.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2.4"/><circle cx="12" cy="12" r="7.2"/><path d="M12 1.5v3.2M12 19.3v3.2M1.5 12h3.2M19.3 12h3.2"/></svg>';
    document.body.appendChild(node);
    node.addEventListener("animationend", () => node.remove());
  });
}
