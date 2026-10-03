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
