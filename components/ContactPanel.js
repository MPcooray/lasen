"use client";

import { useState } from "react";

const EMAIL = "";

export default function ContactPanel() {
  const [status, setStatus] = useState("");

  const onSocial = (event) => {
    const href = event.currentTarget.getAttribute("href") || "";
    if (href.startsWith("#")) {
      event.preventDefault();
      setStatus("Add your GitHub and LinkedIn URLs, then this link will work.");
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !from || !message) {
      setStatus("Add your name, email, and a message.");
      return;
    }

    if (!EMAIL) {
      setStatus("Add Lasen’s email in the contact form, then this can open a mail draft.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${from}>`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
    event.currentTarget.reset();
  };

  return (
    <div className="contact-grid">
      <div className="contact-copy">
        <p className="statement">Have a project or an idea? Let’s connect.</p>
        <p>Coursework, a collaboration, or an internship. A message here opens an email draft.</p>
        <div className="social">
          <a href="#" onClick={onSocial}>
            GitHub
          </a>
          <a href="#" onClick={onSocial}>
            LinkedIn
          </a>
        </div>
      </div>
      <form id="contact-form" onSubmit={onSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <button type="submit">Open email draft</button>
        <p className="form-status" role="status">
          {status}
        </p>
      </form>
    </div>
  );
}
