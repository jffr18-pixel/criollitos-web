/* Criollitos Venezuelan Food — interacciones ligeras */
(function () {
  "use strict";

  /* --- Menú móvil --- */
  var toggle = document.querySelector(".nav-toggle");
  var list = document.getElementById("nav-list");

  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Cerrar al pulsar un enlace
    list.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        list.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* --- Año dinámico en el pie --- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Indicador "Abierto ahora" ---
     HORARIO: [horaApertura, horaCierre] por día (0=domingo ... 6=sábado).
     Pon null si un día se cierra. Las medias horas van con decimales (13.5 = 13:30). */
  var SCHEDULE = {
    0: [12, 23], // domingo
    1: [12, 23], // lunes
    2: [12, 23], // martes
    3: [12, 23], // miércoles
    4: [12, 23], // jueves
    5: [12, 23], // viernes
    6: [12, 23]  // sábado
  };

  var badge = document.getElementById("open-status");
  var badgeText = document.getElementById("open-status-text");
  if (badge && badgeText) {
    var now = new Date();
    var today = SCHEDULE[now.getDay()];
    var hour = now.getHours() + now.getMinutes() / 60;
    var fmt = function (h) {
      var m = Math.round((h % 1) * 60);
      return (h < 10 ? "0" : "") + Math.floor(h) + ":" + (m < 10 ? "0" : "") + m;
    };

    if (today && hour >= today[0] && hour < today[1]) {
      badge.classList.add("is-open");
      badgeText.textContent = "Abierto ahora · cerramos a las " + fmt(today[1]);
    } else {
      // Busca la próxima apertura (hoy más tarde o días siguientes)
      var next = null;
      if (today && hour < today[0]) {
        next = "hoy a las " + fmt(today[0]);
      } else {
        for (var i = 1; i <= 7; i++) {
          var d = SCHEDULE[(now.getDay() + i) % 7];
          if (d) {
            var names = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
            next = (i === 1 ? "mañana" : "el " + names[(now.getDay() + i) % 7]) + " a las " + fmt(d[0]);
            break;
          }
        }
      }
      badge.classList.add("is-closed");
      badgeText.textContent = next ? "Ahora cerrado · abrimos " + next : "Consulta nuestro horario";
    }
    badge.hidden = false;
  }

  /* --- Animación de aparición al hacer scroll --- */
  var targets = document.querySelectorAll(
    ".section h2, .section-lead, .dish-card, .g-item, .delivery-card, .review-card, .about-text, .info-list li"
  );
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }
})();
