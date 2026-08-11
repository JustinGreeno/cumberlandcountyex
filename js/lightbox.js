/* Poster lightbox
   Opens poster images in an overlay instead of dumping the visitor into a bare
   browser tab. Progressive enhancement: every poster is still a plain <a> to the
   image file, so without JS (or on ctrl/middle click) it behaves exactly as before.

   Layout-critical styles are set inline rather than left to style.css. This
   element is injected at the end of <body>, so if the stylesheet is stale,
   cached or slow, a class-only approach renders it as an unstyled block at the
   bottom of the page and focus jumps the reader down to it. Inline styles can't
   miss. The stylesheet still supplies the decorative layer on top. */
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

    /* Only placement goes inline - that's what breaks badly without CSS.
       Colour, border and hover stay in style.css so they can be themed
       without fighting inline specificity. */
    function styleBtn(btn, extra) {
        btn.style.position = 'fixed';
        btn.style.zIndex = '10000';
        btn.style.cursor = 'pointer';
        Object.keys(extra).forEach(function (k) { btn.style[k] = extra[k]; });
    }

    function build() {
        overlay = document.createElement('div');
        overlay.className = 'plb-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-modal', 'true');
        overlay.setAttribute('aria-label', 'Poster viewer');

        var critical = {
            position: 'fixed',
            top: '0', right: '0', bottom: '0', left: '0',
            zIndex: '9999',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 1rem',
            background: 'rgba(20,12,6,0.94)',
            opacity: '0',
            transition: reduceMotion ? 'none' : 'opacity 0.25s ease'
        };
        Object.keys(critical).forEach(function (k) { overlay.style[k] = critical[k]; });

        var fig = document.createElement('figure');
        fig.className = 'plb-figure';
        fig.style.margin = '0';
        fig.style.display = 'flex';
        fig.style.flexDirection = 'column';
        fig.style.alignItems = 'center';
        fig.style.gap = '0.75rem';
        fig.style.maxWidth = 'min(94vw, 900px)';

        var img = document.createElement('img');
        img.className = 'plb-img';
        img.alt = '';
        img.style.maxWidth = '100%';
        img.style.maxHeight = '82vh';

        var cap = document.createElement('figcaption');
        cap.className = 'plb-caption';

        fig.appendChild(img);
        fig.appendChild(cap);

        var close = document.createElement('button');
        close.type = 'button';
        close.className = 'plb-close';
        close.setAttribute('aria-label', 'Close poster');
        close.innerHTML = '&times;';
        styleBtn(close, { top: '1rem', right: '1.25rem', width: '44px', height: '44px', fontSize: '1.9rem' });

        var prev = document.createElement('button');
        prev.type = 'button';
        prev.className = 'plb-nav plb-prev';
        prev.setAttribute('aria-label', 'Previous poster');
        prev.innerHTML = '&#8249;';
        styleBtn(prev, { top: '50%', left: '1rem', transform: 'translateY(-50%)', width: '48px', height: '48px', fontSize: '2rem' });

        var next = document.createElement('button');
        next.type = 'button';
        next.className = 'plb-nav plb-next';
        next.setAttribute('aria-label', 'Next poster');
        next.innerHTML = '&#8250;';
        styleBtn(next, { top: '50%', right: '1rem', transform: 'translateY(-50%)', width: '48px', height: '48px', fontSize: '2rem' });

        overlay.appendChild(close);
        overlay.appendChild(prev);
        overlay.appendChild(fig);
        overlay.appendChild(next);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target === fig) { close_(); return; }
            if (e.target.closest('.plb-close')) { close_(); return; }
            if (e.target.closest('.plb-prev')) { e.stopPropagation(); step(-1); return; }
            if (e.target.closest('.plb-next')) { e.stopPropagation(); step(1); }
        });
    }

    function render() {
        var d = group[index];
        overlay.querySelector('.plb-img').src = d.src;
        overlay.querySelector('.plb-img').alt = d.alt;
        var cap = overlay.querySelector('.plb-caption');
        cap.textContent = d.caption;
        cap.style.display = d.caption ? '' : 'none';
        var multi = group.length > 1;
        overlay.querySelector('.plb-prev').style.display = multi ? '' : 'none';
        overlay.querySelector('.plb-next').style.display = multi ? '' : 'none';
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
        overlay.style.display = 'flex';
        overlay.classList.add('is-open');
        if (reduceMotion) {
            overlay.style.opacity = '1';
        } else {
            // One frame at opacity 0 so the transition actually runs
            requestAnimationFrame(function () { overlay.style.opacity = '1'; });
        }
        // preventScroll keeps focus from nudging the page underneath the overlay
        try { overlay.querySelector('.plb-close').focus({ preventScroll: true }); }
        catch (e) { overlay.querySelector('.plb-close').focus(); }
        document.addEventListener('keydown', onKey);
    }

    function close_() {
        if (!overlay) return;
        overlay.style.opacity = '0';
        overlay.style.display = 'none';
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onKey);
        if (lastFocused && lastFocused.focus) {
            try { lastFocused.focus({ preventScroll: true }); } catch (e) { lastFocused.focus(); }
        }
    }

    function onKey(e) {
        if (e.key === 'Escape') close_();
        else if (e.key === 'ArrowLeft') step(-1);
        else if (e.key === 'ArrowRight') step(1);
        else if (e.key === 'Tab') {
            var focusable = [];
            Array.prototype.forEach.call(overlay.querySelectorAll('button'), function (b) {
                if (b.style.display !== 'none') focusable.push(b);
            });
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
