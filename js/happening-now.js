/* "Happening Now" banner
   Appears at the top of the page only while the fair is actually running,
   Aug 31 - Sept 6 2026. It opens on today, but the day strip along the
   bottom lets anyone step to yesterday, tomorrow or any other day of the
   week without leaving the page they are on. Outside those dates nothing
   is inserted at all, so it can sit on the pages year-round without being
   switched on or off by hand.

   The `picks` list for each day is the four to six things worth stopping
   for. Sponsored events earn their place first, then the shows we built
   hero cards for, then the music - but once chosen they are listed in
   clock order, because that is how somebody standing on the grounds
   reads them.

   `hours` is the run of the day from the first scheduled event to the
   last, taken from schedule-2026.html. It is not a posted gate time. */
(function () {
    'use strict';

    var SCHEDULE = 'schedule-2026.html';

    var DAYS = [
        {
            date: '2026-08-31', id: 'day-aug31',
            dow: 'Mon', mon: 'Aug', num: '31', short: 'Mon 31',
            label: 'Monday, August 31', note: '4-H Day',
            hours: '7:00 AM &ndash; 7:00 PM',
            picks: [
                { t: '8:00 AM', n: '4-H Light &amp; Mini Horse Classes', href: '4h.html' },
                { t: '9:00 AM', n: 'Photography Competition' },
                { t: '4:00 PM', n: '4-H Fashion Show' },
                { t: '5:30 PM', n: 'Tug of War Preliminaries' },
                { t: '6:00 PM', n: 'Grand Champion Judging Practice' }
            ]
        },
        {
            date: '2026-09-01', id: 'day-sep1',
            dow: 'Tue', mon: 'Sep', num: '1', short: 'Tue 1',
            label: 'Tuesday, September 1', note: '4-H Day',
            hours: '8:00 AM &ndash; 8:00 PM',
            picks: [
                { t: '8:00 AM', n: '4-H Beef Showmanship', href: '4h.html' },
                { t: '4:00&ndash;8:00 PM', n: 'Exhibition Hall drop-off &mdash; the only window', href: 'exhibitors.html', k: 'key' },
                { t: '5:00 PM', n: 'Closing Ceremonies &amp; Jr. Ambassador' },
                { t: '6:00 PM', n: 'Scholarship Pig Auction' },
                { t: '7:00 PM', n: '4-H Tug of War Finals' }
            ]
        },
        {
            date: '2026-09-02', id: 'day-sep2',
            dow: 'Wed', mon: 'Sep', num: '2', short: 'Wed 2',
            label: 'Wednesday, September 2', note: 'Light Horse Show',
            hours: '10:00 AM &ndash; 9:00 PM',
            picks: [
                { t: '10:00 AM', n: 'Light Horse Show', href: 'horse-registration.html' },
                { t: '4:00&ndash;8:00 PM', n: 'East Cove Wave Karaoke', k: 'music' },
                { t: '6:00 PM', n: 'Daisy&rsquo;s Turn &amp; Burn Junior Jackpot' }
            ]
        },
        {
            date: '2026-09-03', id: 'day-sep3',
            dow: 'Thu', mon: 'Sep', num: '3', short: 'Thu 3',
            label: 'Thursday, September 3', note: 'Open Beef Show &amp; Car Show',
            hours: '9:00 AM &ndash; 9:00 PM',
            picks: [
                { t: '9:00 AM', n: 'Fort Equipment Open Beef Show', href: 'beef-registration.html', k: 'sponsor' },
                { t: '12:00 PM', n: 'Light Horse Show', href: 'horse-registration.html' },
                { t: '4:00 PM', n: 'Live Music &mdash; Deedra Green, Mainstreet Music Society', k: 'music' },
                { t: '5:00&ndash;9:00 PM', n: 'Classic Car &amp; Antique Tractor Show', href: 'events.html#show-and-shine' },
                { t: '7:30 PM', n: 'Junior &amp; Farmer Olympics' }
            ]
        },
        {
            date: '2026-09-04', id: 'day-sep4',
            dow: 'Fri', mon: 'Sep', num: '4', short: 'Fri 4',
            label: 'Friday, September 4', note: 'Horse Pulls tonight',
            hours: '9:00 AM &ndash; 9:00 PM',
            picks: [
                { t: '9:00 AM', n: 'Fort Equipment Open Beef Show', href: 'beef-registration.html', k: 'sponsor' },
                { t: 'All day', n: 'Chainsaw Carving' },
                { t: '12:30 PM', n: 'Live Music &mdash; Lost Highway, Carson Fullerton, Darren Howes', k: 'music' },
                { t: '6:00 PM', n: 'Junior Beef Auction', href: 'junior-beef-show.html' },
                { t: '7:00 PM', n: 'Heavy Horse Pulls', k: 'hero' }
            ]
        },
        {
            date: '2026-09-05', id: 'day-sep5',
            dow: 'Sat', mon: 'Sep', num: '5', short: 'Sat 5',
            label: 'Saturday, September 5', note: 'Parade &amp; Mud Stomp',
            hours: '8:00 AM &ndash; late &middot; Mud Stomp 9:00 PM',
            picks: [
                { t: '8:00 AM', n: 'Fort Equipment Open Beef Show', href: 'beef-registration.html', k: 'sponsor' },
                { t: '11:00 AM', n: 'Live Music &mdash; Michelle Marie, Ian Stewart, Barry Patriquin', k: 'music' },
                { t: '1:00 PM', n: 'The CCEx Parade', href: 'parade.html', k: 'hero' },
                { t: '5:45 PM', n: 'DG Sons Trucking Kids Show &rsquo;N Shine', href: 'show-n-shine.html', k: 'sponsor' },
                { t: '6:00 PM', n: 'Casey Concrete Strong Man', k: 'sponsor' },
                { t: '9:00 PM', n: 'Mud Stomp &middot; 19+', href: 'events.html#mud-stomp', k: 'hero' }
            ]
        },
        {
            date: '2026-09-06', id: 'day-sep6',
            dow: 'Sun', mon: 'Sep', num: '6', short: 'Sun 6',
            label: 'Sunday, September 6', note: 'Final day',
            hours: '8:00 AM &ndash; 1:00 PM',
            picks: [
                { t: '8:00 AM', n: 'Junior Beef Show', href: 'junior-beef-show.html' },
                { t: '10:00 AM&ndash;12:00 PM', n: 'Exhibition Hall &mdash; last chance', href: 'exhibitors.html' },
                { t: 'Time TBA', n: 'Future Farmer Awards &mdash; Farm Credit Canada', href: 'future-farmer.html', k: 'sponsor' }
            ]
        }
    ];

    function todayKey() {
        var d = new Date();
        var m = d.getMonth() + 1;
        var day = d.getDate();
        return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
    }

    var key = todayKey();
    var today = -1;
    for (var i = 0; i < DAYS.length; i++) {
        if (DAYS[i].date === key) { today = i; break; }
    }
    if (today === -1) return; // not during the fair - add nothing

    var main = document.getElementById('main') || document.querySelector('main');
    if (!main) return;

    // Same-page anchors on the schedule itself, cross-page links everywhere else
    var onSchedule = new RegExp(SCHEDULE.replace('.', '\\.') + '$').test(location.pathname);
    function dayHref(day) { return (onSchedule ? '' : SCHEDULE) + '#' + day.id; }

    var sel = today;

    var banner = document.createElement('aside');
    banner.className = 'happening-now';
    banner.setAttribute('aria-label', 'The exhibition is on today');

    banner.innerHTML =
        '<div class="hn-inner">' +
            '<div class="hn-head">' +
                '<div class="hn-cal" aria-hidden="true">' +
                    '<span class="hn-cal-mon"></span>' +
                    '<span class="hn-cal-num"></span>' +
                    '<span class="hn-cal-dow"></span>' +
                '</div>' +
                '<div class="hn-text">' +
                    '<span class="hn-eyebrow"></span>' +
                    '<strong class="hn-date"></strong>' +
                    '<span class="hn-meta"></span>' +
                '</div>' +
                '<a class="hn-link" href="#"><span class="hn-link-text"></span><span class="hn-arrow" aria-hidden="true">&rarr;</span></a>' +
            '</div>' +
            '<div class="hn-picks"></div>' +
            '<div class="hn-days" role="group" aria-label="Pick a day of the fair"></div>' +
        '</div>';

    var elCalMon  = banner.querySelector('.hn-cal-mon');
    var elCalNum  = banner.querySelector('.hn-cal-num');
    var elCalDow  = banner.querySelector('.hn-cal-dow');
    var elEyebrow = banner.querySelector('.hn-eyebrow');
    var elDate    = banner.querySelector('.hn-date');
    var elMeta    = banner.querySelector('.hn-meta');
    var elLink    = banner.querySelector('.hn-link');
    var elLinkTxt = banner.querySelector('.hn-link-text');
    var elPicks   = banner.querySelector('.hn-picks');
    var elDays    = banner.querySelector('.hn-days');

    // The day strip. Built once; only the state classes change after that.
    for (var d = 0; d < DAYS.length; d++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'hn-day-btn';
        b.setAttribute('data-i', String(d));
        b.innerHTML = DAYS[d].short;
        elDays.appendChild(b);
    }
    var dayBtns = elDays.querySelectorAll('.hn-day-btn');

    function render() {
        var day = DAYS[sel];
        var isToday = sel === today;
        var offset = sel - today;
        var weekday = day.label.split(',')[0];

        elCalMon.innerHTML = day.mon;
        elCalNum.innerHTML = day.num;
        elCalDow.innerHTML = day.dow;

        var when = isToday ? 'Today at the fair'
                 : offset === 1 ? 'Tomorrow'
                 : offset === -1 ? 'Yesterday'
                 : weekday;

        elEyebrow.innerHTML =
            (isToday ? '<span class="hn-dot" aria-hidden="true"></span>' : '') +
            when +
            '<span class="hn-sep" aria-hidden="true"></span>' +
            '<span class="hn-count">Day ' + (sel + 1) + ' of 7</span>' +
            (isToday ? '' : '<button type="button" class="hn-back">&larr; Back to today</button>');

        elDate.innerHTML = day.label;

        elMeta.innerHTML =
            (day.note ? '<span class="hn-note">' + day.note + '</span>' : '') +
            '<span class="hn-hours"><span class="hn-hours-icon" aria-hidden="true">&#9200;</span>' + day.hours + '</span>';

        var picks = '';
        for (var p = 0; p < day.picks.length; p++) {
            var pick = day.picks[p];
            var cls = 'hn-pick' + (pick.k ? ' is-' + pick.k : '');
            var body = '<span class="hn-pick-t">' + pick.t + '</span>' +
                       '<span class="hn-pick-n">' + pick.n + '</span>';
            picks += pick.href
                ? '<a class="' + cls + '" href="' + pick.href + '">' + body + '</a>'
                : '<span class="' + cls + '">' + body + '</span>';
        }
        elPicks.innerHTML = picks;

        elLink.href = dayHref(day);
        elLinkTxt.innerHTML = onSchedule
            ? (isToday ? 'See full schedule' : 'Jump to ' + weekday)
            : (isToday ? 'See today&rsquo;s schedule' : 'See ' + weekday + '&rsquo;s schedule');

        for (var q = 0; q < dayBtns.length; q++) {
            var btn = dayBtns[q];
            var state = 'hn-day-btn';
            if (q < today) state += ' is-past';
            if (q === today) state += ' is-today';
            if (q === sel) state += ' is-selected';
            btn.className = state;
            btn.setAttribute('aria-pressed', q === sel ? 'true' : 'false');
            btn.setAttribute('aria-label', DAYS[q].label + (q === today ? ' (today)' : ''));
        }
    }

    // One listener on the banner covers the day strip and the back-to-today
    // button, which is rebuilt on every render.
    banner.addEventListener('click', function (e) {
        var btn = e.target.closest ? e.target.closest('.hn-day-btn, .hn-back') : null;
        if (!btn) return;
        if (btn.classList.contains('hn-back')) {
            sel = today;
        } else {
            sel = parseInt(btn.getAttribute('data-i'), 10);
        }
        render();
    });

    // Left/right arrows walk the week once a day button has focus.
    elDays.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        var next = sel + (e.key === 'ArrowRight' ? 1 : -1);
        if (next < 0 || next >= DAYS.length) return;
        e.preventDefault();
        sel = next;
        render();
        dayBtns[sel].focus();
    });

    render();
    main.insertBefore(banner, main.firstChild);
})();
