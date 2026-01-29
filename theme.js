/**
 * Theme Toggle System
 * Manages dark/light mode with localStorage persistence
 */

(function() {
    'use strict';

    const THEME_KEY = 'ideology-matrix-theme';
    const DARK = 'dark';
    const LIGHT = 'light';

    // Safe localStorage access
    function safeGetItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return null;
        }
    }

    function safeSetItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            // Ignore - localStorage unavailable (private browsing, etc.)
        }
    }

    // Get saved theme or detect system preference
    function getPreferredTheme() {
        const saved = safeGetItem(THEME_KEY);
        if (saved) return saved;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return DARK;
        }
        return LIGHT;
    }

    // Apply theme to document
    function setTheme(theme) {
        if (theme === DARK) {
            document.documentElement.setAttribute('data-theme', DARK);
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        safeSetItem(THEME_KEY, theme);
        updateToggleButton(theme);
    }

    // Update button appearance
    function updateToggleButton(theme) {
        const btn = document.querySelector('.theme-toggle');
        if (btn) {
            btn.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
            btn.setAttribute('title', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
        }
    }

    // Toggle between themes
    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === DARK ? LIGHT : DARK);
    }

    // Create and inject the toggle button
    function createToggleButton() {
        const btn = document.createElement('button');
        btn.className = 'theme-toggle';
        btn.type = 'button';
        btn.innerHTML = `
            <span class="icon-sun" aria-hidden="true">&#9728;</span>
            <span class="icon-moon" aria-hidden="true">&#9790;</span>
        `;
        btn.addEventListener('click', toggleTheme);
        document.body.appendChild(btn);
        return btn;
    }

    // Initialize on DOM ready
    function init() {
        // Apply theme immediately to prevent flash
        setTheme(getPreferredTheme());

        // Create button when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', createToggleButton);
        } else {
            createToggleButton();
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleThemeChange = (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!safeGetItem(THEME_KEY)) {
                    setTheme(e.matches ? DARK : LIGHT);
                }
            };
            mediaQuery.addEventListener('change', handleThemeChange);

            // Clean up listener on page unload to prevent memory leak
            window.addEventListener('unload', () => {
                mediaQuery.removeEventListener('change', handleThemeChange);
            });
        }
    }

    // Apply theme before DOM loads to prevent flash of wrong theme
    const saved = safeGetItem(THEME_KEY);
    if (saved === DARK) {
        document.documentElement.setAttribute('data-theme', DARK);
    } else if (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', DARK);
    }

    // Full init on load
    init();
})();
