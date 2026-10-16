# FORM Studio — Frontend Template Collection

A responsive, frontend-only portfolio of **thirty-five** visually distinct website concepts. Built with HTML, CSS, vanilla JavaScript and Vite so the demos are easy to study, customize, and adapt for freelance client projects.

## Included demos

1. **NEON NOODLE** — experimental late-night ramen / street food
2. **slow ritual** — warm minimalist specialty café
3. **MAISON AMBRE** — restrained fine dining / luxury hospitality
4. **FORMA Wellness** — soft, modern wellness studio
5. **KINETIC CLUB** — athletic, high-energy gym
6. **stay awhile** — boutique hotel / homestay
7. **OFFSET Studio** — bold, editorial creative agency
8. **NORTHLINE** — professional B2B SaaS product landing page
9. **ATELIER NORTH** — architecture / interiors studio
10. **VOLT AFTERHOURS** — motion-heavy nightlife / music event concept
11. **SUGAR RIOT** — maximalist dessert / café concept with floating shapes and playful interactions
12. **VELOCITY LABS** — automotive performance concept with speed-inspired motion
13. **ORBITAL / FUTURE SYSTEMS** — interactive tech concept with a pointer-reactive canvas
14. **ELSEWHERE** — cinematic travel concept with scroll-driven framed-to-fullscreen image expansion
15. **YELLOW RIOT** — original creative-production studio concept with kinetic type and a scroll-driven project reel
16. **STILL / FORM** — ultra-minimal furniture and objects concept with product configuration
17. **MAISON VERRE** — refined navy-and-gold fine dining concept with menu tabs and a reservation request interaction
18. **KAIZEN IZAKAYA** — neon Japanese dining concept with pointer glow, tilted cards and animated counters
19. **LUMEN LOUNGE** — glassmorphism cocktail lounge with atmospheric color fields and a particle canvas
20. **CRUMB & CO** — neo-brutalist bakery with bouncy typography and animated marquee bands
21. **SPICE ROUTE** — Indian coastal restaurant with story reveals and a horizontal chef's-picks track
22. **NEON BURGER** — synthwave fast-casual concept with glitch type and an animated grid floor
23. **APOGEE / SYSTEMS** — aerospace systems concept with orbital visuals, capability selectors and illustrative telemetry
24. **LUMIÈRE STAYS** — premium short-stay residences concept with curated property discovery and date selection
25. **WILDLANDS AUDIO** — interactive audio-studio concept built as an explorable sound-world map with optional synthesized ambience
26. **FORNO** — wood-fired pizzeria with a procedural SVG pizza preview, topping builder and price updates
27. **SCOOP THEORY** — playful gelato brand with an interactive three-flavour cone builder and live pricing
28. **CELLAR Nº9** — candlelit wine bar with an interactive dish-to-wine pairing guide
29. **SHŌ OMAKASE** — Japanese tasting-counter concept with ink-brush motion and a navigable eight-course story
30. **SOUND ATLAS** — immersive sonic-world map with pan gestures, project markers and opt-in sound synthesis
31. **PLANFORM AI** — architectural product landing page with interactive model violations and an approval simulation
32. **RACECRAFT 98** — cinematic motorsport portfolio with stats, history, drag-to-scroll gallery and partner CTA
33. **SENDLAYER** — developer email platform concept with SDK switching, code copying, local send simulation and editor preview

The root page is a filterable template gallery with category filters, style filters, search and contact links. Each demo has a separate HTML entry point under `templates/<slug>/index.html`, its own art direction and scoped interactions. Shared CSS systems are kept in dedicated stylesheets so concepts can be developed and customized independently.

## Run locally

## Vite development and production preview

- `npm run dev` serves the source project, normally at `http://localhost:5173/`.
- `npm run build` creates the production files in `dist/`.
- `npm run preview` serves `dist/`, normally at `http://localhost:4173/`.
- The shared gallery renderer is loaded as an ES module so Vite includes it in the production build. Use the exact URL printed in your terminal for the server you started.

Use Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The multi-page production build is configured in `vite.config.js` and discovers each folder under `templates/` automatically.

For a quick static preview without installing Vite, run `python3 -m http.server 8000` from this project directory and open `http://localhost:8000/`. The static server is for local preview; run the production build before deployment.

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Before using a demo with a client

