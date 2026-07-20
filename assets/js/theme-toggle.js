(function () {
  "use strict";

  const root = document.documentElement;
  const storageKey = "theme";
  const systemTheme = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  function readStoredTheme() {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      return savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : null;
    } catch (error) {
      return null;
    }
  }

  function preferredTheme() {
    const savedTheme = readStoredTheme();
    if (savedTheme) {
      return savedTheme;
    }
    return systemTheme && systemTheme.matches ? "dark" : "light";
  }

  function updateThemeColor(theme) {
    const themeColorMeta = document.getElementById("theme-color-meta");
    if (!themeColorMeta) {
      return;
    }

    themeColorMeta.content = theme === "dark"
      ? themeColorMeta.dataset.dark
      : themeColorMeta.dataset.light;
  }

  function updateToggle(theme) {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    const isDark = theme === "dark";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    const visibleLabel = isDark ? "Light mode" : "Dark mode";
    const icon = toggle.querySelector(".theme-toggle-icon");
    const text = toggle.querySelector(".theme-toggle-text");

    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.title = label;

    if (icon) {
      icon.classList.toggle("fa-sun", isDark);
      icon.classList.toggle("fa-moon", !isDark);
    }
    if (text) {
      text.textContent = visibleLabel;
    }
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    updateThemeColor(theme);
    updateToggle(theme);

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // The visual theme can still change when storage is unavailable.
      }
    }

    if (typeof BeautifulJekyllJS !== "undefined") {
      BeautifulJekyllJS.initNavbar();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    applyTheme(root.dataset.theme || preferredTheme(), false);

    if (toggle) {
      toggle.addEventListener("click", function () {
        const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme, true);
      });
    }

    if (systemTheme) {
      const handleSystemThemeChange = function (event) {
        if (!readStoredTheme()) {
          applyTheme(event.matches ? "dark" : "light", false);
        }
      };

      if (systemTheme.addEventListener) {
        systemTheme.addEventListener("change", handleSystemThemeChange);
      } else if (systemTheme.addListener) {
        systemTheme.addListener(handleSystemThemeChange);
      }
    }

    window.requestAnimationFrame(function () {
      root.classList.add("theme-ready");
    });
  });
})();
