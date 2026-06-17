/* Linen & Key — site interactions */
(function () {
  "use strict";

  /* ---- mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- quote form validation ---- */
  var form = document.getElementById("quote-form");
  if (!form) return;

  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setInvalid(field, bad) {
    field.classList.toggle("invalid", bad);
  }

  function validateField(input) {
    var field = input.closest(".field");
    if (!field) return true;
    var val = (input.value || "").trim();
    var ok = true;
    if (input.hasAttribute("required") && !val) ok = false;
    if (ok && input.type === "email" && val && !emailRe.test(val)) ok = false;
    if (ok && input.type === "tel" && val && val.replace(/\D/g, "").length < 7) ok = false;
    setInvalid(field, !ok);
    return ok;
  }

  form.querySelectorAll("input,select,textarea").forEach(function (el) {
    el.addEventListener("blur", function () { validateField(el); });
    el.addEventListener("input", function () {
      if (el.closest(".field").classList.contains("invalid")) validateField(el);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var fields = form.querySelectorAll("input,select,textarea");
    var allOk = true, firstBad = null;
    fields.forEach(function (el) {
      if (!validateField(el)) { allOk = false; if (!firstBad) firstBad = el; }
    });
    if (!allOk) { if (firstBad) firstBad.focus(); return; }

    /* mailto fallback: open the visitor's email app pre-filled to the business inbox */
    var get = function (n) { var el = form.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ""; };
    var to = form.getAttribute("data-email") || "hello@linenkey.com";
    var subject = "Quote request — " + (get("service") || "Linen & Key") + (get("name") ? " (" + get("name") + ")" : "");
    var body = [
      "Name: " + get("name"),
      "Email: " + get("email"),
      "Phone: " + get("phone"),
      "Service: " + get("service"),
      "Bedrooms / size: " + get("size"),
      "Frequency: " + get("frequency"),
      "Preferred start date: " + get("start_date"),
      "Heard about us: " + get("referral"),
      "",
      "Notes:",
      get("notes")
    ].join("\n");
    window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    var ok = document.querySelector(".form-success");
    if (ok) { ok.style.display = "block"; ok.scrollIntoView({ behavior: "smooth", block: "center" }); }
    form.reset();
  });
})();
