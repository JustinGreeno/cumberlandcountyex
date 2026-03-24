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
       3. SCHEDULE: DAY NAVIGATION + EVENT BADGES
       (only runs when .day-section elements exist)
    ============================================= */
    var daySections = document.querySelectorAll('.day-section');
    if (!daySections.length) return;

    // --- Day navigation bar ---
    var header = document.querySelector('header');
    var headerH = header ? header.offsetHeight : 0;

    var dayNav = document.createElement('div');
    dayNav.className = 'schedule-day-nav';
    dayNav.style.top = headerH + 'px';

    daySections.forEach(function (section, i) {
        var dayHeader = section.querySelector('.day-header');
        if (!dayHeader) return;

        var id = 'day-' + (i + 1);
        section.id = id;

        // Extract "Mon 25" style label
        var text = dayHeader.textContent.trim();
        var m = text.match(/^(\w{3})\w*,?\s+\w+\s+(\d+)/);
        var label = m ? m[1] + ' ' + m[2] : 'Day ' + (i + 1);

        var link = document.createElement('a');
        link.href = '#' + id;
        link.textContent = label;
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.getElementById(id);
            if (target) {
                var offset = headerH + dayNav.offsetHeight + 8;
                var top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
        dayNav.appendChild(link);
    });

    var main = document.querySelector('main');
    var container = main ? main.querySelector('.container') : null;
    if (main && container) {
        main.insertBefore(dayNav, container);
    }

    // Highlight active day as user scrolls
    var navLinks = dayNav.querySelectorAll('a');
    var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var link = dayNav.querySelector('a[href="#' + entry.target.id + '"]');
            if (link) link.classList.toggle('active', entry.isIntersecting);
        });
    }, { rootMargin: '-15% 0px -75% 0px' });

    daySections.forEach(function (s) { sectionObserver.observe(s); });


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
