import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject();
const IMG = {
  ramen: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1800&q=88',
  noodles: 'https://images.unsplash.com/photo-1569929232520-3d7aef1e6e8b?auto=format&fit=crop&w=1200&q=85',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=88',
  coffeeCup: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85',
  dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88',
  spa: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=88',
  wellness: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85',
  gym: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=88',
  training: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
  hotel: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=88',
  hotelRoom: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
  studio: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88',
  design: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
  architecture: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88',
  architecture2: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  product: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  concert: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1800&q=88',
  dessert: 'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1800&q=88',
  car: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=88',
  nightCity: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=88',
  landscape: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=90',
  mountains: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90',
  forest: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=90',
  ocean: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2200&q=90',
  fineDining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=88',
  izakaya: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1800&q=88',
  cocktails: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1800&q=88',
  bakery: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1800&q=88',
  indianFood: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1800&q=88',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1800&q=88',
  spaceEarth: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2200&q=90',
  spaceHardware: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=88',
  apartment: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90',
  parisInterior: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88',
  stayBedroom: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=88'
};

const templates = [
  { slug: 'neon-noodle', title: 'NEON NOODLE', sub: 'Late-night ramen, turned up.', category: 'Food & Drink', style: 'Experimental', number: '01', image: IMG.ramen, hue: 'noodle', blurb: 'An unapologetically loud digital storefront for the midnight hungry.' },
  { slug: 'slow-ritual', title: 'slow ritual', sub: 'Coffee. Pause. Repeat.', category: 'Food & Drink', style: 'Minimal', number: '02', image: IMG.coffee, hue: 'ritual', blurb: 'A thoughtful home for a neighbourhood café and its daily rituals.' },
  { slug: 'maison-ambre', title: 'MAISON AMBRE', sub: 'A table worth lingering at.', category: 'Food & Drink', style: 'Premium', number: '03', image: IMG.dining, hue: 'ambre', blurb: 'A fine-dining experience told through restraint, texture and light.' },
  { slug: 'forma-wellness', title: 'FORMA / WELLNESS', sub: 'Return to your own rhythm.', category: 'Beauty & Wellness', style: 'Minimal', number: '04', image: IMG.spa, hue: 'forma', blurb: 'A warm, tactile digital experience for a modern wellness studio.' },
  { slug: 'kinetic-club', title: 'KINETIC CLUB', sub: 'Earn your next level.', category: 'Fitness', style: 'Experimental', number: '05', image: IMG.gym, hue: 'kinetic', blurb: 'A high-energy identity built to get people moving before they visit.' },
  { slug: 'stay-awhile', title: 'stay awhile', sub: 'Somewhere else. A little more you.', category: 'Hospitality', style: 'Editorial', number: '06', image: IMG.hotel, hue: 'stay', blurb: 'An atmospheric, booking-minded site for a boutique hideaway.' },
  { slug: 'offset-studio', title: 'OFFSET®', sub: 'Ideas with edges.', category: 'Creative', style: 'Editorial', number: '07', image: IMG.studio, hue: 'offset', blurb: 'A graphic-first studio website with a point of view and a pulse.' },
  { slug: 'northline', title: 'NORTHLINE', sub: 'Make complexity feel simple.', category: 'Tech', style: 'Professional', number: '08', image: IMG.product, hue: 'north', blurb: 'A crisp B2B product story designed around clarity and conversion.' },
  { slug: 'atelier-north', title: 'ATELIER NORTH', sub: 'Rooms for a better life.', category: 'Architecture', style: 'Premium', number: '09', image: IMG.architecture, hue: 'atelier', blurb: 'An editorial portfolio for an architecture and interiors practice.' },
  { slug: 'volt-afterhours', title: 'VOLT AFTERHOURS', sub: 'Feel the night before it begins.', category: 'Music & Events', style: 'Motion-heavy', number: '10', image: IMG.concert, hue: 'volt', blurb: 'A kinetic, light-pulsing event world for clubs, festivals and live experiences.' },
  { slug: 'sugar-riot', title: 'SUGAR RIOT', sub: 'A little sweet. A lot extra.', category: 'Food & Drink', style: 'Experimental', number: '11', image: IMG.dessert, hue: 'sugar', blurb: 'A candy-coloured dessert brand with floating shapes, playful tilt and confetti interactions.' },
  { slug: 'velocity-labs', title: 'VELOCITY LABS', sub: 'Made for the feeling.', category: 'Automotive', style: 'Motion-heavy', number: '12', image: IMG.car, hue: 'velocity', blurb: 'A high-speed automotive concept built around sweeping reveals, motion trails and animated specs.' },
  { slug: 'orbital-labs', title: 'ORBITAL / FUTURE SYSTEMS', sub: 'The next is already moving.', category: 'Tech', style: 'Interactive', number: '13', image: IMG.nightCity, hue: 'orbital', blurb: 'A dark future-tech experience with a live particle field and cursor-reactive atmosphere.' },
  { slug: 'elsewhere-story', title: 'ELSEWHERE', sub: 'Places that stay with you.', category: 'Travel & Hospitality', style: 'Scroll storytelling', number: '14', image: IMG.landscape, hue: 'scrollstory', blurb: 'A cinematic travel concept where photographs expand into full-screen worlds as you scroll.' },
  { slug: 'yellow-riot', title: 'YELLOW RIOT', sub: 'Good ideas should make a little noise.', category: 'Creative', style: 'Immersive', number: '15', image: IMG.concert, hue: 'yellowriot', blurb: 'A high-voltage creative production studio with kinetic type, cinematic projects and scroll-driven film reels.' },
  { slug: 'still-form', title: 'STILL / FORM', sub: 'Objects for the in-between.', category: 'Furniture & Objects', style: 'Ultra-minimal', number: '16', image: IMG.architecture2, hue: 'stillform', blurb: 'A precise, product-led furniture concept with quiet transitions, configurable finishes and editorial whitespace.' },
  { slug: 'maison-verre', title: 'MAISON VERRE', sub: 'An evening, composed course by course.', category: 'Fine Dining', style: 'Premium', number: '17', image: IMG.fineDining, hue: 'maisonverre', blurb: 'A deep-navy and antique-gold fine-dining identity with menu tabs, story-led editorial sections and a reservation request interaction.' },
  { slug: 'kaizen-izakaya', title: 'KAIZEN IZAKAYA', sub: 'Ramen. Sake. Neon. After dark.', category: 'Japanese Dining', style: 'Experimental', number: '18', image: IMG.izakaya, hue: 'kaizen', blurb: 'A neon-night izakaya concept with glowing type, a cursor-reactive atmosphere, tilted menu cards and animated counters.' },
  { slug: 'lumen-lounge', title: 'LUMEN LOUNGE', sub: 'Drink in the glow.', category: 'Bar & Nightlife', style: 'Immersive', number: '19', image: IMG.cocktails, hue: 'lumen', blurb: 'An aurora-glass cocktail lounge with atmospheric color fields, a particle canvas, signature pours and weekly events.' },
  { slug: 'crumb-and-co', title: 'CRUMB & CO', sub: 'Bake it loud!', category: 'Bakery', style: 'Brutalist', number: '20', image: IMG.bakery, hue: 'crumb', blurb: 'A playful neo-brutalist bakery with chunky borders, sticker-like badges, bouncy type and bold product cards.' },
  { slug: 'spice-route', title: 'SPICE ROUTE', sub: 'Taste the journey.', category: 'Indian Dining', style: 'Scroll storytelling', number: '21', image: IMG.indianFood, hue: 'spiceroute', blurb: 'A richly colored Indian coastal kitchen concept with word-by-word story reveals and a pinned horizontal chef’s-picks journey.' },
  { slug: 'neon-burger', title: 'NEON BURGER', sub: '1984 energy. Open till late.', category: 'Burgers & Fast Casual', style: 'Motion-heavy', number: '22', image: IMG.burger, hue: 'neonburger', blurb: 'A synthwave burger shop with a striped sunset, animated grid floor, glitch typography and scanning product cards.' },
  { slug: 'apogee-systems', title: 'APOGEE / SYSTEMS', sub: 'Operate beyond the expected.', category: 'Aerospace & Defense', style: 'Professional', number: '23', image: IMG.spaceEarth, hue: 'apogee', blurb: 'An aerospace platform concept with mission-area storytelling, orbital telemetry, and a precise technical visual language.' },
  { slug: 'lumiere-stays', title: 'LUMIÈRE STAYS', sub: 'A better kind of temporary home.', category: 'Property & Stays', style: 'Premium', number: '24', image: IMG.apartment, hue: 'lumiere', blurb: 'A high-end short-stay concept with property discovery, curated Paris residences, and a simple booking enquiry flow.' },
  { slug: 'wildlands-audio', title: 'WILDLANDS AUDIO', sub: 'Every world needs a sound.', category: 'Audio & Gaming', style: 'Immersive', number: '25', image: IMG.forest, hue: 'wildlands', blurb: 'An interactive audio studio concept built as an explorable sound-world map with selectable project signals and opt-in ambience.' },
  { slug: 'forno', title: 'FORNO', sub: 'Fired at 450°C.', category: 'Food & Drink', style: 'Interactive', number: '26', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1800&q=88', hue: 'forno', blurb: 'A wood-fired pizzeria concept with an SVG pizza builder, interactive menu previews and a bold Italian red-and-cream identity.' },
  { slug: 'scoop-theory', title: 'SCOOP THEORY', sub: 'Small-batch gelato, big opinions.', category: 'Food & Drink', style: 'Interactive', number: '27', image: IMG.dessert, hue: 'scooptheory', blurb: 'A playful gelato shop with an interactive cone builder, flavour selectors, price updates and bouncy pastel art direction.' },
  { slug: 'cellar-no9', title: 'CELLAR Nº9', sub: 'Slow pours. Long nights.', category: 'Bar & Nightlife', style: 'Premium', number: '28', image: IMG.cocktails, hue: 'cellar', blurb: 'A candlelit wine bar concept with an interactive food-pairing guide, atmospheric light and an understated burgundy palette.' },
  { slug: 'sho-omakase', title: 'SHŌ OMAKASE', sub: 'Eight courses, one evening.', category: 'Japanese Dining', style: 'Premium', number: '29', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1800&q=88', hue: 'sho', blurb: 'A Japanese omakase concept with ink-brush motion, course-by-course storytelling and a focused eight-seat reservation narrative.' },
  { slug: 'sound-atlas', title: 'SOUND ATLAS', sub: 'Every place leaves a signal.', category: 'Audio & Gaming', style: 'Immersive', number: '30', image: IMG.forest, hue: 'soundatlas', blurb: 'A restrained full-screen sonic landscape with atmospheric terrain, discreet project beacons, optional ambience and an editorial studio story.' },
  { slug: 'planform-ai', title: 'PLANFORM AI', sub: 'Stay in the design.', category: 'AI & Design Tools', style: 'Interactive', number: '31', image: IMG.architecture, hue: 'planform', blurb: 'An architectural AI product landing page with a model-issue explorer, scan-coverage slider, approval workflow and a polished product UI.' },
  { slug: 'racecraft-98', title: 'RACECRAFT 98', sub: 'The work behind every lap.', category: 'Automotive', style: 'Editorial / Motorsport', number: '32', image: IMG.car, hue: 'racecraft', blurb: 'A motorsport editorial layout with a photographic driver hero, fictional partner wall, chapter-based career story, race log and oversized media archive.' },
  { slug: 'sendlayer', title: 'SENDLAYER', sub: 'Your product has something to say.', category: 'Developer Tools', style: 'Professional', number: '33', image: IMG.product, hue: 'sendlayer', blurb: 'A quiet developer-product landing page with a geometric hero, copyable SDK examples, a focused delivery-event story and restrained product messaging.' },
  { slug: 'drift-lounge', title: 'DRIFT', sub: 'Late hours. Soft edges.', category: 'Food & Drink', style: 'Immersive', number: '34', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88', hue: 'drift', blurb: 'A swipe-driven dessert and tea lounge with spring-smooth scene changes, vivid art direction, product storytelling and an understated booking enquiry.' },
  { slug: 'fieldhouse-stays', title: 'FIELDHOUSE', sub: 'For the long way home.', category: 'Hospitality', style: 'Editorial', number: '35', image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1800&q=88', hue: 'fieldhouse', blurb: 'A configuration-driven country retreat website with quietly editorial photography, a responsive rooms index, gallery lightbox and a validated booking enquiry demo.' }
];

const photo = (src, alt, cls = '') => `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" decoding="async" onerror="this.style.display='none'">`;
const backLink = `<div class="demo-ribbon"><span><i class="demo-dot"></i> DEMO CONCEPT — FICTIONAL BRAND</span><a href="/">← Back to collection</a></div>`;
const arrow = '<span aria-hidden="true">↗</span>';

function galleryCard(t, idx) {
  const previewContent = {
    noodle: `<div class="preview-noodle"><span class="mini-stamp">HOT<br/>STUFF</span><b>SLURP<br/>LOUD.</b><span class="preview-bowl">◉</span><i>OPEN TILL 2AM</i></div>`,
    ritual: `<div class="preview-ritual"><span>small batch · big pause</span><b>slow<br/><em>ritual</em></b><div class="preview-cup">◒</div><small>COFFEE / BAKES / GOOD DAYS</small></div>`,
    ambre: `<div class="preview-ambre"><span>MAISON AMBRE · EST. 2018</span><b>A meal<br/>to remember.</b><i>THE EVENING TABLE</i></div>`,
    forma: `<div class="preview-forma"><span>F O R M A</span><b>Come back<br/>to yourself.</b><i>WELLNESS / BODY / MIND</i></div>`,
    kinetic: `<div class="preview-kinetic"><span>NO EXCUSES CLUB</span><b>MOVE<br/>WITH<br/>INTENT<span>↗</span></b></div>`,
    stay: `<div class="preview-stay"><span>A PLACE TO EXHALE</span><b>Stay a<br/><em>while.</em></b><i>YOUR QUIETER GETAWAY</i></div>`,
    offset: `<div class="preview-offset"><span>O/— STUDIO</span><b>GOOD<br/>IDEAS<br/><i>HAVE<br/>EDGES.</i></b></div>`,
    north: `<div class="preview-north"><div class="tiny-ui"><span>● ● ●</span><div class="tiny-chart"></div><div class="tiny-lines"></div></div><b>Clarity<br/>at scale.</b></div>`,
    atelier: `<div class="preview-atelier"><span>ATELIER NORTH / 2025</span><b>Spaces<br/>with soul.</b><i>ARCHITECTURE + INTERIORS</i></div>`,
    volt: `<div class="preview-volt"><span>VOLT / LIVE EXPERIENCE</span><b>FEEL<br/><i>THE</i><br/>NIGHT.</b><div class="preview-bars">${Array.from({length:18},(_,i)=>`<i style="--b:${(i%6)+1}"></i>`).join('')}</div></div>`,
    sugar: `<div class="preview-sugar"><span>GOOD MOOD DEPARTMENT</span><b>SUGAR<br/><i>RIOT!</i></b><em>✳</em><small>ICE CREAM · JOY · REPEAT</small></div>`,
    velocity: `<div class="preview-velocity"><span>VL / PERFORMANCE DIVISION</span><b>CHASE<br/>THE <i>FEELING.</i></b><em>↗</em><small>ENGINEERED TO MOVE</small></div>`,
    orbital: `<div class="preview-orbital"><div class="preview-orbit"><i></i><b></b></div><span>ORBITAL / FUTURE SYSTEMS</span><b>THE NEXT<br/><i>IS NOW.</i></b></div>`,
    scrollstory: `<div class="preview-scrollstory"><span>ELSEWHERE / JOURNEYS</span><b>THE WORLD<br/><i>UNFOLDS.</i></b><div class="preview-story-panels"><i></i><i></i><i></i></div><small>SCROLL INTO THE STORY ↓</small></div>`,
    yellowriot: `<div class="preview-yellowriot"><span>YELLOW RIOT® / CREATIVE MOTION</span><b>MAKE<br/><i>GOOD</i><br/>NOISE<span>✳</span></b><div class="preview-yr-sun"></div><small>IDEAS IN MOTION / 001—∞</small></div>`,
    stillform: `<div class="preview-stillform"><span>STILL / FORM — OBJECTS FOR THE IN-BETWEEN</span><b>SPACE TO<br/>BE <i>MORE.</i></b><div class="preview-sf-room"><i></i><b></b><span></span></div><small>DESIGNED TO ADAPT · SERIES 01</small></div>`,
    maisonverre: `<div class="preview-maisonverre"><span>FINE DINING · EST. 1998</span><b>Maison<br/><i>Verre</i></b><small>AN EVENING, COMPOSED.</small><em>✦</em></div>`,
    kaizen: `<div class="preview-kaizen"><span>IZAKAYA / AFTER DARK</span><b>KAI<span>ZEN</span><br/>NIGHTS</b><i>🍜 · 🍶 · ✦</i></div>`,
    lumen: `<div class="preview-lumen"><span>LUMEN / ROOFTOP LOUNGE</span><b>DRINK IN<br/><i>THE GLOW.</i></b><div class="lumen-preview-orb">◉</div><small>SIP · GLOW · REPEAT</small></div>`,
    crumb: `<div class="preview-crumb"><span>FRESH · BAKED · DAILY</span><b>BAKE IT<br/><i>LOUD!</i></b><em>🥐 🍩 🧁</em><small>NO BORING BREAD.</small></div>`,
    spiceroute: `<div class="preview-spiceroute"><span>INDIAN COASTAL KITCHEN</span><b>TASTE THE<br/><i>JOURNEY.</i></b><div class="spice-preview-orbit">✳</div><small>HAND-GROUND · SLOW-COOKED</small></div>`,
    neonburger: `<div class="preview-neonburger"><span>1984 ENERGY / FAST CASUAL</span><b>NEON<br/><i>BURGER</i></b><div class="burger-preview-sun"></div><small>PRESS START · OPEN LATE</small></div>`,
    apogee: `<div class="preview-apogee"><span>SPACE INFRASTRUCTURE / 001</span><b>ORBIT<br/><i>WITH PURPOSE.</i></b><div class="preview-apogee-globe"><i></i></div><small>ENGINEERED FOR THE LONG VIEW</small></div>`,
    lumiere: `<div class="preview-lumiere"><span>CURATED PRIVATE STAYS / PARIS</span><b>A softer<br/><i>way to stay.</i></b><div class="preview-lumiere-room"></div><small>ARRIVE · UNWIND · BELONG</small></div>`,
    wildlands: `<div class="preview-wildlands"><span>WILDLANDS / AUDIO WORLDS</span><b>HEAR<br/>THE <i>WORLD.</i></b><div class="preview-wildlands-map"><i></i><i></i><i></i></div><small>DRAG TO EXPLORE / SOUND OFF</small></div>`,
    forno: `<div class="preview-forno"><span>NAPOLETANA · OAK-FIRED</span><b>FIRED AT<br/><i>450°C.</i></b><div class="forno-pizza"><i></i><i></i><i></i><i></i><i></i></div><small>72-HOUR DOUGH · 90 SECONDS</small></div>`,
    scooptheory: `<div class="preview-scooptheory"><span>SMALL BATCH / BIG OPINIONS</span><b>SCOOP<br/><i>THEORY.</i></b><div class="scoop-orbs"><i></i><i></i><i></i></div><small>STACK YOUR HAPPY</small></div>`,
    cellar: `<div class="preview-cellar"><span>WINE BAR · AFTER HOURS</span><b>Slow <i>pours.</i><br/>Long nights.</b><div class="cellar-candle"></div><small>A GOOD GLASS CHANGES EVERYTHING</small></div>`,
    sho: `<div class="preview-sho"><span>OMAKASE · EIGHT SEATS</span><div class="sho-enso"></div><b>匠 <i>SHŌ</i></b><small>ONE CHEF · ONE EVENING</small></div>`,
    soundatlas: `<div class="preview-soundatlas"><span>FIELD NOTES / SONIC WORLDS</span><b>EVERY PLACE<br/><i>LEAVES A SIGNAL.</i></b><div class="sa-preview-terrain"><i></i><i></i><i></i><b></b></div><small>FOUR WORLDS / SOUND OFF BY DEFAULT</small></div>`,
    planform: `<div class="preview-planform"><span>PLANFORM / MODEL REVIEW</span><b>STAY IN<br/><i>THE DESIGN.</i></b><div class="pf-preview-map"><i></i><i></i><i></i><i></i></div><small>OBSERVE → ADVISE → ACT</small></div>`,
    racecraft: `<div class="preview-racecraft"><span>R/98 / DRIVER PROFILE</span><b>MILO<br/><i>REN.</i></b><div class="rc-preview-speed"><i></i><i></i><i></i><b>98</b></div><small>THE WORK BEHIND EVERY LAP</small></div>`,
    sendlayer: `<div class="preview-sendlayer"><span>EMAIL API / MESSAGE FLOW</span><b>YOUR PRODUCT<br/><i>HAS SOMETHING TO SAY.</i></b><div class="sl-preview-panel"><i></i><i></i><i></i><b>EVENT LOG / READY</b></div><small>SDK EXAMPLES · DELIVERY CONTEXT</small></div>`,
    drift: `<div class="preview-drift"><span>DRIFT / DESSERT · TEA · AFTER HOURS</span><b>LATE HOURS,<br/><i>SOFT EDGES.</i></b><div class="drift-preview-orbit"><i></i><i></i><b>↗</b></div><small>DRAG TO WANDER / 01—05</small></div>`,
    fieldhouse: `<div class="preview-fieldhouse"><span>FIELDHOUSE / HUDSON VALLEY</span><b>COME BACK<br/><i>TO YOUR PACE.</i></b><div class="fieldhouse-preview-room"><i></i><i></i></div><small>ROOM TO BREATHE / 01—03</small></div>`
  }[t.hue];
  return `<article class="project-card project-${t.hue}" data-category="${t.category}" data-style="${t.style}" data-title="${t.title.toLowerCase()} ${t.sub.toLowerCase()} ${t.category.toLowerCase()} ${t.style.toLowerCase()}">
    <a class="project-visual" href="/templates/${t.slug}/" aria-label="Open ${t.title} demo">
      ${photo(t.image, `${t.title} visual reference`, 'project-photo')}
      <div class="project-preview">${previewContent}</div>
      <span class="card-index">${t.number} / ${String(templates.length).padStart(2, '0')}</span>
      <span class="card-open" aria-hidden="true">↗</span>
    </a>
    <div class="project-meta"><div><span class="eyebrow">${t.category} <b>·</b> ${t.style}</span><h3>${t.title}</h3><p>${t.blurb}</p></div><a class="text-link" href="/templates/${t.slug}/">Open demo ${arrow}</a></div>
  </article>`;
}

function renderGallery() {
  document.title = 'FORM Studio — Websites with a point of view';
  document.body.className = 'gallery-page';
  const app = document.querySelector('#app');
  app.innerHTML = `
    <header class="site-nav">
      <a href="/" class="wordmark" aria-label="FORM Studio home"><span class="mark">F.</span><span>FORM<span class="wordmark-light">STUDIO</span></span></a>
      <nav class="nav-links" aria-label="Main navigation"><a href="#collection">Collection <span>${templates.length}</span></a><a href="#approach">Approach</a><a href="#contact">Start a project <b>↗</b></a></nav>
      <button class="mobile-menu-toggle" aria-expanded="false" aria-label="Open menu"><span></span><span></span></button>
    </header>
    <main>
      <section class="gallery-hero">
        <div class="hero-grid-lines" aria-hidden="true"></div>
        <div class="hero-kicker"><span class="status-pulse"></span> INDEPENDENT DIGITAL DESIGN / 2026</div>
        <h1>Websites with<br/><span class="hero-italic">a point of view.</span><span class="hero-star" aria-hidden="true">✳</span></h1>
        <div class="hero-bottom"><p>Distinct digital worlds for real-world businesses.<br/>Built to be remembered — and made to work.</p><a class="round-link" href="#collection"><span>Explore<br/>the collection</span><b>↓</b></a><div class="hero-aside"><span>BRAND × WEB × MOTION</span><span>INDEPENDENT BY DESIGN.</span></div></div>
        <div class="hero-index"><span>01—${String(templates.length).padStart(2, '0')}</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>
      <div class="marquee-band" aria-label="Design for people, build for business"><div class="marquee-track"><span>GOOD DESIGN HAS A JOB TO DO ✳</span><span>GOOD DESIGN HAS A JOB TO DO ✳</span><span>GOOD DESIGN HAS A JOB TO DO ✳</span><span>GOOD DESIGN HAS A JOB TO DO ✳</span></div></div>
      <section class="collection-section section-wrap" id="collection">
        <div class="section-heading"><div><span class="eyebrow">THE WORK / 001—${String(templates.length).padStart(3, '0')}</span><h2>Pick a feeling.<br/><em>Find your form.</em></h2></div><p>Each concept starts with a different business, audience and ambition. No one-size-fits-all layouts here.</p></div>
        <div class="collection-controls">
          <label class="search-box"><span aria-hidden="true">⌕</span><input type="search" id="project-search" placeholder="Find a concept, industry, style…" aria-label="Search templates"/><kbd>/</kbd></label>
          <div class="filter-row" aria-label="Filter by industry" id="category-filters"><button class="filter-chip is-active" data-category-filter="All">All <span>${templates.length}</span></button><button class="filter-chip" data-category-filter="Food & Drink">Food & Drink</button><button class="filter-chip" data-category-filter="Beauty & Wellness">Wellness</button><button class="filter-chip" data-category-filter="Fitness">Fitness</button><button class="filter-chip" data-category-filter="Hospitality">Hospitality</button><button class="filter-chip" data-category-filter="Creative">Creative</button><button class="filter-chip" data-category-filter="Tech">Tech</button><button class="filter-chip" data-category-filter="Architecture">Architecture</button><button class="filter-chip" data-category-filter="Music & Events">Music & Events</button><button class="filter-chip" data-category-filter="Automotive">Automotive</button><button class="filter-chip" data-category-filter="Travel & Hospitality">Travel</button><button class="filter-chip" data-category-filter="Furniture & Objects">Objects</button><button class="filter-chip" data-category-filter="Fine Dining">Fine dining</button><button class="filter-chip" data-category-filter="Japanese Dining">Japanese</button><button class="filter-chip" data-category-filter="Bar & Nightlife">Nightlife</button><button class="filter-chip" data-category-filter="Bakery">Bakery</button><button class="filter-chip" data-category-filter="Indian Dining">Indian dining</button><button class="filter-chip" data-category-filter="Burgers & Fast Casual">Burgers</button><button class="filter-chip" data-category-filter="Aerospace & Defense">Aerospace</button><button class="filter-chip" data-category-filter="Property & Stays">Property &amp; stays</button><button class="filter-chip" data-category-filter="Audio & Gaming">Audio &amp; gaming</button><button class="filter-chip" data-category-filter="AI & Design Tools">AI &amp; design tools</button><button class="filter-chip" data-category-filter="Developer Tools">Developer tools</button></div>
          <div class="filter-row style-filters" aria-label="Filter by style" id="style-filters"><span class="filter-label">STYLE</span><button class="style-chip is-active" data-style-filter="All">All styles</button><button class="style-chip" data-style-filter="Experimental">Experimental</button><button class="style-chip" data-style-filter="Minimal">Minimal</button><button class="style-chip" data-style-filter="Premium">Premium</button><button class="style-chip" data-style-filter="Professional">Professional</button><button class="style-chip" data-style-filter="Editorial">Editorial</button><button class="style-chip" data-style-filter="Motion-heavy">Motion-heavy</button><button class="style-chip" data-style-filter="Interactive">Interactive</button><button class="style-chip" data-style-filter="Scroll storytelling">Scroll storytelling</button><button class="style-chip" data-style-filter="Immersive">Immersive</button><button class="style-chip" data-style-filter="Ultra-minimal">Ultra-minimal</button><button class="style-chip" data-style-filter="Brutalist">Brutalist</button></div>
        </div>
        <div class="collection-status"><span id="result-count">${templates.length} concepts</span><span>SELECT A CARD TO ENTER THE WORLD ↗</span></div>
        <div class="project-grid" id="project-grid">${templates.map(galleryCard).join('')}</div>
        <div class="empty-state" id="empty-state" hidden><span>✳</span><h3>No matching worlds — yet.</h3><p>Try another search or clear the filters.</p><button class="button button-dark" id="clear-filters">Clear filters ↗</button></div>
      </section>
      <section class="approach-section" id="approach"><div class="approach-top"><span class="eyebrow">GOOD LOOKS. GOOD LOGIC.</span><span class="approach-number">02 / THE APPROACH</span></div><div class="approach-main"><h2>Make it look<br/><em>like you mean it.</em></h2><p class="approach-intro">A website should do more than exist. It should tell people who you are, help them trust you, and make the next step feel obvious.</p></div><div class="value-grid"><article><span>01 / DISTINCT</span><h3>Built around your brand</h3><p>Every layout, typeface and interaction is chosen to fit the business — not the trend cycle.</p></article><article><span>02 / INTENTIONAL</span><h3>Designed to move people</h3><p>Clear information, accessible interactions and useful calls to action turn attention into action.</p></article><article><span>03 / READY FOR REAL LIFE</span><h3>Responsive by default</h3><p>Careful details across mobile, tablet and desktop, with performance and reduced motion in mind.</p></article></div></section>
      <section class="process-section section-wrap"><div class="process-copy"><span class="eyebrow">FROM FIRST IDEA TO LIVE SITE</span><h2>Small studio.<br/><em>Full attention.</em></h2><p>Work directly with the person shaping your website, from the first rough idea through design, responsive build and final polish.</p><a href="#contact" class="text-link dark-link">Talk through a project ↗</a></div><div class="process-steps"><div><span>01</span><section><h3>Get the shape right</h3><p>Audience, goals, content and the feeling your brand should leave behind.</p></section><b>↘</b></div><div><span>02</span><section><h3>Make the idea visible</h3><p>Art direction and page structure with a clear reason behind every choice.</p></section><b>↘</b></div><div><span>03</span><section><h3>Build it to behave</h3><p>Responsive implementation, interactions, accessibility and final QA.</p></section><b>↗</b></div><p class="demo-pricing-note">Scope and pricing are quoted per project. Any packages shown in this portfolio are illustrative, not binding service rates.</p></div></section>
      <section class="contact-section" id="contact"><div class="contact-orbit" aria-hidden="true">F</div><div class="contact-content"><span class="eyebrow">HAVE A GOOD ONE IN MIND?</span><h2>Let's make<br/><em>it real.</em></h2><p>Tell me what you're building, what isn't working, or what your business needs next. No elaborate brief required to start a conversation.</p><a class="contact-email" href="mailto:hello@formstudio.example?subject=Website%20project%20enquiry">hello@formstudio.example <span>↗</span></a><p class="small-note">Portfolio concept · Swap in your real contact details before using this with clients.</p></div><div class="contact-side"><span>FORM STUDIO / INDEPENDENT WEB DESIGN</span><span>MADE WITH INTENTION.<br/>BUILT FOR PEOPLE.</span></div></section>
    </main>
    <footer class="site-footer"><a href="/" class="wordmark"><span class="mark">F.</span><span>FORM<span class="wordmark-light">STUDIO</span></span></a><span>MADE FOR REAL BUSINESSES, DESIGNED TO BE REMEMBERED.</span><a href="#top" class="back-top" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">BACK TO TOP ↑</a><span>© 2026 / CONCEPT COLLECTION</span></footer>`;
  wireGallery();
}

function wireGallery() {
  let activeCategory = 'All';
  let activeStyle = 'All';
  const search = document.querySelector('#project-search');
  const cards = [...document.querySelectorAll('.project-card')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  const apply = () => {
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const categoryMatch = activeCategory === 'All' || card.dataset.category === activeCategory;
      const styleMatch = activeStyle === 'All' || card.dataset.style === activeStyle;
      const textMatch = !q || card.dataset.title.includes(q) || card.textContent.toLowerCase().includes(q);
      const show = categoryMatch && styleMatch && textMatch;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'concept' : 'concepts'}`;
    empty.hidden = visible > 0;
  };
  document.querySelectorAll('[data-category-filter]').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.categoryFilter;
    document.querySelectorAll('[data-category-filter]').forEach(b => b.classList.toggle('is-active', b === btn)); apply();
  }));
  document.querySelectorAll('[data-style-filter]').forEach(btn => btn.addEventListener('click', () => {
    activeStyle = btn.dataset.styleFilter;
    document.querySelectorAll('[data-style-filter]').forEach(b => b.classList.toggle('is-active', b === btn)); apply();
  }));
  search.addEventListener('input', apply);
  search.addEventListener('keydown', e => { if (e.key === 'Escape') { search.value = ''; apply(); } });
  document.querySelector('#clear-filters').addEventListener('click', () => {
    activeCategory = 'All'; activeStyle = 'All'; search.value = '';
    document.querySelectorAll('[data-category-filter]').forEach(b => b.classList.toggle('is-active', b.dataset.categoryFilter === 'All'));
    document.querySelectorAll('[data-style-filter]').forEach(b => b.classList.toggle('is-active', b.dataset.styleFilter === 'All'));
    apply();
  });
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    document.querySelector('.nav-links')?.classList.toggle('is-open', !isOpen);
  });
  search.addEventListener('focus', () => { if (window.matchMedia('(min-width: 800px)').matches) document.body.classList.add('searching'); });
  search.addEventListener('blur', () => document.body.classList.remove('searching'));
  const reveals = document.querySelectorAll('.project-card, .value-grid article, .process-steps > div');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    reveals.forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
  }
}

function demoShell(content, bodyClass, title, description) {
  document.body.className = `template-page ${bodyClass}`;
  document.title = `${title} — FORM Studio Demo Concept`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  const motionProgress = bodyClass.includes('motion-page') ? '<div class="motion-progress" aria-hidden="true"></div>' : '';
  document.querySelector('#app').innerHTML = `${backLink}${motionProgress}<main class="demo-root">${content}</main><footer class="demo-footer"><a href="/">FORM STUDIO <span>↗</span></a><span>DEMO CONCEPT — FICTIONAL BRAND / NOT A LIVE BUSINESS</span><a href="/">EXPLORE THE COLLECTION ↑</a></footer>`;
  wireDemo();
  wireMotionEffects();
  wireScrollStory();
  wireYellowRiot();
  wireStillForm();
  wireApogee();
  wireLumiereStays();
  wireWildlandsAudio();
}

const demoPages = {
  'neon-noodle': () => demoShell(`
    <nav class="nn-nav"><a class="nn-logo" href="#top">N<span>✳</span>N</a><div><a href="#menu">THE MENU</a><a href="#story">OUR STORY</a><a href="#find-us">FIND US</a></div><a class="nn-order" href="#menu">ORDER LATE <b>↗</b></a></nav>
    <section class="nn-hero" id="top"><div class="nn-side-stamp">TOKYO AFTER DARK<br/>BROOKLYN ENERGY<br/>OPEN TILL 02:00</div><div class="nn-headline"><span>GOOD</span><span class="nn-outline">MOOD.</span><span class="nn-fill">BAD</span><span class="nn-outline">HABITS.</span></div><div class="nn-hero-bottom"><p>Slurp first.<br/>Ask questions later.</p>${photo(IMG.ramen, 'Steaming bowl of ramen with noodles and toppings', 'nn-hero-photo')}<a class="nn-circle" href="#menu">VIEW<br/>THE MENU <span>↓</span></a></div><div class="nn-splat" aria-hidden="true">辛</div></section>
    <div class="nn-marquee"><div>NOODLES AFTER HOURS ✳ NOODLES AFTER HOURS ✳ NOODLES AFTER HOURS ✳ NOODLES AFTER HOURS ✳</div></div>
    <section class="nn-menu" id="menu"><div class="nn-section-head"><span>01 / EAT LOUD</span><h2>THE GOOD<br/><i>STUFF.</i></h2><p>Made to hit. Built to slurp. No boring bowls allowed.</p></div><div class="nn-tabs" role="group" aria-label="Filter menu items"><button class="is-active" data-menu-filter="all">ALL THE GOODS</button><button data-menu-filter="ramen">RAMEN</button><button data-menu-filter="sides">SIDES</button><button data-menu-filter="drinks">DRINKS</button></div><div class="nn-menu-grid">${[
      ['ramen','01','MIDNIGHT TONKOTSU','Pork broth · chashu · jammy egg','$16'],['ramen','02','FIRE MISO','Spicy miso · corn · chilli oil','$17'],['ramen','03','CRUNCHY VEG','Mushroom broth · greens · garlic','$15'],['sides','04','GYOZA ATTACK','Pan-fried dumplings · sesame dip','$9'],['sides','05','LOUD KARAAGE','Crispy chicken · yuzu mayo','$11'],['drinks','06','YUZU STATIC','Yuzu · soda · tiny lightning bolt','$6']
    ].map(([cat,no,name,desc,price])=>`<article class="nn-dish" data-menu-category="${cat}"><span>${no}</span><div><h3>${name}</h3><p>${desc}</p></div><b>${price}</b></article>`).join('')}</div><a class="nn-full-menu" href="mailto:hello@formstudio.example?subject=NEON%20NOODLE%20menu%20concept">ASK ABOUT THE FULL MENU ↗</a></section>
    <section class="nn-story" id="story"><div><span>02 / THE PHILOSOPHY</span><h2>NO QUIET<br/>BITES.</h2><p>We believe dinner should wake you up. Big flavour, cold drinks, late nights and no tiny portions. Pull up hungry. Leave slightly louder.</p><a class="nn-underline" href="#find-us">OUR KIND OF PLACE ↗</a></div>${photo(IMG.noodles, 'Close-up of a bowl of noodles', 'nn-story-photo')}<div class="nn-story-note">BROTH MADE DAILY.<br/>VIBES NEVER OPTIONAL.</div></section>
    <section class="nn-find" id="find-us"><span>03 / COME THROUGH</span><h2>YOUR TABLE<br/>IS <i>WAITING.</i></h2><div class="nn-find-bottom"><p>42 Orchard Street<br/>New York, NY<br/><br/>Every day / 17:00—02:00</p><a class="nn-order giant" href="mailto:hello@formstudio.example?subject=NEON%20NOODLE%20reservation%20concept">RESERVE A SPOT ↗</a></div><small>THIS IS A DESIGN DEMO. THE CONTACT LINK DOES NOT MAKE A REAL RESERVATION.</small></section>`, 'demo-noodle', 'NEON NOODLE', 'An experimental late-night ramen and street food website concept.'),
  'slow-ritual': () => demoShell(`
    <nav class="sr-nav"><a class="sr-brand" href="#top">slow <i>ritual.</i></a><div><a href="#menu">The menu</a><a href="#story">Our story</a><a href="#visit">Come by</a></div><a class="sr-order" href="#visit">Find your table ↗</a></nav>
    <section class="sr-hero" id="top"><div class="sr-hero-copy"><span class="sr-eyebrow">GOOD COFFEE, NO RUSH.</span><h1>A little<br/>room to <em>breathe.</em></h1><p>Thoughtfully sourced coffee, slow mornings and the kind of place where nobody minds if you stay a while.</p><a class="sr-button" href="#menu">Explore our menu <span>↘</span></a><div class="sr-hours-mini"><span>OPEN DAILY</span><b>7:30 AM — 5:00 PM</b></div></div><div class="sr-hero-image">${photo(IMG.coffee, 'Coffee being prepared in a sunlit speciality cafe', 'sr-coffee-img')}<span class="sr-image-caption">A good day starts here. / 001</span><div class="sr-photo-seal">ROASTED<br/>WITH CARE</div></div></section>
    <div class="sr-note-band"><span>ORIGIN MATTERS.</span><span>TAKE THE LONG WAY.</span><span>ONE MORE CUP.</span></div>
    <section class="sr-menu" id="menu"><div class="sr-section-title"><span>01 — THE SMALL MENU</span><h2>Simple things,<br/><em>done well.</em></h2><p>Seasonal, considered, and made fresh each morning.</p></div><div class="sr-menu-list"><div><span>01</span><section><h3>Flat white</h3><p>Double espresso · silky milk</p></section><b>₹220</b></div><div><span>02</span><section><h3>Honey oat latte</h3><p>Local honey · oat milk · cinnamon</p></section><b>₹280</b></div><div><span>03</span><section><h3>Slow pour-over</h3><p>Rotating single origin · brewed to order</p></section><b>₹240</b></div><div><span>04</span><section><h3>Olive oil cake</h3><p>Lemon zest · vanilla cream</p></section><b>₹190</b></div><div><span>05</span><section><h3>Warm sourdough</h3><p>Whipped cultured butter · flaky salt</p></section><b>₹160</b></div></div></section>
    <section class="sr-story" id="story">${photo(IMG.coffeeCup, 'A ceramic cup of coffee on a cafe table', 'sr-story-image')}<div><span>02 — A DAILY RITUAL</span><h2>Not just<br/>a coffee <em>stop.</em></h2><p>Slow Ritual is a neighbourhood coffee room for the moments between things. We work with small farms, thoughtful roasters and bakers who care about the details.</p><p>Come for the first cup. Stay for the second. Bring the book you've been meaning to finish.</p><a class="sr-text-link" href="#visit">A little more about us ↗</a></div></section>
    <section class="sr-visit" id="visit"><span>03 — FIND YOUR SLOW</span><h2>Your usual<br/><em>is waiting.</em></h2><div class="sr-visit-grid"><div><b>FIND US</b><p>18 Olive Lane<br/>Indiranagar, Bengaluru</p><a href="https://maps.google.com/?q=Indiranagar+Bengaluru" target="_blank" rel="noreferrer">Open map ↗</a></div><div><b>OPEN HOURS</b><p>Mon — Fri / 7:30–17:00<br/>Sat — Sun / 8:00–18:00</p><a href="mailto:hello@formstudio.example?subject=Slow%20Ritual%20coffee%20enquiry">Say hello ↗</a></div></div></section>`, 'demo-ritual', 'slow ritual', 'A warm, minimal speciality coffee shop website concept with menu, story and location details.'),
  'maison-ambre': () => demoShell(`
    <nav class="ma-nav"><a class="ma-mark" href="#top">MAISON<br/><i>AMBRE</i></a><div><a href="#philosophy">PHILOSOPHY</a><a href="#menu">THE MENU</a><a href="#visit">VISIT</a></div><a class="ma-reserve" href="#reserve">REQUEST A TABLE <span>↗</span></a></nav>
    <section class="ma-hero" id="top"><div class="ma-hero-image">${photo(IMG.dining, 'Elegant candlelit fine dining table with plated food', 'ma-main-image')}</div><div class="ma-hero-type"><span>AN EVENING AT</span><h1>Maison<br/><em>Ambre.</em></h1><p>Seasonal tasting menus. A slower kind of evening.</p><a href="#philosophy" class="ma-discover">DISCOVER THE HOUSE ↓</a></div><div class="ma-hero-index">01 / THE EXPERIENCE</div></section>
    <section class="ma-philosophy" id="philosophy"><div class="ma-side-label">A NOTE FROM THE HOUSE</div><div><span>THE ART OF STAYING</span><h2>Some evenings<br/>deserve <em>more time.</em></h2><p>At Maison Ambre, the table is a place to pause. A changing menu follows the season, guided by the quiet beauty of ingredients at their best and the pleasure of sharing something unexpected.</p><a class="ma-link" href="#menu">THE MENU, IN SEASON ↗</a></div></section>
    <section class="ma-menu" id="menu"><div class="ma-menu-head"><span>02 / THE EVENING MENU</span><h2>A seasonal <em>conversation.</em></h2><p>Five considered courses, shaped by the market. Menu changes with the season.</p></div><div class="ma-course"><span>01</span><div><b>FIRST LIGHT</b><p>Garden tomato · verbena · cultured cream</p></div><small>Amuse-bouche</small></div><div class="ma-course"><span>02</span><div><b>FROM THE COAST</b><p>Day boat fish · fennel · citrus beurre blanc</p></div><small>Sea</small></div><div class="ma-course"><span>03</span><div><b>THE GARDEN</b><p>Wild mushroom · black garlic · buckwheat</p></div><small>Earth</small></div><div class="ma-course"><span>04</span><div><b>SLOW FIRE</b><p>Heritage lamb · smoked aubergine · thyme</p></div><small>Hearth</small></div><div class="ma-course"><span>05</span><div><b>LAST WORD</b><p>Dark chocolate · pear · olive oil</p></div><small>Sweet</small></div><div class="ma-menu-foot"><span>₹ 4,800 PER GUEST · CONCEPT PRICING</span><span>PAIRING AVAILABLE ON REQUEST</span></div></section>
    <section class="ma-reserve-section" id="reserve"><div class="ma-reserve-copy"><span>03 / TAKE YOUR SEAT</span><h2>We saved<br/>you a <em>moment.</em></h2><p>For a table, a celebration, or a special evening, leave an enquiry and the house will be in touch.</p><a class="ma-button" href="mailto:hello@formstudio.example?subject=Maison%20Ambre%20table%20enquiry">REQUEST A RESERVATION ↗</a><small>DEMO ONLY — THIS LINK DOES NOT CREATE A REAL BOOKING.</small></div><div class="ma-reserve-image">${photo(IMG.hotelRoom, 'Quiet luxurious dining room with warm light', 'ma-quiet-image')}<span>THE EVENING TABLE / EST. 2018</span></div></section>
    <section class="ma-visit" id="visit"><div><span>THE HOUSE</span><p>27 Rue Amber<br/>Bengaluru, India</p></div><div><span>THE HOURS</span><p>Tuesday — Sunday<br/>19:00 until late</p></div><div><span>THE CONTACT</span><p><a href="mailto:hello@formstudio.example">Make an enquiry ↗</a></p></div></section>`, 'demo-ambre', 'Maison Ambre', 'A refined fine dining restaurant website concept with seasonal tasting menu and reservation enquiry.'),
  'forma-wellness': () => demoShell(`
    <nav class="fw-nav"><a href="#top" class="fw-brand"><span>forma</span><i>wellness studio</i></a><div><a href="#rituals">Treatments</a><a href="#about">Our approach</a><a href="#faq">Questions</a></div><a class="fw-book" href="#booking">Book a ritual <span>↗</span></a></nav>
    <section class="fw-hero" id="top"><div class="fw-hero-copy"><span class="fw-kicker">A SPACE TO COME BACK TO YOU</span><h1>Feel more<br/><em>like yourself.</em></h1><p>Thoughtful treatments and grounding rituals to help you slow down, reset and feel at home in your body.</p><a class="fw-primary" href="#rituals">Explore treatments <span>↘</span></a><div class="fw-proof"><span>✳</span><p>LESS PRESSURE.<br/><b>MORE PRESENCE.</b></p></div></div><div class="fw-hero-art">${photo(IMG.spa, 'Serene spa interior with natural textures and warm light', 'fw-main-image')}<div class="fw-art-circle">SLOW<br/>DOWN<br/>HERE</div><div class="fw-art-caption">BREATHE IN. LET GO.</div></div></section>
    <section class="fw-intro" id="about"><span>01 / OUR PHILOSOPHY</span><h2>Wellness isn't a<br/>finish line. It's a <em>feeling.</em></h2><p>At Forma, care is personal and progress is allowed to be quiet. We make space for your needs, meet you where you are, and help you build rituals that feel good long after you leave.</p></section>
    <section class="fw-rituals" id="rituals"><div class="fw-section-head"><div><span>02 / FIND YOUR RITUAL</span><h2>Care that meets<br/><em>you here.</em></h2></div><p>Choose what your body and mind need today. Every treatment is adapted to you.</p></div><div class="fw-service-tabs" role="group" aria-label="Filter treatments"><button class="is-active" data-service-filter="all">All rituals</button><button data-service-filter="body">Body</button><button data-service-filter="skin">Skin</button><button data-service-filter="reset">Reset</button></div><div class="fw-services">${[
      ['body','01','Deep release massage','A grounding full-body treatment with slow, considered pressure.','60 / 90 min','₹2,800'],['skin','02','The glow facial','A restorative facial built around hydration, touch and balance.','50 min','₹2,400'],['reset','03','Breathwork & sound','A small-group session to leave the noise at the door.','45 min','₹1,600'],['body','04','Warm stone ritual','Warmth and long-flowing movements for a deeper exhale.','75 min','₹3,200'],['skin','05','Sculpt & soothe','Facial massage and gentle techniques for a fresh, rested feel.','40 min','₹2,100'],['reset','06','Quiet room hour','A private hour to decompress with tea, sound and stillness.','60 min','₹1,200']
    ].map(([cat,n,title,desc,time,price])=>`<article class="fw-service" data-service="${cat}"><span class="fw-service-no">${n}</span><div class="fw-service-copy"><h3>${title}</h3><p>${desc}</p><small>${time}</small></div><div class="fw-service-price"><b>${price}</b><a href="#booking" aria-label="Enquire about ${title}">↗</a></div></article>`).join('')}</div></section>
    <section class="fw-booking" id="booking"><div><span>03 / MAKE SPACE FOR YOU</span><h2>Your time<br/><em>starts here.</em></h2><p>Choose a service and send an enquiry. This demo will show a confirmation locally; it will not create a real booking.</p></div><form class="demo-form fw-form"><label for="fw-service">I'm interested in</label><select id="fw-service" required><option value="">Choose a ritual</option><option>Deep release massage</option><option>The glow facial</option><option>Breathwork & sound</option><option>Warm stone ritual</option><option>Sculpt & soothe</option><option>Quiet room hour</option></select><label for="fw-name">Your name</label><input id="fw-name" required placeholder="Name"/><label for="fw-email">Email address</label><input id="fw-email" type="email" required placeholder="you@example.com"/><button type="submit" class="fw-primary">Send an enquiry ↗</button><p class="form-message" role="status"></p></form></section>
    <section class="fw-faq" id="faq"><span>04 / GOOD TO KNOW</span><h2>A few things<br/><em>you may wonder.</em></h2><div class="faq-list"><details><summary>I've never been to a wellness studio before. Is that okay?<span>＋</span></summary><p>Absolutely. We'll talk through what you need, what feels comfortable and any questions you have before beginning.</p></details><details><summary>Can I change my treatment on the day?<span>＋</span></summary><p>We'll do our best to adapt the session to how you're feeling. Let the team know when you arrive.</p></details><details><summary>How early should I arrive?<span>＋</span></summary><p>Arriving 10 minutes early gives you a moment to settle in without rushing.</p></details></div></section>`, 'demo-forma', 'Forma Wellness', 'A soft contemporary wellness studio website concept with treatment filters, enquiry form and FAQ.'),
  'kinetic-club': () => demoShell(`
    <nav class="kc-nav"><a href="#top" class="kc-logo">K<span>®</span></a><div><a href="#training">TRAINING</a><a href="#schedule">SCHEDULE</a><a href="#membership">MEMBERSHIP</a></div><a class="kc-join" href="#membership">GET IN <span>↗</span></a></nav>
    <section class="kc-hero" id="top"><div class="kc-hero-tag">NO SHORTCUTS / JUST SHOW UP</div><h1>MOVE<br/><span>WITH</span><br/>INTENT<span class="kc-period">.</span></h1><div class="kc-hero-right">${photo(IMG.gym, 'Athletes training in a high contrast industrial gym', 'kc-main-image')}<div class="kc-stamp">STRONGER<br/>TOGETHER<br/>SINCE DAY ONE</div></div><div class="kc-hero-bottom"><p>Good people. Hard work.<br/>Progress that stays with you.</p><a href="#training" class="kc-arrow">SCROLL TO SWEAT ↓</a><span>BLR / INDIRANAGAR</span></div></section>
    <div class="kc-ticker"><div>SHOW UP. PUT IN WORK. REPEAT. / SHOW UP. PUT IN WORK. REPEAT. /</div></div>
    <section class="kc-training" id="training"><div class="kc-label">01 / FIND YOUR FIGHT</div><div class="kc-training-head"><h2>YOUR WORK.<br/><span>YOUR RULES.</span></h2><p>Smart programming, coaches who know your name, and a room that wants you to win.</p></div><div class="kc-class-grid"><article><span>01 / STRENGTH</span><div class="kc-class-icon">↗</div><h3>HEAVY<br/>DAYS</h3><p>Build strength, move with control, earn the next plate.</p><b>45 MIN · ALL LEVELS</b></article><article><span>02 / CONDITIONING</span><div class="kc-class-icon">✳</div><h3>ENGINE<br/>ROOM</h3><p>Intervals, circuits and a bigger tank. Leave nothing in reserve.</p><b>40 MIN · HIGH ENERGY</b></article><article><span>03 / MOBILITY</span><div class="kc-class-icon">↘</div><h3>RESET<br/>MODE</h3><p>Recover smarter with movement that makes tomorrow better.</p><b>35 MIN · ALL LEVELS</b></article></div></section>
    <section class="kc-schedule" id="schedule"><div class="kc-label">02 / WEEKLY PLAN</div><div class="kc-schedule-head"><h2>LOCK IN<br/>YOUR <span>TIME.</span></h2><p>Choose a day and find your next session. Schedule is fictional demo content.</p></div><div class="kc-day-tabs" role="group" aria-label="Choose day"><button class="is-active" data-day="Mon">MON</button><button data-day="Tue">TUE</button><button data-day="Wed">WED</button><button data-day="Thu">THU</button><button data-day="Fri">FRI</button><button data-day="Sat">SAT</button></div><div class="kc-sessions" id="kc-sessions"></div><div class="kc-schedule-note">CLASS TIMES ARE EXAMPLE CONTENT / CHECK WITH YOUR GYM BEFORE TRAINING.</div></section>
    <section class="kc-membership" id="membership"><div class="kc-label">03 / YOUR NEXT REP</div><h2>READY<br/>WHEN <span>YOU ARE.</span></h2><div class="kc-membership-bottom"><p>New to the room? Start with a coach-led intro session. No pressure, no performance. Just a plan for your next step.</p><a href="mailto:hello@formstudio.example?subject=Kinetic%20Club%20intro%20session">BOOK AN INTRO ↗</a></div><div class="kc-membership-sticker">COMMIT<br/>TO YOU<br/>↗</div></section>`, 'demo-kinetic', 'Kinetic Club', 'A bold athletic gym website concept with class schedule filtering and membership CTA.'),
  'stay-awhile': () => demoShell(`
    <nav class="sa-nav"><a href="#top" class="sa-wordmark">stay <em>awhile.</em></a><div><a href="#rooms">The rooms</a><a href="#story">Our place</a><a href="#visit">Find us</a></div><a href="#booking" class="sa-book">Check availability <span>↗</span></a></nav>
    <section class="sa-hero" id="top"><div class="sa-hero-image">${photo(IMG.hotel, 'Calm boutique hotel room opening onto a quiet landscape', 'sa-main-image')}<div class="sa-image-label">A SMALL STAY WITH A BIG EXHALE.</div></div><div class="sa-hero-copy"><span>THE SLOW SIDE OF GETTING AWAY</span><h1>Somewhere<br/>else. A little<br/><em>more you.</em></h1><p>A thoughtful hideaway for long breakfasts, quiet afternoons and absolutely no rush to be anywhere else.</p><a class="sa-button" href="#booking">Find your stay <span>↘</span></a><div class="sa-location">NEAR THE WESTERN GHATS<br/>KARNATAKA, INDIA</div></div></section>
    <section class="sa-quote" id="story"><span>01 / THE FEELING</span><h2>Leave a little<br/>space for <em>nothing.</em></h2><p>Designed to feel less like checking in and more like being welcomed. Six considered rooms, green trails at the doorstep, and the kind of mornings that make you forget to check your phone.</p></section>
    <section class="sa-rooms" id="rooms"><div class="sa-section-heading"><span>02 / YOUR ROOM TO EXHALE</span><h2>Find your kind<br/><em>of quiet.</em></h2></div><div class="sa-room-grid"><article>${photo(IMG.hotelRoom,'An inviting boutique hotel room with linen bedding','sa-room-photo')}<div><span>01 — THE GARDEN ROOM</span><h3>Wake up to green.</h3><p>Soft mornings, natural textures and a private little patio.</p><b>From ₹8,500 / night</b></div></article><article>${photo(IMG.architecture2,'A warm and airy room with large windows','sa-room-photo')}<div><span>02 — THE VIEW SUITE</span><h3>Stay a little longer.</h3><p>Open light, slow corners and room to settle in properly.</p><b>From ₹12,000 / night</b></div></article></div></section>
    <section class="sa-amenities"><div><span>GOOD THINGS COME INCLUDED</span><h2>Little comforts.<br/><em>Big exhale.</em></h2></div><ul><li>Breakfast made slowly</li><li>Walking paths and garden spaces</li><li>Books, board games and quiet corners</li><li>Seasonal food from nearby growers</li><li>Thoughtfully placed nothing-to-do time</li></ul></section>
    <section class="sa-booking" id="booking"><div class="sa-booking-copy"><span>03 / YOUR TIME AWAY</span><h2>Let's find<br/>your <em>dates.</em></h2><p>Choose a check-in and check-out date to try the demo booking flow. It will not make a real reservation.</p></div><form class="demo-form sa-booking-form"><label for="sa-checkin">Check in</label><input type="date" id="sa-checkin" required/><label for="sa-checkout">Check out</label><input type="date" id="sa-checkout" required/><label for="sa-guests">Guests</label><select id="sa-guests"><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select><button class="sa-button" type="submit">Check dates ↗</button><p class="form-message" role="status"></p></form></section>
    <section class="sa-visit" id="visit"><div><span>COME FIND US</span><p>A little outside the ordinary<br/>Near Chikmagalur, Karnataka</p></div><div><span>THE SEASON</span><p>Open year-round<br/>Best slow days: October—March</p></div><div><span>QUESTIONS?</span><p><a href="mailto:hello@formstudio.example">Write us a note ↗</a></p></div></section>`, 'demo-stay', 'stay awhile', 'An editorial boutique hotel website concept with rooms, amenities and demo availability checker.'),
  'offset-studio': () => demoShell(`
    <nav class="os-nav"><a href="#top" class="os-brand">O<span>/</span></a><div><a href="#work">WORK</a><a href="#what">WHAT WE DO</a><a href="#contact">SAY HELLO</a></div><span>INDEPENDENT BY NATURE™</span></nav>
    <section class="os-hero" id="top"><div class="os-hero-kicker"><span>DESIGN PARTNERS FOR THE NOT-YET-OBVIOUS</span><span>BLR / EVERYWHERE</span></div><h1>GOOD IDEAS<br/>HAVE <i>EDGES.</i></h1><div class="os-hero-bottom"><p>We build identities and digital experiences for people who would rather make a mark than fit a mould.</p><div class="os-hero-sticker">MAKE<br/>SOME<br/>NOISE ↗</div><a href="#work">SEE WHAT WE MAKE ↓</a></div><div class="os-swipe-line">BRAND / DIGITAL / EXPERIMENT / REPEAT /</div></section>
    <section class="os-work" id="work"><div class="os-sec-top"><span>01 / SELECTED WORLDS</span><span>FICTIONAL CONCEPT PROJECTS</span></div><div class="os-work-grid"><article class="os-project os-pink"><span>01 — CULTURE / BRAND</span><div class="os-project-art"><b>GOOD<br/>FORM<span>®</span></b><i>GF/01</i></div><div class="os-project-caption"><h3>Good Form Athletics</h3><p>A movement-first identity for an independent training label.</p><span>IDENTITY ↗</span></div></article><article class="os-project os-blue"><span>02 — FOOD / DIGITAL</span><div class="os-project-art"><b>NO<br/>SMALL<br/>PLATES.</b><i>NSP®</i></div><div class="os-project-caption"><h3>No Small Plates</h3><p>A big-hearted restaurant concept with an online appetite.</p><span>DIGITAL ↗</span></div></article><article class="os-project os-yellow"><span>03 — OBJECTS / CAMPAIGN</span><div class="os-project-art"><b>USE<br/>AGAIN.</b><i>U/A 002</i></div><div class="os-project-caption"><h3>Useful Objects</h3><p>A campaign system for beautiful objects that last.</p><span>CAMPAIGN ↗</span></div></article></div></section>
    <section class="os-what" id="what"><span>02 / NOT A BIG AGENCY. A GOOD PARTNER.</span><h2>Small enough<br/>to care. <i>Bold enough<br/>to question.</i></h2><div class="os-services"><div><span>01</span><b>BRAND WORLDS</b><p>Positioning, identity systems, art direction and the little rules that make a brand feel whole.</p></div><div><span>02</span><b>DIGITAL EXPERIENCES</b><p>Websites and digital touchpoints designed with a clear point of view and a clear job to do.</p></div><div><span>03</span><b>CAMPAIGNS & IDEAS</b><p>Creative systems that stretch across formats without losing the original spark.</p></div></div></section>
    <section class="os-contact" id="contact"><span>03 / YOUR MOVE</span><h2>Have a good<br/><i>problem?</i></h2><div class="os-contact-bottom"><p>The best projects usually start with a conversation. Bring the messy brief, the big thought or the thing you can't quite solve.</p><a href="mailto:hello@formstudio.example?subject=Offset%20Studio%20project%20enquiry">LET'S GET INTO IT ↗</a></div></section>`, 'demo-offset', 'OFFSET Studio', 'A high-contrast independent creative studio site concept with fictional case studies and services.'),
  'northline': () => demoShell(`
    <nav class="nl-nav"><a href="#top" class="nl-logo"><span>n</span> northline</a><div><a href="#platform">Platform</a><a href="#solutions">Solutions</a><a href="#pricing">Pricing</a><a href="#resources">Resources</a></div><a class="nl-demo-btn" href="#contact">Book a demo <span>↗</span></a></nav>
    <section class="nl-hero" id="top"><div class="nl-hero-copy"><div class="nl-pill"><i></i> THE OPERATIONS WORKSPACE</div><h1>See the whole<br/>picture. <span>Move<br/>with confidence.</span></h1><p>Bring scattered workflows, reporting and decisions into one clear operating view — so your team can focus on the work that matters.</p><div class="nl-hero-actions"><a class="nl-primary" href="#contact">Get a walkthrough ↗</a><a class="nl-secondary" href="#platform">Explore the platform ↓</a></div><div class="nl-trustline"><span>BUILT FOR TEAMS THAT ARE</span><b>GROWING · CONNECTED · AMBITIOUS</b></div></div><div class="nl-product-window"><div class="nl-window-top"><span><i></i><i></i><i></i></span><b>northline / overview</b><small>● Live workspace</small></div><div class="nl-app-ui"><aside><b>n.</b><span class="selected">◫ Overview</span><span>▦ Projects</span><span>◷ Timeline</span><span>♧ Team</span><span>⚙ Settings</span><div class="nl-avatar">NL</div></aside><div class="nl-dashboard"><div class="nl-dashboard-head"><div><small>MONDAY, OCTOBER 12</small><h3>Good morning, Alex.</h3></div><button>+ New report</button></div><div class="nl-kpis"><div><small>Projects on track</small><b>24 <i>↑ 8%</i></b><span>vs. last month</span></div><div><small>Open decisions</small><b>07 <em>·</em></b><span>3 need attention</span></div><div><small>Team capacity</small><b>82% <i>↑ 4%</i></b><span>healthy range</span></div></div><div class="nl-chart-box"><div><b>Delivery health</b><span>Last 30 days ⌄</span></div><svg viewBox="0 0 500 128" role="img" aria-label="Illustrative dashboard chart showing project delivery trending upwards"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#6d8cff" stop-opacity=".26"/><stop offset="1" stop-color="#6d8cff" stop-opacity="0"/></linearGradient></defs><path d="M0 102 C26 98 36 74 65 82 S108 45 140 63 S189 78 220 52 S268 63 296 41 S341 57 371 26 S428 39 500 9 V128 H0Z" fill="url(#chartFill)"/><path d="M0 102 C26 98 36 74 65 82 S108 45 140 63 S189 78 220 52 S268 63 296 41 S341 57 371 26 S428 39 500 9" fill="none" stroke="#5678f5" stroke-width="3" stroke-linecap="round"/></svg><div class="nl-chart-labels"><span>SEP 14</span><span>SEP 21</span><span>SEP 28</span><span>OCT 05</span><span>OCT 12</span></div></div><div class="nl-task-row"><span class="nl-task-dot"></span><div><b>Q4 launch plan</b><small>Product · Due in 2 days</small></div><span class="nl-task-status">ON TRACK</span></div></div></div><div class="nl-window-foot">A PRODUCT CONCEPT / SAMPLE DATA ONLY</div></div></section>
    <section class="nl-logo-strip"><span>MADE FOR THE TEAMS CONNECTING</span><b>PRODUCT</b><i>—</i><b>OPERATIONS</b><i>—</i><b>PEOPLE</b><i>—</i><b>DELIVERY</b></section>
    <section class="nl-platform" id="platform"><div class="nl-section-kicker">01 / THE PLATFORM</div><div class="nl-platform-head"><h2>Less chasing.<br/><span>More moving.</span></h2><p>Northline brings your work into focus, helping teams see what matters, surface risks early and make decisions with context.</p></div><div class="nl-feature-grid"><article><span>01 / ONE VIEW</span><div class="nl-feature-icon">◫</div><h3>Know where work stands</h3><p>Connect project signals, milestones and ownership in a clear shared view.</p><a href="#contact">Explore visibility ↗</a></article><article><span>02 / EARLY SIGNALS</span><div class="nl-feature-icon">⌁</div><h3>Catch blockers earlier</h3><p>Spot shifts and dependencies before a small delay becomes a big surprise.</p><a href="#contact">Explore signals ↗</a></article><article><span>03 / SHARED CONTEXT</span><div class="nl-feature-icon">◎</div><h3>Make better decisions</h3><p>Keep decisions close to the work, with clear owners and next steps.</p><a href="#contact">Explore decisions ↗</a></article></div></section>
    <section class="nl-quote"><div class="nl-quote-mark">“</div><p>Clarity is not another dashboard. It's the confidence to know what to do next.</p><span>THE NORTHLINE PRINCIPLE</span></section>
    <section class="nl-pricing" id="pricing"><div><span>02 / SIMPLE BY DESIGN</span><h2>Room to grow.<br/><i>Nothing extra.</i></h2><p>Illustrative package structure for this concept. Pricing and availability would be confirmed by the real product team.</p></div><div class="nl-price-card"><span>TEAM</span><h3>Find your flow.</h3><p>For teams that want one shared operating picture.</p><b>Custom plan</b><ul><li>Shared project views</li><li>Live delivery dashboard</li><li>Team workflows</li><li>Guided onboarding</li></ul><a href="#contact">Talk to our team ↗</a></div></section>
    <section class="nl-faq" id="resources"><div><span>03 / QUESTIONS, ANSWERED</span><h2>Before you<br/><i>jump in.</i></h2></div><div class="faq-list"><details><summary>Who is Northline built for?<span>＋</span></summary><p>This concept is designed for growing teams that need a clearer view across projects, people and delivery.</p></details><details><summary>Does it replace our existing tools?<span>＋</span></summary><p>The example positioning is about bringing context together. Integrations and exact product capabilities would depend on the real implementation.</p></details><details><summary>Can we tailor workflows?<span>＋</span></summary><p>A real product would define configuration options around team needs, permissions and existing workflows.</p></details></div></section>
    <section class="nl-contact" id="contact"><div><span>READY TO SEE THE BIGGER PICTURE?</span><h2>Let's make<br/>work <i>clearer.</i></h2></div><div><p>Book a concept walkthrough and see how a considered product experience could help your team.</p><a href="mailto:hello@formstudio.example?subject=Northline%20product%20demo%20concept" class="nl-primary">Request a walkthrough ↗</a><small>FICTIONAL PRODUCT CONCEPT — NO REAL DEMO IS BOOKED.</small></div></section>`, 'demo-north', 'Northline', 'A professional SaaS landing page concept with product dashboard, features, pricing and FAQs.'),
  'atelier-north': () => demoShell(`
    <nav class="an-nav"><a href="#top" class="an-brand">ATELIER<br/><i>NORTH.</i></a><div><a href="#projects">Selected work</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div><a href="#contact" class="an-cta">Start a conversation ↗</a></nav>
    <section class="an-hero" id="top"><div class="an-hero-top"><span>ARCHITECTURE / INTERIORS / OBJECTS</span><span>BENGALURU · WORKING EVERYWHERE</span></div><div class="an-hero-image">${photo(IMG.architecture, 'Warm architectural interior with natural light and timber','an-main-image')}<div class="an-title"><span>ROOM FOR</span><h1>the life<br/><em>inside.</em></h1></div><div class="an-image-caption">HOUSE NO. 08 / PRIVATE RESIDENCE</div></div><div class="an-hero-bottom"><p>We design spaces that feel considered, lived-in and quietly full of character.</p><a href="#projects">EXPLORE SELECTED WORK ↓</a></div></section>
    <section class="an-intro" id="approach"><span>01 / HOW WE SEE IT</span><h2>Good spaces don't<br/>ask for attention.<br/><em>They hold it.</em></h2><div><p>At Atelier North, we believe architecture is not just a shape to look at. It's the light that finds a room at four, the way a door opens, and a material that gets better with time.</p><p>We work from the inside out — listening first, making slowly, and finding the simple idea that holds everything together.</p></div></section>
    <section class="an-projects" id="projects"><div class="an-projects-head"><span>02 / SELECTED PROJECTS</span><h2>Different lives.<br/><em>Different spaces.</em></h2></div><div class="an-project-grid"><article class="an-large-project">${photo(IMG.architecture2,'Light-filled modern living room with sculptural furniture','an-project-img')}<div><span>01 / RESIDENTIAL · 2025</span><h3>The quiet house</h3><p>A restrained home shaped around daylight, tactile finishes and small daily rituals.</p></div></article><article>${photo(IMG.hotelRoom,'Calm bedroom with layered natural textures','an-project-img')}<div><span>02 / HOSPITALITY · 2024</span><h3>The long weekend</h3><p>A guesthouse that feels like a deep breath outside the city.</p></div></article><article>${photo(IMG.studio,'Contemporary studio interior with natural light','an-project-img')}<div><span>03 / WORKSPACE · 2024</span><h3>Room to think</h3><p>An independent studio designed for focus, exchange and making.</p></div></article></div></section>
    <section class="an-approach"><span>03 / FROM FIRST SKETCH TO LAST DETAIL</span><div><h2>Thoughtful by<br/><em>nature.</em></h2><ul><li><b>01</b> Listen & understand</li><li><b>02</b> Find the simple idea</li><li><b>03</b> Resolve the details</li><li><b>04</b> Make space for life</li></ul></div></section>
    <section class="an-contact" id="contact"><span>04 / LET'S MAKE ROOM</span><h2>Have a place<br/>in <em>mind?</em></h2><p>Tell us what you hope a space will feel like. We'll start there.</p><a href="mailto:hello@formstudio.example?subject=Atelier%20North%20project%20enquiry">START A CONVERSATION ↗</a></section>`, 'demo-atelier', 'Atelier North', 'An editorial architecture studio website concept with selected residential, hospitality and workspace projects.'),
  'volt-afterhours': () => demoShell(`
    <nav class="va-nav"><a href="#top" class="va-logo"><span>V</span>OLT<span class="va-logo-dot">●</span></a><div><a href="#experience">THE EXPERIENCE</a><a href="#lineup">LINEUP</a><a href="#venue">VENUE</a></div><a class="va-nav-cta" href="#lineup">ENTER THE NIGHT <b>↗</b></a></nav>
    <section class="va-hero" id="top"><div class="va-grid" aria-hidden="true"></div><div class="va-glow va-glow-one" aria-hidden="true"></div><div class="va-glow va-glow-two" aria-hidden="true"></div><div class="va-hero-top"><span><i></i> INDEPENDENT NIGHT CULTURE / 001</span><span>BLR → EVERYWHERE</span></div><div class="va-hero-center"><div class="va-overline">NOT A NIGHT OUT. A FULL-BODY RESET.</div><h1 class="va-glitch" data-text="FEEL THE NIGHT.">FEEL THE<br/><em> NIGHT.</em></h1><p>For the ones who came for one song<br/>and stayed until the lights came on.</p><div class="va-hero-actions"><a href="#lineup" class="va-button va-button-hot magnetic">Explore the lineup <span>↘</span></a><a href="#experience" class="va-play-link"><i>▶</i> THE VOLT FREQUENCY / 00:32</a></div></div><div class="va-poster">VOLT<br/><i>AFTER<br/>HOURS</i><span>NO QUIET<br/>CROWD.</span></div><div class="va-soundwave" aria-label="Animated decorative sound visualizer">${Array.from({length:48},(_,i)=>`<i style="--n:${(i*7)%13+3};--d:${(i%11)*-.09}s"></i>`).join('')}</div><div class="va-hero-bottom"><span>01 / 04 — LIGHTS DOWN, HEARTS UP</span><a href="#experience">SCROLL INTO IT <b>↓</b></a><span>✳ SOUND ON IN YOUR HEAD</span></div></section>
    <div class="va-ticker" aria-hidden="true"><div>NO HALF VOLUME ✳ ALL NIGHT ENERGY ✳ LOUD FEELINGS ✳ NO HALF VOLUME ✳ ALL NIGHT ENERGY ✳ LOUD FEELINGS ✳</div></div>
    <section class="va-experience motion-reveal" id="experience"><div class="va-section-head"><span>01 / THE FEELING</span><span>THIS IS YOUR SIGN ↗</span></div><div class="va-experience-grid"><div><h2>Lose the<br/><em>outside.</em></h2><p>One room. A hundred frequencies. Lights that move with the room, sound that makes the floor feel alive, and strangers who somehow know the same words.</p><a href="#lineup" class="va-text-link">FIND YOUR FREQUENCY ↘</a></div><div class="va-room-visual" data-tilt><div class="va-room-ring ring-a"></div><div class="va-room-ring ring-b"></div><div class="va-room-core">V<br/><small>VOL. 001</small></div><span>IMMERSIVE LIGHT / 360° SOUND</span></div></div></section>
    <section class="va-lineup" id="lineup"><div class="va-lineup-head"><div><span>02 / THE LINEUP</span><h2>Three rooms.<br/><em>Zero skips.</em></h2></div><p>Illustrative artist and set concepts for a fictional event identity. Replace the lineup, dates and venue before using this for a real client.</p></div><div class="va-lineup-grid"><article class="va-artist motion-reveal" data-tilt><span>ROOM 01 / 22:00—00:00</span><div class="va-artist-art va-art-one"><b>01</b><i>↗</i></div><h3>LOW FREQUENCY</h3><p>Deep house / warm bass / slow burn</p><div class="va-artist-bottom"><span>OPENING SIGNAL</span><details><summary>Set details <b>＋</b></summary><p>A spacious, low-lit opening set built to let the room settle into its rhythm.</p></details></div></article><article class="va-artist motion-reveal" data-tilt><span>ROOM 02 / 00:00—02:00</span><div class="va-artist-art va-art-two"><b>02</b><i>✳</i></div><h3>NEON SAINT</h3><p>Electro / left-field pop / voltage</p><div class="va-artist-bottom"><span>PEAK TRANSMISSION</span><details><summary>Set details <b>＋</b></summary><p>A bright, restless set for the point in the night when the floor becomes one moving thing.</p></details></div></article><article class="va-artist motion-reveal" data-tilt><span>ROOM 03 / 02:00—LATE</span><div class="va-artist-art va-art-three"><b>03</b><i>∞</i></div><h3>AFTER IMAGE</h3><p>Breaks / techno / last-light energy</p><div class="va-artist-bottom"><span>FINAL FREQUENCY</span><details><summary>Set details <b>＋</b></summary><p>A high-energy closing chapter with distorted textures, fast transitions and one more track.</p></details></div></article></div></section>
    <section class="va-venue" id="venue"><div class="va-venue-image">${photo(IMG.concert,'Crowd under dramatic concert lights','va-crowd-image')}<div class="va-image-stamp">FIND<br/>YOUR<br/>PEOPLE.</div></div><div class="va-venue-copy"><span>03 / THE ROOM</span><h2>Meet us<br/>in the <em>middle.</em></h2><p>Built for big sound, moving light and a crowd that doesn't need a reason. The final venue, access information and event details are confirmed with the real organiser.</p><a class="va-button" href="mailto:hello@formstudio.example?subject=VOLT%20Afterhours%20event%20website%20enquiry">Build an event site ↗</a><small>DEMO CONCEPT / NO EVENT OR TICKETS ARE LIVE.</small></div></section>
    <section class="va-endcap"><span>04 / LAST CALL</span><h2>WHEN THE<br/><em>BEAT DROPS,</em><br/>WE RISE.</h2><a href="mailto:hello@formstudio.example?subject=VOLT%20Afterhours%20project%20enquiry">CREATE YOUR OWN FREQUENCY ↗</a><div class="va-end-star">✳</div></section>`, 'demo-volt motion-page', 'VOLT AFTERHOURS', 'A motion-heavy nightlife and event website concept with kinetic typography, animated visualizer bars, tilt cards and scroll reveals.'),
  'sugar-riot': () => demoShell(`
    <nav class="sugar-nav"><a href="#top" class="sugar-logo">SUGAR<span>✳</span>RIOT</a><div><a href="#flavours">THE FLAVOURS</a><a href="#story">OUR ENERGY</a><a href="#visit">FIND THE RIOT</a></div><a href="#flavours" class="sugar-nav-cta">GET A SCOOP <b>↗</b></a></nav>
    <section class="sugar-hero" id="top"><div class="sugar-sunburst" aria-hidden="true"></div><div class="sugar-float sugar-float-one" aria-hidden="true">🍒</div><div class="sugar-float sugar-float-two" aria-hidden="true">✳</div><div class="sugar-float sugar-float-three" aria-hidden="true">●</div><div class="sugar-hero-top"><span>GOOD MOOD DEPARTMENT / EST. WHENEVER</span><span>100% EXTRA, 0% BORING</span></div><div class="sugar-hero-copy"><p class="sugar-kicker"><i></i> FROZEN HAPPINESS, UNLEASHED</p><h1>LIFE'S TOO<br/>SHORT FOR<br/><em>VANILLA.</em></h1><p>Big scoops. Wild swirls. The kind of sweet that makes your inner child do a cartwheel.</p><a class="sugar-button magnetic" data-confetti href="#flavours">SCOOP SOME JOY <span>✳</span></a></div><div class="sugar-hero-art" data-tilt>${photo(IMG.dessert,'Colourful dessert and ice cream styled as playful campaign imagery','sugar-hero-image')}<div class="sugar-sticker">100%<br/>HAPPY<br/>ENERGY</div><div class="sugar-hero-caption">SWEET STUFF / 001</div></div><div class="sugar-bottom-line"><span>MADE FOR THE MAIN CHARACTER.</span><span>NO BAD DAYS, JUST BAD SCOOPS.</span></div></section>
    <div class="sugar-marquee"><div>SWEET / LOUD / EXTRA / REPEAT ✳ SWEET / LOUD / EXTRA / REPEAT ✳ SWEET / LOUD / EXTRA / REPEAT ✳</div></div>
    <section class="sugar-flavours" id="flavours"><div class="sugar-section-title"><span>01 / PICK YOUR PERSONALITY</span><h2>Meet the <em>troublemakers.</em></h2><p>Small-batch flavour concepts for a fictional dessert shop. Hover, tap and play around.</p></div><div class="sugar-flavour-grid"><article class="sugar-card sugar-card-pink motion-reveal" data-tilt><div class="sugar-card-top"><span>01 / THE ICON</span><b>✳</b></div><div class="sugar-scoop scoop-pink">🍒<i>✳</i></div><h3>Cherry<br/>Bombshell</h3><p>Cherry ripple · vanilla bean · pop rocks</p><div class="sugar-card-bottom"><span>LOUD & FRUITY</span><a data-confetti href="mailto:hello@formstudio.example?subject=Cherry%20Bombshell%20dessert%20concept">TRY THIS ↗</a></div></article><article class="sugar-card sugar-card-yellow motion-reveal" data-tilt><div class="sugar-card-top"><span>02 / THE WILD CARD</span><b>↗</b></div><div class="sugar-scoop scoop-yellow">🍋<i>✳</i></div><h3>Drama<br/>Llama</h3><p>Lemon curd · cheesecake · cookie chaos</p><div class="sugar-card-bottom"><span>SOUR THEN SWEET</span><a data-confetti href="mailto:hello@formstudio.example?subject=Drama%20Llama%20dessert%20concept">TRY THIS ↗</a></div></article><article class="sugar-card sugar-card-blue motion-reveal" data-tilt><div class="sugar-card-top"><span>03 / THE CULT FAVOURITE</span><b>∞</b></div><div class="sugar-scoop scoop-blue">🫐<i>✳</i></div><h3>Blue<br/>Monday</h3><p>Blueberry swirl · dark chocolate · sea salt</p><div class="sugar-card-bottom"><span>COOL BUT CHAOTIC</span><a data-confetti href="mailto:hello@formstudio.example?subject=Blue%20Monday%20dessert%20concept">TRY THIS ↗</a></div></article></div></section>
    <section class="sugar-story" id="story"><div class="sugar-story-art"><div class="sugar-story-ring"></div><div class="sugar-story-face">: )</div><span>SCREAM<br/>FOR<br/>MORE!</span></div><div class="sugar-story-copy"><span>02 / THE SUGAR THEORY</span><h2>Joy is not<br/>a <em>sometimes</em><br/>thing.</h2><p>We think dessert deserves its own main-character moment. So we make colour-first, flavour-forward treats for birthdays, bad Tuesdays, good news and absolutely no reason at all.</p><a href="#visit" class="sugar-text-link">MORE ABOUT THE RIOT ↗</a></div></section>
    <section class="sugar-build"><div><span>03 / BUILT TO BE SHARED</span><h2>Your brand<br/>should taste<br/><em>like nothing else.</em></h2><p>From playful cafés to bold product launches, this art direction brings movement, colour and a little controlled chaos to the table.</p><a data-confetti href="mailto:hello@formstudio.example?subject=SUGAR%20RIOT%20style%20website%20enquiry" class="sugar-button">MAKE IT YOURS <span>↗</span></a></div><div class="sugar-build-photo">${photo(IMG.coffee,'Bright cafe counter with food and drink styling','sugar-cafe-image')}<span>GOOD THINGS HAPPEN HERE.</span></div></section>
    <section class="sugar-end" id="visit"><span>04 / FIND THE GOOD STUFF</span><h2>STAY<br/><em>SWEET.</em><br/>GET WEIRD.</h2><p>Fictional flavour house / replace with the client's location, menu and hours.</p><a href="mailto:hello@formstudio.example?subject=SUGAR%20RIOT%20project%20enquiry">LET'S MAKE SOMETHING DELICIOUS ↗</a><div class="sugar-end-bubbles"><i></i><i></i><i></i><i></i></div></section>`, 'demo-sugar motion-page', 'SUGAR RIOT', 'A maximalist dessert brand concept with floating candy shapes, kinetic type, tilt cards, scroll reveals and click confetti.'),
  'velocity-labs': () => demoShell(`
    <nav class="vl-nav"><a href="#top" class="vl-logo">VELOCITY<span> / LABS</span></a><div><a href="#engineering">ENGINEERING</a><a href="#machines">MACHINES</a><a href="#contact">CONTACT</a></div><a class="vl-cta" href="#machines">FIND YOUR DRIVE <b>↗</b></a></nav>
    <section class="vl-hero" id="top"><div class="vl-speed-lines" aria-hidden="true"></div><div class="vl-hero-top"><span>PERFORMANCE / FORM / FEELING</span><span>PROTOTYPE 001 — CONCEPT BUILD</span></div><div class="vl-car-wrap">${photo(IMG.car,'Performance sports car in a dramatic automotive photograph','vl-car-image')}<div class="vl-car-overlay"></div><div class="vl-speed-ring"><span>V</span><b>∞</b><small>PURE MOMENTUM</small></div><div class="vl-photo-label">AERODYNAMIC STUDY / 001</div></div><div class="vl-hero-type"><span>ENGINEERED FOR</span><h1>THE<br/><em>FEELING.</em></h1><div class="vl-hero-bottom"><p>Not built for the parking lot.<br/>Built for the moment the road opens up.</p><a class="vl-arrow-button magnetic" href="#engineering">EXPLORE THE MACHINE <span>↘</span></a><span class="vl-hero-number">001 <i>/</i> 003</span></div></div><div class="vl-runner" aria-hidden="true"><div>FORM FOLLOWS FORCE / FORM FOLLOWS FORCE / FORM FOLLOWS FORCE /</div></div></section>
    <section class="vl-manifesto motion-reveal" id="engineering"><div class="vl-kicker">01 / BUILT AROUND FEELING</div><div class="vl-manifesto-grid"><h2>Speed is a<br/><em>language.</em></h2><div><p>Precision in the detail. Confidence in the silhouette. A machine should feel considered before it moves — and unforgettable once it does.</p><p>This concept pairs performance-led storytelling with a motion system inspired by acceleration: sharp entrances, sweeping image masks and a steady pulse through the page.</p><a href="#machines" class="vl-underlink">MEET THE MACHINE ↗</a></div></div></section>
    <section class="vl-stats"><div class="vl-stat motion-reveal"><span>01 / RESPONSE</span><b data-count="98" data-suffix="%">0</b><p>CONCEPT RESPONSE INDEX</p></div><div class="vl-stat motion-reveal"><span>02 / 0—100</span><b data-count="29" data-suffix="s" data-decimal="1">0</b><p>ILLUSTRATIVE ACCELERATION VISUAL</p></div><div class="vl-stat motion-reveal"><span>03 / TOP SPEED</span><b data-count="320" data-suffix="+">0</b><p>VISUAL MOTION STUDY / KMH</p></div><small>Decorative concept figures — not verified specifications or claims for a real vehicle.</small></section>
    <section class="vl-machines" id="machines"><div class="vl-machines-head"><div><span>02 / THE COLLECTION</span><h2>Three modes.<br/><em>One instinct.</em></h2></div><p>Concept directions to demonstrate how motion can support a premium automotive, mobility or motorsport brand.</p></div><div class="vl-machine-grid"><article class="vl-machine motion-reveal" data-tilt><div class="vl-machine-visual vl-machine-one"><span>01 / ROAD</span><b>R/01</b><i>↗</i></div><h3>THE GRAND TOURER</h3><p>Long lines. Quiet power. A little further than planned.</p><a href="mailto:hello@formstudio.example?subject=Grand%20Tourer%20concept">EXPLORE DIRECTION ↗</a></article><article class="vl-machine motion-reveal" data-tilt><div class="vl-machine-visual vl-machine-two"><span>02 / TRACK</span><b>T/02</b><i>↗</i></div><h3>THE TRACK STUDY</h3><p>All grip, no hesitation. Built around the racing line.</p><a href="mailto:hello@formstudio.example?subject=Track%20Study%20concept">EXPLORE DIRECTION ↗</a></article><article class="vl-machine motion-reveal" data-tilt><div class="vl-machine-visual vl-machine-three"><span>03 / FUTURE</span><b>E/03</b><i>↗</i></div><h3>THE ELECTRIC SHIFT</h3><p>Silent launch. Instant response. A new kind of presence.</p><a href="mailto:hello@formstudio.example?subject=Electric%20Shift%20concept">EXPLORE DIRECTION ↗</a></article></div></section>
    <section class="vl-final" id="contact"><div class="vl-final-aura"></div><span>03 / WHAT IF IT WAS YOURS?</span><h2>MAKE<br/>SOME <em>MOTION.</em></h2><p>Automotive sites should feel as engineered as the product — immersive, responsive and fast where it counts.</p><a href="mailto:hello@formstudio.example?subject=Velocity%20Labs%20website%20project">BUILD YOUR OWN EXPERIENCE ↗</a></section>`, 'demo-velocity motion-page', 'VELOCITY LABS', 'A motion-heavy automotive concept with entrance wipes, speed-inspired typography, scroll counters and interactive tilt cards.'),
  'orbital-labs': () => demoShell(`
    <nav class="orb-nav"><a href="#top" class="orb-logo"><i></i> ORBITAL<span>/LABS</span></a><div><a href="#systems">SYSTEMS</a><a href="#signals">SIGNALS</a><a href="#contact">CONTACT</a></div><a class="orb-cta" href="#contact">START A TRANSMISSION ↗</a></nav>
    <section class="orb-hero" id="top"><canvas class="orb-canvas" aria-hidden="true"></canvas><div class="orb-halo" aria-hidden="true"></div><div class="orb-hero-head"><span><i></i> FUTURE SYSTEMS / CREATIVE TECHNOLOGY</span><span>BUILD 001 / INTERACTIVE ENVIRONMENT</span></div><div class="orb-hero-copy"><div class="orb-small-title">BEYOND THE EXPECTED</div><h1>THE NEXT<br/><em>IS NOW.</em></h1><p>We turn complex ideas into digital experiences that feel clear, alive and a little ahead of their time.</p><div class="orb-hero-actions"><a href="#systems" class="orb-button">EXPLORE OUR SYSTEMS <span>↘</span></a><a href="#signals" class="orb-secondary-link">FOLLOW THE SIGNAL ↓</a></div></div><div class="orb-hero-orbit" aria-hidden="true"><div class="orb-ring orb-ring-a"></div><div class="orb-ring orb-ring-b"></div><div class="orb-ring orb-ring-c"></div><div class="orb-core">O<span>•</span></div><i class="orb-satellite sat-a"></i><i class="orb-satellite sat-b"></i><i class="orb-satellite sat-c"></i></div><div class="orb-edge-note">MOVE POINTER<br/>TO DISTURB THE FIELD</div><div class="orb-hero-foot"><span>DESIGN × SYSTEMS × MOTION</span><span>SCROLL TO CHANGE YOUR PERSPECTIVE ↓</span></div></section>
    <div class="orb-marquee"><div>IDEAS IN ORBIT / SYSTEMS IN MOTION / FUTURES MADE TANGIBLE / IDEAS IN ORBIT / SYSTEMS IN MOTION / FUTURES MADE TANGIBLE /</div></div>
    <section class="orb-systems" id="systems"><div class="orb-section-top"><span>01 / WHAT WE CONNECT</span><span>NOT MORE NOISE. BETTER SIGNAL.</span></div><div class="orb-systems-head"><h2>Make the<br/><em>future useful.</em></h2><p>We bring design, engineering and motion together to give ambitious ideas a digital form people can understand and use.</p></div><div class="orb-system-grid"><article class="orb-system motion-reveal" data-tilt><span>01 / EXPERIENCE</span><div class="orb-system-art art-a"><i></i><b>↗</b></div><h3>Digital environments</h3><p>Landing pages and product stories that move beyond the predictable grid.</p><a href="#contact">DESIGN THE EXPERIENCE ↗</a></article><article class="orb-system motion-reveal" data-tilt><span>02 / INTERFACE</span><div class="orb-system-art art-b"><i></i><b>⌁</b></div><h3>Interfaces with intent</h3><p>System-led UI, interaction patterns and prototypes that make complex things feel intuitive.</p><a href="#contact">DESIGN THE SYSTEM ↗</a></article><article class="orb-system motion-reveal" data-tilt><span>03 / MOTION</span><div class="orb-system-art art-c"><i></i><b>◎</b></div><h3>Motion as meaning</h3><p>Animation that guides attention, explains relationships and makes moments memorable.</p><a href="#contact">DESIGN THE MOVEMENT ↗</a></article></div></section>
    <section class="orb-signal" id="signals"><div class="orb-signal-visual"><div class="orb-signal-ring"></div><div class="orb-signal-ring ring-two"></div><div class="orb-signal-core">SIGNAL<br/><i>FOUND</i></div><span>LIVE FIELD / 00.001</span></div><div class="orb-signal-copy"><span>02 / DESIGNED TO RESPOND</span><h2>Let the interface<br/><em>feel alive.</em></h2><p>Subtle cursor response. A field that shifts when you move. Interfaces that feel responsive without making people work to understand them. This is the difference between decoration and designed interaction.</p><a href="#contact" class="orb-underlink">BRING YOUR IDEA INTO ORBIT ↗</a></div></section>
    <section class="orb-contact" id="contact"><div class="orb-contact-top"><span>03 / OPEN CHANNEL</span><span>RESPONSE WINDOW / OPEN</span></div><h2>What will<br/>you <em>set in motion?</em></h2><p>Tell us what you're building. We'll shape the right mix of visual identity, interface, and motion around it.</p><a href="mailto:hello@formstudio.example?subject=Orbital%20Labs%20digital%20experience%20enquiry" class="orb-contact-btn">START A TRANSMISSION <span>↗</span></a><div class="orb-contact-orb" aria-hidden="true"></div></section>`, 'demo-orbital motion-page', 'ORBITAL / FUTURE SYSTEMS', 'An interactive future-tech concept with a pointer-reactive canvas particle field, animated orbit graphics and responsive motion details.'),
  'elsewhere-story': () => demoShell(`
    <nav class="sw-nav"><a class="sw-wordmark" href="#top"><span class="sw-symbol">E.</span><span>ELSEWHERE<small>JOURNEYS WITH FEELING</small></span></a><div><a href="#philosophy">THE FEELING</a><a href="#chapters">THE JOURNEY</a><a href="#places">PLACES</a></div><a class="sw-nav-cta" href="#contact">PLAN YOUR ESCAPE <span>↗</span></a></nav>
    <section class="sw-hero" id="top"><div class="sw-hero-top"><span><i></i> TRAVEL, AT A DIFFERENT PACE</span><span>CURATED JOURNEYS / 2026</span></div><div class="sw-hero-title"><span class="sw-title-overline">NOT JUST SOMEWHERE ELSE.</span><h1>Some places<br/>change <em>you.</em></h1><p>Journeys made of wild horizons, slow mornings and moments that stay long after the return.</p></div><div class="sw-hero-window"><img src="${IMG.landscape}" alt="A quiet alpine lake framed by mountains at golden hour" fetchpriority="high" onerror="this.style.display='none'"/><div class="sw-hero-window-shade"></div><div class="sw-hero-window-caption"><span>01 / FIND YOUR ELSEWHERE</span><span>THE ART OF GOING SLOWER ↗</span></div><div class="sw-hero-orbit" aria-hidden="true">E<span>✳</span></div></div><div class="sw-hero-foot"><span>THOUGHTFULLY CURATED / NEVER RUSHED</span><a href="#philosophy">SCROLL TO FEEL IT <b>↓</b></a></div></section>
    <section class="sw-philosophy" id="philosophy"><span class="sw-eyebrow">01 / THE WAY WE SEE THE WORLD</span><div><h2>Travel is not a checklist.<br/>It is a <em>feeling.</em></h2><p>We make space for the moments between the landmarks. The first light across a valley. The turn you did not plan. The place that makes time move differently.</p></div><span class="sw-vertical-note">GO FURTHER. FEEL MORE.</span></section>
    <section class="sw-scroll-intro" id="chapters"><div><span class="sw-eyebrow">02 / A JOURNEY IN FOUR FRAMES</span><h2>Let the world<br/><em>open up.</em></h2></div><p>Keep scrolling. Each photograph starts as a framed moment, then unfolds into the full scene. A little more space with every step.</p><div class="sw-scroll-cue"><span>SCROLL TO EXPAND</span><i>↓</i></div></section>
    <section class="sw-chapter" data-expand-chapter><div class="sw-sticky"><div class="sw-stage-top"><span>ELSEWHERE / JOURNAL</span><span>01 — 04</span></div><div class="sw-expand-frame" data-expand-frame><img class="sw-expand-image" src="${IMG.mountains}" alt="Rugged mountain peaks rising above a deep green valley" loading="eager" decoding="async" onerror="this.style.display='none'"/><div class="sw-frame-shade"></div><div class="sw-frame-meta"><span>01 / THE WIDE OPEN</span><span>HIMALAYAS · INDIA</span></div><div class="sw-frame-copy"><span>WHERE THE AIR FEELS DIFFERENT</span><h2>Find your<br/><em>wild.</em></h2><p>Wake before the world. Walk until the noise disappears.</p><a href="#contact">EXPLORE MOUNTAIN JOURNEYS ↗</a></div><div class="sw-frame-stamp">GO<br/>SLOW<br/>✳</div></div><div class="sw-stage-foot"><span>SCROLL TO UNFOLD THE VIEW</span><div class="sw-stage-line"><i></i></div></div></div></section>
    <section class="sw-chapter" data-expand-chapter><div class="sw-sticky"><div class="sw-stage-top"><span>ELSEWHERE / JOURNAL</span><span>02 — 04</span></div><div class="sw-expand-frame" data-expand-frame><img class="sw-expand-image" src="${IMG.forest}" alt="A quiet forest path framed by tall trees and rich green foliage" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div class="sw-frame-shade"></div><div class="sw-frame-meta"><span>02 / THE QUIET ROUTE</span><span>WESTERN GHATS · INDIA</span></div><div class="sw-frame-copy"><span>TAKE THE LONG WAY ROUND</span><h2>Lose the<br/><em>noise.</em></h2><p>Follow the green. Let the day become its own destination.</p><a href="#contact">EXPLORE FOREST RETREATS ↗</a></div><div class="sw-frame-stamp">LESS<br/>PLAN<br/>MORE</div></div><div class="sw-stage-foot"><span>LET THE DAY TAKE ITS TIME</span><div class="sw-stage-line"><i></i></div></div></div></section>
    <section class="sw-chapter" data-expand-chapter><div class="sw-sticky"><div class="sw-stage-top"><span>ELSEWHERE / JOURNAL</span><span>03 — 04</span></div><div class="sw-expand-frame" data-expand-frame><img class="sw-expand-image" src="${IMG.ocean}" alt="Blue ocean waves rolling toward a long open shore" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div class="sw-frame-shade"></div><div class="sw-frame-meta"><span>03 / THE EDGE OF EVERYTHING</span><span>THE COAST · SLOW LIVING</span></div><div class="sw-frame-copy"><span>NOTHING TO DO. NOWHERE TO BE.</span><h2>Stay for<br/><em>the blue.</em></h2><p>Salt in the air. Sand underfoot. Plans that can wait.</p><a href="#contact">EXPLORE COASTAL ESCAPES ↗</a></div><div class="sw-frame-stamp">TIDE<br/>TIME<br/>✳</div></div><div class="sw-stage-foot"><span>STAY A LITTLE LONGER</span><div class="sw-stage-line"><i></i></div></div></div></section>
    <section class="sw-chapter" data-expand-chapter><div class="sw-sticky"><div class="sw-stage-top"><span>ELSEWHERE / JOURNAL</span><span>04 — 04</span></div><div class="sw-expand-frame" data-expand-frame><img class="sw-expand-image" src="${IMG.hotelRoom}" alt="An inviting retreat room with soft natural textures and warm light" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div class="sw-frame-shade"></div><div class="sw-frame-meta"><span>04 / THE PLACE YOU RETURN TO</span><span>HIDEAWAY / PRIVATE STAY</span></div><div class="sw-frame-copy"><span>THE BEST PART IS HOW YOU FEEL</span><h2>Come back<br/><em>different.</em></h2><p>Thoughtful stays for the version of you that needs room to breathe.</p><a href="#contact">FIND YOUR PLACE ↗</a></div><div class="sw-frame-stamp">ROOM<br/>TO<br/>BREATHE</div></div><div class="sw-stage-foot"><span>YOUR ELSEWHERE IS OUT THERE</span><div class="sw-stage-line"><i></i></div></div></div></section>
    <section class="sw-places" id="places"><div class="sw-places-head"><div><span class="sw-eyebrow">03 / GOOD PLACES, GOOD PEOPLE</span><h2>Journeys with<br/><em>room to breathe.</em></h2></div><p>From wild landscapes to beautifully considered stays, every detail is chosen to make the whole experience feel effortless.</p></div><div class="sw-place-grid"><article class="sw-place-card sw-place-wide sw-reveal"><img src="${IMG.landscape}" alt="Mountain lake destination" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div><span>01 / OUT IN THE OPEN</span><h3>Mountain mornings</h3><p>Clear air, long walks and a slower start.</p><a href="#contact">FIND THE VIEW ↗</a></div></article><article class="sw-place-card sw-reveal"><img src="${IMG.architecture2}" alt="A considered modern retreat with natural materials" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div><span>02 / SOMEWHERE PRIVATE</span><h3>Designed to disappear</h3><p>Small stays with a sense of place.</p><a href="#contact">FIND YOUR STAY ↗</a></div></article><article class="sw-place-card sw-reveal"><img src="${IMG.ocean}" alt="Ocean breaking in gentle blue waves" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div><span>03 / FOLLOW THE TIDE</span><h3>Coastal reset</h3><p>Room for saltwater, sunlight and nothing urgent.</p><a href="#contact">TAKE THE LONG WAY ↗</a></div></article></div></section>
    <section class="sw-quote"><span>ELSEWHERE / A NOTE TO SELF</span><blockquote>“A good journey gives you more than places to remember. It gives you a different way to see home.”</blockquote><div>TAKE SOMETHING WITH YOU <i>✳</i></div></section>
    <section class="sw-contact" id="contact"><div><span class="sw-eyebrow">04 / THE NEXT STORY IS YOURS</span><h2>Where do<br/>you want to <em>feel alive?</em></h2><p>Tell us what you need from your next escape. We will shape a journey around the way you want it to feel.</p></div><a href="mailto:hello@formstudio.example?subject=Elsewhere%20journey%20enquiry">LET'S PLAN SOMETHING GOOD <span>↗</span></a><small>FICTIONAL TRAVEL CONCEPT · NO REAL BOOKINGS OR ITINERARIES ARE PROVIDED.</small></section>
    `, 'demo-scrollstory motion-page', 'ELSEWHERE — Places that stay with you', 'A cinematic travel and hospitality concept with scroll-driven image expansion, pinned scenes, editorial copy and immersive image reveals.'),
  'yellow-riot': () => demoShell(`
    <nav class="yr-nav"><a class="yr-wordmark" href="#top"><span class="yr-mark">Y✳</span><span>YELLOW RIOT<small>CREATIVE MOTION STUDIO</small></span></a><div><a href="#work">THE WORK</a><a href="#services">WHAT WE DO</a><a href="#about">OUR ATTITUDE</a></div><a class="yr-nav-cta" href="#contact">MAKE A SCENE <b>↗</b></a></nav>
    <section class="yr-hero" id="top"><div class="yr-hero-strip"><span><i></i> INDEPENDENT CREATIVE STUDIO / EVERYWHERE</span><span>CAMPAIGNS · FILM · 3D · DIGITAL</span></div><div class="yr-title-wrap"><h1>MAKE<br/><span class="yr-outline">GOOD</span><br/>NOISE<span class="yr-star">✳</span></h1><p class="yr-hero-side">WE MAKE BRANDS<br/>IMPOSSIBLE TO<br/><em>SCROLL PAST.</em></p><div class="yr-hero-sticker">NO<br/>SAFE<br/>IDEAS ↗</div></div><div class="yr-collage"><div class="yr-collage-photo yr-collage-a">${photo(IMG.concert, 'A live event stage with a crowd and dramatic lighting', 'yr-photo-a')}<span>01 / FEEL SOMETHING</span></div><div class="yr-collage-photo yr-collage-b">${photo(IMG.dessert, 'Colourful dessert photographed for a campaign', 'yr-photo-b')}<span>02 / WANT A BITE</span></div><div class="yr-collage-photo yr-collage-c">${photo(IMG.studio, 'Creative production studio with bright daylight', 'yr-photo-c')}<span>03 / MAKE IT STICK</span></div><div class="yr-collage-note">IDEAS DON'T<br/>ASK NICELY.</div></div><div class="yr-hero-foot"><span>SCROLL TO START SOMETHING ↓</span><span>STRATEGY WITH TEETH. CRAFT WITH FEELING.</span><span>Y/R — 001</span></div></section>
    <div class="yr-ticker" aria-label="Studio services"><div>WE MAKE A SCENE ✳ THEN MAKE IT MEAN SOMETHING ✳ BRAND FILM ✳ CAMPAIGNS ✳ DIGITAL WORLDS ✳ 3D & MOTION ✳ WE MAKE A SCENE ✳ THEN MAKE IT MEAN SOMETHING ✳</div></div>
    <section class="yr-manifesto yr-reveal" id="about"><div class="yr-label">01 / OUR VERY SERIOUS ATTITUDE</div><div class="yr-manifesto-main"><h2>Polite is<br/>forgettable.<br/><em>Good is loud.</em></h2><div><p>We're an independent creative production concept for brands with something to say — and the nerve to say it differently.</p><p>From the first strategic spark to the final frame, we build work with a pulse: sharp ideas, tactile art direction, big-picture storytelling and details that refuse to sit still.</p><a class="yr-underline" href="#services">SEE WHAT WE CAN DO ↘</a></div></div><div class="yr-doodle yr-doodle-one" aria-hidden="true">✳</div><div class="yr-doodle yr-doodle-two" aria-hidden="true">↗</div></section>
    <section class="yr-work" id="work"><div class="yr-work-heading"><div><span class="yr-label">02 / SELECTED WORLDS — FICTIONAL CASE STUDIES</span><h2>Proof of<br/><em>play.</em></h2></div><p>Scroll the reel. Every frame is a different energy, made for a different kind of brand.</p></div><div class="yr-reel" data-yr-reel><div class="yr-reel-sticky"><div class="yr-reel-top"><span>Y/R — THE MOTION INDEX</span><span>DRAG WITH YOUR SCROLL <b>↘</b></span><span>001—004</span></div><div class="yr-reel-rail" data-yr-rail><article class="yr-project-card yr-card-live"><div class="yr-project-image">${photo(IMG.concert, 'Crowd at a concert under vivid stage lighting', 'yr-project-photo')}<span class="yr-image-stamp">LIVE / LOUD</span><b>TURN<br/>IT <i>UP.</i></b><div class="yr-card-spark">✳</div></div><div class="yr-project-caption"><span>001 / CULTURE & LIVE</span><h3>Built for the moment.</h3><p>Campaign worlds that hit before the first beat drops.</p></div></article><article class="yr-project-card yr-card-taste"><div class="yr-project-image">${photo(IMG.dessert, 'Dessert and food styling for a vivid editorial campaign', 'yr-project-photo')}<span class="yr-image-stamp">TASTE / PLAY</span><b>GOOD<br/>TASTE.<br/><i>BAD MANNERS.</i></b><div class="yr-card-spark">↗</div></div><div class="yr-project-caption"><span>002 / FOOD & CULTURE</span><h3>Made to crave.</h3><p>Product imagery with appetite, attitude and a little trouble.</p></div></article><article class="yr-project-card yr-card-form"><div class="yr-project-image">${photo(IMG.architecture2, 'Sculptural modern interior for a design-led brand film', 'yr-project-photo')}<span class="yr-image-stamp">FORM / FEEL</span><b>FORM<br/>WITH<br/><i>FEELING.</i></b><div class="yr-card-spark">◉</div></div><div class="yr-project-caption"><span>003 / DESIGN & OBJECTS</span><h3>Make the detail matter.</h3><p>Quiet craft, shot in a way that stops the scroll.</p></div></article><article class="yr-project-card yr-card-night"><div class="yr-project-image">${photo(IMG.nightCity, 'Night skyline with atmospheric lights', 'yr-project-photo')}<span class="yr-image-stamp">AFTER / HOURS</span><b>THE<br/>NIGHT<br/><i>IS YOUNG.</i></b><div class="yr-card-spark">✳</div></div><div class="yr-project-caption"><span>004 / BRAND WORLDS</span><h3>Stay in their head.</h3><p>A visual system that keeps talking long after the page ends.</p></div></article></div><div class="yr-reel-progress"><span>THE REEL KEEPS ROLLING</span><div><i data-yr-progress></i></div><span>SCROLL = MOTION</span></div></div></div></section>
    <section class="yr-services" id="services"><div class="yr-services-heading"><span class="yr-label">03 / OUR TOOLBOX</span><h2>Small egos.<br/><em>Big swings.</em></h2></div><div class="yr-service-list"><article class="yr-reveal"><span>01</span><h3>Brand worlds</h3><p>Positioning, visual identity, art direction and systems with personality.</p><b>MAKE IT RECOGNISABLE ↗</b></article><article class="yr-reveal"><span>02</span><h3>Moving images</h3><p>Brand films, social-first campaigns, motion design and 3D-led storytelling.</p><b>MAKE IT FEEL ALIVE ↗</b></article><article class="yr-reveal"><span>03</span><h3>Digital experiences</h3><p>Launch pages, scroll stories and interactions that make the idea impossible to miss.</p><b>MAKE IT INTERACTIVE ↗</b></article><article class="yr-reveal"><span>04</span><h3>Campaigns with bite</h3><p>One clear thought, expanded into the right message, moment and medium.</p><b>MAKE IT TRAVEL ↗</b></article></div></section>
    <section class="yr-contact" id="contact"><div class="yr-contact-top"><span>04 / YOUR TURN</span><span>THE INTERNET IS FULL OF FINE.</span></div><h2>MAKE<br/><em>WEIRD.</em><br/>MATTER.</h2><div class="yr-contact-bottom"><p>Have a product, a launch, a half-formed idea or a very specific kind of chaos? Let's turn it into something people actually remember.</p><a href="mailto:hello@formstudio.example?subject=YELLOW%20RIOT%20creative%20project">LET'S MAKE A SCENE <span>↗</span></a></div><div class="yr-contact-burst" aria-hidden="true">✳</div><small>ORIGINAL FICTIONAL STUDIO CONCEPT · REPLACE SAMPLE WORK WITH LICENSED CLIENT PROJECTS.</small></section>
    `, 'demo-yellowlab motion-page', 'YELLOW RIOT — Creative motion studio', 'An original high-energy creative production agency concept with acid-yellow art direction, kinetic typography, scroll-driven horizontal portfolio, cinematic imagery and interactive reveals.'),
  'still-form': () => demoShell(`
    <nav class="sf-nav"><a href="#top" class="sf-wordmark"><span class="sf-logo-symbol">S/F</span><span>STILL / FORM<small>OBJECTS FOR THE IN-BETWEEN</small></span></a><div><a href="#collection">COLLECTION</a><a href="#principles">OUR PRINCIPLES</a><a href="#journal">JOURNAL</a></div><a href="#configure" class="sf-nav-link">FIND YOUR FORM <span>↗</span></a></nav>
    <section class="sf-hero" id="top"><div class="sf-hero-micro"><span>FURNITURE / SERIES 01—03</span><span>DESIGNED TO ADAPT, MADE TO LAST.</span></div><div class="sf-hero-layout"><div class="sf-hero-copy"><span class="sf-eyebrow">A MORE FLEXIBLE WAY TO LIVE</span><h1>Space to do<br/>more. Room to<br/><em>be different.</em></h1><p>Objects that change with the way you work, rest and live — quietly considered, beautifully useful.</p><a href="#collection" class="sf-button">EXPLORE THE COLLECTION <span>↘</span></a><div class="sf-hero-index"><b>01—03</b><span>MODULAR OBJECTS<br/>FOR EVERYDAY LIFE</span></div></div><div class="sf-hero-visual"><div class="sf-hero-photo">${photo(IMG.architecture2, 'Calm modern interior with considered furniture and natural materials', 'sf-main-photo')}<div class="sf-photo-label"><span>FIG. 01 / THE ROOM</span><span>LIGHT · SPACE · MATERIAL</span></div><div class="sf-object-marker sf-marker-a">A<span>ADAPTABLE</span></div><div class="sf-object-marker sf-marker-b">B<span>INTENTIONAL</span></div></div><div class="sf-hero-aside"><span>OBJECTS THAT MOVE<br/>WITH YOU, NOT AGAINST YOU.</span><span>STILL / FORM — 2026</span></div></div></div><div class="sf-hero-foot"><span>MADE FOR THE WORK DAY.</span><span>READY FOR THE REST OF IT. ↓</span></div></section>
    <section class="sf-manifesto" id="principles"><div class="sf-section-index"><span>01 / THE IDEA</span><span>LESS, BUT MORE USEFUL</span></div><div class="sf-manifesto-layout"><h2>Good objects<br/>make room for<br/><em>good living.</em></h2><div><p>Still / Form is a fictional furniture concept built around one simple belief: the best object isn't the one that does everything. It's the one that adapts to what matters today.</p><p>Thoughtful proportions. Honest materials. Details that earn their place. A quieter kind of design, designed to last beyond a season.</p><a href="#configure" class="sf-text-link">MEET THE MODULAR SERIES ↗</a></div></div><div class="sf-material-strip"><span>01 / FORM FOLLOWS LIFE</span><span>02 / MATERIAL WITH INTENTION</span><span>03 / BUILT FOR CHANGE</span></div></section>
    <section class="sf-configure" id="configure"><div class="sf-configure-head"><div><span class="sf-eyebrow">02 / MAKE IT YOURS</span><h2>One system.<br/><em>More ways to live.</em></h2></div><p>Switch the configuration and finish to explore a product direction. This is a frontend concept configurator, not a live order tool.</p></div><div class="sf-config-grid"><div class="sf-product-stage" data-finish="chalk"><div class="sf-product-top"><span>STILL / FORM — MODULAR SERIES</span><span>PRODUCT EXPLORER / INTERACTIVE</span></div><div class="sf-product-image-wrap"><img data-sf-product-image src="${IMG.architecture2}" alt="Modular furniture and architectural interior in soft natural tones" loading="lazy" decoding="async" onerror="this.style.display='none'"/><div class="sf-product-caption"><span>FIG. <b data-sf-figure>01</b></span><span data-sf-product-caption>THE WORK / MODULAR TABLE</span></div></div><div class="sf-product-bottom"><span>STILL OBJECTS / SERIES 01</span><span data-sf-scale-label>VIEW SCALE · 100%</span></div></div><div class="sf-config-panel"><div class="sf-config-label"><span>01 / CONFIGURATION</span><span>SELECT ONE</span></div><div class="sf-variant-list" role="group" aria-label="Select product configuration"><button type="button" class="is-active" data-sf-variant="work" data-image="${IMG.architecture2}" data-title="THE WORK / MODULAR TABLE" data-figure="01" aria-pressed="true"><span>01</span><b>Work</b><small>Focus, build, repeat.</small><i>↗</i></button><button type="button" data-sf-variant="lounge" data-image="${IMG.hotelRoom}" data-title="THE LOUNGE / SOFT SEATING" data-figure="02" aria-pressed="false"><span>02</span><b>Lounge</b><small>Settle into the pause.</small><i>↗</i></button><button type="button" data-sf-variant="inbetween" data-image="${IMG.design}" data-title="THE IN-BETWEEN / FLEXIBLE SPACE" data-figure="03" aria-pressed="false"><span>03</span><b>In-between</b><small>For whatever comes next.</small><i>↗</i></button></div><div class="sf-finish-block"><div class="sf-config-label"><span>02 / FINISH</span><span data-sf-finish-label>CHALK / MATTE</span></div><div class="sf-swatches" role="group" aria-label="Select finish"><button type="button" class="is-active" data-sf-finish="chalk" aria-label="Chalk finish" aria-pressed="true"><i></i><span>Chalk</span></button><button type="button" data-sf-finish="oak" aria-label="Oak finish" aria-pressed="false"><i></i><span>Oak</span></button><button type="button" data-sf-finish="ink" aria-label="Ink finish" aria-pressed="false"><i></i><span>Ink</span></button><button type="button" data-sf-finish="clay" aria-label="Clay finish" aria-pressed="false"><i></i><span>Clay</span></button></div></div><div class="sf-scale-control"><label for="sf-scale"><span>03 / IMAGE SCALE</span><output data-sf-scale-output for="sf-scale">100%</output></label><input id="sf-scale" data-sf-scale type="range" min="84" max="112" value="100" step="1"/><div><span>DETAIL</span><span>CONTEXT</span></div></div><a class="sf-config-cta" href="mailto:hello@formstudio.example?subject=STILL%20FORM%20furniture%20website%20project">DISCUSS A PROJECT <span>↗</span></a></div></div></section>
    <section class="sf-collection" id="collection"><div class="sf-collection-top"><span class="sf-eyebrow">03 / THE COLLECTION</span><span>THREE WAYS INTO THE SAME IDEA</span></div><div class="sf-product-grid"><article class="sf-product-card sf-reveal"><div class="sf-card-visual sf-card-work">${photo(IMG.architecture2, 'Minimal modular desk and a bright modern room', '')}<span>01 / FOCUS</span><b>01</b></div><div class="sf-card-copy"><div><h3>Work, considered.</h3><p>A clear surface for a busy mind.</p></div><span>WORK / 01</span></div></article><article class="sf-product-card sf-reveal"><div class="sf-card-visual sf-card-lounge">${photo(IMG.hotelRoom, 'Soft, calm contemporary interior with natural materials', '')}<span>02 / REST</span><b>02</b></div><div class="sf-card-copy"><div><h3>Stay a little.</h3><p>Space for the moment between things.</p></div><span>LOUNGE / 02</span></div></article><article class="sf-product-card sf-reveal"><div class="sf-card-visual sf-card-space">${photo(IMG.studio, 'Minimal modern workspace with natural light', '')}<span>03 / FLEX</span><b>03</b></div><div class="sf-card-copy"><div><h3>Change the frame.</h3><p>Flexible by design, never by accident.</p></div><span>IN-BETWEEN / 03</span></div></article></div></section>
    <section class="sf-journal" id="journal"><div class="sf-journal-number">S/F — 001</div><div class="sf-journal-main"><span class="sf-eyebrow">A NOTE ON MAKING</span><h2>Keep what<br/>matters. Let<br/><em>the rest move.</em></h2><p>We design for the real shape of life: days that change, rooms that do more than one job, and objects that earn their place through use.</p><a href="mailto:hello@formstudio.example?subject=STILL%20FORM%20catalogue%20enquiry" class="sf-text-link">ASK FOR THE CATALOGUE ↗</a></div><div class="sf-journal-image">${photo(IMG.architecture, 'Material-led contemporary interior with natural finishes', 'sf-journal-photo')}<span>FORM / MATERIAL / MEMORY</span></div></section>
    <section class="sf-contact" id="contact"><span class="sf-eyebrow">04 / THE NEXT THING</span><h2>Find your<br/><em>form.</em></h2><p>Designed around how you actually live. Made to adapt as things change.</p><a href="mailto:hello@formstudio.example?subject=STILL%20FORM%20project%20enquiry">LET'S MAKE ROOM <span>↗</span></a><small>FICTIONAL FURNITURE CONCEPT · SAMPLE PRODUCT IMAGES ARE FOR VISUAL DIRECTION ONLY.</small></section>
    `, 'demo-stillform', 'STILL / FORM — Objects for the in-between', 'An ultra-minimal furniture and objects website concept inspired by adaptable living, editorial whitespace, subtle transitions and a responsive product configurator.'),
  'apogee-systems': () => demoShell(`
    <nav class="ap-nav"><a class="ap-brand" href="#top"><span class="ap-brand-mark">A<span>↗</span></span><span>APOGEE <small>SPACE SYSTEMS</small></span></a><div><a href="#capabilities">Capabilities</a><a href="#mission">Mission proof</a><a href="#about">Our approach</a></div><a class="ap-nav-cta" href="#contact">Start a mission <b>↗</b></a></nav>
    <section class="ap-hero" id="top"><canvas class="ap-starfield" aria-hidden="true"></canvas><div class="ap-hero-grid" aria-hidden="true"></div><div class="ap-hero-topline"><span><i></i> INDEPENDENT SPACE INFRASTRUCTURE</span><span>37° 14′ N / MISSION CONTROL</span></div><div class="ap-hero-layout"><div class="ap-hero-copy"><span class="ap-eyebrow">AUTONOMY · RESILIENCE · REACH</span><h1>Operate<br/>beyond the<br/><em>expected.</em></h1><p>Mission-ready systems for a more capable orbital future — designed to observe, decide and act where it matters most.</p><div class="ap-hero-actions"><a class="ap-primary" href="#capabilities">Explore the platform <span>↘</span></a><a class="ap-secondary" href="#mission">View mission profile ↗</a></div><div class="ap-hero-footnote"><span>01 / ENGINEERED FOR ORBIT</span><span>BUILT TO EXTEND WHAT'S POSSIBLE.</span></div></div><div class="ap-orbit-visual"><div class="ap-orbit-rings ring-one"></div><div class="ap-orbit-rings ring-two"></div><div class="ap-orbit-rings ring-three"></div>${photo(IMG.spaceEarth, 'Earth from orbit, illustrating aerospace infrastructure', 'ap-earth-image')}<div class="ap-orbit-satellite">✦</div><div class="ap-orbit-readout readout-a"><span>TRACKING CONFIDENCE</span><b>99.2%</b><i>STABLE / NOMINAL</i></div><div class="ap-orbit-readout readout-b"><span>ORBITAL VELOCITY</span><b>7.66 <small>KM/S</small></b><i>TELEMETRY LIVE*</i></div><div class="ap-orbit-index">MISSION / 001<br/>ORBITAL RELAY</div><div class="ap-crosshair">+</div></div></div><div class="ap-bottom-line"><span>APOGEE / SPACE SYSTEMS</span><span>SCROLL TO EXPLORE <b>↓</b></span><span>* ILLUSTRATIVE TELEMETRY</span></div></section>
    <div class="ap-ticker" aria-hidden="true"><div>SPACE DOMAIN AWARENESS ✳ AUTONOMOUS OPERATIONS ✳ MISSION SOFTWARE ✳ ORBITAL LOGISTICS ✳ SPACE DOMAIN AWARENESS ✳ AUTONOMOUS OPERATIONS ✳</div></div>
    <section class="ap-intro ap-reveal" id="about"><div class="ap-section-index"><span>001 / THE BIGGER PICTURE</span><span>SPACE IS A SYSTEM.</span></div><div class="ap-intro-grid"><h2>One connected<br/>platform.<br/><em>More possibilities.</em></h2><div><p>Apogee brings spacecraft capabilities, mission software and operational intelligence into one considered platform. The goal isn't more complexity in orbit. It's clearer decisions, dependable execution and room to scale.</p><a href="#capabilities" class="ap-text-link">DISCOVER THE CAPABILITIES ↘</a></div></div></section>
    <section class="ap-capabilities" id="capabilities"><div class="ap-cap-head ap-reveal"><div><span class="ap-eyebrow">002 / MISSION AREAS</span><h2>Built to sense.<br/><em>Ready to act.</em></h2></div><p>Three capability families, designed to work together. Select a mission area to explore the operating picture.</p></div><div class="ap-cap-layout"><div class="ap-cap-tabs" role="group" aria-label="Select mission capability"><button type="button" class="is-active" data-ap-mission="awareness" aria-pressed="true"><span>01</span><b>Space awareness</b><i>↗</i></button><button type="button" data-ap-mission="software" aria-pressed="false"><span>02</span><b>Mission software</b><i>↗</i></button><button type="button" data-ap-mission="logistics" aria-pressed="false"><span>03</span><b>Orbital logistics</b><i>↗</i></button></div><div class="ap-cap-panel" aria-live="polite"><div class="ap-cap-art"><div class="ap-cap-earth"></div><div class="ap-cap-path path-a"></div><div class="ap-cap-path path-b"></div><span class="ap-cap-tag">CAPABILITY / <b data-ap-index>01</b></span></div><div class="ap-cap-copy"><span class="ap-eyebrow" data-ap-kicker>DETECT / UNDERSTAND</span><h3 data-ap-title>Space awareness</h3><p data-ap-copy>Build a clearer picture of the orbital environment with multi-source tracking, object characterization and decision-ready context.</p><div class="ap-chip-row" data-ap-chips><span>OBJECT TRACKING</span><span>COLLISION CONTEXT</span><span>ORBITAL PICTURE</span></div></div></div></div></section>
    <section class="ap-mission" id="mission"><div class="ap-mission-image">${photo(IMG.spaceHardware, 'Earth horizon and atmospheric light from space', 'ap-mission-photo')}<div class="ap-mission-overlay"><span>MISSION PROFILE / A-07</span><b>ORBIT<br/><em>WITH PURPOSE.</em></b><small>ILLUSTRATIVE SYSTEM VIEW · NOT LIVE DATA</small></div><div class="ap-mission-stamp">A / 07</div></div><div class="ap-mission-copy ap-reveal"><span class="ap-eyebrow">003 / PROOF OF EXECUTION</span><h2>Quietly<br/>ambitious.<br/><em>Relentlessly ready.</em></h2><p>From planning through execution, the platform is built around repeatable operations, integrated insight and systems that keep working when conditions change.</p><div class="ap-stats"><div><b data-ap-count="3" data-suffix="×">0</b><span>INTEGRATED CAPABILITY FAMILIES</span></div><div><b data-ap-count="24" data-suffix="/7">0</b><span>MISSION-MINDED OPERATIONS</span></div><div><b data-ap-count="1" data-suffix=" PLATFORM">0</b><span>CONNECTED SYSTEM VIEW</span></div></div></div></section>
    <section class="ap-contact" id="contact"><div class="ap-contact-top"><span>004 / THE NEXT ORBIT</span><span>APOGEE SPACE SYSTEMS · CONCEPT 2026</span></div><h2>Make the next<br/><em>mission matter.</em></h2><p>Building a capability that has to work beyond the familiar? Let's define the operating picture together.</p><a href="mailto:hello@formstudio.example?subject=Apogee%20Space%20Systems%20concept" class="ap-primary">Start a conversation ↗</a><small>FICTIONAL AEROSPACE CONCEPT · TELEMETRY AND PERFORMANCE FIGURES ARE ILLUSTRATIVE.</small></section>
    `, 'demo-apogee', 'APOGEE / SPACE SYSTEMS', 'A considered aerospace systems concept with orbit-inspired graphics, interactive mission capabilities, and illustrative telemetry.'),
  'lumiere-stays': () => demoShell(`
    <nav class="ls-nav"><a href="#top" class="ls-logo">lumière <i>stays.</i><small>CURATED PRIVATE RESIDENCES</small></a><div><a href="#homes">The residences</a><a href="#experience">The experience</a><a href="#journal">A little Paris</a></div><a class="ls-nav-button" href="#search">Find your stay <span>↗</span></a></nav>
    <section class="ls-hero" id="top"><div class="ls-hero-image">${photo(IMG.apartment, 'Light-filled refined apartment interior with warm materials', 'ls-main-photo')}<div class="ls-image-wash"></div><div class="ls-hero-caption"><span>PARIS, THOUGHTFULLY CURATED</span><span>48° 51′ 24″ N / 2° 21′ 08″ E</span></div></div><div class="ls-hero-content"><span class="ls-eyebrow"><i></i> PRIVATE RESIDENCES · SHORT STAYS</span><h1>A softer way<br/>to <em>arrive.</em></h1><p>Considered apartments in the neighbourhoods that make Paris feel personal. Settle in, find your rhythm, and stay a little differently.</p><a href="#search" class="ls-text-cta">FIND YOUR PARIS ADDRESS <span>↓</span></a><div class="ls-hero-note"><b>01—03</b><span>PLACES TO FEEL<br/>A LITTLE MORE AT HOME</span></div></div><div class="ls-hero-side">STAY WELL / MOVE SLOW</div></section>
    <section class="ls-search" id="search"><div class="ls-search-head"><span class="ls-eyebrow">01 / YOUR NEXT ADDRESS</span><span>PERSONAL, NOT GENERIC.</span></div><form class="ls-search-form" data-ls-search><label>WHERE TO?<select name="area"><option value="all">All Paris neighbourhoods</option><option value="marais">Le Marais</option><option value="rive-gauche">Left Bank</option><option value="saint-germain">Saint-Germain</option></select></label><label>CHECK IN<input name="checkin" type="date" required></label><label>CHECK OUT<input name="checkout" type="date" required></label><label>GUESTS<select name="guests"><option>1 guest</option><option selected>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label><button type="submit">Explore stays <span>↗</span></button></form><p class="ls-search-status" data-ls-status aria-live="polite">Choose your dates to preview the search flow. Availability is illustrative in this concept.</p></section>
    <section class="ls-homes" id="homes"><div class="ls-homes-head"><div><span class="ls-eyebrow">02 / A FEW GOOD PLACES</span><h2>Stay somewhere<br/><em>with a story.</em></h2></div><p>Distinct spaces, quietly equipped for real life. A little more room to work, rest, and discover the city beyond the guidebook.</p></div><div class="ls-area-filters" role="group" aria-label="Filter residences"><button type="button" class="is-active" data-ls-filter="all" aria-pressed="true">All residences <span>03</span></button><button type="button" data-ls-filter="marais" aria-pressed="false">Le Marais</button><button type="button" data-ls-filter="rive-gauche" aria-pressed="false">Left Bank</button><button type="button" data-ls-filter="saint-germain" aria-pressed="false">Saint-Germain</button></div><div class="ls-home-grid"><article class="ls-home-card" data-ls-area="marais"><a class="ls-home-image" href="#search">${photo(IMG.apartment, 'Light-filled Paris apartment with sculptural furniture', '')}<span>01 / LE MARAIS</span><i>↗</i></a><div class="ls-home-meta"><div><h3>The Atelier</h3><p>Quiet volumes, old Paris bones, new-world comfort.</p></div><span>2 GUESTS<br/>1 BEDROOM</span></div></article><article class="ls-home-card" data-ls-area="rive-gauche"><a class="ls-home-image" href="#search">${photo(IMG.parisInterior, 'Elegant contemporary apartment with natural textures', '')}<span>02 / LEFT BANK</span><i>↗</i></a><div class="ls-home-meta"><div><h3>Rue des Écoles</h3><p>A warm base for slow mornings and long walks.</p></div><span>4 GUESTS<br/>2 BEDROOMS</span></div></article><article class="ls-home-card" data-ls-area="saint-germain"><a class="ls-home-image" href="#search">${photo(IMG.stayBedroom, 'Refined bedroom with layered linens and soft light', '')}<span>03 / SAINT-GERMAIN</span><i>↗</i></a><div class="ls-home-meta"><div><h3>The Courtyard</h3><p>A tucked-away address with space to exhale.</p></div><span>2 GUESTS<br/>1 BEDROOM</span></div></article></div><small class="ls-demo-note">FICTIONAL RESIDENCES / SAMPLE PHOTOGRAPHY / NO LIVE AVAILABILITY OR BOOKING.</small></section>
    <section class="ls-experience" id="experience"><div class="ls-experience-photo">${photo(IMG.parisInterior, 'Warm, minimal living room in a carefully designed apartment', '')}<span>YOUR OWN LITTLE CORNER OF THE CITY.</span></div><div class="ls-experience-copy"><span class="ls-eyebrow">03 / THOUGHTFULLY HOSTED</span><h2>All the details.<br/><em>None of the fuss.</em></h2><div class="ls-service-list"><article><b>01</b><div><h3>Arrive on your time</h3><p>A clear, self-guided check-in concept built around an easy arrival.</p></div></article><article><b>02</b><div><h3>Stay comfortably</h3><p>Good linens, practical essentials and spaces that work beyond sleep.</p></div></article><article><b>03</b><div><h3>Feel looked after</h3><p>A considered support journey from booking questions to checkout.</p></div></article></div><a class="ls-text-cta" href="mailto:hello@formstudio.example?subject=Lumiere%20Stays%20website%20concept">DISCUSS A HOSPITALITY PROJECT ↗</a></div></section>
    <section class="ls-journal" id="journal"><span class="ls-eyebrow">04 / A LITTLE PARIS NOTE</span><h2>Leave room<br/>for <em>the unexpected.</em></h2><p>The best stays do more than provide a key. They create a feeling: a favourite bakery around the corner, afternoon light across the floor, a city that starts to feel like yours.</p><a href="#homes">EXPLORE THE RESIDENCES ↓</a></section>
    <section class="ls-contact"><span class="ls-eyebrow">YOUR NEXT ADDRESS IS OUT THERE.</span><h2>Stay a little<br/><em>closer.</em></h2><a href="mailto:hello@formstudio.example?subject=Lumiere%20Stays%20project%20enquiry">LET'S BUILD A BETTER STAY ↗</a></section>
    `, 'demo-lumiere', 'LUMIÈRE STAYS — Curated private residences', 'A premium short-stay hospitality concept with property discovery, booking enquiry interactions and editorial Paris-inspired storytelling.'),
  'wildlands-audio': () => demoShell(`
    <nav class="wf-nav"><a href="#world" class="wf-brand"><span class="wf-mark">⌁</span><span>WILDLANDS <small>AUDIO / WORLDS</small></span></a><div><a href="#world">Explore</a><a href="#studio">The studio</a><a href="#contact">Contact</a></div><button class="wf-sound-toggle" type="button" data-wf-sound aria-pressed="false"><i></i><span data-wf-sound-label>SOUND OFF</span></button></nav>
    <section class="wf-hero" id="world"><div class="wf-hero-top"><span>INTERACTIVE AUDIO STUDIO / EST. 2017</span><span>AN EXPLORABLE BODY OF WORK</span></div><div class="wf-title"><span class="wf-eyebrow">SOUND DESIGN · MUSIC · AUDIO SYSTEMS</span><h1>Every world<br/>needs a <em>sound.</em></h1><p>We build the sonic identity, systems and details that make an imagined place feel real.</p></div><div class="wf-map-viewport" data-wf-viewport aria-label="Interactive portfolio landscape. Drag to explore and select any signal marker."><div class="wf-map-world" data-wf-world><canvas class="wf-map-canvas" data-wf-canvas aria-hidden="true"></canvas><svg class="wf-map-lines" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true"><path d="M20 510 C170 400 180 600 340 475 S520 375 590 430 S790 530 930 365 S1080 390 1190 275"/><path d="M10 555 C160 445 195 640 360 520 S520 425 610 475 S800 570 950 415 S1090 445 1200 315"/><path d="M20 600 C165 490 205 675 378 558 S540 470 625 520 S815 610 965 465 S1110 500 1200 355"/></svg><div class="wf-map-glow glow-one"></div><div class="wf-map-glow glow-two"></div><button type="button" class="wf-signal is-active" style="--x:44%;--y:41%" data-wf-project="skyward" aria-label="Explore Skyward Signal project" aria-pressed="true"><span class="wf-signal-core"></span><span class="wf-signal-label">SKYWARD SIGNAL <i>↗</i></span></button><button type="button" class="wf-signal" style="--x:66%;--y:29%" data-wf-project="tideglass" aria-label="Explore Tideglass project" aria-pressed="false"><span class="wf-signal-core"></span><span class="wf-signal-label">TIDEGLASS <i>↗</i></span></button><button type="button" class="wf-signal" style="--x:75%;--y:60%" data-wf-project="emberline" aria-label="Explore Emberline project" aria-pressed="false"><span class="wf-signal-core"></span><span class="wf-signal-label">EMBERLINE <i>↗</i></span></button><button type="button" class="wf-signal" style="--x:54%;--y:72%" data-wf-project="mossbound" aria-label="Explore Mossbound project" aria-pressed="false"><span class="wf-signal-core"></span><span class="wf-signal-label">MOSSBOUND <i>↗</i></span></button><button type="button" class="wf-signal" style="--x:84%;--y:40%" data-wf-project="starfall" aria-label="Explore Starfall project" aria-pressed="false"><span class="wf-signal-core"></span><span class="wf-signal-label">STARFALL ARCHIVE <i>↗</i></span></button><div class="wf-map-coordinates">FIELD 07 / SECTOR A3<br/>DRAG OR SCROLL TO NAVIGATE</div></div><aside class="wf-project-panel" data-wf-panel aria-live="polite"><div class="wf-panel-top"><span data-wf-project-kicker>01 / SELECTED SIGNAL</span><span class="wf-panel-live"><i></i> SIGNAL FOUND</span></div><h2 data-wf-project-title>Skyward Signal</h2><p data-wf-project-description>A vast aerial fantasy score built from wind-shaped textures, distant choirs and a responsive flight system.</p><div class="wf-panel-meta"><div><span>WORLD</span><b data-wf-project-world>High altitude / fantasy</b></div><div><span>ROLE</span><b data-wf-project-role>World audio · Adaptive music</b></div></div><button class="wf-project-visit" type="button" data-wf-preview>Open signal details <span>↗</span></button><small class="wf-sample-note" data-wf-project-note>Illustrative case study · Fictional project</small></aside><div class="wf-map-legend"><span><i></i> INTERACTIVE PROJECT SIGNALS</span><span>05 WORLDS / ONE SOUND STUDIO</span></div><div class="wf-scroll-cue"><span>SCROLL TO DESCEND INTO THE STUDIO</span><b>↓</b></div></section>
    <section class="wf-studio" id="studio"><div class="wf-studio-index"><span>01 / THE STUDIO</span><span>SMALL TEAM. BIG WORLDS.</span></div><div class="wf-studio-layout"><h2>Great audio<br/>is more than<br/><em>great sounds.</em></h2><div><p>It is the subtle thing you feel before you know why: a place that sounds alive, a system that reacts to your choices, a musical idea that remembers what happened a moment ago.</p><p>Wildlands is a fictional audio studio concept focused on world-building, adaptive systems, sound design and music for interactive experiences.</p><a href="#contact" class="wf-text-link">MEET THE STUDIO ↘</a></div></div><div class="wf-service-grid"><article><span>01</span><h3>World audio</h3><p>Ambient ecosystems, spatial layers and environmental storytelling.</p></article><article><span>02</span><h3>Adaptive music</h3><p>Musical systems that react to gameplay, pace and player decisions.</p></article><article><span>03</span><h3>Sound systems</h3><p>Clear, scalable implementation patterns for interactive worlds.</p></article></div></section>
    <section class="wf-contact" id="contact"><span>02 / LET'S MAKE A WORLD</span><h2>Give it a place.<br/><em>Give it a voice.</em></h2><p>Building a game or interactive experience that deserves its own sonic identity?</p><a href="mailto:hello@formstudio.example?subject=Wildlands%20Audio%20website%20concept">START A CONVERSATION ↗</a><small>FICTIONAL STUDIO AND CASE STUDIES · NO REAL GAME AUDIO IS PLAYING.</small></section>
    `, 'demo-wildlands', 'WILDLANDS AUDIO — Every world needs a sound', 'An interactive game-audio studio concept with a procedurally drawn landscape map, selectable project signals and opt-in synthesized ambience.'),
};

function wireYellowRiot() {
  const root = document.querySelector('.demo-yellowlab');
  if (!root) return;
  const section = root.querySelector('[data-yr-reel]');
  const rail = root.querySelector('[data-yr-rail]');
  const progressBar = root.querySelector('[data-yr-progress]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let raf = 0;
  const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
  const updateReel = () => {
    raf = 0;
    if (!section || !rail) return;
    const rect = section.getBoundingClientRect();
    const range = Math.max(1, rect.height - window.innerHeight);
    const p = clamp(-rect.top / range, 0, 1);
    const distance = Math.max(0, rail.scrollWidth - window.innerWidth + 36);
    rail.style.transform = reduce ? 'none' : `translate3d(${-distance * p}px,0,0)`;
    if (progressBar) progressBar.style.transform = `scaleX(${p})`;
    section.style.setProperty('--yr-progress', p.toFixed(3));
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(updateReel); };
  updateReel();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    root.querySelectorAll('.yr-reveal').forEach(el => observer.observe(el));
  } else root.querySelectorAll('.yr-reveal').forEach(el => el.classList.add('is-visible'));
  // The playful cursor badge is restricted to large pointer devices.
  if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'yr-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.textContent = 'LOOK';
    root.appendChild(cursor);
    root.querySelectorAll('.yr-project-card').forEach(card => {
      card.addEventListener('pointerenter', () => cursor.classList.add('is-visible'));
      card.addEventListener('pointerleave', () => cursor.classList.remove('is-visible'));
      card.addEventListener('pointermove', event => {
        const rect = root.getBoundingClientRect();
        cursor.style.left = `${event.clientX - rect.left}px`;
        cursor.style.top = `${event.clientY - rect.top}px`;
      }, { passive: true });
    });
  }
}

function wireStillForm() {
  const root = document.querySelector('.demo-stillform');
  if (!root) return;
  const stage = root.querySelector('.sf-product-stage');
  const image = root.querySelector('[data-sf-product-image]');
  const variantButtons = [...root.querySelectorAll('[data-sf-variant]')];
  const finishButtons = [...root.querySelectorAll('[data-sf-finish]')];
  const finishNames = { chalk: 'CHALK / MATTE', oak: 'OAK / NATURAL', ink: 'INK / SATIN', clay: 'CLAY / MINERAL' };
  variantButtons.forEach(button => button.addEventListener('click', () => {
    variantButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    if (image && button.dataset.image) {
      image.classList.add('is-changing');
      window.setTimeout(() => {
        image.src = button.dataset.image;
        image.alt = `${button.dataset.title || 'Furniture concept'} visual reference`;
        image.classList.remove('is-changing');
      }, 160);
    }
    root.querySelector('[data-sf-product-caption]')?.replaceChildren(document.createTextNode(button.dataset.title || 'STILL OBJECT / SERIES 01'));
    root.querySelector('[data-sf-figure]')?.replaceChildren(document.createTextNode(button.dataset.figure || '01'));
  }));
  finishButtons.forEach(button => button.addEventListener('click', () => {
    finishButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    stage?.setAttribute('data-finish', button.dataset.sfFinish || 'chalk');
    const label = root.querySelector('[data-sf-finish-label]');
    if (label) label.textContent = finishNames[button.dataset.sfFinish] || 'CHALK / MATTE';
  }));
  const range = root.querySelector('[data-sf-scale]');
  const output = root.querySelector('[data-sf-scale-output]');
  const scaleLabel = root.querySelector('[data-sf-scale-label]');
  const updateScale = () => {
    const value = Number(range?.value || 100);
    if (image) image.style.transform = `scale(${value / 100})`;
    if (output) output.textContent = `${value}%`;
    if (scaleLabel) scaleLabel.textContent = `VIEW SCALE · ${value}%`;
  };
  range?.addEventListener('input', updateScale);
  updateScale();
  const revealEls = root.querySelectorAll('.sf-reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
  }
}

function wireApogee() {
  const root = document.querySelector('.demo-apogee');
  if (!root) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = root.querySelector('[data-ap-stars]') || root.querySelector('.ap-starfield');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let w = 0, h = 0, raf = 0, stars = [];
      const resize = () => {
        const rect = canvas.getBoundingClientRect(); w = rect.width; h = rect.height;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.floor(w * dpr)); canvas.height = Math.max(1, Math.floor(h * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        stars = Array.from({length: Math.min(130, Math.max(55, Math.round(w / 10)) )}, () => ({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.2,a:Math.random()*.55+.12,p:Math.random()*6.28}));
        draw(0, true);
        if (!reduced) raf = requestAnimationFrame(draw);
      };
      const draw = (time = 0, staticFrame = false) => {
        ctx.clearRect(0,0,w,h);
        for (const st of stars) {
          const twinkle = reduced || staticFrame ? 1 : .7 + Math.sin(time * .0012 + st.p) * .25;
          ctx.beginPath(); ctx.arc(st.x, st.y, st.r, 0, Math.PI*2); ctx.fillStyle = `rgba(205,231,255,${st.a*twinkle})`; ctx.fill();
        }
        if (!staticFrame && !reduced) raf = requestAnimationFrame(draw);
      };
      resize();
      window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); }, {passive:true});
    }
  }
  const missionData = {
    awareness: {index:'01', kicker:'DETECT / UNDERSTAND', title:'Space awareness', copy:'Build a clearer picture of the orbital environment with multi-source tracking, object characterization and decision-ready context.', chips:['OBJECT TRACKING','COLLISION CONTEXT','ORBITAL PICTURE']},
    software: {index:'02', kicker:'MODEL / PLAN / COMMAND', title:'Mission software', copy:'Connect planning, simulation and operational tools in a shared command environment that helps teams move from uncertainty to informed action.', chips:['MISSION PLANNING','SIMULATION','COMMAND & CONTROL']},
    logistics: {index:'03', kicker:'MOVE / SERVICE / EXTEND', title:'Orbital logistics', copy:'Support long-duration space operations through mission planning concepts for transport, servicing and the sustainable use of orbital infrastructure.', chips:['MISSION DESIGN','ON-ORBIT SERVICE','LONG-DURATION OPS']}
  };
  root.querySelectorAll('[data-ap-mission]').forEach(button => button.addEventListener('click', () => {
    root.querySelectorAll('[data-ap-mission]').forEach(item => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
    const data = missionData[button.dataset.apMission]; if (!data) return;
    root.querySelector('[data-ap-index]').textContent = data.index;
    root.querySelector('[data-ap-kicker]').textContent = data.kicker;
    root.querySelector('[data-ap-title]').textContent = data.title;
    root.querySelector('[data-ap-copy]').textContent = data.copy;
    root.querySelector('[data-ap-chips]').innerHTML = data.chips.map(chip => `<span>${chip}</span>`).join('');
  }));
  const reveal = root.querySelectorAll('.ap-reveal');
  if (reduced || !('IntersectionObserver' in window)) reveal.forEach(el => el.classList.add('is-visible'));
  else { const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); } }), {threshold:.12}); reveal.forEach(el => io.observe(el)); }
  const countUp = el => { if (el.dataset.done) return; el.dataset.done = '1'; const target = Number(el.dataset.apCount || 0); const suffix = el.dataset.suffix || ''; const start = performance.now(); const duration = reduced ? 1 : 900; const tick = now => { const p = Math.min(1,(now-start)/duration); el.textContent = `${Math.round(target*(1-Math.pow(1-p,3)))}${suffix}`; if(p<1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); };
  const counters = root.querySelectorAll('[data-ap-count]');
  if (reduced || !('IntersectionObserver' in window)) counters.forEach(countUp);
  else { const io = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){countUp(entry.target);io.unobserve(entry.target);}}),{threshold:.5}); counters.forEach(el => io.observe(el)); }
}

