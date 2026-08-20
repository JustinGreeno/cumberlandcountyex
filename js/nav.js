// CCEx Navigation Enhancements
// Layers accessibility and convenience onto the existing hamburger menu.
// The page's inline toggleMobileMenu() still owns the open/close class toggle —
// this file never binds a second click handler to it.
(function () {
    'use strict';

    var MOBILE_BREAKPOINT = 1150;

    document.addEventListener('DOMContentLoaded', function () {
        var nav = document.querySelector('header nav');
        if (!nav) return;

        var menu = document.getElementById('navMenu');
        var hamburger = nav.querySelector('.hamburger');
        if (!menu || !hamburger) return;

        // Give the hamburger div real button semantics
        hamburger.setAttribute('role', 'button');
        hamburger.setAttribute('tabindex', '0');
        hamburger.setAttribute('aria-label', 'Menu');
        hamburger.setAttribute('aria-controls', 'navMenu');
        hamburger.setAttribute('aria-expanded', 'false');

        function isOpen() {
            return menu.classList.contains('mobile-open');
        }

        function closeMenu() {
            menu.classList.remove('mobile-open');
            hamburger.classList.remove('active');
        }

        // Keyboard activation (Enter / Space)
        hamburger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                e.preventDefault();
                if (typeof window.toggleMobileMenu === 'function') {
                    window.toggleMobileMenu();
                } else {
                    menu.classList.toggle('mobile-open');
                    hamburger.classList.toggle('active');
                }
            }
        });

        // Keep aria-expanded in sync no matter what opened or closed the menu
        if (window.MutationObserver) {
            new MutationObserver(function () {
                hamburger.setAttribute('aria-expanded', isOpen() ? 'true' : 'false');
            }).observe(menu, { attributes: true, attributeFilter: ['class'] });
        }

        // Escape closes the menu and returns focus to the button
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen()) {
                closeMenu();
                hamburger.focus();
            }
        });

        // Tapping a destination link closes the menu; section headers keep it open
        menu.addEventListener('click', function (e) {
            var link = e.target.closest ? e.target.closest('a') : null;
            if (!link) return;
            if (link.parentElement.classList.contains('has-dropdown')) return;
            if (window.innerWidth <= MOBILE_BREAKPOINT) closeMenu();
        });

        // Resizing back to desktop should not leave a stuck-open panel
        window.addEventListener('resize', function () {
            if (window.innerWidth > MOBILE_BREAKPOINT && isOpen()) closeMenu();
        });

        // Open the section containing the current page so mobile users land oriented
        var activeChild = menu.querySelector('.dropdown a.active');
        if (activeChild) {
            var section = activeChild.closest('.has-dropdown');
            if (section) section.classList.add('open');
        }

        /* -----------------------------------------------------------------
           KEEP DROPDOWN PANELS INSIDE THE VIEWPORT

           Panels are CSS-positioned with `right: 0`, so they hang off the
           right edge of whichever tab opened them. That is fine until the
           header wraps at medium widths and moves the tabs — then a wide
           panel can run off the side of the window. Rather than hand-tune
           each menu, measure every panel and write any needed correction
           into --dd-shift, which style.css folds into the panel's
           transform. Panels that already fit get a shift of 0.
        ----------------------------------------------------------------- */
        var EDGE_GAP = 8; // px of breathing room to leave at the window edge

        function clampPanel(panel) {
            // Clear any previous correction so we measure the natural position
            panel.style.setProperty('--dd-shift', '0px');

            var rect = panel.getBoundingClientRect();
            var limit = document.documentElement.clientWidth - EDGE_GAP;
            var shift = 0;

            if (rect.right > limit) shift = limit - rect.right;
            // Pulling it off the right edge must not push it off the left one.
            // A panel too wide for the window lands flush left and relies on
            // the max-width in style.css to stay inside.
            if (rect.left + shift < EDGE_GAP) shift = EDGE_GAP - rect.left;

            if (shift) panel.style.setProperty('--dd-shift', Math.round(shift) + 'px');
        }

        var panels = Array.prototype.slice.call(nav.querySelectorAll('.dropdown'));

        // Hidden panels are still laid out, so they can be measured before the
        // first hover. Doing it up front keeps the open animation purely
        // vertical — measuring on hover would slide the panel in sideways.
        function measureAll() {
            if (window.innerWidth <= MOBILE_BREAKPOINT) {
                // The stacked mobile menu is full width; a leftover shift there
                // would just knock the panel out of line.
                panels.forEach(function (panel) {
                    panel.style.setProperty('--dd-shift', '0px');
                });
                return;
            }
            panels.forEach(clampPanel);
        }

        measureAll();

        // A late-arriving webfont changes label widths, so measure again once
        // the fonts settle. Harmless where the API isn't supported.
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(measureAll).catch(function () {});
        }

        var resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(measureAll, 120);
        });
    });
})();
