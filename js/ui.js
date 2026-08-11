(function () {
    'use strict';

    /* =============================================
       1. BACK TO TOP BUTTON
    ============================================= */
    const topBtn = document.createElement('button');
    topBtn.className = 'back-to-top';
    topBtn.setAttribute('aria-label', 'Back to top');
    topBtn.innerHTML = '&#8679;';
    document.body.appendChild(topBtn);

    var footer = document.querySelector('footer');
    var BTN_MARGIN = 20; // px gap between button and footer

    function updateTopBtn() {
        topBtn.classList.toggle('visible', window.scrollY > 380);

        if (footer) {
            var footerTop = footer.getBoundingClientRect().top;
            var viewportH  = window.innerHeight;
            if (footerTop < viewportH) {
                // Footer is partially visible — lift button above it
                topBtn.style.bottom = (viewportH - footerTop + BTN_MARGIN) + 'px';
            } else {
                topBtn.style.bottom = '';
            }
        }
    }

    window.addEventListener('scroll', updateTopBtn, { passive: true });
    window.addEventListener('resize', updateTopBtn);

    topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    /* =============================================
       2. STAGGERED CARD ENTRANCE ANIMATIONS
    ============================================= */
    var cardSelectors = [
        '.activity-card',
        '.info-card',
        '.sponsor-card',
        '.feature-item',
        '.merch-card',
        '.ticket-card'
    ].join(', ');

    var allCards = document.querySelectorAll(cardSelectors);

    if (allCards.length) {
        // Group cards by parent so each grid staggers independently
        var parentMap = new Map();
        allCards.forEach(function (card) {
            var p = card.parentElement;
            if (!parentMap.has(p)) parentMap.set(p, []);
            parentMap.get(p).push(card);
        });

        parentMap.forEach(function (cards) {
            cards.forEach(function (card, i) {
                card.classList.add('card-animate');
                card.style.setProperty('--card-delay', (i * 0.07) + 's');
            });
        });

        var cardObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

        allCards.forEach(function (card) { cardObserver.observe(card); });
    }


    /* =============================================
       3. RANDOM RIBBON DECORATIONS
       Picks a random ribbon for each panel on every page load.
    ============================================= */
    var ribbons = ['first', 'second', 'green', 'purple'];

    document.querySelectorAll('.panel, .panel-wooden, .panel-rope').forEach(function (el) {
        el.setAttribute('data-ribbon', ribbons[Math.floor(Math.random() * ribbons.length)]);
    });


    /* =============================================
       4. DEADLINE PASSED BANNERS
       Marked up with data-deadline="YYYY-MM-DD". Revealed once that day is
       over, so a deadline can be set in advance and its banner appears by
       itself. Banners for deadlines already gone by ship visible in the HTML,
       so they still show even if this script never runs.

       Must stay ABOVE the day-section early return below - these banners live
       on registration pages, which have no schedule on them.
    ============================================= */
    document.querySelectorAll('.deadline-passed[data-deadline]').forEach(function (el) {
        var parts = el.getAttribute('data-deadline').split('-');
        if (parts.length !== 3) return;
        // End of the deadline day, on the visitor's own clock
        var cutoff = new Date(+parts[0], +parts[1] - 1, +parts[2], 23, 59, 59);
        el.hidden = Date.now() <= cutoff.getTime();
    });


    /* =============================================
       5. SCHEDULE: EVENT BADGES
       (only runs when .day-section elements exist)

       NOTE: the sticky day navigation lives in schedule-2026.html, which
       owns the pill markup, the scrollspy and the "happening now" highlight.
       This file must NOT build a second nav or reassign .day-section ids,
       because doing so broke the pills' jump-to-day targets.
    ============================================= */
    var daySections = document.querySelectorAll('.day-section');
    if (!daySections.length) return;


    // --- Event category badges ---
    var categories = [
        { re: /horse\s*pull/i,                                        label: 'Horse Pull',  cls: 'badge-horsepull'    },
        { re: /4[-\s]?H\b/i,                                          label: '4-H',         cls: 'badge-4h'           },
        { re: /\b(beef|dairy|cattle|calf|heifer|steer|bovine)\b/i,    label: 'Livestock',   cls: 'badge-livestock'    },
        { re: /\b(horse|draft|barrel|equine|light\s*horse)\b/i,       label: 'Horse',       cls: 'badge-horse'        },
        { re: /\b(dog|canine)\b/i,                                    label: 'Dogs',        cls: 'badge-dogs'         },
        { re: /\b(rabbit|cavy|poultry|pig|swine|small\s*animal)\b/i,  label: 'Small Animals', cls: 'badge-small'      },
        { re: /\b(ceremony|closing|parade|awards|auction|ambassador)\b/i, label: 'Featured', cls: 'badge-special'    },
        { re: /\b(music|band|dance|concert|entertainment)\b/i,        label: 'Entertainment', cls: 'badge-entertainment' }
    ];

    document.querySelectorAll('.schedule-item').forEach(function (item) {
        var eventEl = item.querySelector('.schedule-event');
        if (!eventEl) return;
        var text = eventEl.textContent;
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].re.test(text)) {
                var badge = document.createElement('span');
                badge.className = 'event-badge ' + categories[i].cls;
                badge.textContent = categories[i].label;
                eventEl.appendChild(badge);
                break;
            }
        }
    });

})();