function wireLumiereStays() {
  const root = document.querySelector('.demo-lumiere');
  if (!root) return;
  const filters = [...root.querySelectorAll('[data-ls-filter]')];
  const homes = [...root.querySelectorAll('[data-ls-area]')];
  filters.forEach(button => button.addEventListener('click', () => {
    const area = button.dataset.lsFilter || 'all';
    filters.forEach(item => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
    homes.forEach(card => { card.hidden = area !== 'all' && card.dataset.lsArea !== area; });
  }));
  const form = root.querySelector('[data-ls-search]');
  const status = root.querySelector('[data-ls-status]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const checkin = form.elements.checkin.value;
    const checkout = form.elements.checkout.value;
    if (checkin && checkout && checkout <= checkin) { status.textContent = 'Check-out must be after check-in. Choose a later date to continue.'; form.elements.checkout.focus(); return; }
    const label = form.elements.area.selectedOptions[0]?.textContent || 'Paris';
    status.textContent = `Search preview: ${label} · ${checkin} to ${checkout} · ${form.elements.guests.value}. This is a concept interaction; no availability has been checked and no booking was made.`;
    root.querySelector('#homes')?.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block:'start'});
  });
  const reveal = root.querySelectorAll('.ls-reveal, .ls-home-card, .ls-service-list article');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) reveal.forEach(el => el.classList.add('is-visible'));
  else { const io = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}}),{threshold:.12}); reveal.forEach(el => io.observe(el)); }
}

