/******/ (() => { // webpackBootstrap
/*!***************************************************!*\
  !*** ./src/blocks/form-overlay-addon/frontend.js ***!
  \***************************************************/
/*
 * Frontend-Script für den Block.
 */
document.addEventListener("DOMContentLoaded", () => {
  /* Button reinschieben */
  document.querySelectorAll(".wp-block-ud-form-overlay-addon").forEach(el => {
    el.classList.add("is-ready");
  });
  const instances = document.querySelectorAll(".wp-block-ud-form-overlay-addon");
  if (!instances.length) return;
  instances.forEach(instance => {
    const trigger = instance.querySelector(".ud-form-overlay-addon__trigger");
    const overlay = instance.querySelector(".ud-form-overlay-addon__overlay");
    const panel = instance.querySelector(".ud-form-overlay-addon__panel");
    const closeBtn = instance.querySelector(".ud-form-overlay-addon__close");
    const backdrop = instance.querySelector(".ud-form-overlay-addon__backdrop");
    if (!trigger || !overlay || !panel) return;
    const closeOnBackdrop = instance.dataset.closeBackdrop === "true";
    const closeOnEscape = instance.dataset.closeEscape === "true";
    let lastFocusedElement = null;
    const open = () => {
      lastFocusedElement = document.activeElement;
      overlay.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          instance.classList.add("is-open");
        });
      });
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        panel.setAttribute("tabindex", "-1");
        panel.focus();
      }, 50);
    };
    const close = () => {
      trigger.setAttribute("aria-expanded", "false");
      instance.classList.remove("is-open");
      document.body.style.overflow = "";
      window.setTimeout(() => {
        overlay.hidden = true;
        if (lastFocusedElement) {
          lastFocusedElement.focus();
        }
      }, 320);
    };

    // Trigger
    trigger.addEventListener("click", e => {
      e.preventDefault();
      open();
    });

    // Close Button
    if (closeBtn) {
      closeBtn.addEventListener("click", e => {
        e.preventDefault();
        close();
      });
    }

    // Backdrop
    if (backdrop && closeOnBackdrop) {
      backdrop.addEventListener("click", () => {
        close();
      });
    }

    // ESC
    if (closeOnEscape) {
      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && instance.classList.contains("is-open")) {
          close();
        }
      });
    }
  });
});
/******/ })()
;
//# sourceMappingURL=form-overlay-addon-frontend-script.js.map