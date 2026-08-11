/* "Happening Now" banner
   Appears at the top of the page only while the fair is actually running,
   Aug 31 - Sept 6 2026, and points at today's spot in the schedule. Outside
   those dates nothing is inserted at all, so it can sit on the pages
   year-round without needing to be switched on or off by hand. */
(function () {
    'use strict';

    var DAYS = [
        { date: '2026-08-31', id: 'day-aug31', label: 'Monday, August 31',    note: '4-H Day' },
        { date: '2026-09-01', id: 'day-sep1',  label: 'Tuesday, September 1', note: '4-H Day' },
        { date: '2026-09-02', id: 'day-sep2',  label: 'Wednesday, September 2', note: 'Light Horse Show' },
        { date: '2026-09-03', id: 'day-sep3',  label: 'Thursday, September 3', note: 'Open Beef Show &middot; Car Show' },
        { date: '2026-09-04', id: 'day-sep4',  label: 'Friday, September 4',   note: 'Horse Pulls tonight' },
        { date: '2026-09-05', id: 'day-sep5',  label: 'Saturday, September 5', note: 'Parade &middot; Mud Stomp' },
        { date: '2026-09-06', id: 'day-sep6',  label: 'Sunday, September 6',   note: 'Final day' }
    ];

    function todayKey() {
        var d = new Date();
        var m = d.getMonth() + 1;
        var day = d.getDate();
        return d.getFullYear() + '-' + (m < 10 ? '0' + m : m) + '-' + (day < 10 ? '0' + day : day);
    }

    var key = todayKey();
    var idx = -1;
    for (var i = 0; i < DAYS.length; i++) {
        if (DAYS[i].date === key) { idx = i; break; }
    }
    if (idx === -1) return; // not during the fair - add nothing

    var day = DAYS[idx];
    var main = document.getElementById('main') || document.querySelector('main');
    if (!main) return;

    // Same-page anchor on the schedule, cross-page link everywhere else
    var onSchedule = /schedule-2026\.html$/.test(location.pathname);
    var href = (onSchedule ? '' : 'schedule-2026.html') + '#' + day.id;

    var banner = document.createElement('aside');
    banner.className = 'happening-now';
    banner.setAttribute('aria-label', 'The exhibition is on today');
    banner.innerHTML =
        '<span class="hn-dot" aria-hidden="true"></span>' +
        '<div class="hn-text">' +
            '<strong class="hn-title">Happening now &mdash; the fair is on!</strong>' +
            '<span class="hn-day">Day ' + (idx + 1) + ' of 7 &middot; ' + day.label +
                (day.note ? ' &middot; <em>' + day.note + '</em>' : '') +
            '</span>' +
        '</div>' +
        '<a class="hn-link" href="' + href + '">' +
            (onSchedule ? "Jump to today &rarr;" : "See today's schedule &rarr;") +
        '</a>';

    main.insertBefore(banner, main.firstChild);
})();
