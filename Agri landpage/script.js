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
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
    }));
  }

  const form = document.getElementById("pilotForm");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const region = String(data.get("region") || "").trim();
    const operation = String(data.get("operation") || "").trim();
    const recipient = "crquijadap@gmail.com";
    const subject = encodeURIComponent("Interés en piloto AgroPilot");
    const body = encodeURIComponent(
      `Hola, me interesa conversar sobre un posible piloto de AgroPilot.\n\nNombre: ${name}\nCorreo: ${email}\nRegión/comuna: ${region || "No indicado"}\nFaena: ${operation}\n\nEnviado desde la web de AgroPilot.`
    );
    const message = document.getElementById("formMessage");
    if (message) message.textContent = "Se abrirá tu aplicación de correo con la solicitud preparada. Revisa y envía el mensaje para completar el contacto.";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
});