function wireWildlandsAudio() {
  const root = document.querySelector('.demo-wildlands');
  if (!root) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const viewport = root.querySelector('[data-wf-viewport]');
  const world = root.querySelector('[data-wf-world]');
  const canvas = root.querySelector('[data-wf-canvas]');
  const panel = root.querySelector('[data-wf-panel]');
  const projectData = {
    skyward: {kicker:'01 / SELECTED SIGNAL', title:'Skyward Signal', description:'A vast aerial fantasy score built from wind-shaped textures, distant choirs and a responsive flight system.', world:'High altitude / fantasy', role:'World audio · Adaptive music', note:'Illustrative case study · Fictional project'},
    tideglass: {kicker:'02 / SELECTED SIGNAL', title:'Tideglass', description:'An underwater exploration world shaped by pressure, sonar-like motifs, shifting currents and quiet discoveries.', world:'Deep ocean / exploration', role:'Sound design · Spatial ambience', note:'Illustrative case study · Fictional project'},
    emberline: {kicker:'03 / SELECTED SIGNAL', title:'Emberline', description:'A volcanic frontier with granular fire textures, resonant stone, distant machinery and intensity that follows the player.', world:'Volcanic frontier / action', role:'Audio direction · Systems design', note:'Illustrative case study · Fictional project'},
    mossbound: {kicker:'04 / SELECTED SIGNAL', title:'Mossbound', description:'A living woodland built from close-mic natural detail, musical wildlife and subtle reactive layers that make the forest feel aware.', world:'Ancient forest / adventure', role:'Environmental audio · Adaptive layers', note:'Illustrative case study · Fictional project'},
    starfall: {kicker:'05 / SELECTED SIGNAL', title:'Starfall Archive', description:'A lost observatory imagined through slowly evolving harmonic beds, tactile interfaces and a musical system that remembers discovery.', world:'Lost observatory / sci-fi', role:'Music systems · Interface sound', note:'Illustrative case study · Fictional project'}
  };
  const setProject = key => {
    const data = projectData[key]; if (!data) return;
    root.querySelectorAll('[data-wf-project]').forEach(button => { const active = button.dataset.wfProject === key; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    root.querySelector('[data-wf-project-kicker]').textContent = data.kicker;
    root.querySelector('[data-wf-project-title]').textContent = data.title;
    root.querySelector('[data-wf-project-description]').textContent = data.description;
    root.querySelector('[data-wf-project-world]').textContent = data.world;
    root.querySelector('[data-wf-project-role]').textContent = data.role;
    root.querySelector('[data-wf-project-note]').textContent = data.note;
    const visit = root.querySelector('[data-wf-preview]'); visit.dataset.wfActiveProject = key;
    if (panel) panel.classList.remove('is-confirmed');
  };
  root.querySelectorAll('[data-wf-project]').forEach(button => button.addEventListener('click', () => setProject(button.dataset.wfProject)));
  root.querySelector('[data-wf-preview]')?.addEventListener('click', () => {
    const key = root.querySelector('[data-wf-preview]').dataset.wfActiveProject || 'skyward';
    const data = projectData[key]; if (!data || !panel) return;
    panel.classList.toggle('is-confirmed');
    const button = root.querySelector('[data-wf-preview]');
    button.querySelector('span').textContent = panel.classList.contains('is-confirmed') ? 'Signal selected ✓' : 'Open signal details ↗';
    if (panel.classList.contains('is-confirmed')) root.querySelector('[data-wf-project-note]').textContent = `${data.title} selected. This demo has no external project media attached.`;
    else root.querySelector('[data-wf-project-note]').textContent = data.note;
  });
  // Procedural map: topographic layers, contour lines, stars and a glowing route.
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let w=0,h=0,raf=0,seed=8,stars=[]; const pointer={x:-1,y:-1};
      const rand = () => { seed = (seed*1664525 + 1013904223) % 4294967296; return seed/4294967296; };
      const resize = () => { const rect=world.getBoundingClientRect(); w=rect.width; h=rect.height; const dpr=Math.min(window.devicePixelRatio||1,1.5); canvas.width=Math.max(1,Math.floor(w*dpr));canvas.height=Math.max(1,Math.floor(h*dpr));canvas.style.width=`${w}px`;canvas.style.height=`${h}px`;ctx.setTransform(dpr,0,0,dpr,0,0);seed=8;stars=Array.from({length:100},()=>({x:rand()*w,y:rand()*h,r:rand()*1.8+.25,a:rand()*.5+.12,p:rand()*6.28})); draw(0,true);if(!reduced)raf=requestAnimationFrame(draw); };
      const draw = (time=0,staticFrame=false) => { if(!w||!h)return;ctx.clearRect(0,0,w,h);const bg=ctx.createLinearGradient(0,0,w,h);bg.addColorStop(0,'#101a2b');bg.addColorStop(.5,'#182a3e');bg.addColorStop(1,'#10131e');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
        // Distant points of light.
        for(const st of stars){const tw=staticFrame||reduced?1:.68+Math.sin(time*.0007+st.p)*.25;ctx.beginPath();ctx.arc(st.x,st.y,st.r,0,Math.PI*2);ctx.fillStyle=`rgba(219,232,238,${st.a*tw})`;ctx.fill();}
        // Layered ridges give the map a dimensional valley silhouette.
        for(let layer=0;layer<5;layer++){const base=h*(.5+layer*.105);ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(0,base);for(let x=0;x<=w+10;x+=Math.max(12,w/70)){const y=base + Math.sin(x*.008+layer*1.7)*h*.055 + Math.sin(x*.019+layer*.8)*h*.022 + Math.sin(x*.003+layer*2.1)*h*.04;ctx.lineTo(x,y);}ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle=['#1d3144','#243b4c','#294453','#203747','#182938'][layer];ctx.globalAlpha=.88-layer*.08;ctx.fill();ctx.globalAlpha=1;}
        // Curved, hand-drawn topographic contours.
        ctx.lineWidth=1;for(let band=0;band<22;band++){ctx.beginPath();const offset=band*h*.035;ctx.moveTo(-30,h*.47+offset);for(let x=0;x<=w+20;x+=10){const y=h*.47+offset+Math.sin(x*.004+band*.37)*h*.035+Math.sin(x*.012+band*.4)*h*.012;ctx.lineTo(x,y);}ctx.strokeStyle=`rgba(177,209,213,${.06+(band%4)*.012})`;ctx.stroke();}
        // Route line connecting the project signals.
        ctx.beginPath();ctx.moveTo(w*.37,h*.41);ctx.bezierCurveTo(w*.48,h*.25,w*.54,h*.18,w*.66,h*.29);ctx.bezierCurveTo(w*.78,h*.42,w*.66,h*.63,w*.75,h*.60);ctx.bezierCurveTo(w*.69,h*.7,w*.59,h*.75,w*.54,h*.72);ctx.bezierCurveTo(w*.67,h*.59,w*.79,h*.28,w*.84,h*.4);ctx.strokeStyle='rgba(166,221,208,.35)';ctx.lineWidth=1.5;ctx.setLineDash([4,8]);ctx.stroke();ctx.setLineDash([]);
        if(!staticFrame&&!reduced)raf=requestAnimationFrame(draw);
      };
      resize();window.addEventListener('resize',()=>{cancelAnimationFrame(raf);resize();},{passive:true});
    }
  }
  // Drag gestures pan the map; buttons still work independently.
  if (viewport && world && !reduced) {
    let dragging=false, pointerId=null, startX=0,startY=0,baseX=0,baseY=0,panX=0,panY=0;
    const apply=()=>{world.style.setProperty('--wf-pan-x',`${panX}px`);world.style.setProperty('--wf-pan-y',`${panY}px`);};
    viewport.addEventListener('pointerdown',event=>{if(event.target.closest('button'))return;dragging=true;pointerId=event.pointerId;startX=event.clientX;startY=event.clientY;baseX=panX;baseY=panY;viewport.classList.add('is-dragging');viewport.setPointerCapture?.(pointerId);});
    viewport.addEventListener('pointermove',event=>{if(!dragging||event.pointerId!==pointerId)return;panX=Math.max(-70,Math.min(70,baseX+event.clientX-startX));panY=Math.max(-48,Math.min(48,baseY+event.clientY-startY));apply();});
    const release=event=>{if(!dragging||event.pointerId!==pointerId)return;dragging=false;viewport.classList.remove('is-dragging');};
    viewport.addEventListener('pointerup',release);viewport.addEventListener('pointercancel',release);
    viewport.addEventListener('wheel',event=>{panX=Math.max(-70,Math.min(70,panX+event.deltaX*.07));panY=Math.max(-48,Math.min(48,panY+event.deltaY*.025));apply();},{passive:true});
  }
  // User-controlled ambience: nothing plays until the visitor explicitly enables it.
  const soundButton = root.querySelector('[data-wf-sound]');
  let audioContext=null, oscillators=[], masterGain=null, soundOn=false;
  const stopSound = () => { if(masterGain && audioContext){const now=audioContext.currentTime;masterGain.gain.cancelScheduledValues(now);masterGain.gain.setTargetAtTime(0,now,.08);} window.setTimeout(()=>{oscillators.forEach(osc=>{try{osc.stop();}catch(_){}});oscillators=[];if(audioContext){audioContext.close().catch(()=>{});audioContext=null;masterGain=null;}},300);soundOn=false;if(soundButton){soundButton.setAttribute('aria-pressed','false');soundButton.querySelector('[data-wf-sound-label]').textContent='SOUND OFF';soundButton.classList.remove('is-on');} };
  soundButton?.addEventListener('click',async()=>{ if(soundOn){stopSound();return;} const AudioCtx=window.AudioContext||window.webkitAudioContext;if(!AudioCtx){soundButton.querySelector('[data-wf-sound-label]').textContent='AUDIO UNAVAILABLE';return;} try{audioContext=new AudioCtx();await audioContext.resume();masterGain=audioContext.createGain();masterGain.gain.value=.0001;masterGain.connect(audioContext.destination);const now=audioContext.currentTime;masterGain.gain.setTargetAtTime(.014,now,.6);[55,82.4,110.1].forEach((freq,i)=>{const osc=audioContext.createOscillator();const gain=audioContext.createGain();osc.type=i===1?'triangle':'sine';osc.frequency.value=freq;gain.gain.value=[.42,.23,.12][i];osc.connect(gain);gain.connect(masterGain);osc.start();oscillators.push(osc);});soundOn=true;soundButton.setAttribute('aria-pressed','true');soundButton.querySelector('[data-wf-sound-label]').textContent='SOUND ON';soundButton.classList.add('is-on');}catch(error){stopSound();} });
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&soundOn)stopSound();});
  const reveal=root.querySelectorAll('.wf-reveal,.wf-service-grid article');
  if(reduced||!('IntersectionObserver'in window))reveal.forEach(el=>el.classList.add('is-visible'));
  else{const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}}),{threshold:.12});reveal.forEach(el=>io.observe(el));}
}

