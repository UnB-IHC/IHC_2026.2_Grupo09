(() => {
  "use strict";

  const storageKey = "pocket-accessibility";
  const root = document.documentElement;
  const minSize = 80;
  const maxSize = 150;
  let preferences = { dark: false, contrast: false, fontSize: 100 };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved === "object") {
      preferences.dark = saved.dark === true;
      preferences.contrast = saved.contrast === true;
      if (Number.isInteger(saved.fontSize)) {
        preferences.fontSize = Math.max(minSize, Math.min(maxSize, saved.fontSize));
      }
    }
  } catch {
    // Os controles também funcionam quando o armazenamento está indisponível.
  }

  function applyPreferences() {
    root.dataset.pocketTheme = preferences.dark ? "dark" : "light";
    root.dataset.pocketContrast = String(preferences.contrast);
    root.style.setProperty("--pocket-font-size", `${preferences.fontSize}%`);
    root.style.setProperty("--pocket-font-scale", preferences.fontSize / 100);
  }

  applyPreferences();

  function initializeControls() {
    const controls = document.querySelector(".pocket-accessibility");
    if (!controls || controls.dataset.initialized) return;
    controls.dataset.initialized = "true";

    const header = controls.closest("header");
    function updateHeaderHeight() {
      const margin = parseFloat(getComputedStyle(header).marginTop) || 0;
      root.style.setProperty("--pocket-header-height", `${header.offsetHeight + margin}px`);
    }
    updateHeaderHeight();
    if ("ResizeObserver" in window) {
      new ResizeObserver(updateHeaderHeight).observe(header);
    } else {
      window.addEventListener("resize", updateHeaderHeight);
    }

    const theme = controls.querySelector('[data-pocket-action="theme"]');
    const contrast = controls.querySelector('[data-pocket-action="contrast"]');
    const increase = controls.querySelector('[data-pocket-action="increase"]');
    const decrease = controls.querySelector('[data-pocket-action="decrease"]');
    const status = controls.querySelector('[role="status"]');

    function updateControls() {
      theme.disabled = false;
      contrast.disabled = false;
      theme.setAttribute("aria-pressed", String(preferences.dark));
      contrast.setAttribute("aria-pressed", String(preferences.contrast));
      theme.title = `${preferences.dark ? "Desativar" : "Ativar"} modo escuro`;
      contrast.title = `${preferences.contrast ? "Desativar" : "Ativar"} alto contraste`;
      increase.disabled = preferences.fontSize >= maxSize;
      decrease.disabled = preferences.fontSize <= minSize;
    }

    controls.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-pocket-action]");
      if (!button || button.disabled) return;

      switch (button.dataset.pocketAction) {
        case "theme":
          preferences.dark = !preferences.dark;
          status.textContent = `Modo escuro ${preferences.dark ? "ativado" : "desativado"}.${preferences.contrast ? " Alto contraste permanece ativo." : ""}`;
          break;
        case "contrast":
          preferences.contrast = !preferences.contrast;
          status.textContent = `Alto contraste ${preferences.contrast ? "ativado" : "desativado"}.`;
          break;
        case "increase":
          preferences.fontSize = Math.min(maxSize, preferences.fontSize + 10);
          status.textContent = `Tamanho do texto: ${preferences.fontSize}%.`;
          break;
        case "decrease":
          preferences.fontSize = Math.max(minSize, preferences.fontSize - 10);
          status.textContent = `Tamanho do texto: ${preferences.fontSize}%.`;
          break;
        default:
          return;
      }

      applyPreferences();
      updateControls();
      try {
        localStorage.setItem(storageKey, JSON.stringify(preferences));
      } catch {
        // Mantém as preferências nesta página se não for possível salvá-las.
      }
    });

    updateControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeControls, { once: true });
  } else {
    initializeControls();
  }
})();