- Replace fictional brand details, menus, service names, addresses, prices and sample data with verified client information.
- Replace `hello@formstudio.example` with your professional email address.
- Booking, order, search and enquiry controls are frontend demonstrations. They do not connect to real inventory, a payment provider, a database or a booking system.
- Aerospace telemetry and all example projects, audio studio case studies and metrics are illustrative, not real performance claims.
- The imagery is loaded from external image CDNs and therefore requires internet access. Use client-owned or properly licensed assets in production.
- No analytics, backend, authentication or real payment integration is included.

## Design / engineering notes

- Responsive layouts for desktop, tablet and mobile.
- Semantic sections, keyboard-operable controls, focus styles and accessible labels where applicable.
- Reduced-motion support for the scroll-story expansion, creative reels and motion-heavy visual effects.
- Interactive canvas elements use procedural visuals; the Wildlands sound control is opt-in and synthesizes a low-level ambience locally in the browser.
- Functional collection search, category/style filtering, selected mission tabs, property filters, date input validation and demo contact interactions.
- Fictional businesses and content are concept material, not a representation of real clients or completed paid work.

## Suggested freelance workflow

Use these as starting points, not copy-paste final client sites. Choose the closest visual direction, then customize the brand story, information architecture, photography, copy, conversion goals and interactions around the client brief. Present motion concepts in motion, and be candid about which controls are currently frontend demos.

## Deploy on Vercel

1. Run `npm install`, then `npm run build`. Confirm `dist/` contains the root `index.html` plus all 33 `templates/<slug>/index.html` outputs.
2. Push this project folder to a GitHub repository.
3. Import the repository at Vercel. Set the root directory to the project root, the build command to `npm run build`, and the output directory to `dist`. Vercel should detect Vite automatically.
4. After deployment, test the collection homepage and direct URLs for `/templates/apogee-systems/`, `/templates/lumiere-stays/`, `/templates/wildlands-audio/`, `/templates/forno/`, `/templates/scoop-theory/`, `/templates/cellar-no9/`, and `/templates/sho-omakase/`, `/templates/sound-atlas/`, `/templates/planform-ai/`, `/templates/racecraft-98/`, `/templates/sendlayer/`, then test representative motion-heavy and standalone food/nightlife demos on mobile.

This is a static frontend portfolio. The interactive search, property lookup, mission selectors and sound-world map work locally in the browser, but booking/order/contact forms are demonstrations and have no backend processing. Replace the placeholder portfolio email and fictional business content before sending the site to prospective clients.

## Route and cache troubleshooting

The asset URLs in this package use a versioned cache token. If an older count appears, stop any old local server with `Ctrl+C`, start a server from this extracted `studio-form` directory on a fresh port, then hard-refresh the browser. The gallery count, filters and index labels are generated from the registry in `app.js`. Vite discovers every standalone template HTML entry under `templates/` automatically; test both the gallery cards and direct URLs after building.


## Reference layout refinement (33-template release, superseded by the 35-template revision)

- **SOUND ATLAS** now uses a cinematic full-viewport topographic landscape, discreet signal beacons, an optional low-volume sound toggle, and an editorial studio / project-note sequence. Motion is intentionally restrained and respects reduced-motion preferences.
- **RACECRAFT 98** now follows a photographic driver-hero composition, a light partner-wall section with fictional wordmarks, a click-through career chapter, a race-log layout, and an oversized media gallery. Numeric stats, schedules and partner marks are illustrative.
- **SENDLAYER** now uses a quiet dark developer-product layout: geometric hero, language-switchable code sample with copy control, concise feature sections, and an illustrative delivery-event trail. Example snippets are not connected to a live email service.

Run `npm install`, `npm run build`, then `npm run preview` to verify the production output before deployment.


## New concepts: 34–35

- **DRIFT** (`/templates/drift-lounge/`): full-viewport swipe/drag/wheel and keyboard-driven dessert/tea lounge story. Five scenes, responsive composition, optional reduced-motion mode, accessible previous/next controls and dot navigation. Booking CTA is a demo email enquiry.
- **FIELDHOUSE** (`/templates/fieldhouse-stays/`): modular boutique-stay concept. Site content and colors live in `config.js`; `main.js` renders room and gallery data, manages the responsive hide-on-scroll header, mobile nav, keyboard-accessible gallery lightbox, reveal effects and local-only date validation. No real reservations are transmitted.

The current collection has 35 unique gallery entries and 35 template pages. Run `npm install`, `npm run build` and `npm run preview` before deploying.
