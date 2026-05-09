// CCEx Site-Wide Search System
const searchIndex = [
    // Pages
    { type: 'page', icon: '🏠', title: 'Home', desc: 'Main page - Welcome to the Fair', url: 'index.html', keywords: 'home main welcome fair exhibition' },
    { type: 'page', icon: '📅', title: 'Schedule', desc: 'Full event schedule for 2026', url: 'schedule-2026.html', keywords: 'schedule events times calendar when' },
    { type: 'page', icon: '🎠', title: 'Kids Activities', desc: 'Fun activities for children including Fun Zone, bouncy castles, foam party, and more', url: 'activities.html', keywords: 'kids children activities petting zoo face painting games fun zone bouncy castle foam party carnival games bracelet' },
    { type: 'page', icon: '🐄', title: 'Exhibitors', desc: 'Information for exhibitors', url: 'exhibitors.html', keywords: 'exhibitors livestock cattle horses sheep entry light horse heavy horse draft horse maritime 4 horse classic hitch gymkhana western english' },
    { type: 'page', icon: '🍔', title: 'Vendors', desc: 'Vendor information and booth pricing', url: 'vendors.html', keywords: 'vendors food booth craft merchandise sell 10x10 10x20 food truck indoor outdoor pricing deposit basket draw' },
    { type: 'page', icon: '📝', title: 'Forms & Documents', desc: 'Download entry forms and rules', url: 'forms.html', keywords: 'forms documents download entry application' },
    { type: 'page', icon: '👕', title: 'Tickets & Merchandise', desc: 'Admission prices, event tickets, and official CCEx merchandise', url: 'merch.html', keywords: 'merch merchandise shirts hats clothing buy shop tickets admission prices fun zone mud stomp foam party bracelet' },
    { type: 'page', icon: '📸', title: 'Photos', desc: 'Photo gallery from the fair', url: 'photos.html', keywords: 'photos pictures gallery images memories' },
    { type: 'page', icon: '🤝', title: 'Sponsors', desc: 'Our sponsors and partners', url: 'sponsors.html', keywords: 'sponsors partners support business' },
    { type: 'page', icon: '👥', title: 'Board Members', desc: 'Meet the exhibition board', url: 'members.html', keywords: 'board members directors committee team' },
    { type: 'page', icon: '✉️', title: 'Contact Us', desc: 'Get in touch with us', url: 'contact.html', keywords: 'contact email phone address location directions' },
    { type: 'page', icon: '🌿', title: '4-H Programs', desc: 'Youth agricultural development', url: '4h.html', keywords: '4h 4-h youth agriculture clubs pledge head heart hands health' },

    // Forms
    { type: 'form', icon: '📄', title: "Kids Show 'N Shine Registration", desc: "Register your child's car or vehicle — 9 years and under", url: 'show-n-shine.html', keywords: 'show shine kids car vehicle registration children 9 under junior entry register' },
    { type: 'form', icon: '📄', title: 'Horse Show Registration', desc: 'Register for the CCEx Light Horse Show — box stall $30, standing stall $15, deadline Aug 15', url: 'horse-registration.html', keywords: 'horse registration light horse show exhibitor stall box standing deadline register sign up entry' },
    { type: 'form', icon: '📄', title: 'Vendor Application', desc: 'Apply to be a vendor', url: 'vendor-application.html', keywords: 'vendor application food booth merchant apply' },
    { type: 'form', icon: '📄', title: 'Light Horse Show Booklet', desc: 'Rules, classes, and schedule for horses', url: 'images/forms and documents/CCex-Light Horse booklet 2025 .pdf', keywords: 'horse show booklet rules classes schedule light' },
    { type: 'form', icon: '📄', title: 'Livestock Traceability Info', desc: 'Required info for livestock entries', url: 'images/forms and documents/LIVESTOCK TRACEABILITY INFO SHEET 2025 (1).pdf', keywords: 'livestock traceability cattle sheep goat identification' },
    { type: 'form', icon: '📄', title: 'Exhibition Hall Entry Form', desc: 'General entry form for exhibition hall', url: 'images/forms and documents/Ex Hall entry form.pdf', keywords: 'exhibition hall entry form general' },
    { type: 'form', icon: '📄', title: 'Vegetables Entry', desc: 'Garden department classes', url: 'images/forms and documents/vegetables Garden Department.pdf', keywords: 'vegetables garden produce department entry' },
    { type: 'form', icon: '📄', title: 'Baking & Pickling Entry', desc: 'Home crafts - baking and preserves', url: 'images/forms and documents/baking-pickling Home Crafts Department Classes 3-17.pdf', keywords: 'baking pickling preserves home crafts classes' },
    { type: 'form', icon: '📄', title: 'Arts & Crafts Entry', desc: 'Handmade arts and crafts', url: 'images/forms and documents/arts and crafts Classes 18-26.pdf', keywords: 'arts crafts handmade classes' },
    { type: 'form', icon: '📄', title: 'Flowers Entry', desc: 'Floral entries and arrangements', url: 'images/forms and documents/flowers Classes 27-33.pdf', keywords: 'flowers floral arrangements classes' },
    { type: 'form', icon: '📄', title: 'Children Competition Entry', desc: 'Youth exhibitor competition', url: 'images/forms and documents/Children\'s competition  Class 34.pdf', keywords: 'children kids competition youth class' },
    { type: 'form', icon: '📄', title: 'Sponsorship Package', desc: '2026 Sponsorship opportunities info', url: 'images/forms and documents/PDF 2026 Full Sponsorship Package.pdf', keywords: 'sponsor sponsorship package business support 2026' },

    // Events & Activities
    { type: 'event', icon: '🐴', title: 'Heavy Horse Pull', desc: 'Watch powerful draft horses compete', url: 'events.html', keywords: 'heavy horse pull draft horses competition' },
    { type: 'event', icon: '🐴', title: 'Light Horse Show', desc: 'English and Western horse show classes', url: 'exhibitors.html', keywords: 'light horse show western english classes equitation barrel racing' },
    { type: 'event', icon: '🏛️', title: 'Exhibition Hall', desc: 'Prize-winning vegetables and crafts', url: 'exhibitors.html', keywords: 'exhibition hall vegetables preserves crafts display' },
    { type: 'event', icon: '🎤', title: 'Live Music', desc: 'Live music performances on the main stage', url: 'events.html', keywords: 'live entertainment music bands stage performers concert' },
    { type: 'event', icon: '🐾', title: 'Petting Zoo', desc: 'Get up close with fluffy little friends', url: 'activities.html', keywords: 'petting zoo animals fluffy bunnies chicks' },
    { type: 'event', icon: '🍟', title: 'Food Vendors', desc: 'Fair favourites and treats', url: 'vendors.html', keywords: 'food vendors fries treats eating' },
    { type: 'event', icon: '🎨', title: 'Face Painting', desc: 'Transform into your favorite character', url: 'activities.html', keywords: 'face painting kids art children' },
    { type: 'event', icon: '✏️', title: 'Caricature Drawings', desc: 'Hilarious hand-drawn caricatures for all ages', url: 'activities.html', keywords: 'caricature drawings portraits art kids adults' },
    { type: 'event', icon: '🎄', title: 'Christmas Tree Competition', desc: 'In memory of Keith Moore', url: 'events.html', keywords: 'christmas tree competition keith moore memorial' },
    { type: 'event', icon: '🌾', title: 'Hay Bale Maze', desc: 'Navigate through the maze', url: 'activities.html', keywords: 'hay bale maze adventure kids' },
    { type: 'event', icon: '🐄', title: 'Livestock Shows', desc: 'Beef cattle, horses, dairy display and more', url: 'exhibitors.html', keywords: 'livestock shows cattle horses beef draft horse pull' },
    { type: 'event', icon: '🐂', title: '2026 Open Beef Show Judge', desc: 'Sarah Darraugh of Bar JM Farm (Douglas, ON) — Hereford breeder, Chair of the Canadian Hereford Youth Foundation, and Royal Agricultural Winter Fair judge', url: 'events.html#beef-judge', keywords: 'sarah darraugh judge open beef show hereford bar jm farm douglas ontario canadian hereford youth foundation royal agricultural winter fair opp staff sergeant' },
    { type: 'event', icon: '🏆', title: '4-H Competitions', desc: 'Youth agricultural competitions - Aug 31 & Sept 1', url: '4h.html', keywords: '4h 4-h competitions youth showmanship august september' },
    { type: 'event', icon: '🎈', title: 'Balloon Animals', desc: 'Amazing balloon art creations - check the schedule for times', url: 'schedule-2026.html', keywords: 'balloon animals art kids schedule' },

    // Info & FAQ
    { type: 'info', icon: '💵', title: 'Admission Prices', desc: 'Day $5 · Week Pass $15 · Family Pass $20 · Under 5 Free · Fun Zone $5/day · Mud Stomp $10/$15', url: 'merch.html', keywords: 'admission price cost tickets entry fee day pass week pass family pass fun zone bracelet mud stomp advance door' },
    { type: 'info', icon: '📍', title: 'Location & Directions', desc: 'Exhibition Grounds, Oxford, NS', url: 'contact.html', keywords: 'location directions address map oxford nova scotia' },
    { type: 'info', icon: '🐕', title: 'Pet Policy', desc: 'Service animals only permitted', url: 'contact.html', keywords: 'pets dogs animals allowed policy' },
    { type: 'info', icon: '📆', title: 'Fair Dates 2026', desc: 'Aug 31 - Sept 6', url: 'schedule-2026.html', keywords: 'dates when fair 2026 august september' },
    { type: 'info', icon: '⏰', title: 'Fair Hours', desc: 'Fri 5-10PM, Sat-Sun 10AM-10PM, Mon 10AM-4PM', url: 'vendors.html', keywords: 'hours times open close schedule' },
    { type: 'info', icon: '🌧️', title: 'Weather Policy', desc: 'Fair runs rain or shine', url: 'contact.html', keywords: 'weather rain policy refund' },
    { type: 'info', icon: '📧', title: 'Email Contact', desc: 'cumberlandexhibition@gmail.com', url: 'contact.html', keywords: 'email contact info address' },
    { type: 'info', icon: '♿', title: 'Accessibility', desc: 'Accessible parking and facilities available on site', url: 'contact.html', keywords: 'accessible accessibility wheelchair handicap parking' },
    { type: 'info', icon: '🍽️', title: 'Food Available', desc: 'Food vendors with fair favourites', url: 'contact.html', keywords: 'food eating available vendors' },
    { type: 'info', icon: '💼', title: 'Become a Vendor', desc: 'Apply to sell at the fair', url: 'vendor-application.html', keywords: 'vendor apply sell booth' },
    { type: 'info', icon: '🤝', title: 'Become a Sponsor', desc: 'Sponsorship opportunities', url: 'sponsors.html', keywords: 'sponsor sponsorship business partner' },
    { type: 'info', icon: '🙋', title: 'Volunteer', desc: 'Help at the fair', url: 'contact.html', keywords: 'volunteer help work fair' },

    // Livestock Categories
    { type: 'info', icon: '🐄', title: 'Beef Cattle Entry', desc: 'Enter beef cattle in the show', url: 'exhibitors.html', keywords: 'beef cattle entry show' },
    { type: 'info', icon: '🐴', title: 'Light Horse Entry', desc: 'English and Western classes including gymkhana (barrel racing, pole bending)', url: 'exhibitors.html', keywords: 'horse entry show light horse western english gymkhana flat barrel racing pole bending equitation pleasure' },
    { type: 'info', icon: '🐴', title: 'Heavy Horse / Horse Pull Entry', desc: 'Maritime 4 Horse Classic and Horse Pull — heavy horses haul in/out for competitions', url: 'exhibitors.html', keywords: 'draft horse horse pull entry heavy maritime 4 horse classic hitch clydesdale belgian percheron shire haul' },
    { type: 'info', icon: '🐰', title: 'Rabbit Entry', desc: 'Enter rabbits in the show', url: 'exhibitors.html', keywords: 'rabbit entry bunny show' },

    // Fun Zone
    { type: 'event', icon: '🎪', title: 'Fun Zone', desc: '$5/day bracelet — bouncy castles, carnival games, foam party', url: 'activities.html#fun-zone', keywords: 'fun zone bracelet $5 five dollar bouncy castle inflatable carnival games kids play all day' },
    { type: 'event', icon: '🏰', title: 'Bouncy Castles', desc: 'Large and small bouncy castles for kids of all sizes — included with Fun Zone bracelet', url: 'activities.html#fun-zone', keywords: 'bouncy castle inflatable bounce jump kids large small fun zone' },
    { type: 'event', icon: '🫧', title: 'Foam Party', desc: 'Saturday 2-hour kids event — part of the Fun Zone, included with bracelet', url: 'activities.html#fun-zone', keywords: 'foam party saturday suds wet fun zone bubble kids family friendly 2 hour' },

    // Mud Stomp
    { type: 'event', icon: '🎶', title: 'Mud Stomp', desc: 'Saturday night adult event - DJ Dave, Coldstream drinks, 19+ only. $10 advance / $15 door', url: 'events.html#mud-stomp', keywords: 'mud stomp saturday night adults 19+ dj dave coldstream drinks tickets advance door evening party music dance' },
    { type: 'info', icon: '🎟️', title: 'Mud Stomp Tickets', desc: '$10 in advance or $15 at the door - adults 19+ only', url: 'events.html#mud-stomp', keywords: 'mud stomp tickets price cost advance door 19 plus adults only saturday night' },

    // Maritime 4 Horse Classic
    { type: 'event', icon: '🐴', title: 'Maritime 4 Horse Classic', desc: 'Draft horse hitch competition — teams of four horses competing across the Maritimes', url: 'exhibitors.html', keywords: 'maritime 4 horse classic draft hitch clydesdale belgian percheron shire four horse team series maritimes' },

    // Vendor details
    { type: 'info', icon: '🏪', title: 'Booth Pricing — 10x10', desc: '$50 to reserve ($25 returned at end) — inside or outside', url: 'vendors.html', keywords: 'booth pricing 10x10 cost reserve deposit indoor outdoor vendor' },
    { type: 'info', icon: '🏪', title: 'Booth Pricing — 10x20', desc: '$70 to reserve ($35 returned at end) — inside or outside', url: 'vendors.html', keywords: 'booth pricing 10x20 cost reserve deposit indoor outdoor vendor' },
    { type: 'info', icon: '🚚', title: 'Food Truck Pricing', desc: '$100/week (no power/water) or $150/week (power & water) — limited hookup spaces', url: 'vendors.html', keywords: 'food truck pricing cost power water hookup week vendor' },
    { type: 'info', icon: '🎁', title: 'Basket Draw — Vendor Requirement', desc: 'All booth vendors must provide one item ($20+ value) for the basket draw', url: 'vendors.html', keywords: 'basket draw vendor requirement item donation prize' },
    { type: 'info', icon: '🕙', title: 'Vendor Hall Hours', desc: 'Sept 2–5: 10AM–9PM · Sept 6: 10AM–1PM · Setup Sept 1 or 2', url: 'vendors.html', keywords: 'vendor hall hours setup move in september open close times' },

    // Horse Show Registration details
    { type: 'info', icon: '🐴', title: 'Horse Show Stall Fees', desc: 'Box stall $30 · Standing stall $15 — space is limited, register early', url: 'horse-registration.html', keywords: 'horse stall fee box standing stall cost price rent overnight' },
    { type: 'info', icon: '🐴', title: 'Horse Show Registration Deadline', desc: 'Register by August 15, 2026 — space is limited', url: 'horse-registration.html', keywords: 'horse show registration deadline august 15 register early space limited entry' },
    { type: 'form', icon: '📄', title: 'Register for Horse Show', desc: 'Light Horse Show registration — box stall $30, standing stall $15', url: 'horse-registration.html', keywords: 'register horse show entry sign up 2026 light horse stall registration form' },

    // Show N Shine
    { type: 'event', icon: '🚗', title: "Kids Show 'N Shine", desc: "Car and vehicle show for children 9 and under — register to enter", url: 'show-n-shine.html', keywords: "show n shine kids car vehicle truck auto display children 9 under junior register entry shine" },

    // Parking & practical info
    { type: 'info', icon: '🅿️', title: 'Parking', desc: 'Free on-site parking at the Exhibition Grounds, Oxford NS', url: 'contact.html', keywords: 'parking free lot car truck grounds oxford where park' },
    { type: 'info', icon: '📍', title: 'Getting There', desc: 'Exhibition Grounds, Oxford, Nova Scotia — directions and maps', url: 'contact.html', keywords: 'directions how to get there drive map oxford nova scotia highway route' },
    { type: 'info', icon: '💳', title: 'Payment & Cash', desc: 'Bring cash — limited card payment options on site', url: 'contact.html', keywords: 'cash atm card payment money debit credit tap interac' },

    // Admission detail
    { type: 'info', icon: '🎟️', title: 'Gate / Entry Price', desc: 'Day $5 · Week Pass $15 · Family Pass $20 · Under 5 Free', url: 'merch.html', keywords: 'gate price entry cost how much admission door day pass week family under 5 free child' },

    // 4-H specific
    { type: 'event', icon: '🌿', title: '4-H Beef Show', desc: 'Youth beef showmanship — Aug 31 & Sept 1', url: '4h.html', keywords: '4h beef show showmanship youth cattle steer heifer junior angus hereford' },
    { type: 'event', icon: '🌿', title: '4-H Horse Show', desc: 'Youth horse show classes at CCEx', url: '4h.html', keywords: '4h horse show youth junior equine english western showmanship 4-h' },
    { type: 'event', icon: '🌿', title: '4-H Sheep & Goat', desc: 'Youth sheep and goat competition', url: '4h.html', keywords: '4h sheep goat lamb youth showmanship junior 4-h' },
    { type: 'event', icon: '🌿', title: '4-H Poultry', desc: 'Youth poultry competition', url: '4h.html', keywords: '4h poultry chicken hen rooster youth 4-h' },
    { type: 'event', icon: '🌿', title: '4-H Dairy Display', desc: 'Dairy cattle display by 4-H youth', url: '4h.html', keywords: '4h dairy cow display holstein jersey milk youth 4-h' },

    // Livestock specifics
    { type: 'event', icon: '🐄', title: 'Beef Cattle Show', desc: 'Beef showmanship and cattle competition', url: 'exhibitors.html', keywords: 'beef cattle show showmanship angus hereford simmental competition bull heifer steer cow' },
    { type: 'event', icon: '🐄', title: 'Dairy Display', desc: 'Dairy cattle display at the exhibition', url: 'exhibitors.html', keywords: 'dairy cow display holstein jersey guernsey milk cattle' },
    { type: 'event', icon: '🐑', title: 'Sheep Show', desc: 'Sheep and lamb entries in the show', url: 'exhibitors.html', keywords: 'sheep lamb show ewe ram competition entry fleece' },
    { type: 'event', icon: '🐐', title: 'Goat Show', desc: 'Goat entries in the exhibition', url: 'exhibitors.html', keywords: 'goat show doe buck nanny billy kid entry' },

    // Sponsorship
    { type: 'info', icon: '🤝', title: 'Sponsorship Packages', desc: 'View 2026 sponsorship tiers and perks — support your local fair', url: 'sponsors.html', keywords: 'sponsor sponsorship package gold silver bronze community tier business logo 2026 donate support' },
    { type: 'form', icon: '📄', title: 'Sponsorship Package PDF', desc: 'Download the full 2026 sponsorship package', url: 'images/forms and documents/PDF 2026 Full Sponsorship Package.pdf', keywords: 'sponsorship package pdf download 2026 tiers perks business' },

    // Volunteering
    { type: 'info', icon: '🙋', title: 'Volunteer at CCEx', desc: 'Help make the fair happen — contact us to get involved', url: 'contact.html', keywords: 'volunteer help work fair crew staff assist join involved' },

    // General
    { type: 'page', icon: '🎡', title: 'Events & Activities Overview', desc: 'Mud Stomp, Live Music, Horse Show, Fun Zone, and more — Aug 31 to Sept 6 2026', url: 'events.html', keywords: 'what to do see activities events overview entertainment all 2026 fair' },
];

