/* "Happening Now" banner
   Appears at the top of the page only while the fair is actually running,
   Aug 31 - Sept 6 2026, and points at today's spot in the schedule. Outside
   those dates nothing is inserted at all, so it can sit on the pages
   year-round without needing to be switched on or off by hand. */
(function () {
    'use strict';

    var DAYS = [
        { date: '2026-08-31', id: 'day-aug31', dow: 'Mon', mon: 'Aug', num: '31', label: 'Monday, August 31',    note: '4-H Day' },
        { date: '2026-09-01', id: 'day-sep1',  dow: 'Tue', mon: 'Sep', num: '1',  label: 'Tuesday, September 1', note: '4-H Day' },
        { date: '2026-09-02', id: 'day-sep2',  dow: 'Wed', mon: 'Sep', num: '2',  label: 'Wednesday, September 2', note: 'Light Horse Show' },
        { date: '2026-09-03', id: 'day-sep3',  dow: 'Thu', mon: 'Sep', num: '3',  label: 'Thursday, September 3', note: 'Open Beef Show &middot; Car Show' },
        { date: '2026-09-04', id: 'day-sep4',  dow: 'Fri', mon: 'Sep', num: '4',  label: 'Friday, September 4',   note: 'Horse Pulls tonight' },
        { date: '2026-09-05', id: 'day-sep5',  dow: 'Sat', mon: 'Sep', num: '5',  label: 'Saturday, September 5', note: 'Parade &middot; Mud Stomp' },
        { date: '2026-09-06', id: 'day-sep6',  dow: 'Sun', mon: 'Sep', num: '6',  label: 'Sunday, September 6',   note: 'Final day' }
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

    // Seven pips, one per fair day: days gone by are filled, today is lit.
    var pips = '';
    for (var p = 0; p < DAYS.length; p++) {
        var state = p < idx ? ' is-past' : (p === idx ? ' is-today' : '');
        pips += '<span class="hn-pip' + state + '"></span>';
    }

    var banner = document.createElement('aside');
    banner.className = 'happening-now';
    banner.setAttribute('aria-label', 'The exhibition is on today');
    banner.innerHTML =
        '<div class="hn-inner">' +
            '<div class="hn-cal" aria-hidden="true">' +
                '<span class="hn-cal-mon">' + day.mon + '</span>' +
                '<span class="hn-cal-num">' + day.num + '</span>' +
                '<span class="hn-cal-dow">' + day.dow + '</span>' +
            '</div>' +
            '<div class="hn-text">' +
                '<span class="hn-eyebrow">' +
                    '<span class="hn-dot" aria-hidden="true"></span>' +
                    'Today at the fair' +
                    '<span class="hn-sep" aria-hidden="true"></span>' +
                    '<span class="hn-count">Day ' + (idx + 1) + ' of 7</span>' +
                '</span>' +
                '<strong class="hn-date">' + day.label + '</strong>' +
                (day.note ? '<span class="hn-note">' + day.note + '</span>' : '') +
            '</div>' +
            '<a class="hn-link" href="' + href + '">' +
                '<span>' + (onSchedule ? 'Jump to today' : "See today's schedule") + '</span>' +
                '<span class="hn-arrow" aria-hidden="true">&rarr;</span>' +
            '</a>' +
        '</div>' +
        '<div class="hn-progress" aria-hidden="true">' + pips + '</div>';

    main.insertBefore(banner, main.firstChild);
})();