function wireDemo() {
  // Give each demo's existing desktop navigation a keyboard-accessible mobile disclosure.
  document.querySelectorAll('.demo-root nav').forEach(nav => {
    const linksGroup = nav.querySelector(':scope > div');
    if (!linksGroup) return;
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'demo-nav-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'MENU +';
    toggle.setAttribute('aria-label', 'Toggle page navigation');
    nav.appendChild(toggle);
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      linksGroup.classList.toggle('is-open', !open);
      toggle.textContent = open ? 'MENU +' : 'CLOSE −';
    });
    linksGroup.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      linksGroup.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'MENU +';
    }));
  });
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    document.querySelector('.site-nav .nav-links')?.classList.toggle('is-open', !isOpen);
  });
  document.querySelectorAll('[data-menu-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-menu-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
    document.querySelectorAll('[data-menu-category]').forEach(item => item.hidden = btn.dataset.menuFilter !== 'all' && item.dataset.menuCategory !== btn.dataset.menuFilter);
  }));
  document.querySelectorAll('[data-service-filter]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-service-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
    document.querySelectorAll('[data-service]').forEach(item => item.hidden = btn.dataset.serviceFilter !== 'all' && item.dataset.service !== btn.dataset.serviceFilter);
  }));
  const kcSlots = {
    Mon: [['06:30','HEAVY DAYS','Strength','Coach Maya'],['12:15','ENGINE ROOM','Conditioning','Coach Arjun'],['18:30','RESET MODE','Mobility','Coach Lea']],
    Tue: [['07:00','ENGINE ROOM','Conditioning','Coach Maya'],['17:30','HEAVY DAYS','Strength','Coach Dev'],['19:00','ENGINE ROOM','Conditioning','Coach Arjun']],
    Wed: [['06:30','RESET MODE','Mobility','Coach Lea'],['12:15','HEAVY DAYS','Strength','Coach Dev'],['18:30','ENGINE ROOM','Conditioning','Coach Maya']],
    Thu: [['07:00','HEAVY DAYS','Strength','Coach Arjun'],['17:30','ENGINE ROOM','Conditioning','Coach Maya'],['19:00','RESET MODE','Mobility','Coach Lea']],
    Fri: [['06:30','ENGINE ROOM','Conditioning','Coach Dev'],['12:15','RESET MODE','Mobility','Coach Lea'],['18:00','HEAVY DAYS','Strength','Coach Maya']],
    Sat: [['08:00','COMMUNITY CIRCUIT','Mixed session','The coaching team'],['09:15','RESET MODE','Mobility','Coach Lea']]
  };
  const slotList = document.querySelector('#kc-sessions');
  const renderSlots = day => { if (!slotList) return; slotList.innerHTML = (kcSlots[day] || []).map(s => `<div class="kc-session"><span>${s[0]}</span><div><b>${s[1]}</b><small>${s[2]} · ${s[3]}</small></div><a href="mailto:hello@formstudio.example?subject=Kinetic%20Club%20class%20enquiry" aria-label="Enquire about ${s[1]}">↗</a></div>`).join(''); };
  document.querySelectorAll('[data-day]').forEach(btn => btn.addEventListener('click', () => {
    document.querySelectorAll('[data-day]').forEach(b => b.classList.toggle('is-active', b === btn)); renderSlots(btn.dataset.day);
  }));
  if (slotList) renderSlots('Mon');
  const bookingForm = document.querySelector('.sa-booking-form');
  const checkin = document.querySelector('#sa-checkin');
  const checkout = document.querySelector('#sa-checkout');
  if (checkin && checkout) {
    const today = new Date(); const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0,10);
    checkin.min = localDate; checkout.min = localDate;
    checkin.addEventListener('change', () => { checkout.min = checkin.value || localDate; if (checkout.value && checkout.value <= checkin.value) checkout.value = ''; });
  }
  document.querySelectorAll('.demo-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const status = form.querySelector('.form-message');
    if (form.classList.contains('sa-booking-form')) {
      if (checkout.value <= checkin.value) { status.textContent = 'Choose a check-out date after your check-in.'; return; }
      status.textContent = `Demo check complete for ${checkin.value} to ${checkout.value}. No real reservation has been made.`;
    } else {
      status.textContent = 'Thanks — this is a local demo confirmation. No real booking or message has been sent.';
    }
  }));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.nn-dish, .fw-service, .os-project, .nl-feature-grid article, .an-project-grid article').forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
  }
}


