// CCEx Countdown Timer - Shared across all pages
(function() {
    var countdownInterval = null;

    var fairStart  = new Date('August 31, 2026 00:00:00').getTime();
    var fairEnd    = new Date('September 7, 2026 00:00:00').getTime(); // day after Sept 6
    var nextYear   = new Date('August 31, 2027 00:00:00').getTime();

    // Each fair day and the schedule anchor it belongs to, so the live badge
    // can send people straight to the right spot. Mirrors js/happening-now.js.
    var FAIR_DAYS = {
        '2026-08-31': 'day-aug31',
        '2026-09-01': 'day-sep1',
        '2026-09-02': 'day-sep2',
        '2026-09-03': 'day-sep3',
        '2026-09-04': 'day-sep4',
        '2026-09-05': 'day-sep5',
        '2026-09-06': 'day-sep6'
    };

    function todayKey() {
        var d = new Date();
        var m = d.getMonth() + 1;
        var day = d.getDate();
        return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
    }

    // Only rewritten when the day rolls over, so a page left open overnight
    // still points at the right day come morning.
    var liveDay = null;
    function renderLive(el) {
        var key = todayKey();
        if (liveDay === key) return;
        liveDay = key;

        var id = FAIR_DAYS[key];
        var onSchedule = /schedule-2026\.html$/.test(location.pathname);
        var href = 'schedule-2026.html';
        if (id) href = (onSchedule ? '' : 'schedule-2026.html') + '#' + id;

        el.innerHTML =
            '<a class="countdown-live" href="' + href + '">' +
                '<span class="countdown-live-dot" aria-hidden="true"></span>' +
                '<span class="countdown-live-text">' +
                    '<strong>Happening Now!</strong>' +
                    '<span class="countdown-live-sub">' +
                        (id ? "See today&rsquo;s schedule &rarr;" : 'See the schedule &rarr;') +
                    '</span>' +
                '</span>' +
            '</a>';
    }

    function updateCountdown() {
        var now = new Date().getTime();

        var daysEl      = document.getElementById('days');
        var hoursEl     = document.getElementById('hours');
        var minsEl      = document.getElementById('mins');
        var secsEl      = document.getElementById('secs');
        var countdownEl = document.getElementById('countdown');
        var labelEl     = document.querySelector('.countdown-label');

        if (!countdownEl) return;

        // Phase 3: after the exhibition — "See us next year"
        if (now >= fairEnd) {
            if (labelEl) labelEl.textContent = 'See us next year \u2014 CCEx 2027';
            var distance = nextYear - now;
            if (distance <= 0) {
                renderLive(countdownEl);
                return;
            }
            if (daysEl && hoursEl && minsEl && secsEl) {
                daysEl.textContent  = Math.floor(distance / (1000 * 60 * 60 * 24));
                hoursEl.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
                minsEl.textContent  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
                secsEl.textContent  = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
            }
            return;
        }

        // Phase 2: during the exhibition — a live badge linking to today
        if (now >= fairStart) {
            if (labelEl) labelEl.textContent = 'CCEx 2026 is on';
            renderLive(countdownEl);
            return;
        }

        // Phase 1: before the exhibition — countdown to Aug 31
        var distance = fairStart - now;
        if (daysEl && hoursEl && minsEl && secsEl) {
            daysEl.textContent  = Math.floor(distance / (1000 * 60 * 60 * 24));
            hoursEl.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
            minsEl.textContent  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
            secsEl.textContent  = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        }
    }

    function startCountdown() {
        if (countdownInterval) return;
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    function stopCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }

    // Pause when tab is hidden, resume when visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopCountdown();
        } else {
            startCountdown();
        }
    });

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startCountdown);
    } else {
        startCountdown();
    }
})();