// Animal synonym groups - searching any term matches all related terms
const synonymGroups = [
    ['cow', 'cattle', 'bovine', 'heifer', 'steer', 'bull', 'calf', 'ox'],
    ['chicken', 'hen', 'rooster', 'cock', 'chick', 'chicks', 'poultry', 'fowl'],
    ['horse', 'mare', 'stallion', 'colt', 'filly', 'foal', 'gelding', 'equine', 'pony', 'ponies'],
    ['sheep', 'lamb', 'lambs', 'ewe', 'ram', 'ovine'],
    ['goat', 'goats', 'kid', 'doe', 'buck', 'billy', 'nanny'],
    ['pig', 'hog', 'sow', 'boar', 'piglet', 'swine'],
    ['rabbit', 'bunny', 'bunnies', 'hare'],
    ['duck', 'ducks', 'drake', 'duckling'],
    ['turkey', 'turkeys', 'tom', 'gobbler'],
    ['goose', 'geese', 'gander'],
];

function getSearchTerms(query) {
    const q = query.toLowerCase();
    const words = q.split(/\s+/);
    const expanded = new Set(words);
    for (const word of words) {
        for (const group of synonymGroups) {
            if (group.includes(word)) {
                group.forEach(syn => expanded.add(syn));
            }
        }
    }
    return expanded;
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('siteSearch');
    const searchDropdown = document.getElementById('searchDropdown');

    if (!searchInput || !searchDropdown) return;

    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    function performLiveSearch(query) {
        if (!query || query.length < 2) {
            searchDropdown.classList.remove('active');
            return;
        }

        const terms = getSearchTerms(query);
        const results = searchIndex.filter(item => {
            const searchText = `${item.title} ${item.desc} ${item.keywords}`.toLowerCase();
            return [...terms].some(term => searchText.includes(term));
        });

        if (results.length === 0) {
            searchDropdown.innerHTML = `
                <div class="search-no-results">
                    <strong>No results found for "${query}"</strong>
                    Try searching for: schedule, forms, livestock, vendors, contact
                </div>
            `;
            searchDropdown.classList.add('active');
            return;
        }

        // Group results by type
        const grouped = {};
        results.forEach(item => {
            if (!grouped[item.type]) grouped[item.type] = [];
            grouped[item.type].push(item);
        });

        const typeLabels = { page: 'Pages', form: 'Forms & Documents', event: 'Events & Activities', info: 'Information' };

        let html = '';
        for (const type in grouped) {
            html += `<div class="search-category">
                <div class="search-category-title">${typeLabels[type] || type}</div>`;
            grouped[type].slice(0, 5).forEach(item => {
                html += `
                    <a href="${item.url}" class="search-result">
                        <div class="search-result-icon">${item.icon}</div>
                        <div class="search-result-content">
                            <div class="search-result-title">${highlightMatch(item.title, query)}</div>
                            <div class="search-result-desc">${item.desc}</div>
                        </div>
                    </a>
                `;
            });
            html += '</div>';
        }

        searchDropdown.innerHTML = html;
        searchDropdown.classList.add('active');
    }

    searchInput.addEventListener('input', function() {
        performLiveSearch(this.value.trim());
    });

    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            performLiveSearch(this.value.trim());
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-bar-container')) {
            searchDropdown.classList.remove('active');
        }
    });

    // Navigate on Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const firstResult = searchDropdown.querySelector('.search-result');
            if (firstResult) {
                window.location.href = firstResult.href;
            } else if (this.value.trim()) {
                window.location.href = 'forms.html?search=' + encodeURIComponent(this.value.trim());
            }
        }
    });

    // Make performSearch available globally
    window.performSearch = function() {
        const query = searchInput.value.trim();
        if (query) {
            const firstResult = searchDropdown.querySelector('.search-result');
            if (firstResult) {
                window.location.href = firstResult.href;
            } else {
                window.location.href = 'forms.html?search=' + encodeURIComponent(query);
            }
        }
    };
});
