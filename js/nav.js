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
    });
})();
