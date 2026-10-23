document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      menuToggle.textContent = open ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.textContent = "☰";
      });
    });
  }

  const form = document.getElementById("pilotForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const data = new FormData(form);

      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const region = String(data.get("region") || "").trim();
      const operation = String(data.get("operation") || "").trim();

      // Reemplazar por el número real de WhatsApp de AgroPilot.
      const phone = "56987782821";

      const messageText =
        `Hola, me interesa conversar sobre AgroPilot.\n\n` +
        `*Nombre:* ${name}\n` +
        `*Correo:* ${email}\n` +
        `*Región/comuna:* ${region || "No indicado"}\n` +
        `*Área de interés:* ${operation}\n\n` +
        `Me gustaría conocer más sobre la plataforma y sus servicios.`;

      const message = document.getElementById("formMessage");

      if (message) {
        message.textContent =
          "Abriendo WhatsApp con tu solicitud. Revisa el mensaje y envíalo para completar el contacto.";
      }

      const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  }
});