function wireMotionEffects() {
  const root = document.querySelector('.motion-page');
  if (!root) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress = document.querySelector('.motion-progress');
  const updateProgress = () => {
    if (!progress) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${maxScroll > 0 ? window.scrollY / maxScroll : 0})`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  root.addEventListener('pointermove', event => {
    const orbit = root.querySelector('.orb-hero-orbit');
    if (orbit && !reducedMotion) {
      orbit.style.setProperty('--orbit-shift-x', `${((event.clientX - window.innerWidth / 2) * 0.035).toFixed(1)}px`);
      orbit.style.setProperty('--orbit-shift-y', `${((event.clientY - window.innerHeight / 2) * 0.025).toFixed(1)}px`);
    }
  }, { passive: true });

  const revealItems = root.querySelectorAll('.motion-reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.14 });
    revealItems.forEach(el => revealObserver.observe(el));
  }

  if (!reducedMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    root.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const tiltX = (0.5 - y) * 8;
        const tiltY = (x - 0.5) * 9;
        card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
        card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
        card.classList.add('is-tilting');
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  const countUp = element => {
    if (element.dataset.counted === 'true') return;
    element.dataset.counted = 'true';
    const target = Number(element.dataset.count || 0);
    const suffix = element.dataset.suffix || '';
    const decimal = element.dataset.decimal === '1';
    const start = performance.now();
    const duration = reducedMotion ? 1 : 1500;
    const draw = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      const value = target * eased;
      element.textContent = `${decimal ? (value / 10).toFixed(1) : Math.round(value).toLocaleString()}${suffix}`;
      if (p < 1) requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  };
  const counters = root.querySelectorAll('[data-count]');
  if (reducedMotion || !('IntersectionObserver' in window)) counters.forEach(countUp);
  else {
    const counterObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { countUp(entry.target); counterObserver.unobserve(entry.target); }
    }), { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  root.querySelectorAll('[data-confetti]').forEach(button => button.addEventListener('click', event => {
    if (reducedMotion) return;
    const bounds = button.getBoundingClientRect();
    const colors = ['#ff3d9a', '#ffe95c', '#4fdbff', '#7cf08c', '#7b5cff', '#ff7c45'];
    for (let i = 0; i < 24; i++) {
      const particle = document.createElement('span');
      particle.className = 'sugar-confetti';
      particle.style.left = `${bounds.left + bounds.width / 2 + (Math.random() - 0.5) * Math.min(bounds.width, 120)}px`;
      particle.style.top = `${bounds.top + bounds.height / 2 + window.scrollY}px`;
      particle.style.setProperty('--confetti-x', `${(Math.random() - 0.5) * 240}px`);
      particle.style.setProperty('--confetti-y', `${-50 - Math.random() * 180}px`);
      particle.style.setProperty('--confetti-spin', `${Math.random() * 800 - 400}deg`);
      particle.style.setProperty('--confetti-color', colors[i % colors.length]);
      particle.style.setProperty('--confetti-size', `${5 + Math.random() * 7}px`);
      document.body.appendChild(particle);
      window.setTimeout(() => particle.remove(), 1100);
    }
  }));

  const canvas = root.querySelector('.orb-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 0, height = 0, raf = 0;
    const pointer = { x: -9999, y: -9999 };
    let particles = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width; height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(100, Math.max(34, Math.round(width / 13)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width, y: Math.random() * height,
        vx: (Math.random() - .5) * .34, vy: (Math.random() - .5) * .34,
        r: Math.random() * 1.5 + .5, phase: Math.random() * Math.PI * 2
      }));
      draw(0, true);
      if (!reducedMotion) raf = requestAnimationFrame(t => draw(t));
    };
    const draw = (time, staticFrame = false) => {
      ctx.clearRect(0, 0, width, height);
      const linkLimit = width < 600 ? 88 : 126;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!staticFrame && !reducedMotion) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.max(0, Math.min(width, p.x)); p.y = Math.max(0, Math.min(height, p.y));
          const dx = p.x - pointer.x, dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110 && dist > 0) { p.x += dx / dist * (110 - dist) * .012; p.y += dy / dist * (110 - dist) * .012; }
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(180, 251, 255, .9)'; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j], dx = p.x - q.x, dy = p.y - q.y, dist = Math.hypot(dx, dy);
          if (dist < linkLimit) {
            const alpha = (1 - dist / linkLimit) * .23;
            ctx.strokeStyle = `rgba(110, 216, 238, ${alpha})`; ctx.lineWidth = .7;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
      }
      if (!staticFrame && !reducedMotion) raf = requestAnimationFrame(t => draw(t));
    };
    canvas.addEventListener('pointermove', event => {
      const rect = canvas.getBoundingClientRect(); pointer.x = event.clientX - rect.left; pointer.y = event.clientY - rect.top;
    }, { passive: true });
    canvas.addEventListener('pointerleave', () => { pointer.x = -9999; pointer.y = -9999; });
    resize();
    window.addEventListener('resize', () => { cancelAnimationFrame(raf); resize(); }, { passive: true });
  }
}

function wireScrollStory() {
  const root = document.querySelector('.demo-scrollstory');
  if (!root) return;
  const chapters = [...root.querySelectorAll('[data-expand-chapter]')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const mix = (a, b, p) => a + (b - a) * p;
  let raf = 0;

  if (reducedMotion) {
    root.classList.add('sw-reduced-motion');
    chapters.forEach(chapter => {
      const frame = chapter.querySelector('[data-expand-frame]');
      if (frame) {
        frame.style.width = '100vw';
        frame.style.height = '82svh';
        frame.style.borderRadius = '0px';
      }
      chapter.querySelector('.sw-stage-line i')?.style.setProperty('transform', 'scaleX(1)');
    });
    root.querySelectorAll('.sw-reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const update = () => {
    raf = 0;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    chapters.forEach((chapter, index) => {
      const frame = chapter.querySelector('[data-expand-frame]');
      if (!frame) return;
      const rect = chapter.getBoundingClientRect();
      const range = Math.max(1, rect.height - vh);
      const progress = clamp(-rect.top / range, 0, 1);
      const compact = window.matchMedia('(max-width: 640px)').matches;
      frame.style.width = `${mix(compact ? 88 : 66, 100, progress).toFixed(2)}vw`;
      frame.style.height = `${mix(compact ? 58 : 63, 100, progress).toFixed(2)}svh`;
      frame.style.borderRadius = `${mix(compact ? 14 : 22, 0, progress).toFixed(2)}px`;
      frame.style.setProperty('--sw-progress', progress.toFixed(4));
      const image = frame.querySelector('.sw-expand-image');
      if (image) image.style.transform = `scale(${mix(1.18, 1.015, progress).toFixed(4)})`;
      const copy = frame.querySelector('.sw-frame-copy');
      if (copy) {
        copy.style.transform = `translate3d(0, ${mix(22, 0, progress).toFixed(2)}px, 0)`;
        copy.style.opacity = String(mix(.78, 1, progress));
      }
      const progressBar = chapter.querySelector('.sw-stage-line i');
      if (progressBar) progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
      chapter.style.setProperty('--chapter-progress', progress.toFixed(4));
      chapter.dataset.progress = progress.toFixed(3);
    });
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
  update();
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    }), { threshold: .08 });
    root.querySelectorAll('.sw-reveal').forEach(el => observer.observe(el));
  } else root.querySelectorAll('.sw-reveal').forEach(el => el.classList.add('is-visible'));
}

function route() {
  const path = window.location.pathname.replace(/\/+$/, '');
  const parts = path.split('/').filter(Boolean);
  const isTemplateRoute = parts[0] === 'templates' && parts.length >= 2;
  if ((!path || path === '/index.html') && !document.body.dataset.template) {
    renderGallery();
    return;
  }

  // Prefer the explicit body marker, then the /templates/<slug>/ URL.
  // This avoids accidentally rendering the gallery for a valid template URL.
  const slug = document.body.dataset.template || (isTemplateRoute ? parts[1] : parts.at(-1));
  if (slug && demoPages[slug]) {
    demoPages[slug]();
    return;
  }

  if (isTemplateRoute) {
    console.error(`[FORM Studio] No demo registered for template route: ${slug || path}`);
    const app = document.querySelector('#app');
    if (app) app.innerHTML = `<main style="min-height:100vh;display:grid;place-items:center;padding:3rem;background:#111310;color:#f3f0e8;font-family:system-ui,sans-serif;text-align:center"><div><p style="letter-spacing:.15em;font-size:.75rem">FORM STUDIO / ROUTE CHECK</p><h1 style="font-size:clamp(2rem,6vw,4rem)">This template did not load.</h1><p>The current JavaScript bundle may be outdated. Return to the collection and hard-refresh it.</p><a style="display:inline-block;margin-top:1rem;color:#d5ff43" href="/?build=35-drift-fieldhouse-20261016">← Back to collection</a></div></main>`;
    return;
  }
  renderGallery();
}

route();
