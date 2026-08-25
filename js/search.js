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
    { type: 'page', icon: '🎡', title: 'Events', desc: 'Everything happening at the fair — Mud Stomp, live music, horse pulls and more', url: 'events.html', keywords: 'events happening whats on entertainment shows attractions lineup' },
    { type: 'page', icon: '🐂', title: 'Open Beef Show', desc: 'The 2026 Open Beef Show — details, rules, and online entry', url: 'beef-registration.html', keywords: 'open beef show page cattle 2026 information details entry' },
    { type: 'page', icon: '🐮', title: 'Junior Beef Show', desc: 'The 2026 Junior Beef Show — youth classes, details, and online entry', url: 'junior-beef-show.html', keywords: 'junior beef show page youth kids 2026 information details entry jr' },
    { type: 'page', icon: '🐴', title: 'Light Horse Show', desc: 'English & Western classes, the 2026 show patterns, stall fees and entry info', url: 'horse-registration.html', keywords: 'light horse show page english western information details entry stalls patterns booklet judge' },
    { type: 'page', icon: '🚗', title: "Kids Show 'N Shine", desc: "Vehicle show for kids 9 and under — details and registration", url: 'show-n-shine.html', keywords: "show n shine page kids car vehicle children information details entry" },
    { type: 'page', icon: '🌱', title: 'Future Farmer Competition', desc: 'Youth aggregate competition for ages 7–21 — rules, points, prizes and online entry', url: 'future-farmer.html', keywords: 'future farmer competition page young farmer youth kids ages 7 21 seven twenty one aggregate points livestock light horse beef christmas tree life skills speaker quiz farm credit canada information details entry rules regulations' },
    { type: 'page', icon: '🎄', title: 'Christmas Tree Competition', desc: 'In memory of Keith Moore of ShelBell Farm. Details and online registration.', url: 'christmas-tree.html', keywords: 'christmas tree competition page xmas evergreen fir spruce grower woodlot keith moore shelbell farm memorial information details entry' },
    { type: 'page', icon: '🎉', title: 'CCEx Parade', desc: 'Saturday, Sept 5 at 1:00 PM — theme, route map, rules and online entry', url: 'parade.html', keywords: 'parade page ccex oxford saturday september 5 1pm float floats theme sew it grow it show it route map line up quiet zone judges information details entry march procession' },
    { type: 'page', icon: '💼', title: 'Vendor Application', desc: 'Apply for a booth or food truck spot at the fair', url: 'vendor-application.html', keywords: 'vendor application page apply booth food truck form sign up' },

    // Forms
    { type: 'form', icon: '📄', title: "Kids Show 'N Shine Registration", desc: "Register your child's car or vehicle — 9 years and under · Free · Registration re-opened, no deadline", url: 'show-n-shine.html#register', keywords: 'show shine kids car vehicle registration children 9 under junior entry register free pre-register pre registration re-opened reopened open again no deadline 2026' },
    { type: 'form', icon: '📄', title: 'Horse Show Registration', desc: 'Register for the CCEx Light Horse Show — box stall $30, standing stall $20 · Entries closed Aug 10, 2026', url: 'horse-registration.html', keywords: 'horse registration light horse show exhibitor stall box standing deadline closing date august 10 register sign up entry' },
    { type: 'form', icon: '📄', title: 'Beef Show Registration', desc: 'Register for the 2026 Open Beef Show — Sept 3–5 · Entries closed July 31, 2026', url: 'beef-registration.html', keywords: 'beef show registration cattle entry exhibitor open 2026 hereford angus simmental shorthorn speckle park charolais commercial steer heifer bull cow yearling calf futurity maritime junior register sign up entry form jotform' },
    { type: 'form', icon: '🌱', title: 'Future Farmer Competition Entry', desc: 'Enter the CCEx Future Farmer Competition — ages 7–21, $5 entry fee.', url: 'future-farmer.html#registration', keywords: 'future farmer competition entry registration register sign up form jotform young farmer youth ages 7 21 five dollars 5 dollar entry fee livestock light horse beef christmas tree life skills speaker session quiz 2026' },
    { type: 'form', icon: '📄', title: 'Future Farmer Rules & Regulations 2026', desc: 'Eligibility, required entries, how points are scored, and the prize list', url: 'images/forms and documents/Future Farmer Rules and Regulations 2026.pdf', keywords: 'future farmer competition rules regulations pdf youth ages 7 21 points scoring placings prizes champion reserve honourable mention farm credit canada speaker quiz life skills christmas tree' },
    { type: 'form', icon: '🎄', title: 'Christmas Tree Competition Entry', desc: 'Register for the CCEx Christmas Tree Competition. $5 per tree, no deadline. In memory of Keith Moore.', url: 'christmas-tree.html#registration', keywords: 'christmas tree competition entry registration register sign up form jotform xmas evergreen fir spruce balsam grower woodlot keith moore shelbell farm memorial 5 dollars five per tree entry no deadline 2026' },
    { type: 'form', icon: '🎉', title: 'CCEx Parade Entry', desc: 'Enter the 2026 CCEx Parade — Saturday, Sept 5 at 1:00 PM. No registration deadline.', url: 'parade.html#registration', keywords: 'parade entry registration register sign up form microsoft forms float floats truck tractor horse club business group saturday september 5 1pm no deadline no cut off theme sew it grow it show it 2026 oxford' },
    { type: 'form', icon: '📄', title: 'Vendor Application', desc: 'Apply to be a vendor', url: 'vendor-application.html', keywords: 'vendor application food booth merchant apply' },
    { type: 'form', icon: '📄', title: 'Beef Show Rules & Regulations 2026', desc: 'Full rules, classes 1–9, Maritime Hereford Futurity, prize info', url: 'images/forms and documents/Cumberland County Exhibition Beef Show 2026 .pdf', keywords: 'beef show rules regulations classes 2026 pdf cattle hereford angus simmental shorthorn speckle park charolais commercial breeders herd get of sire futurity maritime junior brian trueman mip show supplies' },
    { type: 'form', icon: '📄', title: 'Light Horse Show Booklet 2026', desc: 'Rules, classes, and schedule for horses', url: 'images/forms and documents/CCex-Light Horse booklet 2026 (1).pdf', keywords: 'horse show booklet rules classes schedule light 2026' },
    { type: 'form', icon: '📄', title: 'Horse Pull Rules 2026', desc: 'Official rules for the Heavy Horse Pull competition', url: 'images/forms and documents/horse pulls rules 2026.pdf', keywords: 'horse pull pulls rules regulations 2026 heavy draft horse competition pdf tantramar chevrolet weight classes' },
    { type: 'form', icon: '📄', title: 'Livestock Traceability Info', desc: 'Required info for livestock entries', url: 'images/forms and documents/LIVESTOCK TRACEABILITY INFO SHEET 2025 (1).pdf', keywords: 'livestock traceability cattle sheep goat identification' },
    { type: 'form', icon: '📄', title: 'Exhibition Hall Entry Form', desc: 'General entry form for exhibition hall', url: 'images/forms and documents/Ex Hall entry form.pdf', keywords: 'exhibition hall entry form general' },
    { type: 'form', icon: '📄', title: 'Vegetables Entry 2026', desc: 'Garden department — Classes 1-2', url: 'images/forms and documents/1-2 vegetables 2026.pdf', keywords: 'vegetables garden produce department entry 2026 classes 1 2' },
    { type: 'form', icon: '📄', title: 'Baking & Pickling Entry 2026', desc: 'Home crafts — baking and preserves (Classes 3-17)', url: 'images/forms and documents/3-17 baking-pickling 2026.pdf', keywords: 'baking pickling preserves home crafts classes 2026 3 17' },
    { type: 'form', icon: '📄', title: 'Arts & Crafts Entry 2026', desc: 'Handmade arts and crafts (Classes 18-26)', url: 'images/forms and documents/18-26 arts and crafts 2026.pdf', keywords: 'arts crafts handmade classes 2026 18 26' },
    { type: 'form', icon: '📄', title: 'Flowers Entry 2026', desc: 'Floral entries and arrangements (Classes 27-33)', url: 'images/forms and documents/27-33 flowers 2026.pdf', keywords: 'flowers floral arrangements classes 2026 27 33' },
    { type: 'form', icon: '📄', title: 'Children Competition Entry 2026', desc: 'Youth exhibitor competition (Class 34)', url: 'images/forms and documents/34 childrens competition 2026.pdf', keywords: 'children kids competition youth class 2026 34' },
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
    { type: 'event', icon: '🌱', title: 'Future Farmer Competition', desc: 'Youth ages 7–21 earn points across livestock, Christmas tree and Life Skills. Awards Sunday, Sept 6.', url: 'future-farmer.html', keywords: 'future farmer competition young farmer youth kids teens ages 7 21 aggregate points champion reserve champion honourable mention farm credit canada speaker session quiz sunday september 6 awards prizes 50 30 20' },
    { type: 'event', icon: '🎄', title: 'Christmas Tree Competition', desc: 'A festive tree competition in memory of Keith Moore of ShelBell Farm. $5 per tree, judged Thursday morning.', url: 'christmas-tree.html', keywords: 'christmas tree competition keith moore shelbell farm memorial festive xmas evergreen fir spruce balsam grower woodlot judging display drop off tuesday wednesday thursday morning sunday' },
    { type: 'event', icon: '🎉', title: 'CCEx Parade', desc: 'Saturday, September 5 at 1:00 PM through downtown Oxford. Theme: Sew it, Grow it, Show it.', url: 'parade.html', keywords: 'parade ccex oxford saturday september 5 sept 1pm 1:00 downtown floats float tractor horse club business marching theme sew it grow it show it water street main street duke street free to watch' },
    { type: 'info', icon: '🗺️', title: 'Parade Route Map', desc: 'Line up at the east end of Water St · quiet zone Waverly to Main · judges at Main & Duke · ends back on Water St by the grounds', url: 'parade.html#route', keywords: 'parade route map oxford water street main street duke street ellis prince william station waverly bridge black river line up lineup start finish end judges quiet zone where does the parade go directions turn' },
    { type: 'info', icon: '🔇', title: 'Parade Quiet Zone', desc: 'Water Street from the stop sign at Waverly St to the three-way stop at Main St — keep the noise down', url: 'parade.html#please-note', keywords: 'parade quiet zone water street waverly main stop sign three way three-way noise sirens horns loud music sensory autism quiet sensitive rule' },
    { type: 'info', icon: '⛔', title: 'No Handouts in the Parade', desc: 'Participants are not allowed to hand out items during the parade — no candy, treats, flyers or giveaways', url: 'parade.html#please-note', keywords: 'parade no handing out items candy treats flyers giveaways throw throwing tossing rule rules safety participants not allowed' },
    { type: 'info', icon: '🧵', title: 'Parade Theme 2026', desc: 'Sew it, Grow it, Show it — build your entry around this year\'s theme', url: 'parade.html', keywords: 'parade theme 2026 sew it grow it show it sewing quilting crafts garden growing crops float idea ideas decorate' },
    { type: 'event', icon: '🌾', title: 'Hay Bale Maze', desc: 'Navigate through the maze', url: 'activities.html', keywords: 'hay bale maze adventure kids' },
    { type: 'event', icon: '🐄', title: 'Livestock Shows', desc: 'Beef cattle, horses, dairy display and more', url: 'exhibitors.html', keywords: 'livestock shows cattle horses beef draft horse pull' },
    { type: 'event', icon: '🐂', title: '2026 Open Beef Show Judge', desc: 'Sarah Darraugh of Bar JM Farm (Douglas, ON) — Hereford breeder, Chair of the Canadian Hereford Youth Foundation, and Royal Agricultural Winter Fair judge', url: 'events.html#beef-judge', keywords: 'sarah darraugh judge open beef show hereford bar jm farm douglas ontario canadian hereford youth foundation royal agricultural winter fair opp staff sergeant' },
    { type: 'event', icon: '🐎', title: '2026 Light Horse Show Judge', desc: 'James Simpson — 50 years riding and farrier work, judging since 1990, with experience at shows from North Sydney NS to Vancouver Island BC', url: 'events.html#light-horse-judge', keywords: 'james simpson judge light horse show english western farrier riding 1990 north sydney nova scotia vancouver island british columbia entry forms' },
    { type: 'event', icon: '🏆', title: '4-H Competitions', desc: 'Youth agricultural competitions - Aug 31 & Sept 1', url: '4h.html', keywords: '4h 4-h competitions youth showmanship august september' },
    { type: 'event', icon: '🎈', title: 'Balloon Animals', desc: 'Amazing balloon art creations - check the schedule for times', url: 'schedule-2026.html', keywords: 'balloon animals art kids schedule' },

    // Info & FAQ
    { type: 'info', icon: '💵', title: 'Admission Prices', desc: 'Day $5 (ages 5+) · Week Pass $15 · Family Pass $20 · Under 5 Free · Fun Zone $5/day separate · Mud Stomp $10/$15', url: 'merch.html', keywords: 'admission price cost tickets entry fee day pass week pass family pass under 5 five free kids children fun zone bracelet separate mud stomp advance door' },
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
    { type: 'info', icon: '🐄', title: 'Beef Cattle Entry', desc: 'Enter beef cattle in the 2026 Open Beef Show — Sept 3–5', url: 'beef-registration.html', keywords: 'beef cattle entry show register online open beef show 2026' },
    { type: 'info', icon: '📅', title: 'Beef Show Entry Deadline', desc: 'Entries closed July 31, 2026 — get in touch about late entries', url: 'beef-registration.html', keywords: 'beef show entry deadline close july 31 2026 register early last day' },
    { type: 'info', icon: '🐂', title: 'Open Beef Show 2026', desc: 'Sept 3–5, 2026 · Min $60/head payout · Custom Molly\'s CCEx Belt Buckles for Supreme/Reserve', url: 'beef-registration.html', keywords: 'open beef show 2026 september dates supreme reserve buckle molly fort equipment apparel payout' },
    { type: 'event', icon: '🐂', title: 'Maritime Hereford Futurity', desc: 'Thursday evening — open to Maritime purebred Hereford females, senior yearlings', url: 'beef-registration.html', keywords: 'maritime hereford futurity senior yearling junior yearling brian trueman mip show supplies marvin peters kensington pei nova scotia hereford club thursday' },
    { type: 'form', icon: '📄', title: 'Junior Beef Show Registration', desc: 'Enter the 2026 Junior Beef Show — Sept 3–6 · $25, t-shirt included · Entries closed Aug 10, 2026', url: 'junior-beef-show.html', keywords: 'junior beef show registration registry register youth kids entry exhibitor 2026 cattle steer heifer bull calf showmanship conformation sales talk fitting judging cow costume parade farm advertisement photography aggregate register sign up form jotform t-shirt' },
    { type: 'event', icon: '🐂', title: 'Junior Beef Show', desc: 'Youth show Sept 3–6 — showmanship, conformation, sales talk, cow costume parade & more', url: 'junior-beef-show.html', keywords: 'junior beef show registration registry youth weekend entry form sunday showmanship conformation fitting sales talk judging photography farm advertisement cow costume parade aggregate champion reserve pee wee senior intermediate' },
    { type: 'info', icon: '📅', title: 'Junior Beef Show Deadline', desc: 'Entries closed August 10, 2026 — contact us for more information', url: 'junior-beef-show.html', keywords: 'junior beef show deadline entry due august 10 2026 registration registry fee 25 no late entries t-shirt payable cumberland junior beef show' },
    { type: 'info', icon: '🐴', title: 'Light Horse Entry', desc: 'English and Western classes including gymkhana (barrel racing, pole bending)', url: 'exhibitors.html', keywords: 'horse entry show light horse western english gymkhana flat barrel racing pole bending equitation pleasure' },
    { type: 'info', icon: '🐴', title: 'Heavy Horse / Horse Pull Entry', desc: 'Maritime 4 Horse Classic and Horse Pull — heavy horses haul in/out for competitions', url: 'exhibitors.html', keywords: 'draft horse horse pull entry heavy maritime 4 horse classic hitch clydesdale belgian percheron shire haul' },
    { type: 'info', icon: '🐰', title: 'Rabbit Entry', desc: 'Enter rabbits in the show', url: 'exhibitors.html', keywords: 'rabbit entry bunny show' },

    // Fun Zone
    { type: 'event', icon: '🎪', title: 'Fun Zone', desc: '$5/day bracelet, separate from gate admission — bouncy castles, carnival games, foam party', url: 'activities.html#fun-zone', keywords: 'fun zone bracelet $5 five dollar separate extra additional bouncy castle inflatable carnival games kids play all day' },
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
    { type: 'info', icon: '🐴', title: 'Horse Show Stall Fees', desc: 'Box stall $30 · Standing stall $20 — entries closed Aug 10, 2026', url: 'horse-registration.html', keywords: 'horse stall fee box standing stall cost price rent overnight' },
    { type: 'info', icon: '🐴', title: 'Horse Show Registration Deadline', desc: 'Registration closed August 10, 2026 — get in touch about late entries', url: 'horse-registration.html', keywords: 'horse show registration deadline closing date august 10 register early space limited entry light horse' },
    { type: 'info', icon: '🚗', title: "Kids Show 'N Shine — Registration Open", desc: 'Registration has re-opened — no deadline, sign up right up to show day', url: 'show-n-shine.html#register', keywords: "show n shine kids registration re-opened reopened open again no deadline pre-register pre registration required free children 9 under vehicle car" },
    { type: 'form', icon: '📄', title: 'Register for Horse Show', desc: 'Light Horse Show registration — box stall $30, standing stall $20', url: 'horse-registration.html', keywords: 'register horse show entry sign up 2026 light horse stall registration form' },

    // Show N Shine
    { type: 'event', icon: '🚗', title: "Kids Show 'N Shine", desc: "Car and vehicle show for children 9 and under — register to enter", url: 'show-n-shine.html', keywords: "show n shine kids car vehicle truck auto display children 9 under junior register entry shine" },

    // Parking & practical info
    { type: 'info', icon: '🅿️', title: 'Parking', desc: 'Free on-site parking at the Exhibition Grounds, Oxford NS', url: 'contact.html', keywords: 'parking free lot car truck grounds oxford where park' },
    { type: 'info', icon: '📍', title: 'Getting There', desc: 'Exhibition Grounds, Oxford, Nova Scotia — directions and maps', url: 'contact.html', keywords: 'directions how to get there drive map oxford nova scotia highway route' },
    { type: 'info', icon: '💳', title: 'Payment & Cash', desc: 'Bring cash — limited card payment options on site', url: 'contact.html', keywords: 'cash atm card payment money debit credit tap interac' },

    // Admission detail
    { type: 'info', icon: '🎟️', title: 'Gate / Entry Price', desc: 'Day $5 (ages 5 and up) · Week Pass $15 · Family Pass $20 · Under 5 Free', url: 'merch.html', keywords: 'gate price entry cost how much admission door day pass week family under 5 free child kids 5 and up ages' },

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

    // Light Horse Show Patterns - the drawn arena patterns riders work before the show
    { type: 'pattern', icon: '🐴', title: '2026 Light Horse Show Patterns', desc: 'All 11 arena patterns for the 2026 Light Horse Show — Showmanship, English & Western Equitation, Trail and Ranch Riding', url: 'horse-registration.html#patterns', keywords: 'light horse show patterns pattern 2026 all arena diagram diagrams map maps course courses routine routines test tests what do i ride how to ride ride riding walk trot jog lope canter gallop back sidepass side pass leg yield lead change showmanship equitation english western trail ranch riding printable print practice study memorize learn horseshowpatterns' },
    { type: 'pattern', icon: '🏅', title: 'Showmanship Pattern — Small Fry', desc: 'Walk A to B, trot B to the judge, set up for inspection, 90 degree turn, walk away', url: 'horse-registration.html#patterns', keywords: 'showmanship pattern small fry smallfry youngest little kids walk trot judge inspection set up setup 90 degree turn line up lineup halter in hand lead 2026 light horse show s/wt-9' },
    { type: 'pattern', icon: '🏅', title: 'Showmanship Pattern — Junior', desc: 'Walk around B, trot B to C, walk C to the judge, set up, 90 degree turn, trot to the line-up', url: 'horse-registration.html#patterns', keywords: 'showmanship pattern junior jr youth walk trot judge inspection set up setup 90 degree turn line up lineup halter in hand lead 2026 light horse show s/wt-28' },
    { type: 'pattern', icon: '🏅', title: 'Showmanship Pattern — Senior', desc: 'Walk around B, trot around C to the judge, set up, 90 degree turn and back even with C, trot to the line-up', url: 'horse-registration.html#patterns', keywords: 'showmanship pattern senior sr adult walk trot back backing judge inspection set up setup 90 degree turn line up lineup halter in hand lead 2026 light horse show s/1-28' },
    { type: 'pattern', icon: '🐎', title: 'English Equitation Pattern — Walk Trot', desc: 'Sitting trot to B with posting trot circles right and left, then stop and back one horse length', url: 'horse-registration.html#patterns', keywords: 'english equitation pattern walk trot walktrot wt beginner saddle seat hunt seat sitting trot posting trot circle right left stop back backing one horse length english pleasure 2026 light horse show hse/wt-4' },
    { type: 'pattern', icon: '🐎', title: 'English Equitation Pattern — Junior & Senior', desc: 'Sitting trot A to B, posting trot circles right and left, canter the left lead to C, stop and back four steps', url: 'horse-registration.html#patterns', keywords: 'english equitation pattern junior senior jr sr hunt seat saddle seat sitting trot posting trot circle right left canter left lead stop back backing four steps english pleasure 2026 light horse show hse/1-6' },
    { type: 'pattern', icon: '🤠', title: 'Western Equitation Pattern — Walk Trot', desc: 'Jog A to B, extend the jog and circle, quarter turn left, back one horse length, jog to C', url: 'horse-registration.html#patterns', keywords: 'western equitation pattern walk trot walktrot wt beginner jog extended jog circle quarter turn 1/4 left back backing one horse length western pleasure horsemanship 2026 light horse show wh/wt-17' },
    { type: 'pattern', icon: '🤠', title: 'Western Equitation Pattern — Junior', desc: 'Jog A to B, lope the left lead and circle, quarter turn left, back one horse length, jog to C', url: 'horse-registration.html#patterns', keywords: 'western equitation pattern junior jr youth jog lope left lead circle quarter turn 1/4 left back backing one horse length western pleasure horsemanship 2026 light horse show wh/1-17' },
    { type: 'pattern', icon: '🤠', title: 'Western Equitation Pattern — Senior', desc: 'Jog A to B, lope the left lead and circle, one and a quarter turn left, back, then lope the right lead to C', url: 'horse-registration.html#patterns', keywords: 'western equitation pattern senior sr adult jog lope left lead right lead circle one and a quarter turn 1 1/4 left back backing western pleasure horsemanship 2026 light horse show wh/2-17' },
    { type: 'pattern', icon: '🌲', title: 'Trail Pattern — Walk Trot', desc: 'Pole into the chute, back the corner, cones, boxes with a quarter turn, poles, bridge to finish', url: 'horse-registration.html#patterns', keywords: 'trail pattern walk trot walktrot wt beginner obstacle obstacles course poles pole chute back backing corner cone cones boxes box quarter turn 1/4 gate bridge jog walk finish 2026 light horse show t/wt-1' },
    { type: 'pattern', icon: '🌲', title: 'Trail Pattern', desc: 'Same course with a lope on the right lead around the cone — poles, chute, boxes and the bridge', url: 'horse-registration.html#patterns', keywords: 'trail pattern junior senior jr sr obstacle obstacles course poles pole chute back backing corner cone cones lope right lead boxes box quarter turn 1/4 gate bridge jog walk finish 2026 light horse show t/1-15' },
    { type: 'pattern', icon: '🌾', title: 'Ranch Riding Pattern', desc: '12 maneuvers — walk over logs, lope both leads, extended lope and trot, 1½ turns, back and side pass', url: 'horse-registration.html#patterns', keywords: 'ranch riding pattern aqha logs walk over logs lope right lead left lead extended lope trot extended trot stop turns 1 1/2 turns right back backing side pass sidepass ranch horse versatility 2026 light horse show rr/aqha-6' },
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

        // Rank by relevance: whole-phrase and word matches in the title count most,
        // then the description, then keywords. Keeps "junior beef show" on the Junior
        // Beef page instead of the first item that merely mentions "beef".
        const qLower = query.toLowerCase().trim();
        const queryWords = qLower.split(/\s+/).filter(Boolean);
        function scoreItem(item) {
            const title = item.title.toLowerCase();
            const desc = item.desc.toLowerCase();
            const keywords = (item.keywords || '').toLowerCase();
            let score = 0;
            if (title === qLower) score += 200;
            if (title.includes(qLower)) score += 100;
            if (`${title} ${desc} ${keywords}`.includes(qLower)) score += 15;
            for (const w of queryWords) {
                if (title.includes(w)) score += 10;
                else if (desc.includes(w)) score += 3;
                else if (keywords.includes(w)) score += 1;
            }
            return score;
        }
        results.sort((a, b) => scoreItem(b) - scoreItem(a));

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

        const typeLabels = { page: 'Pages', form: 'Forms & Documents', pattern: 'Show Patterns', event: 'Events & Activities', info: 'Information' };

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
