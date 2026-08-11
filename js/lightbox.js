/* Poster lightbox
   Opens poster images in an overlay instead of dumping the visitor into a bare
   browser tab. Progressive enhancement: every poster is still a plain <a> to the
   image file, so without JS (or on ctrl/middle click) it behaves exactly as before. */
(function () {
    'use strict';

    var strips = document.querySelectorAll('.poster-strip');
    if (!strips.length) return;

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var overlay = null;
    var group = [];
    var index = 0;
    var lastFocused = null;

    function posterData(link) {
        var img = link.querySelector('img');
        var cap = link.querySelector('.poster-caption');
        return {
            src: link.getAttribute('href'),
            alt: img ? img.getAttribute('alt') || '' : '',
            caption: cap ? cap.textContent.trim() : ''
        };
    }

    function build() {
        overlay = document.createElement('div');
        overlay.className = 'plb-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Poster viewer');
        overlay.innerHTML =
            '<button class="plb-close" type="button" aria-label="Close poster">&times;</button>' +
            '<button class="plb-nav plb-prev" type="button" aria-label="Previous poster">&#8249;</button>' +
            '<figure class="plb-figure">' +
            '<img class="plb-img" alt="">' +
            '<figcaption class="plb-caption"></figcaption>' +
            '</figure>' +
            '<button class="plb-nav plb-next" type="button" aria-label="Next poster">&#8250;</button>';
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target.closest('.plb-close')) { close(); return; }
            var prev = e.target.closest('.plb-prev');
            var next = e.target.closest('.plb-next');
            if (prev) { e.stopPropagation(); step(-1); }
            if (next) { e.stopPropagation(); step(1); }
        });
    }

    function render() {
        var d = group[index];
        var img = overlay.querySelector('.plb-img');
        var cap = overlay.querySelector('.plb-caption');
        img.src = d.src;
        img.alt = d.alt;
        cap.textContent = d.caption;
        cap.style.display = d.caption ? '' : 'none';
        var multi = group.length > 1;
        overlay.querySelector('.plb-prev').hidden = !multi;
        overlay.querySelector('.plb-next').hidden = !multi;
    }

    function step(dir) {
        index = (index + dir + group.length) % group.length;
        render();
    }

    function open(links, start) {
        lastFocused = document.activeElement;
        group = Array.prototype.map.call(links, posterData);
        index = start;
        if (!overlay) build();
        render();
        document.body.style.overflow = 'hidden';
        overlay.classList.add('is-open');
        if (reduceMotion) overlay.classList.add('no-anim');
        overlay.querySelector('.plb-close').focus();
        document.addEventListener('keydown', onKey);
    }

    function close() {
        if (!overlay) return;
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
        if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    function onKey(e) {
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') step(-1);
        else if (e.key === 'ArrowRight') step(1);
        else if (e.key === 'Tab') {
            // Keep focus inside the dialog while it's open
            var focusable = overlay.querySelectorAll('button:not([hidden])');
            if (!focusable.length) return;
            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    }

    Array.prototype.forEach.call(strips, function (strip) {
        var links = strip.querySelectorAll('a.poster-thumb[href]');
        if (!links.length) return;
        Array.prototype.forEach.call(links, function (link, i) {
            link.addEventListener('click', function (e) {
                // Let people open posters in a new tab the normal ways
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                e.preventDefault();
                open(links, i);
            });
        });
    });
})();
