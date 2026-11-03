/* Tapeline — reference content (drills, events, forums, resources, proportions, glossary) */
"use strict";
window.TL_DATA = (function () {

  const CATEGORIES = ["Car", "Motorbike", "Micromobility", "Truck & bus", "Rail", "Air & sea", "Interior", "Concept", "Sketch & render"];
  const PARTS = ["Front", "Rear", "Side view", "3/4 view", "Top view", "Lights", "Wheels", "Surfacing", "Graphics & CMF", "Cockpit", "Seat", "Detail", "Sketch technique", "Render technique", "Presentation"];
  const PHASES = ["Research", "Ideation", "Sketching", "Refinement", "3D / CAD", "Rendering", "Presentation"];
  const PROJECT_TYPES = ["Course brief", "Personal project", "Competition", "Client / internship"];

  const REVIEW_CHECK = [
    "Clear story: who it's for and what problem it solves",
    "Research boards: users, context, benchmarks",
    "Ideation pages show range (wild to sensible)",
    "Strong hero sketch",
    "Side view with resolved proportions and stance",
    "Package or ergonomics check (H-point, wheels, battery)",
    "Front, rear and 3/4 views consistent",
    "CMF board: colours, materials, finishes",
    "Detail callouts (lights, wheels, interface)",
    "Final render or model photos",
    "Process pages: how you got here",
    "Layout and type consistent on every page"
  ];

  /* ---------- Sketch drills ---------- */
  const DRILL_CATS = ["Lines", "Ellipses", "Perspective", "Wheels", "Side views", "3/4 views", "Surfaces", "Rendering", "Speed", "Interiors", "Two wheels"];
  const DRILLS = [
    { id: "ghost-lines", cat: "Lines", name: "Ghosted straight lines", min: 5, level: 1,
      goal: "Confident, straight lines drawn from the shoulder.",
      steps: ["Place two dots on the page.", "Ghost the stroke 3 times above the paper without touching.", "Draw one fast stroke from dot to dot.", "Fill a page; vary length and angle."],
      tip: "Speed makes lines straighter. Slow lines wobble." },
    { id: "curve-fans", cat: "Lines", name: "Sweeping curves", min: 5, level: 1,
      goal: "Smooth, controlled C and S curves like tape-drawing lines.",
      steps: ["Draw a family of C curves that fan out from one point.", "Then S curves between two dots.", "Keep the pressure light at the start and end (tapered).", "Overlap them to check consistency."],
      tip: "Rotate the page so your arm moves in its natural arc." },
    { id: "line-weight", cat: "Lines", name: "Line weight control", min: 6, level: 2,
      goal: "Use thick and thin lines to show what's near and far.",
      steps: ["Draw 10 boxes in perspective.", "Go over the silhouette with a heavy line.", "Keep inner edges light.", "Add a thin construction line through each."],
      tip: "Heavy outside, light inside reads clearly from a distance." },
    { id: "ellipse-sheet", cat: "Ellipses", name: "Ellipse sheet", min: 8, level: 1,
      goal: "Even, closed ellipses at different degrees.",
      steps: ["Draw a vertical minor axis.", "Draw ellipses from very thin (10°) to almost circles (60°).", "Go round 2–3 times quickly.", "Check both halves are symmetric."],
      tip: "Draw through the ellipse; don't stop at the ends." },
    { id: "ellipse-axis", cat: "Ellipses", name: "Ellipses on an axis", min: 8, level: 2,
      goal: "Align the minor axis with a cylinder's axis, as on wheels.",
      steps: ["Draw several cylinders in perspective.", "Draw the axis first.", "Draw ellipses perpendicular to it at both ends.", "Make the far ellipse slightly wider (open)."],
      tip: "The minor axis is always the cylinder's axis." },
    { id: "box-perspective", cat: "Perspective", name: "Boxes in 2-point perspective", min: 10, level: 1,
      goal: "Accurate boxes, the basis of every vehicle sketch.",
      steps: ["Set a horizon line and two vanishing points far apart.", "Draw 10 boxes above, on and below the horizon.", "Check verticals stay vertical.", "Rotate some boxes."],
      tip: "Vanishing points far apart avoid distorted, wide-angle boxes." },
    { id: "car-box", cat: "Perspective", name: "Car-sized box with wheel positions", min: 12, level: 2,
      goal: "Place a car's volume and wheelbase correctly in perspective.",
      steps: ["Draw a long box in 2-point perspective.", "Split the side into thirds to find the axles.", "Mark the centre line on the top and front.", "Draw a ground plane and shadow."],
      tip: "Find the middle of a plane by crossing its diagonals." },
    { id: "wheel-sheet", cat: "Wheels", name: "Wheel & tyre page", min: 10, level: 2,
      goal: "Believable wheels with tyre thickness and rim depth.",
      steps: ["Draw an axis and two ellipses for the tyre's outer face.", "Add the tyre width as a second, offset ellipse.", "Draw the rim inside, then 5 spokes from the centre.", "Shade the inside of the rim."],
      tip: "Wheels sell a sketch. Big, well-drawn wheels look premium." },
    { id: "wheel-designs", cat: "Wheels", name: "10 rim designs", min: 12, level: 2,
      goal: "Generate variety quickly in side view.",
      steps: ["Draw 10 circles in a grid.", "Design one rim per circle: spokes, discs, aero covers.", "Add a centre cap and lug nuts.", "Pick the best two and draw them in perspective."],
      tip: "Look at bikes and watches for rim ideas." },
    { id: "side-silhouettes", cat: "Side views", name: "20 side silhouettes", min: 12, level: 1,
      goal: "Explore proportions fast before details.",
      steps: ["Draw a ground line and two wheels with the same wheelbase, 20 times.", "Draw a different silhouette over each in under 30 seconds.", "Mix segments: hatch, coupé, SUV, van.", "Circle the 3 strongest."],
      tip: "Get the wheels and stance right first; the body follows." },
    { id: "side-detail", cat: "Side views", name: "One resolved side view", min: 20, level: 2,
      goal: "A clean side view with greenhouse, beltline and graphics.",
      steps: ["Start from your best silhouette.", "Place the A-pillar base near the front axle.", "Draw the DLO (window graphic) and beltline.", "Add shut lines, lights and a shadow under the car."],
      tip: "A rising beltline adds tension; a low one feels open." },
    { id: "three-quarter", cat: "3/4 views", name: "Front 3/4 view", min: 20, level: 3,
      goal: "The classic hero view: front 3/4 in perspective.",
      steps: ["Box out the car in perspective with a centre line.", "Place the wheels with ellipses on the axis.", "Draw the main volumes and greenhouse.", "Add lights, grille and a heavy silhouette line."],
      tip: "Keep a low eye level for a more dramatic, planted car." },
    { id: "rear-34", cat: "3/4 views", name: "Rear 3/4 view", min: 20, level: 3,
      goal: "Show shoulders, rear lights and stance.",
      steps: ["Start with a box and centre line.", "Push the shoulders wider than the cabin.", "Draw the rear light graphic across the tail.", "Ground it with a cast shadow."],
      tip: "Tumblehome (cabin narrower than body) makes the shoulders read." },
    { id: "sections", cat: "Surfaces", name: "Section lines", min: 10, level: 2,
      goal: "Describe surface form with cross-section lines.",
      steps: ["Draw a simple car body in 3/4.", "Draw sections across the bonnet, door and roof.", "Use the sections to find highlights.", "Erase or lighten the construction."],
      tip: "Sections are like slicing the car; they reveal crowning." },
    { id: "highlights", cat: "Surfaces", name: "Highlights & reflections", min: 12, level: 3,
      goal: "Make surfaces read as glossy and curved.",
      steps: ["Draw a body side with a feature line.", "Add a sky reflection above the line and ground reflection below.", "Add a sharp highlight on the shoulder.", "Keep the lower body darker."],
      tip: "Sky above, ground below: the horizon line reflects in the bodyside." },
    { id: "marker-gradient", cat: "Rendering", name: "Marker gradients", min: 10, level: 2,
      goal: "Smooth gradients for body and glass.",
      steps: ["Draw 6 rectangles.", "Lay a light grey wash, then layer darker greys toward one edge.", "Use fast, parallel strokes.", "Finish with a white pencil highlight."],
      tip: "Work light to dark. You can't undo marker." },
    { id: "digital-render", cat: "Rendering", name: "Digital render in 3 values", min: 25, level: 3,
      goal: "Render a sketch with only light, mid and dark values.",
      steps: ["Pick one of your sketches.", "Block in the mid value for the body.", "Add darks: glass, wheels, lower body, shadow.", "Add lights: shoulder, roof and bonnet highlights."],
      tip: "If it reads in 3 values, colour is easy afterwards." },
    { id: "thumbs-60", cat: "Speed", name: "60-second thumbnails", min: 10, level: 1,
      goal: "Volume of ideas over perfection.",
      steps: ["Set a 60-second timer per sketch.", "Draw a vehicle idea in 3/4, tiny.", "Don't erase; move on.", "Do 10, then pick favourites."],
      tip: "Small sketches hide bad lines and show proportion." },
    { id: "theme-variations", cat: "Speed", name: "One theme, 6 variations", min: 15, level: 2,
      goal: "Develop one idea in different directions.",
      steps: ["Write a one-word theme (e.g. 'blade', 'pebble').", "Sketch 6 front views on that theme.", "Change one thing per sketch: lights, grille, stance.", "Note which change worked."],
      tip: "Variations teach more than starting over." },
    { id: "interior-ip", cat: "Interiors", name: "Instrument panel views", min: 15, level: 2,
      goal: "Sketch a dashboard from the driver's seat.",
      steps: ["Draw a 1-point perspective box for the cabin.", "Place the steering wheel ellipse and screens.", "Add the IP volume and door panels.", "Mark touch points and storage."],
      tip: "Sit in a real car and look at what your hands reach." },
    { id: "seat-studies", cat: "Interiors", name: "Seat studies", min: 12, level: 2,
      goal: "Seats in side and 3/4 view with believable thickness.",
      steps: ["Draw an H-point and a 25° back angle.", "Block the cushion and backrest.", "Add bolsters and stitching lines.", "Draw one in 3/4."],
      tip: "Seats are soft: use rounded sections, not boxes." },
    { id: "moto-side", cat: "Two wheels", name: "Motorbike side views", min: 15, level: 2,
      goal: "Motorbike proportions and the rider triangle.",
      steps: ["Draw two wheels and the wheelbase.", "Place the rider triangle: handlebar, seat, footpeg.", "Draw the tank, seat and tail as one line.", "Add the engine block and exhaust."],
      tip: "On bikes the line from the headstock to the tail sets the character." },
    { id: "scooter-concept", cat: "Two wheels", name: "Micromobility concept", min: 20, level: 2,
      goal: "A scooter or e-bike concept with clear use and packaging.",
      steps: ["Write the user and use in one line.", "Draw the package: wheels, deck, battery, stem.", "Sketch 3 directions in side view.", "Develop one in 3/4."],
      tip: "Show the battery: it's the biggest packaging decision." },
    { id: "copy-master", cat: "Speed", name: "Study a master sketch", min: 15, level: 1,
      goal: "Learn line economy from professional sketches.",
      steps: ["Pick a professional sketch you admire.", "Copy it at the same size, focusing on line order.", "Then draw it again from memory.", "Note 2 things you'd steal."],
      tip: "Copying for study is how most designers learned. Don't post copies as your own." }
  ];

  const q = s => "https://www.google.com/search?q=" + encodeURIComponent(s);
  /* ---------- Events (checked 3 Nov 2026; confirm on official sites) ---------- */
  const EVENTS = [
    { id: "eicma-2026", name: "EICMA", type: "Motorbike show", city: "Milan, Fiera Milano Rho", start: "2026-11-05", end: "2026-11-08", note: "World's biggest motorbike show. Press and trade days 3–4 Nov.", url: "https://www.eicma.it/en/" },
    { id: "essen-2026", name: "Essen Motor Show", type: "Car show", city: "Essen, Messe Essen", start: "2026-11-28", end: "2026-12-06", note: "Tuning, motorsport and classic cars. Preview day 27 Nov.", url: "https://www.essen-motorshow.de/" },
    { id: "brussels-2027", name: "Brussels Motor Show", type: "Car show", city: "Brussels, Brussels Expo", start: "2027-01-08", end: "2027-01-17", note: "Large consumer show with many European premieres.", url: q("Brussels Motor Show 2027") },
    { id: "retromobile-2027", name: "Rétromobile", type: "Classic & heritage", city: "Paris, Porte de Versailles", start: "2027-02-03", end: "2027-02-07", note: "Classic cars and design heritage. Great for proportion studies.", url: "https://www.retromobile.fr/en" },
    { id: "cde-2027", name: "Car Design Event", type: "Design event", city: "Munich", start: "2027-03-01", end: "", tbc: true, note: "Designers, studios and schools; strong student presence. 2026 was 2–4 March; 2027 dates not announced yet.", url: "https://www.google.com/search?q=Car+Design+Event+Munich+2027" },
    { id: "abcn-2027", name: "Automobile Barcelona", type: "Car show", city: "Barcelona, Fira Gran Via", start: "2027-04-10", end: "2027-04-18", note: "Your home show, at a new venue. Press and trade days 8–9 April.", url: "https://www.automobilebarcelona.com/en/" },
    { id: "mdw-2027", name: "Milan Design Week", type: "Design event", city: "Milan, citywide", start: "2027-04-12", end: "2027-04-18", note: "Salone del Mobile runs 13–18 April at Fiera Milano. Car brands show installations in the city.", url: "https://www.salonemilano.it/en" },
    { id: "cddc-2027", name: "Car Design Dialogue China", type: "Design event", city: "Shanghai", start: "2027-04-23", end: "", note: "Car Design News conference during the Shanghai auto show period.", url: "https://cddchina.cardesignnews.com/" },
    { id: "vde-2027", name: "Concorso d'Eleganza Villa d'Este", type: "Concours", city: "Lake Como", start: "2027-05-21", end: "", tbc: true, note: "Usually late May. Classic cars plus design concepts. 2027 dates to confirm.", url: "https://concorsodeleganzavilladeste.com/" },
    { id: "aie-2027", name: "Automotive Interiors Expo Europe", type: "Interiors & CMF", city: "Stuttgart, Messe Stuttgart", start: "2027-06-02", end: "2027-06-03", note: "Materials, trim and in-cabin tech. Ideal for CMF research.", url: q("Automotive Interiors Expo Europe 2027 Stuttgart") },
    { id: "bdw-2027", name: "Barcelona Design Week", type: "Design event", city: "Barcelona, Disseny Hub", start: "2027-06-08", end: "", tbc: true, note: "Usually in June. Talks and exhibitions across the city. Dates to confirm.", url: q("Barcelona Design Week 2027") },
    { id: "fos-2027", name: "Goodwood Festival of Speed", type: "Car festival", city: "Chichester, UK", start: "2027-07-15", end: "2027-07-18", note: "Includes the Future Lab and supercar paddock with many reveals.", url: "https://www.goodwood.com/motorsport/festival-of-speed/" },
    { id: "iaa-2027", name: "IAA Mobility", type: "Mobility show", city: "Munich", start: "2027-09-07", end: "2027-09-12", note: "Cars, bikes and micromobility. Open-space displays in the city centre.", url: "https://www.iaa-mobility.com/en" }
  ];

  /* ---------- Forums & communities ---------- */
  const FORUMS = [
    { name: "Car Body Design", url: "https://www.carbodydesign.com/", kind: "Site & community", note: "Sketches, tutorials, design news and student work. Good for sketch technique references." },
    { name: "Car Design News", url: "https://www.cardesignnews.com/", kind: "Industry news", note: "The industry's main publication. Some content is paid; student rates exist." },
    { name: "Formtrends", url: "https://www.formtrends.com/", kind: "Design blog", note: "Car design analysis, sketches and student projects." },
    { name: "r/cardesign", url: "https://www.reddit.com/r/cardesign/", kind: "Reddit", note: "Share sketches and get quick feedback." },
    { name: "r/IndustrialDesign", url: "https://www.reddit.com/r/IndustrialDesign/", kind: "Reddit", note: "Portfolio reviews, career questions and process." },
    { name: "Behance: automotive design", url: "https://www.behance.net/search/projects?search=automotive%20design", kind: "Portfolios", note: "Full student and pro project presentations. Study how they lay out pages." },
    { name: "Core77", url: "https://www.core77.com/", kind: "Design site", note: "Industrial design news, Design Awards (with a transportation category) and jobs." },
    { name: "ArtStation: vehicles", url: "https://www.artstation.com/search?sort_by=relevance&query=vehicle%20design", kind: "Portfolios", note: "Concept and entertainment vehicle design. Great rendering references." },
    { name: "designboom: transportation", url: "https://www.designboom.com/technology/", kind: "Design magazine", note: "Mobility and transport projects from a wider design angle." }
  ];

  /* ---------- Resources ---------- */
  const RESOURCES = {
    "Books": [
      { name: "How to Draw", by: "Scott Robertson & Thomas Bertling", note: "Perspective and construction from scratch. The standard text.", url: q("How to Draw Scott Robertson book") },
      { name: "How to Render", by: "Scott Robertson & Thomas Bertling", note: "Light, shadow and reflections. Follows How to Draw.", url: q("How to Render Scott Robertson book") },
      { name: "H-Point: The Fundamentals of Car Design & Packaging", by: "Stuart Macey & Geoff Wardle", note: "Packaging, ergonomics and proportion. Essential for side views.", url: q("H-Point Fundamentals of Car Design and Packaging") },
      { name: "Sketching: The Basics", by: "Koos Eissen & Roselien Steur", note: "Product sketching technique, step by step.", url: q("Sketching the basics Koos Eissen") },
      { name: "Drawing Ideas", by: "Mark Baskinger & William Bardel", note: "Drawing as a thinking tool.", url: q("Drawing Ideas Baskinger Bardel") }
    ],
    "Designers to study": [
      { name: "Marcello Gandini", by: "Bertone", note: "Wedge shapes: Lamborghini Countach, Lancia Stratos.", url: q("Marcello Gandini designs") },
      { name: "Giorgetto Giugiaro", by: "Italdesign", note: "Folded-paper era: VW Golf Mk1, Lotus Esprit, DeLorean.", url: q("Giorgetto Giugiaro designs") },
      { name: "Flaminio Bertoni", by: "Citroën", note: "Sculptor-designer: Citroën DS and 2CV.", url: q("Flaminio Bertoni Citroen DS") },
      { name: "Chris Bangle", by: "BMW", note: "Flame surfacing; changed how a brand's design moves.", url: q("Chris Bangle flame surfacing") },
      { name: "Ian Callum", by: "Jaguar, Aston Martin", note: "Elegant proportions; Aston Martin DB7, Jaguar F-Type.", url: q("Ian Callum designs") },
      { name: "Gerry McGovern", by: "Land Rover", note: "Reductive design: Range Rover Evoque and new Defender.", url: q("Gerry McGovern Land Rover design") },
      { name: "Alejandro Mesonero-Romanos", by: "SEAT / Cupra, Alpine", note: "Led design near you in Martorell; now at Renault group.", url: q("Alejandro Mesonero-Romanos design") },
      { name: "Luc Donckerwolke", by: "Hyundai Motor Group", note: "Behind Hyundai's recent design shift and the Ioniq line.", url: q("Luc Donckerwolke Hyundai design") }
    ],
    "Learning": [
      { name: "Scott Robertson / Design Studio Press", by: "Videos & books", note: "Perspective and vehicle sketching lessons.", url: q("Scott Robertson vehicle sketching") },
      { name: "Car Body Design tutorials", by: "carbodydesign.com", note: "Free sketch and rendering tutorials from pros.", url: "https://www.carbodydesign.com/tutorials/" },
      { name: "Gravity Sketch learning", by: "Gravity Sketch", note: "VR sketching, used in many studios.", url: q("Gravity Sketch tutorials") },
      { name: "Blender vehicle modelling", by: "Free courses", note: "Free 3D software; good for blocking volumes.", url: q("Blender car modeling tutorial") }
    ],
    "Software": [
      { name: "Autodesk Alias", by: "Industry standard", note: "Class-A surfacing. Free education licence.", url: q("Autodesk Alias education license") },
      { name: "Blender", by: "Free", note: "Modelling and rendering; quick concept models.", url: "https://www.blender.org/" },
      { name: "Gravity Sketch", by: "VR / iPad", note: "3D sketching in space.", url: "https://www.gravitysketch.com/" },
      { name: "KeyShot", by: "Rendering", note: "Fast photo-real renders. Student pricing.", url: q("KeyShot student license") },
      { name: "Procreate", by: "iPad", note: "Digital sketching on the go.", url: "https://procreate.com/" },
      { name: "Sketchbook", by: "Free", note: "Clean sketching app with ellipse and perspective guides.", url: q("Sketchbook app download") }
    ]
  };

  /* ---------- Proportions (typical, approximate, in mm) ---------- */
  const SEGMENTS = [
    { id: "city", name: "City car", L: 3600, H: 1500, WB: 2400, FO: 680, D: 590, glass: 0.40, ex: "e.g. small A-segment hatch" },
    { id: "hatch", name: "Compact hatch", L: 4280, H: 1460, WB: 2630, FO: 880, D: 640, glass: 0.36, ex: "e.g. C-segment hatchback" },
    { id: "sedan", name: "Saloon", L: 4710, H: 1440, WB: 2850, FO: 820, D: 670, glass: 0.33, ex: "e.g. D-segment premium saloon" },
    { id: "csuv", name: "Compact SUV", L: 4450, H: 1650, WB: 2680, FO: 900, D: 720, glass: 0.32, ex: "e.g. C-SUV crossover" },
    { id: "lsuv", name: "Large SUV", L: 4950, H: 1760, WB: 2980, FO: 930, D: 780, glass: 0.31, ex: "e.g. large premium SUV" },
    { id: "coupe", name: "Sports coupé", L: 4520, H: 1300, WB: 2450, FO: 950, D: 680, glass: 0.31, ex: "e.g. rear-engined 2+2 coupé" },
    { id: "super", name: "Mid-engine supercar", L: 4570, H: 1200, WB: 2650, FO: 1000, D: 700, glass: 0.30, ex: "e.g. mid-engined supercar" },
    { id: "mpv", name: "MPV / van", L: 4800, H: 1820, WB: 3000, FO: 900, D: 680, glass: 0.36, ex: "e.g. people carrier" }
  ];

  const GLOSSARY = [
    ["A-pillar", "The pillar either side of the windscreen. B, C and D pillars follow toward the rear."],
    ["Beltline", "The line where the side windows meet the body. Also called the waistline."],
    ["DLO", "Daylight opening: the overall shape of the side windows."],
    ["Greenhouse", "Everything above the beltline: glass, pillars and roof."],
    ["Tumblehome", "How much the side glass leans inward. More tumblehome makes the shoulders look wider."],
    ["Shoulder", "The strong horizontal surface just below the beltline, often catching the main highlight."],
    ["Dash-to-axle", "Distance from the base of the A-pillar to the front axle. Long dash-to-axle signals a premium, rear-drive layout."],
    ["Overhang", "Body length in front of the front axle or behind the rear axle."],
    ["Wheelbase", "Distance between the front and rear axle centres."],
    ["Track", "Distance between the centres of the left and right wheels."],
    ["Stance", "How the car sits: wheel size, track and how close the wheels are to the body corners."],
    ["Plan view", "The car seen from above. Shows how the body tapers and how wide the shoulders are."],
    ["Character line", "A crisp line along the body that catches light and guides the eye. Also called a feature line."],
    ["Crowning", "Slight outward curvature of a surface so it doesn't look flat or sunken."],
    ["Fast / slow surface", "Fast surfaces change curvature quickly and look sporty; slow surfaces are calmer and more elegant."],
    ["Haunch", "The muscular surface over the rear wheels."],
    ["Cowl", "The area at the base of the windscreen, where wipers usually sit."],
    ["Rocker / sill", "The lower body between the wheel arches."],
    ["H-point", "Hip point: the pivot of a seated person's hip, the reference for all packaging."],
    ["SgRP", "Seating reference point: the H-point for the designed driving position."],
    ["Package", "The layout of people, mechanics, battery and luggage that the design wraps around."],
    ["Class-A surface", "Final, perfectly smooth digital surfaces ready for production tooling."],
    ["CMF", "Colour, materials and finish: the design of colours, textures and materials."],
    ["Tape drawing", "Full-size drawing made with black tape on a wall to judge lines at real scale."],
    ["Clay model", "Model sculpted in industrial clay, often full size, to refine surfaces by hand."],
    ["Di-Noc", "A reflective film applied to clay models so they look painted and show highlights."],
    ["Buck", "A physical model of an interior or exterior used to check ergonomics and form."],
    ["Graphics", "Two-dimensional shapes on a vehicle: lights, window shapes, grille outlines."],
    ["Theme", "The overall design idea that ties all views and details together."],
    ["Gesture", "The energy or movement a vehicle expresses, often from its main side-view line."]
  ];

  return { CATEGORIES, PARTS, PHASES, PROJECT_TYPES, REVIEW_CHECK, DRILL_CATS, DRILLS, EVENTS, FORUMS, RESOURCES, SEGMENTS, GLOSSARY, CHECKED: "2026-11-03" };
})();
/* Tapeline core: utils, storage, images, sheets, router, settings, Claude handoff, Today */
"use strict";
(function () {
const D = window.TL_DATA;
const TL = window.TL = { views: {}, D };

/* ---------- utils ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const pad = n => String(n).padStart(2, "0");
const iso = d => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const today = () => iso(new Date());
const parseISO = s => { const [y, m, d] = String(s).split("-").map(Number); return new Date(y, (m || 1) - 1, d || 1); };
const daysUntil = s => Math.round((parseISO(s) - parseISO(today())) / 864e5);
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmtDate = (s, withYear) => { if (!s) return ""; const d = parseISO(s); return d.getDate() + " " + MONTHS[d.getMonth()] + (withYear || d.getFullYear() !== new Date().getFullYear() ? " " + d.getFullYear() : ""); };
const fmtRange = (a, b) => { if (!b || b === a) return fmtDate(a, true); const A = parseISO(a), B = parseISO(b); if (A.getFullYear() === B.getFullYear() && A.getMonth() === B.getMonth()) return A.getDate() + "–" + B.getDate() + " " + MONTHS[B.getMonth()] + " " + B.getFullYear(); if (A.getFullYear() === B.getFullYear()) return A.getDate() + " " + MONTHS[A.getMonth()] + " – " + B.getDate() + " " + MONTHS[B.getMonth()] + " " + B.getFullYear(); return fmtDate(a, true) + " – " + fmtDate(b, true); };
const relDays = n => n === 0 ? "today" : n === 1 ? "tomorrow" : n === -1 ? "yesterday" : n > 0 ? "in " + n + " days" : Math.abs(n) + " days ago";
const norm = s => String(s || "").toLowerCase().trim();
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const hashStr = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
Object.assign(TL, { $, $$, esc, uid, iso, today, parseISO, daysUntil, fmtDate, fmtRange, relDays, norm, debounce, hashStr, MONTHS });

/* ---------- icons ---------- */
const P = {
  today: '<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-6h4v6"/>',
  library: '<rect x="3" y="4" width="7" height="9" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="3" y="16" width="7" height="4" rx="1.5"/><rect x="14" y="13" width="7" height="7" rx="1.5"/>',
  projects: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M8 13h8"/>',
  practice: '<path d="M4 20 15.5 8.5"/><path d="m14 7 3-3 3 3-3 3"/><path d="M4 20l1.5-4.5L8 18Z"/>',
  explore: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5Z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z"/>',
  play: '<path d="M7 4v16l13-8Z"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4Z"/><circle cx="12" cy="13" r="3.5"/>',
  claude: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  car: '<path d="M3 15h18M5 15l2-5h8l4 5"/><circle cx="7.5" cy="16.5" r="2"/><circle cx="16.5" cy="16.5" r="2"/>',
  share: '<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v7h14v-7"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'
};
const icon = (n, cls = "ico") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ""}</svg>`;
const DRILL_ICONS = {
  Lines: '<path d="M3 17 21 7M3 12l18-5M3 21l18-9"/>',
  Ellipses: '<ellipse cx="12" cy="12" rx="9" ry="4"/><ellipse cx="12" cy="12" rx="5" ry="2"/>',
  Perspective: '<path d="M2 12h20M12 12 4 6v12M12 12l8-6v12M4 6h16M4 18h16"/>',
  Wheels: '<ellipse cx="12" cy="12" rx="6" ry="9"/><ellipse cx="12" cy="12" rx="2.5" ry="4"/>',
  "Side views": '<path d="M2 16h20M4 16l2-4 5-3h5l4 4 2 3"/><circle cx="7" cy="16" r="2"/><circle cx="17" cy="16" r="2"/>',
  "3/4 views": '<path d="M3 16 9 9h8l4 5v3H3Z"/><ellipse cx="7" cy="17" rx="1.5" ry="2"/><ellipse cx="17" cy="17" rx="1.5" ry="2"/>',
  Surfaces: '<path d="M3 15c4-6 14-6 18 0"/><path d="M3 11c4-4 14-4 18 0" opacity=".5"/><path d="M8 13v4M12 12v5M16 13v4"/>',
  Rendering: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 15l5-4 4 3 4-5 5 6"/>',
  Speed: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4M10 2h4"/>',
  Interiors: '<path d="M4 14h16M6 14c0-4 2-7 6-7s6 3 6 7"/><circle cx="12" cy="15" r="4"/>',
  "Two wheels": '<circle cx="6" cy="16" r="4"/><circle cx="18" cy="16" r="4"/><path d="M6 16l5-7h5l2 7M11 9 9 6H7"/>'
};
const drillIcon = c => `<svg viewBox="0 0 24 24" aria-hidden="true">${DRILL_ICONS[c] || DRILL_ICONS.Lines}</svg>`;
Object.assign(TL, { icon, drillIcon });

/* ---------- storage (IndexedDB) ---------- */
let dbp = null;
function db() {
  if (dbp) return dbp;
  dbp = new Promise((res, rej) => {
    const r = indexedDB.open("tapeline", 1);
    r.onupgradeneeded = () => { const d = r.result; if (!d.objectStoreNames.contains("kv")) d.createObjectStore("kv"); if (!d.objectStoreNames.contains("blobs")) d.createObjectStore("blobs"); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return dbp;
}
async function idb(store, mode, fn) {
  const d = await db();
  return new Promise((res, rej) => {
    const tx = d.transaction(store, mode); const st = tx.objectStore(store);
    const out = fn(st);
    tx.oncomplete = () => res(out && "result" in out ? out.result : out);
    tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error);
  });
}
const putBlob = (id, blob) => idb("blobs", "readwrite", st => st.put(blob, id));
const getBlob = id => idb("blobs", "readonly", st => st.get(id));
const delBlob = id => id ? idb("blobs", "readwrite", st => st.delete(id)) : Promise.resolve();
const allBlobKeys = () => idb("blobs", "readonly", st => st.getAllKeys());

const urlCache = new Map();
async function blobURL(id) {
  if (!id) return "";
  if (urlCache.has(id)) return urlCache.get(id);
  const b = await getBlob(id).catch(() => null);
  if (!b) return "";
  const u = URL.createObjectURL(b); urlCache.set(id, u); return u;
}
function hydrate(root = document) {
  $$("img[data-blob]", root).forEach(img => {
    const id = img.dataset.blob; if (!id) return;
    if (urlCache.has(id)) { img.src = urlCache.get(id); return; }
    blobURL(id).then(u => { if (u && img.dataset.blob === id) img.src = u; });
  });
}
const imgTag = (id, alt = "", cls = "") => id ? `<img data-blob="${esc(id)}" alt="${esc(alt)}" class="${cls}" loading="lazy" decoding="async">` : "";
Object.assign(TL, { putBlob, getBlob, delBlob, blobURL, hydrate, imgTag });

/* ---------- state ---------- */
const DEFAULT = () => ({
  v: 1, profile: { name: "", goal: 20, theme: "system" },
  refs: [], boards: [], projects: [], sessions: [], myEvents: [], eventStars: [], seeded: false, created: today()
});
let S = DEFAULT();
TL.S = () => S;
let saveTimer = null, saving = Promise.resolve();
function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flush, 350);
}
function flush() {
  clearTimeout(saveTimer);
  const snap = JSON.stringify(S);
  saving = saving.then(() => idb("kv", "readwrite", st => st.put(snap, "state"))).catch(e => { console.error(e); toast("Couldn't save. Your phone may be out of storage."); });
  return saving;
}
addEventListener("pagehide", flush);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });
async function load() {
  try {
    const raw = await idb("kv", "readonly", st => st.get("state"));
    if (raw) { const o = JSON.parse(raw); S = Object.assign(DEFAULT(), o); S.profile = Object.assign(DEFAULT().profile, o.profile || {}); }
  } catch (e) { console.error(e); }
  ["refs", "boards", "projects", "sessions", "myEvents", "eventStars"].forEach(k => { if (!Array.isArray(S[k])) S[k] = []; });
  TL.S = () => S;
}
Object.assign(TL, { save, flush, load });

/* ---------- images ---------- */
async function decode(file) {
  if ("createImageBitmap" in window) {
    try { return await createImageBitmap(file, { imageOrientation: "from-image" }); } catch (e) { try { return await createImageBitmap(file); } catch (e2) {} }
  }
  return new Promise((res, rej) => { const u = URL.createObjectURL(file); const im = new Image(); im.onload = () => res(im); im.onerror = () => rej(new Error("decode")); im.src = u; });
}
function toBlob(src, max, q) {
  const w0 = src.width, h0 = src.height, k = Math.min(1, max / Math.max(w0, h0));
  const c = document.createElement("canvas"); c.width = Math.max(1, Math.round(w0 * k)); c.height = Math.max(1, Math.round(h0 * k));
  const x = c.getContext("2d"); x.drawImage(src, 0, 0, c.width, c.height);
  return new Promise(res => c.toBlob(b => res(b), "image/jpeg", q));
}
function palette(src, n = 5) {
  const c = document.createElement("canvas"); c.width = 40; c.height = 40;
  const x = c.getContext("2d", { willReadFrequently: true }); x.drawImage(src, 0, 0, 40, 40);
  const d = x.getImageData(0, 0, 40, 40).data, buckets = new Map();
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] < 128) continue;
    const k = (d[i] >> 4) << 8 | (d[i + 1] >> 4) << 4 | (d[i + 2] >> 4);
    const b = buckets.get(k) || { n: 0, r: 0, g: 0, b: 0 }; b.n++; b.r += d[i]; b.g += d[i + 1]; b.b += d[i + 2]; buckets.set(k, b);
  }
  const cols = [...buckets.values()].map(b => ({ n: b.n, r: b.r / b.n, g: b.g / b.n, b: b.b / b.n })).sort((a, b) => b.n - a.n);
  const out = [];
  for (const c1 of cols) {
    if (out.every(o => Math.hypot(o.r - c1.r, o.g - c1.g, o.b - c1.b) > 48)) out.push(c1);
    if (out.length >= n) break;
  }
  return out.map(o => "#" + [o.r, o.g, o.b].map(v => Math.round(v).toString(16).padStart(2, "0")).join(""));
}
async function importImage(file) {
  const bmp = await decode(file);
  const [full, thumb] = await Promise.all([toBlob(bmp, 1800, 0.86), toBlob(bmp, 520, 0.8)]);
  const pal = palette(bmp);
  const w = bmp.width, h = bmp.height;
  if (bmp.close) bmp.close();
  const img = uid(), th = uid();
  await putBlob(img, full); await putBlob(th, thumb);
  return { img, thumb: th, palette: pal, w, h };
}
function pickFiles({ multiple = true, capture = false } = {}) {
  return new Promise(res => {
    const inp = document.createElement("input"); inp.type = "file"; inp.accept = "image/*"; inp.multiple = multiple;
    if (capture) inp.setAttribute("capture", "environment");
    inp.style.display = "none"; document.body.appendChild(inp);
    inp.onchange = () => { res([...inp.files]); inp.remove(); };
    inp.click();
  });
}
Object.assign(TL, { importImage, pickFiles });

/* ---------- UI primitives ---------- */
let toastT;
function toast(msg, action) {
  $(".toast")?.remove(); clearTimeout(toastT);
  const t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status");
  t.innerHTML = esc(msg) + (action ? `<button>${esc(action.label)}</button>` : "");
  if (action) t.querySelector("button").onclick = () => { t.remove(); action.fn(); };
  document.body.appendChild(t); toastT = setTimeout(() => t.remove(), action ? 6000 : 2600);
}
function confirmBox(text, okLabel, onOk, danger = true) {
  const d = document.createElement("div"); d.className = "dialog";
  d.innerHTML = `<div class="box" role="alertdialog" aria-modal="true"><div>${text}</div><div class="row" style="justify-content:flex-end"><button class="btn ghost small" data-no>Cancel</button><button class="btn small ${danger ? "danger" : ""}" data-ok>${esc(okLabel)}</button></div></div>`;
  document.body.appendChild(d);
  d.onclick = e => { if (e.target === d) d.remove(); };
  $("[data-no]", d).onclick = () => d.remove();
  $("[data-ok]", d).onclick = () => { d.remove(); onOk(); };
}
/* sheet stack: each entry re-renders itself */
const sheetStack = [];
const sheetRoot = () => $("#sheets");
function openSheet(render, opts = {}) {
  sheetStack.push({ render, opts });
  drawSheet();
}
function drawSheet() {
  const top = sheetStack[sheetStack.length - 1];
  const root = sheetRoot();
  if (!top) { root.innerHTML = ""; document.body.style.overflow = ""; return; }
  const scrollPrev = $(".sh-body", root)?.scrollTop || 0;
  const sameAsBefore = root.dataset.depth === String(sheetStack.length);
  const o = top.render();
  root.dataset.depth = sheetStack.length;
  root.innerHTML = `<div class="scrim"><div class="sheet ${top.opts.full ? "full" : ""}" role="dialog" aria-modal="true" aria-label="${esc(o.title || "")}">
    <div class="grab"></div>
    <div class="sh-head">${sheetStack.length > 1 ? `<button class="icon-btn" data-back aria-label="Back" style="margin:0 0 0 -8px">${icon("back")}</button>` : ""}<div class="t grow">${o.title || ""}</div>${o.headRight || ""}<button class="icon-btn" data-close aria-label="Close">${icon("close")}</button></div>
    <div class="sh-body">${o.body}</div>${o.foot ? `<div class="sh-foot">${o.foot}</div>` : ""}</div></div>`;
  document.body.style.overflow = "hidden";
  const scrim = $(".scrim", root);
  scrim.onclick = e => { if (e.target === scrim) closeAll(); };
  $("[data-close]", root).onclick = closeAll;
  const bk = $("[data-back]", root); if (bk) bk.onclick = closeSheet;
  if (o.bind) o.bind($(".sheet", root));
  hydrate(root);
  if (sameAsBefore && top.keepScroll) $(".sh-body", root).scrollTop = scrollPrev;
  top.keepScroll = false;
}
function refreshSheet() { const top = sheetStack[sheetStack.length - 1]; if (top) { top.keepScroll = true; drawSheet(); } }
function closeSheet() { sheetStack.pop(); drawSheet(); render(); }
function closeAll() { sheetStack.length = 0; drawSheet(); render(); }
document.addEventListener("keydown", e => { if (e.key === "Escape" && sheetStack.length && !$(".timer") && !$(".viewer") && !$(".dialog")) closeSheet(); });
function viewImage(blobId) {
  const v = document.createElement("div"); v.className = "viewer";
  v.innerHTML = `<div class="vbar"><button class="icon-btn" aria-label="Close">${icon("close")}</button></div><div class="vimg">${imgTag(blobId, "")}</div>`;
  document.body.appendChild(v); hydrate(v);
  $(".icon-btn", v).onclick = () => v.remove();
  $(".vimg", v).ondblclick = () => v.classList.toggle("zoom");
  let last = 0; $(".vimg", v).addEventListener("touchend", () => { const n = Date.now(); if (n - last < 300) v.classList.toggle("zoom"); last = n; });
}
Object.assign(TL, { toast, confirmBox, openSheet, refreshSheet, closeSheet, closeAll, viewImage });

/* ---------- Claude handoff ---------- */
function askClaude({ title, prompt, blobId, note }) {
  const canFiles = !!(navigator.canShare && window.File);
  openSheet(() => ({
    title: "Send to Claude",
    body: `<p class="lede">${esc(title)}. Your prompt is ready${blobId ? " and the image can go with it" : ""}.</p>
      <div class="prompt-box" id="pr">${esc(prompt)}</div>
      ${blobId ? `<div class="card flat stack-sm"><b>With the image</b><span class="lede">${canFiles ? "Tap Share, then pick the Claude app. The photo and prompt go together." : "Open Claude, paste the prompt and attach the photo from your camera roll."}</span></div>` : ""}
      ${note ? `<p class="lede">${esc(note)}</p>` : ""}
      <p class="lede">Uses your normal Claude plan. Nothing is sent until you choose to.</p>`,
    foot: `${blobId && canFiles ? `<button class="btn grow" data-share>${icon("share")}Share to Claude</button>` : `<a class="btn grow" data-open href="https://claude.ai/new?q=${encodeURIComponent(prompt)}" target="_blank" rel="noopener">${icon("claude")}Open Claude</a>`}<button class="btn soft" data-copy>${icon("copy")}Copy</button>`,
    bind: el => {
      $("[data-copy]", el).onclick = () => copyText(prompt);
      const op = $("[data-open]", el); if (op) op.onclick = () => copyText(prompt, true);
      const sh = $("[data-share]", el);
      if (sh) sh.onclick = async () => {
        try {
          const b = await getBlob(blobId); const f = new File([b], "tapeline.jpg", { type: "image/jpeg" });
          const data = { files: [f], text: prompt };
          if (navigator.canShare(data)) await navigator.share(data); else { await navigator.share({ text: prompt }); }
        } catch (e) { if (e && e.name !== "AbortError") { copyText(prompt); toast("Sharing isn't available. Prompt copied."); } }
      };
    }
  }));
}
async function copyText(t, quiet) {
  try { await navigator.clipboard.writeText(t); if (!quiet) toast("Prompt copied"); }
  catch (e) { const pr = $("#pr"); if (pr) { const r = document.createRange(); r.selectNodeContents(pr); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } if (!quiet) toast("Select the text and copy it"); }
}
TL.askClaude = askClaude;

/* ---------- practice helpers used across views ---------- */
function sessionsByDay() { const m = {}; S.sessions.forEach(s => { m[s.date] = (m[s.date] || 0) + (s.min || 0); }); return m; }
function streak() {
  const m = sessionsByDay(); let n = 0; const d = new Date();
  if (!m[iso(d)]) d.setDate(d.getDate() - 1);
  while (m[iso(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}
function weekMinutes() {
  const m = sessionsByDay(), d = new Date(); const dow = (d.getDay() + 6) % 7; let t = 0;
  for (let i = 0; i <= dow; i++) { const x = new Date(); x.setDate(x.getDate() - i); t += m[iso(x)] || 0; }
  return t;
}
function drillOfDay(offset = 0) { const i = (hashStr(today()) + offset) % D.DRILLS.length; return D.DRILLS[i]; }
function sessionPlan() {
  const seen = new Set(), out = []; let k = 0;
  while (out.length < 3 && k < 40) { const d = D.DRILLS[(hashStr(today() + "plan") + k * 7) % D.DRILLS.length]; if (!seen.has(d.cat)) { seen.add(d.cat); out.push(d); } k++; }
  return out;
}
function allEvents() { return D.EVENTS.map(e => ({ ...e, mine: false })).concat(S.myEvents.map(e => ({ ...e, mine: true }))); }
Object.assign(TL, { sessionsByDay, streak, weekMinutes, drillOfDay, sessionPlan, allEvents });

/* ---------- routing & shell ---------- */
const TABS = [["today", "Today"], ["library", "Library"], ["projects", "Projects"], ["practice", "Practice"], ["explore", "Explore"]];
let tab = "today";
function readHash() { const h = location.hash.slice(1); if (TABS.some(t => t[0] === h)) tab = h; }
function go(t) { tab = t; try { history.replaceState(null, "", "#" + t); } catch (e) {} window.scrollTo(0, 0); render(true); }
TL.go = go;
function tapeSVG(seed) {
  const r = hashStr(seed), a = 2 + (r % 5), b = 6 + (r >> 3) % 3;
  return `<svg class="tape" viewBox="0 0 220 10" preserveAspectRatio="none" aria-hidden="true"><path d="M2 ${b} C 60 ${a}, 140 ${a + 1}, 206 ${b - 3}"/><circle cx="212" cy="${b - 4}" r="3"/></svg>`;
}
function render(anim) {
  document.documentElement.dataset.theme = S.profile.theme === "system" ? "" : S.profile.theme;
  if (!document.documentElement.dataset.theme) document.documentElement.removeAttribute("data-theme");
  $$("nav.tabs button").forEach(b => b.setAttribute("aria-current", b.dataset.tab === tab ? "page" : "false"));
  const v = TL.views[tab]; if (!v) return;
  const o = v();
  $("#topTitle").classList.toggle("anim", !!anim);
  $("#topTitle").innerHTML = `<div class="eyebrow">${esc(o.eyebrow || "")}</div><h1 class="title">${esc(o.title)}</h1>${tapeSVG(tab)}`;
  const main = $("#view");
  main.innerHTML = o.html; main.classList.toggle("view-in", !!anim);
  const fab = $("#fab"); fab.hidden = !o.fab; if (o.fab) { fab.setAttribute("aria-label", o.fab.label); fab.onclick = o.fab.fn; }
  if (o.bind) o.bind(main);
  hydrate(main);
}
TL.render = render;

/* ---------- settings ---------- */
async function storageInfo() {
  let used = "", persisted = false;
  try { if (navigator.storage?.estimate) { const e = await navigator.storage.estimate(); used = (e.usage / 1048576).toFixed(1) + " MB used"; } } catch (e) {}
  try { if (navigator.storage?.persisted) persisted = await navigator.storage.persisted(); } catch (e) {}
  return { used, persisted };
}
function openSettings() {
  let info = { used: "Checking…", persisted: false };
  storageInfo().then(i => { info = i; refreshSheet(); });
  openSheet(() => ({
    title: "Settings",
    body: `<label class="field"><span>Your name</span><input class="input" id="stName" value="${esc(S.profile.name)}" placeholder="For the greeting on Today" autocomplete="given-name"></label>
      <div class="field"><span>Daily practice goal</span><div class="seg" id="stGoal">${[10, 20, 30, 45, 60].map(m => `<button data-g="${m}" aria-pressed="${S.profile.goal === m}">${m} min</button>`).join("")}</div></div>
      <div class="field"><span>Appearance</span><div class="seg" id="stTheme">${[["system", "System"], ["light", "Light"], ["dark", "Dark"]].map(([k, l]) => `<button data-th="${k}" aria-pressed="${S.profile.theme === k}">${l}</button>`).join("")}</div></div>
      <div class="card flat stack-sm">
        <h3 class="h">Your data</h3>
        <p class="lede">Everything is stored only on this iPhone. ${esc(info.used)}. ${info.persisted ? "Protected from automatic clean-up." : ""}</p>
        <p class="lede">Make a backup now and then, especially before deleting the app from your home screen.</p>
        <div class="row"><button class="btn small" id="stExport">Save backup</button><button class="btn small soft" id="stImport">Restore backup</button>${info.persisted ? "" : `<button class="btn small soft" id="stPersist">Protect storage</button>`}</div>
      </div>
      ${S.projects.some(p => p.example) ? `<button class="btn ghost" id="stDelEx">Remove the example project</button>` : ""}
      <button class="btn danger" id="stWipe">Delete everything</button>
      <p class="lede mono">Tapeline · ${esc(TL.VERSION)} · events checked ${fmtDate(D.CHECKED, true)}</p>`,
    bind: el => {
      $("#stName", el).oninput = debounce(e => { S.profile.name = e.target.value.trim(); save(); render(); }, 300);
      $$("[data-g]", el).forEach(b => b.onclick = () => { S.profile.goal = +b.dataset.g; save(); refreshSheet(); });
      $$("[data-th]", el).forEach(b => b.onclick = () => { S.profile.theme = b.dataset.th; save(); render(); refreshSheet(); });
      $("#stExport", el).onclick = exportBackup;
      $("#stImport", el).onclick = importBackup;
      const ps = $("#stPersist", el); if (ps) ps.onclick = async () => { let ok = false; try { ok = await navigator.storage.persist(); } catch (e) {} toast(ok ? "Storage protected" : "Your phone didn't allow it. Keep backups."); info = await storageInfo(); refreshSheet(); };
      const de = $("#stDelEx", el); if (de) de.onclick = () => { S.projects = S.projects.filter(p => !p.example); save(); toast("Example removed"); refreshSheet(); };
      $("#stWipe", el).onclick = () => confirmBox("<b>Delete everything?</b><p class='lede'>All references, projects, sketches and notes on this phone will be erased. This can't be undone.</p>", "Delete everything", async () => {
        S = DEFAULT(); S.seeded = true; TL.S = () => S; await flush();
        const keys = await allBlobKeys(); for (const k of keys) await delBlob(k);
        urlCache.forEach(u => URL.revokeObjectURL(u)); urlCache.clear();
        closeAll(); toast("All data deleted");
      });
    }
  }));
}
TL.openSettings = openSettings;
function blobToDataURL(b) { return new Promise(res => { const r = new FileReader(); r.onload = () => res(r.result); r.readAsDataURL(b); }); }
async function exportBackup() {
  toast("Preparing backup…");
  const ids = new Set();
  S.refs.forEach(r => { ids.add(r.img); ids.add(r.thumb); });
  S.sessions.forEach(s => { if (s.img) { ids.add(s.img); ids.add(s.thumb); } });
  S.projects.forEach(p => { if (p.cover) ids.add(p.cover); });
  const blobs = {};
  for (const id of ids) { if (!id) continue; const b = await getBlob(id).catch(() => null); if (b) blobs[id] = await blobToDataURL(b); }
  const data = JSON.stringify({ app: "tapeline", version: 1, exported: new Date().toISOString(), state: S, blobs });
  const file = new Blob([data], { type: "application/json" });
  const name = "tapeline-backup-" + today() + ".json";
  try {
    const f = new File([file], name, { type: "application/json" });
    if (navigator.canShare && navigator.canShare({ files: [f] })) { await navigator.share({ files: [f], title: name }); return; }
  } catch (e) { if (e && e.name === "AbortError") return; }
  const a = document.createElement("a"); a.href = URL.createObjectURL(file); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 4000);
  toast("Backup saved");
}
function importBackup() {
  const inp = document.createElement("input"); inp.type = "file"; inp.accept = "application/json,.json";
  inp.onchange = async () => {
    const f = inp.files[0]; if (!f) return;
    let o; try { o = JSON.parse(await f.text()); } catch (e) { toast("That file isn't a Tapeline backup."); return; }
    if (!o || o.app !== "tapeline" || !o.state) { toast("That file isn't a Tapeline backup."); return; }
    confirmBox("<b>Restore this backup?</b><p class='lede'>It replaces what's in the app now with the backup from " + esc(fmtDate(String(o.exported).slice(0, 10), true)) + ".</p>", "Restore", async () => {
      for (const [id, du] of Object.entries(o.blobs || {})) { const b = await (await fetch(du)).blob(); await putBlob(id, b); }
      S = Object.assign(DEFAULT(), o.state); TL.S = () => S; await flush(); closeAll(); toast("Backup restored");
    }, false);
  };
  inp.click();
}

/* ---------- seed example project ---------- */
function seed() {
  if (S.seeded) return;
  S.seeded = true;
  const t0 = new Date(); const d = n => { const x = new Date(t0); x.setDate(x.getDate() + n); return iso(x); };
  S.projects.push({
    id: uid(), example: true, name: "Example: urban e-scooter", type: "Personal project", client: "Practice brief", start: today(), deadline: d(24), phase: 1,
    brief: "Design a shared e-scooter for Barcelona that is easy to repair and comfortable on cobbles. Target user: students and commuters, 2–6 km trips.",
    notes: "This is an example so you can see how projects work. Delete it in Settings when you add your own.",
    tasks: [
      { id: uid(), phase: 0, t: "Ride 3 shared scooters and photograph pain points", due: d(2), done: true },
      { id: uid(), phase: 0, t: "Benchmark board: 10 scooters and e-bikes", due: d(4), done: false },
      { id: uid(), phase: 1, t: "40 thumbnails of the frame and deck", due: d(7), done: false },
      { id: uid(), phase: 2, t: "3 directions in side view", due: d(11), done: false },
      { id: uid(), phase: 4, t: "Block out the chosen direction in Blender", due: d(17), done: false },
      { id: uid(), phase: 6, t: "Final presentation layout", due: d(23), done: false }
    ],
    refs: [], review: {}, archived: false, created: today()
  });
  save();
}

/* ---------- TODAY ---------- */
TL.views.today = function () {
  const now = new Date(), hr = now.getHours();
  const greet = (hr < 12 ? "Good morning" : hr < 19 ? "Good afternoon" : "Good evening") + (S.profile.name ? ", " + S.profile.name : "");
  const dd = drillOfDay(), st = streak(), wk = weekMinutes(), goalW = S.profile.goal * 7;
  const doneToday = (sessionsByDay()[today()] || 0);
  const tasks = [];
  S.projects.filter(p => !p.archived).forEach(p => {
    (p.tasks || []).filter(t => !t.done && t.due).forEach(t => tasks.push({ p, t, n: daysUntil(t.due) }));
    if (p.deadline) tasks.push({ p, t: { t: "Final deadline" }, n: daysUntil(p.deadline), final: true });
  });
  tasks.sort((a, b) => a.n - b.n);
  const up = tasks.filter(x => x.n >= -2).slice(0, 4);
  const evs = allEvents().filter(e => daysUntil(e.end || e.start) >= 0).sort((a, b) => (S.eventStars.includes(b.id) - S.eventStars.includes(a.id)) || a.start.localeCompare(b.start));
  const ev = evs[0];
  const pick = S.refs.length ? S.refs.slice().sort((a, b) => hashStr(today() + a.id) - hashStr(today() + b.id)).slice(0, 4) : [];
  const dueTag = n => `<span class="tag ${n < 0 ? "bad" : n <= 3 ? "warn" : ""} due">${n < 0 ? "overdue" : relDays(n)}</span>`;
  const html = `<div class="stack">
    <div class="hero-card"><div class="grid-bg"></div><div class="content">
      <div class="label">Today's drill · ${dd.min} min · ${esc(dd.cat)}</div>
      <div class="big">${esc(dd.name)}</div>
      <p style="margin:0;opacity:.8">${esc(dd.goal)}</p>
      <div class="row"><button class="btn" id="tdStart">${icon("play")}Start</button><button class="btn ghost small" id="tdDrill">See steps</button></div>
    </div></div>
    <div class="dims">
      <div class="dim"><b>${st}</b><div class="rule"><i></i></div><span class="label">day streak</span></div>
      <div class="dim"><b>${doneToday}<span class="mono" style="font-size:12px"> / ${S.profile.goal}</span></b><div class="rule"><i></i></div><span class="label">min today</span></div>
      <div class="dim"><b>${wk}</b><div class="rule"><i></i></div><span class="label">min this week</span></div>
    </div>
    <div class="bar"><i style="width:${Math.min(100, Math.round(wk / goalW * 100))}%"></i></div>
    <section class="stack-sm">
      <div class="sec-head"><h2 class="h">Coming up</h2><button class="link-btn" data-go="projects">Projects</button></div>
      ${up.length ? `<div class="card stack-sm">${up.map(x => `<button class="between" data-proj="${x.p.id}" style="border:0;background:none;padding:6px 0;text-align:left;width:100%"><span class="grow"><b style="font-weight:600">${esc(x.t.t)}</b><br><span class="lede">${esc(x.p.name)}${x.final ? "" : " · " + esc(D.PHASES[x.t.phase] || "")}</span></span>${dueTag(x.n)}</button>`).join("")}</div>`
        : `<div class="empty"><b>No deadlines yet</b><span>Add a project with a deadline and its tasks show up here.</span><button class="btn small" id="tdNewProj">New project</button></div>`}
    </section>
    ${ev ? `<section class="stack-sm"><div class="sec-head"><h2 class="h">Next event</h2><button class="link-btn" data-go="explore" data-ex="events">All events</button></div>
      <div class="card event ${S.eventStars.includes(ev.id) ? "star" : ""}"><div class="date-blk"><div class="m">${MONTHS[parseISO(ev.start).getMonth()].toUpperCase()}</div><div class="d">${parseISO(ev.start).getDate()}</div></div>
      <div class="stack-sm" style="gap:4px"><b>${esc(ev.name)}</b><span class="lede">${esc(ev.city)}</span><div class="row"><span class="tag blue">${daysUntil(ev.start) <= 0 ? "on now" : relDays(daysUntil(ev.start))}</span>${ev.tbc ? '<span class="tag warn">dates TBC</span>' : ""}</div></div></div></section>` : ""}
    <section class="stack-sm">
      <div class="sec-head"><h2 class="h">From your library</h2><button class="link-btn" data-go="library">Library</button></div>
      ${pick.length ? `<div class="masonry">${pick.map(r => `<button class="tile" data-ref="${r.id}">${imgTag(r.thumb, r.title)}<span class="cap"><b>${esc(r.title || r.category || "Reference")}</b><span class="mono">${esc([r.brand, r.year].filter(Boolean).join(" · "))}</span></span></button>`).join("")}</div>`
        : `<div class="empty">${TL.emptyArt()}<b>Start your reference library</b><span>Save cars, bikes, details and sketches you like, then tag and group them into boards.</span><button class="btn small" id="tdAddRef">${icon("plus")}Add images</button></div>`}
    </section>
  </div>`;
  return {
    eyebrow: now.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }), title: greet, html,
    bind: el => {
      $("#tdStart", el).onclick = () => TL.startTimer(dd);
      $("#tdDrill", el).onclick = () => TL.openDrill(dd.id);
      $$("[data-go]", el).forEach(b => b.onclick = () => { if (b.dataset.ex) TL.exploreTab = b.dataset.ex; go(b.dataset.go); });
      $$("[data-proj]", el).forEach(b => b.onclick = () => TL.openProject(b.dataset.proj));
      $$("[data-ref]", el).forEach(b => b.onclick = () => TL.openRef(b.dataset.ref));
      const np = $("#tdNewProj", el); if (np) np.onclick = () => TL.newProject();
      const ar = $("#tdAddRef", el); if (ar) ar.onclick = () => TL.addRefs();
    }
  };
};
TL.emptyArt = () => `<svg viewBox="0 0 120 50" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 38h108"/><path d="M14 38c0-6 2-10 10-12l18-10c6-3 14-4 22-4h10c8 0 16 6 22 12l8 2c6 2 8 6 8 12"/><circle cx="32" cy="38" r="8"/><circle cx="90" cy="38" r="8"/><path d="M52 14l-6 12M76 14l6 12" opacity=".5"/></svg>`;

/* ---------- boot ---------- */
TL.boot = async function () {
  readHash();
  await load(); seed();
  $("#gear").onclick = openSettings;
  $$("nav.tabs button").forEach(b => b.onclick = () => { if (sheetStack.length) { sheetStack.length = 0; drawSheet(); } go(b.dataset.tab); });
  addEventListener("hashchange", () => { readHash(); render(); });
  render(true);
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").then(reg => {
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing; if (!nw) return;
        nw.addEventListener("statechange", () => { if (nw.state === "installed" && navigator.serviceWorker.controller) toast("A new version is ready", { label: "Reload", fn: () => location.reload() }); });
      });
    }).catch(() => {});
  }
  try { if (navigator.storage?.persisted && !(await navigator.storage.persisted()) && window.matchMedia("(display-mode: standalone)").matches) navigator.storage.persist(); } catch (e) {}
};
})();
/* Tapeline: Library (references, tags, boards, palettes) */
"use strict";
(function () {
const TL = window.TL, D = TL.D, { $, $$, esc, uid, today, icon, imgTag, norm, debounce, fmtDate, toast } = TL;
const S = () => TL.S();
let q = "", cat = "All", favOnly = false, boardFilter = "";

function refMatches(r) {
  if (cat !== "All" && r.category !== cat) return false;
  if (favOnly && !r.fav) return false;
  if (boardFilter && !(r.boards || []).includes(boardFilter)) return false;
  if (!q) return true;
  const hay = norm([r.title, r.brand, r.year, r.category, (r.parts || []).join(" "), (r.tags || []).join(" "), r.note].join(" "));
  return norm(q).split(/\s+/).every(w => hay.includes(w));
}
const tile = (r, sel) => `<button class="tile ${sel ? "sel" : ""}" data-ref="${r.id}">${sel !== undefined ? `<span class="tick">${sel ? "✓" : ""}</span>` : ""}${imgTag(r.thumb, r.title || "Reference")}${r.fav && sel === undefined ? `<span class="fav">★</span>` : ""}<span class="cap"><b>${esc(r.title || r.category || "Untitled")}</b>${(r.brand || r.year) ? `<span class="mono">${esc([r.brand, r.year].filter(Boolean).join(" · "))}</span>` : ""}</span></button>`;
TL.refTile = tile;
const boardCard = b => {
  const items = S().refs.filter(r => (r.boards || []).includes(b.id)).slice(0, 3);
  return `<button class="board" data-board="${b.id}"><span class="mos">${[0, 1, 2].map(i => items[i] ? imgTag(items[i].thumb, "") : "<i></i>").join("")}</span><b>${esc(b.name)}</b><span class="mono">${S().refs.filter(r => (r.boards || []).includes(b.id)).length} images</span></button>`;
};

TL.views.library = function () {
  const st = S(), list = st.refs.filter(refMatches).sort((a, b) => (b.created || "").localeCompare(a.created || "") || b.id.localeCompare(a.id));
  const counts = {}; st.refs.forEach(r => counts[r.category] = (counts[r.category] || 0) + 1);
  const html = `<div class="stack">
    <label class="search">${icon("search")}<input class="input" id="lq" type="search" placeholder="Search titles, brands, tags, notes" value="${esc(q)}" autocomplete="off"></label>
    <section class="stack-sm">
      <div class="sec-head"><h2 class="h">Boards</h2>${boardFilter ? `<button class="link-btn" id="lbClear">Show all images</button>` : ""}</div>
      <div class="boards">${st.boards.map(boardCard).join("")}<button class="board new" id="lbNew"><span class="mos">${icon("plus")}</span><b>New board</b><span class="mono">Moodboard</span></button></div>
    </section>
    <div class="chips" id="lcats"><button class="chip" data-c="All" aria-pressed="${cat === "All" && !favOnly}">All <span class="n">${st.refs.length}</span></button><button class="chip" data-fav aria-pressed="${favOnly}">★ Favourites</button>${D.CATEGORIES.map(c => `<button class="chip" data-c="${esc(c)}" aria-pressed="${cat === c}">${esc(c)}${counts[c] ? ` <span class="n">${counts[c]}</span>` : ""}</button>`).join("")}</div>
    ${boardFilter ? `<div class="tag clay" style="align-self:flex-start">Board: ${esc((st.boards.find(b => b.id === boardFilter) || {}).name || "")}</div>` : ""}
    ${st.refs.length ? (list.length ? `<div class="masonry">${list.map(r => tile(r)).join("")}</div>` : `<div class="empty"><b>Nothing matches</b><span>Try another word or category.</span></div>`)
      : `<div class="empty">${TL.emptyArt()}<b>Your library is empty</b><span>Add photos from your camera roll: cars at shows, details on the street, sketches you admire. Tag them by brand, era and part so you can find them in seconds.</span><button class="btn" id="lAdd">${icon("plus")}Add images</button></div>`}
  </div>`;
  return {
    eyebrow: st.refs.length + " references · " + st.boards.length + " boards", title: "Library", html,
    fab: { label: "Add images", fn: addRefs },
    bind: el => {
      const inp = $("#lq", el);
      inp.oninput = debounce(() => { q = inp.value; const pos = inp.selectionStart; TL.render(); const n = $("#lq"); n.focus(); try { n.setSelectionRange(pos, pos); } catch (e) {} }, 220);
      $$("[data-c]", el).forEach(b => b.onclick = () => { cat = b.dataset.c; favOnly = false; TL.render(); });
      $("[data-fav]", el).onclick = () => { favOnly = !favOnly; cat = "All"; TL.render(); };
      $$("[data-ref]", el).forEach(b => b.onclick = () => openRef(b.dataset.ref));
      $$("[data-board]", el).forEach(b => b.onclick = () => openBoard(b.dataset.board));
      $("#lbNew", el).onclick = () => newBoard();
      const cl = $("#lbClear", el); if (cl) cl.onclick = () => { boardFilter = ""; TL.render(); };
      const a = $("#lAdd", el); if (a) a.onclick = addRefs;
    }
  };
};

/* ---------- add references ---------- */
async function addRefs(opts = {}) {
  const files = await TL.pickFiles({ multiple: true });
  if (!files.length) return [];
  toast(`Importing ${files.length} image${files.length > 1 ? "s" : ""}…`);
  const added = [];
  for (const f of files) {
    try {
      const im = await TL.importImage(f);
      const r = { id: uid(), ...im, title: "", brand: "", year: "", category: opts.category || "Car", parts: [], tags: [], note: "", source: "", fav: false, boards: opts.board ? [opts.board] : [], projects: opts.project ? [opts.project] : [], created: new Date().toISOString() };
      S().refs.push(r); added.push(r);
    } catch (e) { console.error(e); toast("One image couldn't be read. Try a JPG or PNG."); }
  }
  TL.save(); TL.render();
  if (added.length) tagBatch(added.map(r => r.id), opts);
  return added;
}
TL.addRefs = addRefs;

function tagBatch(ids, opts = {}) {
  const sel = { category: opts.category || "Car", parts: [], tags: "", brand: "", year: "", boards: opts.board ? [opts.board] : [] };
  TL.openSheet(() => {
    const refs = S().refs.filter(r => ids.includes(r.id));
    return {
      title: `${refs.length} image${refs.length > 1 ? "s" : ""} added`,
      body: `<p class="lede">Tag them now so they're easy to find. Everything here applies to ${refs.length > 1 ? "all of them" : "this image"}; you can edit each one later.</p>
        <div class="masonry" style="columns:${refs.length > 2 ? 3 : 2}">${refs.slice(0, 9).map(r => `<div class="tile">${imgTag(r.thumb, "")}</div>`).join("")}</div>
        <div class="field"><span>Category</span><div class="chips wrapy">${D.CATEGORIES.map(c => `<button class="chip" data-bc="${esc(c)}" aria-pressed="${sel.category === c}">${esc(c)}</button>`).join("")}</div></div>
        <div class="field"><span>What it shows</span><div class="chips wrapy">${D.PARTS.map(p => `<button class="chip" data-bp="${esc(p)}" aria-pressed="${sel.parts.includes(p)}">${esc(p)}</button>`).join("")}</div></div>
        <div class="grid2"><label class="field"><span>Brand / designer</span><input class="input" id="bBrand" value="${esc(sel.brand)}" placeholder="e.g. Cupra"></label><label class="field"><span>Year or era</span><input class="input" id="bYear" value="${esc(sel.year)}" placeholder="e.g. 1974, 2020s"></label></div>
        <label class="field"><span>Tags</span><input class="input" id="bTags" value="${esc(sel.tags)}" placeholder="wedge, light bar, matte, aero wheels"></label>
        ${S().boards.length ? `<div class="field"><span>Add to boards</span><div class="chips wrapy">${S().boards.map(b => `<button class="chip" data-bb="${b.id}" aria-pressed="${sel.boards.includes(b.id)}">${esc(b.name)}</button>`).join("")}</div></div>` : ""}`,
      foot: `<button class="btn ghost" data-skip>Skip</button><button class="btn grow" data-apply>Save tags</button>`,
      bind: el => {
        const keep = () => { sel.brand = $("#bBrand", el).value; sel.year = $("#bYear", el).value; sel.tags = $("#bTags", el).value; };
        $$("[data-bc]", el).forEach(b => b.onclick = () => { keep(); sel.category = b.dataset.bc; TL.refreshSheet(); });
        $$("[data-bp]", el).forEach(b => b.onclick = () => { keep(); const p = b.dataset.bp; sel.parts = sel.parts.includes(p) ? sel.parts.filter(x => x !== p) : sel.parts.concat(p); TL.refreshSheet(); });
        $$("[data-bb]", el).forEach(b => b.onclick = () => { keep(); const p = b.dataset.bb; sel.boards = sel.boards.includes(p) ? sel.boards.filter(x => x !== p) : sel.boards.concat(p); TL.refreshSheet(); });
        $("[data-skip]", el).onclick = TL.closeSheet;
        $("[data-apply]", el).onclick = () => {
          keep();
          const tags = sel.tags.split(",").map(t => t.trim()).filter(Boolean);
          refs.forEach(r => { r.category = sel.category; r.parts = [...new Set((r.parts || []).concat(sel.parts))]; r.tags = [...new Set((r.tags || []).concat(tags))]; if (sel.brand) r.brand = sel.brand.trim(); if (sel.year) r.year = sel.year.trim(); r.boards = [...new Set((r.boards || []).concat(sel.boards))]; });
          TL.save(); TL.closeSheet(); toast("Tags saved");
        };
      }
    };
  });
}

/* ---------- reference detail ---------- */
function openRef(id) {
  TL.openSheet(() => {
    const r = S().refs.find(x => x.id === id);
    if (!r) return { title: "Deleted", body: `<p class="lede">This reference was deleted.</p>` };
    const projects = S().projects.filter(p => !p.archived);
    return {
      title: esc(r.title || "Reference"),
      headRight: `<button class="icon-btn" data-fav aria-label="${r.fav ? "Unfavourite" : "Favourite"}" style="color:${r.fav ? "var(--clay)" : "inherit"}">${icon("star")}</button>`,
      body: `<button class="detail-img" data-view>${imgTag(r.img, r.title)}</button>
        ${(r.palette || []).length ? `<div class="stack-sm"><span class="label">Colours in this image · tap to copy</span><div class="swatches">${r.palette.map(c => `<button class="sw" data-hex="${c}"><i style="background:${c}"></i><span>${c}</span></button>`).join("")}</div></div>` : ""}
        <label class="field"><span>Title</span><input class="input" id="rTitle" value="${esc(r.title)}" placeholder="e.g. Lancia Stratos rear light"></label>
        <div class="grid2"><label class="field"><span>Brand / designer</span><input class="input" id="rBrand" value="${esc(r.brand)}"></label><label class="field"><span>Year or era</span><input class="input" id="rYear" value="${esc(r.year)}"></label></div>
        <div class="field"><span>Category</span><select class="select" id="rCat">${D.CATEGORIES.map(c => `<option ${r.category === c ? "selected" : ""}>${esc(c)}</option>`).join("")}</select></div>
        <div class="field"><span>What it shows</span><div class="chips wrapy">${D.PARTS.map(p => `<button class="chip" data-p="${esc(p)}" aria-pressed="${(r.parts || []).includes(p)}">${esc(p)}</button>`).join("")}</div></div>
        <label class="field"><span>Tags (comma separated)</span><input class="input" id="rTags" value="${esc((r.tags || []).join(", "))}"></label>
        <label class="field"><span>Why I saved it</span><textarea class="textarea" id="rNote" placeholder="What's good about it? What would you take from it?">${esc(r.note)}</textarea></label>
        <label class="field"><span>Source link</span><input class="input" id="rSrc" type="url" inputmode="url" value="${esc(r.source)}" placeholder="https://"></label>
        ${r.source ? `<a class="out" href="${esc(r.source)}" target="_blank" rel="noopener">${icon("ext")}Open source</a>` : ""}
        <div class="field"><span>Boards</span><div class="chips wrapy">${S().boards.map(b => `<button class="chip" data-b="${b.id}" aria-pressed="${(r.boards || []).includes(b.id)}">${esc(b.name)}</button>`).join("")}<button class="chip" data-newb>+ New board</button></div></div>
        ${projects.length ? `<div class="field"><span>Projects</span><div class="chips wrapy">${projects.map(p => `<button class="chip" data-pr="${p.id}" aria-pressed="${(p.refs || []).includes(r.id)}">${esc(p.name)}</button>`).join("")}</div></div>` : ""}
        <p class="mono muted">Added ${esc(fmtDate(String(r.created).slice(0, 10), true))}${r.w ? " · " + r.w + "×" + r.h + " px" : ""}</p>
        <button class="btn danger" data-del>${icon("trash")}Delete reference</button>`,
      foot: `<button class="btn grow" data-ask>${icon("claude")}Ask Claude about this design</button>`,
      bind: el => {
        const upd = (k, v) => { r[k] = v; TL.save(); };
        $("#rTitle", el).oninput = e => upd("title", e.target.value);
        $("#rBrand", el).oninput = e => upd("brand", e.target.value);
        $("#rYear", el).oninput = e => upd("year", e.target.value);
        $("#rCat", el).onchange = e => upd("category", e.target.value);
        $("#rTags", el).onchange = e => upd("tags", e.target.value.split(",").map(t => t.trim()).filter(Boolean));
        $("#rNote", el).oninput = e => upd("note", e.target.value);
        $("#rSrc", el).onchange = e => { upd("source", e.target.value.trim()); TL.refreshSheet(); };
        $$("[data-p]", el).forEach(b => b.onclick = () => { const p = b.dataset.p; r.parts = (r.parts || []).includes(p) ? r.parts.filter(x => x !== p) : (r.parts || []).concat(p); TL.save(); TL.refreshSheet(); });
        $$("[data-b]", el).forEach(b => b.onclick = () => { const p = b.dataset.b; r.boards = (r.boards || []).includes(p) ? r.boards.filter(x => x !== p) : (r.boards || []).concat(p); TL.save(); TL.refreshSheet(); });
        $$("[data-pr]", el).forEach(b => b.onclick = () => { const p = S().projects.find(x => x.id === b.dataset.pr); p.refs = p.refs || []; p.refs = p.refs.includes(r.id) ? p.refs.filter(x => x !== r.id) : p.refs.concat(r.id); TL.save(); TL.refreshSheet(); });
        $("[data-newb]", el).onclick = () => newBoard(bid => { r.boards = (r.boards || []).concat(bid); TL.save(); });
        $("[data-fav]", el).onclick = () => { r.fav = !r.fav; TL.save(); TL.refreshSheet(); };
        $("[data-view]", el).onclick = () => TL.viewImage(r.img);
        $$("[data-hex]", el).forEach(b => b.onclick = async () => { try { await navigator.clipboard.writeText(b.dataset.hex); toast(b.dataset.hex + " copied"); } catch (e) { toast(b.dataset.hex); } });
        $("[data-del]", el).onclick = () => TL.confirmBox("<b>Delete this reference?</b><p class='lede'>The image is removed from your library, boards and projects.</p>", "Delete", async () => {
          S().refs = S().refs.filter(x => x.id !== r.id); S().projects.forEach(p => p.refs = (p.refs || []).filter(x => x !== r.id));
          await TL.delBlob(r.img); await TL.delBlob(r.thumb); TL.save(); TL.closeSheet(); toast("Reference deleted");
        });
        $("[data-ask]", el).onclick = () => TL.askClaude({
          title: "Analyse this reference", blobId: r.img,
          prompt: `I'm a transportation design student. Analyse the design of this ${r.category.toLowerCase()} reference (image attached)${r.title ? ": " + r.title : ""}${r.brand ? ", " + r.brand : ""}${r.year ? ", " + r.year : ""}.\n${(r.parts || []).length ? "Focus on: " + r.parts.join(", ") + ".\n" : ""}${r.note ? "Why I saved it: " + r.note + "\n" : ""}\nPlease cover:\n1. Proportions and stance\n2. Surfacing and key lines\n3. Graphics (lights, openings, DLO) and CMF\n4. What makes it work, or not\n5. Two concrete ideas I could borrow for my own projects, and one sketch exercise based on it.`
        });
      }
    };
  }, { full: true });
}
TL.openRef = openRef;

/* ---------- boards ---------- */
function newBoard(after) {
  let name = "", desc = "";
  TL.openSheet(() => ({
    title: "New board",
    body: `<label class="field"><span>Name</span><input class="input" id="nbName" placeholder="e.g. Brutalist EV, 70s wedge, lighting" value="${esc(name)}"></label>
      <label class="field"><span>What it's for (optional)</span><textarea class="textarea" id="nbDesc" placeholder="Mood, project or theme">${esc(desc)}</textarea></label>`,
    foot: `<button class="btn grow" data-ok>Create board</button>`,
    bind: el => {
      setTimeout(() => $("#nbName", el)?.focus(), 250);
      $("[data-ok]", el).onclick = () => {
        name = $("#nbName", el).value.trim(); desc = $("#nbDesc", el).value.trim();
        if (!name) { toast("Give the board a name"); return; }
        const b = { id: uid(), name, desc, created: today() }; S().boards.push(b); TL.save();
        TL.closeSheet(); if (after) { after(b.id); TL.refreshSheet(); } else openBoard(b.id);
      };
    }
  }));
}
TL.newBoard = newBoard;

function openBoard(id) {
  TL.openSheet(() => {
    const b = S().boards.find(x => x.id === id);
    if (!b) return { title: "Deleted", body: "" };
    const refs = S().refs.filter(r => (r.boards || []).includes(b.id));
    const cols = {}; refs.forEach(r => (r.palette || []).slice(0, 3).forEach(c => cols[c] = (cols[c] || 0) + 1));
    const pal = Object.entries(cols).sort((a, b2) => b2[1] - a[1]).map(x => x[0]).filter((c, i, a) => a.findIndex(o => dist(o, c) < 40) === i).slice(0, 8);
    const tagc = {}; refs.forEach(r => (r.tags || []).concat(r.parts || []).forEach(t => tagc[t] = (tagc[t] || 0) + 1));
    const tags = Object.entries(tagc).sort((a, b2) => b2[1] - a[1]).slice(0, 10).map(x => x[0]);
    return {
      title: esc(b.name),
      body: `${b.desc ? `<p class="lede">${esc(b.desc)}</p>` : ""}
        ${pal.length ? `<div class="stack-sm"><span class="label">Board palette</span><div class="palette-bar">${pal.map(c => `<i style="background:${c}"></i>`).join("")}</div><div class="swatches">${pal.map(c => `<button class="sw" data-hex="${c}"><i style="background:${c}"></i><span>${c}</span></button>`).join("")}</div></div>` : ""}
        ${tags.length ? `<div class="row">${tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : ""}
        ${refs.length ? `<div class="masonry">${refs.map(r => tile(r)).join("")}</div>` : `<div class="empty"><b>Empty board</b><span>Add images from your library or straight from your camera roll.</span></div>`}
        <div class="row"><button class="btn small soft" data-pick>Add from library</button><button class="btn small soft" data-addnew>${icon("plus")}New images</button><button class="btn small ghost" data-rename>Rename</button></div>
        <button class="btn danger" data-del>${icon("trash")}Delete board</button>
        <p class="lede">Deleting a board keeps the images in your library.</p>`,
      foot: `<button class="btn grow" data-ask ${refs.length ? "" : "disabled"}>${icon("claude")}Ask Claude for directions</button>`,
      bind: el => {
        $$("[data-ref]", el).forEach(x => x.onclick = () => openRef(x.dataset.ref));
        $$("[data-hex]", el).forEach(x => x.onclick = async () => { try { await navigator.clipboard.writeText(x.dataset.hex); toast(x.dataset.hex + " copied"); } catch (e) {} });
        $("[data-pick]", el).onclick = () => pickRefs(refs.map(r => r.id), sel => { S().refs.forEach(r => { const on = sel.includes(r.id); const has = (r.boards || []).includes(b.id); if (on && !has) r.boards = (r.boards || []).concat(b.id); if (!on && has) r.boards = r.boards.filter(x => x !== b.id); }); TL.save(); });
        $("[data-addnew]", el).onclick = async () => { await addRefs({ board: b.id }); };
        $("[data-rename]", el).onclick = () => renameBoard(b);
        $("[data-del]", el).onclick = () => TL.confirmBox(`<b>Delete “${esc(b.name)}”?</b><p class='lede'>The images stay in your library.</p>`, "Delete board", () => { S().boards = S().boards.filter(x => x.id !== b.id); S().refs.forEach(r => r.boards = (r.boards || []).filter(x => x !== b.id)); TL.save(); TL.closeSheet(); });
        $("[data-ask]", el).onclick = () => TL.askClaude({
          title: "Directions from your board",
          note: "Tip: in Claude, attach a few of the board's images (or a screenshot of this board) with the prompt.",
          prompt: `I'm a transportation design student building a moodboard called "${b.name}"${b.desc ? " (" + b.desc + ")" : ""}. It has ${refs.length} images.\nMost common tags: ${tags.join(", ") || "none yet"}.\nMain colours: ${pal.join(", ") || "n/a"}.\nReferences: ${refs.slice(0, 20).map(r => [r.title, r.brand, r.year, r.category].filter(Boolean).join(" ")).filter(Boolean).join("; ") || "untitled images"}.\n\nPlease:\n1. Summarise the visual themes in 3–4 keywords.\n2. Suggest 3 distinct design directions this board could lead to, each with a one-line story.\n3. Suggest what's missing from the board (types of references to add).\n4. Propose a CMF palette with names for the main colours.`
        });
      }
    };
  }, { full: true });
}
TL.openBoard = openBoard;
function renameBoard(b) {
  TL.openSheet(() => ({
    title: "Rename board",
    body: `<label class="field"><span>Name</span><input class="input" id="rbN" value="${esc(b.name)}"></label><label class="field"><span>Description</span><textarea class="textarea" id="rbD">${esc(b.desc || "")}</textarea></label>`,
    foot: `<button class="btn grow" data-ok>Save</button>`,
    bind: el => { $("[data-ok]", el).onclick = () => { const n = $("#rbN", el).value.trim(); if (!n) return; b.name = n; b.desc = $("#rbD", el).value.trim(); TL.save(); TL.closeSheet(); }; }
  }));
}
function dist(a, b) { const p = h => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16)); const x = p(a), y = p(b); return Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]); }

/* ---------- multi-select picker (used by boards & projects) ---------- */
function pickRefs(selected, onDone) {
  let sel = selected.slice(), pq = "";
  TL.openSheet(() => {
    const list = S().refs.filter(r => !pq || norm([r.title, r.brand, r.year, r.category, (r.tags || []).join(" ")].join(" ")).includes(norm(pq)));
    return {
      title: "Choose from library",
      body: S().refs.length ? `<label class="search">${icon("search")}<input class="input" id="pkq" type="search" placeholder="Search" value="${esc(pq)}"></label>
        <div class="masonry">${list.map(r => tile(r, sel.includes(r.id))).join("")}</div>` : `<div class="empty"><b>Your library is empty</b><span>Add images first.</span></div>`,
      foot: `<span class="mono grow">${sel.length} selected</span><button class="btn" data-ok>Done</button>`,
      bind: el => {
        const i = $("#pkq", el); if (i) i.onchange = () => { pq = i.value; TL.refreshSheet(); };
        $$("[data-ref]", el).forEach(x => x.onclick = () => { const id = x.dataset.ref; sel = sel.includes(id) ? sel.filter(y => y !== id) : sel.concat(id); x.classList.toggle("sel"); x.querySelector(".tick").textContent = sel.includes(id) ? "✓" : ""; $(".mono.grow", el).textContent = sel.length + " selected"; });
        $("[data-ok]", el).onclick = () => { onDone(sel); TL.closeSheet(); };
      }
    };
  }, { full: true });
}
TL.pickRefs = pickRefs;
})();
/* Tapeline: Projects (briefs, phases, tasks, deadlines, references, review prep) */
"use strict";
(function () {
const TL = window.TL, D = TL.D, { $, $$, esc, uid, today, icon, imgTag, debounce, fmtDate, daysUntil, relDays, toast } = TL;
const S = () => TL.S();
let showArchived = false;

const progress = p => { const t = p.tasks || []; return t.length ? Math.round(t.filter(x => x.done).length / t.length * 100) : 0; };
const coverId = p => { if (p.cover) return p.cover; const r = S().refs.find(x => (p.refs || []).includes(x.id)); return r ? r.thumb : ""; };
const initials = n => String(n).replace(/^Example:\s*/, "").split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
const dueTag = d => { if (!d) return ""; const n = daysUntil(d); return `<span class="tag ${n < 0 ? "bad" : n <= 3 ? "warn" : ""} due">${n < 0 ? "overdue " + Math.abs(n) + "d" : relDays(n)}</span>`; };
const nextTask = p => (p.tasks || []).filter(t => !t.done).sort((a, b) => (a.due || "9").localeCompare(b.due || "9"))[0];

function card(p) {
  const pr = progress(p), nt = nextTask(p);
  return `<button class="card tap" data-proj="${p.id}"><div class="proj">
    <div class="cover">${coverId(p) ? imgTag(coverId(p), "") : esc(initials(p.name))}</div>
    <div class="stack-sm" style="gap:5px;min-width:0">
      <div class="between"><b style="font-size:16px;line-height:1.25;min-width:0;overflow-wrap:anywhere">${esc(p.name)}</b>${p.deadline ? dueTag(p.deadline) : ""}</div>
      <div class="row" style="gap:6px"><span class="tag clay">${esc(D.PHASES[p.phase || 0])}</span><span class="mono muted">${esc(p.type || "")}${p.deadline ? " · due " + esc(fmtDate(p.deadline)) : ""}</span></div>
      <div class="bar"><i style="width:${pr}%"></i></div>
      <span class="lede" style="font-size:13px">${nt ? "Next: " + esc(nt.t) : (p.tasks || []).length ? "All tasks done" : "No tasks yet"}</span>
    </div></div></button>`;
}

TL.views.projects = function () {
  const ps = S().projects, act = ps.filter(p => !p.archived).sort((a, b) => (a.deadline || "9999").localeCompare(b.deadline || "9999")), arc = ps.filter(p => p.archived);
  const html = `<div class="stack">
    ${act.length ? act.map(card).join("") : `<div class="empty">${TL.emptyArt()}<b>No active projects</b><span>Track each brief from research to presentation, with deadlines, tasks and the references you collect.</span><button class="btn" id="pNew">${icon("plus")}New project</button></div>`}
    ${arc.length ? `<button class="link-btn" id="pArc">${showArchived ? "Hide" : "Show"} finished projects (${arc.length})</button>${showArchived ? arc.map(card).join("") : ""}` : ""}
  </div>`;
  return {
    eyebrow: act.length + " active" + (arc.length ? " · " + arc.length + " finished" : ""), title: "Projects", html,
    fab: { label: "New project", fn: newProject },
    bind: el => {
      $$("[data-proj]", el).forEach(b => b.onclick = () => openProject(b.dataset.proj));
      const n = $("#pNew", el); if (n) n.onclick = newProject;
      const a = $("#pArc", el); if (a) a.onclick = () => { showArchived = !showArchived; TL.render(); };
    }
  };
};

function newProject() {
  const f = { name: "", type: D.PROJECT_TYPES[0], client: "", start: today(), deadline: "", brief: "" };
  TL.openSheet(() => ({
    title: "New project",
    body: `<label class="field"><span>Project name</span><input class="input" id="npName" placeholder="e.g. Autonomous city shuttle" value="${esc(f.name)}"></label>
      <div class="field"><span>Type</span><div class="chips wrapy">${D.PROJECT_TYPES.map(t => `<button class="chip" data-t="${esc(t)}" aria-pressed="${f.type === t}">${esc(t)}</button>`).join("")}</div></div>
      <label class="field"><span>Course, tutor or client</span><input class="input" id="npClient" value="${esc(f.client)}" placeholder="e.g. Exterior Design II"></label>
      <div class="grid2"><label class="field"><span>Start</span><input class="input" type="date" id="npStart" value="${esc(f.start)}"></label><label class="field"><span>Deadline</span><input class="input" type="date" id="npDead" value="${esc(f.deadline)}"></label></div>
      <label class="field"><span>Brief</span><textarea class="textarea" id="npBrief" placeholder="Paste the brief or write the problem in a few lines">${esc(f.brief)}</textarea></label>
      <label class="check" style="border:0"><input type="checkbox" id="npTpl" checked><span class="txt">Add starter tasks for each phase<br><span class="lede">Spread across your dates; edit them anytime.</span></span></label>`,
    foot: `<button class="btn grow" data-ok>Create project</button>`,
    bind: el => {
      const keep = () => { f.name = $("#npName", el).value; f.client = $("#npClient", el).value; f.start = $("#npStart", el).value; f.deadline = $("#npDead", el).value; f.brief = $("#npBrief", el).value; };
      $$("[data-t]", el).forEach(b => b.onclick = () => { keep(); f.type = b.dataset.t; TL.refreshSheet(); });
      $("[data-ok]", el).onclick = () => {
        keep(); if (!f.name.trim()) { toast("Give the project a name"); return; }
        const p = { id: uid(), name: f.name.trim(), type: f.type, client: f.client.trim(), start: f.start || today(), deadline: f.deadline, brief: f.brief.trim(), notes: "", phase: 0, tasks: [], refs: [], review: {}, archived: false, created: today() };
        if ($("#npTpl", el).checked) p.tasks = starterTasks(p);
        S().projects.push(p); TL.save(); TL.closeAll(); TL.go("projects"); openProject(p.id);
      };
    }
  }));
}
TL.newProject = newProject;
function starterTasks(p) {
  const s = TL.parseISO(p.start || today()), e = p.deadline ? TL.parseISO(p.deadline) : new Date(s.getTime() + 28 * 864e5);
  const span = Math.max(7, Math.round((e - s) / 864e5));
  const plan = [[0, "Research boards: users, context, benchmarks", .12], [1, "Thumbnails: 50+ quick ideas", .25], [1, "Pick 3 directions with tutor feedback", .32], [2, "Develop side views and 3/4 sketches", .48], [3, "Refine the chosen design and details", .6], [4, "3D model or package check", .75], [5, "Final renders and CMF board", .88], [6, "Presentation layout and rehearsal", .98]];
  return plan.map(([ph, t, f]) => ({ id: uid(), phase: ph, t, due: TL.iso(new Date(s.getTime() + Math.round(span * f) * 864e5)), done: false }));
}

let ptab = "tasks";
function openProject(id) {
  ptab = "tasks";
  TL.openSheet(() => {
    const p = S().projects.find(x => x.id === id);
    if (!p) return { title: "Deleted", body: `<p class="lede">This project was deleted.</p>` };
    const pr = progress(p), refs = S().refs.filter(r => (p.refs || []).includes(r.id));
    const nDays = p.deadline ? daysUntil(p.deadline) : null;
    const tabs = [["tasks", "Tasks"], ["refs", "References"], ["brief", "Brief & notes"], ["review", "Review prep"]];
    let body = `<div class="stack-sm">
        <div class="row">${p.example ? '<span class="tag warn">example</span>' : ""}<span class="tag">${esc(p.type)}</span>${p.client ? `<span class="mono muted">${esc(p.client)}</span>` : ""}</div>
        <div class="dims">
          <div class="dim"><b>${nDays === null ? "–" : nDays < 0 ? "late" : nDays}</b><div class="rule"><i></i></div><span class="label">${nDays === null ? "no deadline" : nDays < 0 ? Math.abs(nDays) + " days over" : "days left"}</span></div>
          <div class="dim"><b>${pr}%</b><div class="rule"><i></i></div><span class="label">tasks done</span></div>
          <div class="dim"><b>${refs.length}</b><div class="rule"><i></i></div><span class="label">references</span></div>
        </div>
      </div>
      <div class="stack-sm"><span class="label">Phase · tap to update</span>
        <div class="phases">${D.PHASES.map((ph, i) => `<button class="phase ${i < (p.phase || 0) ? "done" : i === (p.phase || 0) ? "cur" : ""}" data-ph="${i}"><span class="dot">${i < (p.phase || 0) ? "✓" : ""}</span>${esc(ph)}</button>`).join("")}</div></div>
      <div class="seg">${tabs.map(([k, l]) => `<button data-tab="${k}" aria-pressed="${ptab === k}">${l}</button>`).join("")}</div>`;
    if (ptab === "tasks") {
      const groups = D.PHASES.map((ph, i) => ({ ph, i, t: (p.tasks || []).filter(t => t.phase === i).sort((a, b) => (a.done - b.done) || (a.due || "9").localeCompare(b.due || "9")) })).filter(g => g.t.length);
      body += `${groups.length ? groups.map(g => `<div class="card flat" style="padding:4px 14px"><div class="label" style="padding-top:10px">${esc(g.ph)}</div>${g.t.map(t => `<div class="check ${t.done ? "done" : ""}"><input type="checkbox" data-tk="${t.id}" ${t.done ? "checked" : ""} aria-label="Done"><span class="txt">${esc(t.t)}${t.due ? `<br><span class="mono muted">${esc(fmtDate(t.due))}</span> ${t.done ? "" : dueTag(t.due)}` : ""}</span><button class="x" data-tdel="${t.id}" aria-label="Delete task">×</button></div>`).join("")}</div>`).join("") : `<div class="empty"><b>No tasks yet</b><span>Add the steps you need to reach the deadline.</span></div>`}
        <div class="card stack-sm"><span class="label">Add task</span>
          <input class="input" id="tkT" placeholder="e.g. Side view with tutor feedback">
          <div class="grid2"><select class="select" id="tkP" aria-label="Phase">${D.PHASES.map((ph, i) => `<option value="${i}" ${i === (p.phase || 0) ? "selected" : ""}>${esc(ph)}</option>`).join("")}</select><input class="input" type="date" id="tkD" aria-label="Due date"></div>
          <button class="btn small" id="tkAdd">${icon("plus")}Add task</button></div>`;
    } else if (ptab === "refs") {
      body += `<div class="row"><button class="btn small soft" data-pick>Add from library</button><button class="btn small soft" data-new>${icon("camera")}New photos</button></div>
        ${refs.length ? `<div class="masonry">${refs.map(r => TL.refTile(r)).join("")}</div>` : `<div class="empty"><b>No references yet</b><span>Link images from your library, or add new photos straight into this project.</span></div>`}`;
    } else if (ptab === "brief") {
      body += `<label class="field"><span>Project name</span><input class="input" id="pbName" value="${esc(p.name)}"></label>
        <div class="grid2"><label class="field"><span>Start</span><input class="input" type="date" id="pbStart" value="${esc(p.start || "")}"></label><label class="field"><span>Deadline</span><input class="input" type="date" id="pbDead" value="${esc(p.deadline || "")}"></label></div>
        <label class="field"><span>Course, tutor or client</span><input class="input" id="pbClient" value="${esc(p.client || "")}"></label>
        <label class="field"><span>Brief</span><textarea class="textarea" id="pbBrief" style="min-height:140px">${esc(p.brief || "")}</textarea></label>
        <label class="field"><span>Notes & tutor feedback</span><textarea class="textarea" id="pbNotes" style="min-height:160px" placeholder="Write feedback from each review here">${esc(p.notes || "")}</textarea></label>
        <span class="mono muted">Saved automatically</span>`;
    } else {
      const done = D.REVIEW_CHECK.filter((_, i) => (p.review || {})[i]).length;
      body += `<div class="between"><span class="lede">Before each review or final presentation.</span><span class="mono">${done}/${D.REVIEW_CHECK.length}</span></div>
        <div class="bar blue"><i style="width:${Math.round(done / D.REVIEW_CHECK.length * 100)}%"></i></div>
        <div class="card flat" style="padding:4px 14px">${D.REVIEW_CHECK.map((c, i) => `<label class="check ${(p.review || {})[i] ? "done" : ""}"><input type="checkbox" data-rv="${i}" ${(p.review || {})[i] ? "checked" : ""}><span class="txt">${esc(c)}</span></label>`).join("")}</div>`;
    }
    body += `<div class="row" style="margin-top:4px"><button class="btn small ghost" data-arch>${p.archived ? "Move back to active" : "Mark as finished"}</button><button class="btn small danger" data-del>${icon("trash")}Delete</button></div>`;
    return {
      title: esc(p.name), body,
      foot: `<button class="btn grow" data-ask>${icon("claude")}Plan with Claude</button>`,
      bind: el => {
        $$("[data-ph]", el).forEach(b => b.onclick = () => { p.phase = +b.dataset.ph; TL.save(); TL.refreshSheet(); });
        $$("[data-tab]", el).forEach(b => b.onclick = () => { ptab = b.dataset.tab; TL.refreshSheet(); });
        $$("[data-tk]", el).forEach(c => c.onchange = () => { const t = p.tasks.find(x => x.id === c.dataset.tk); t.done = c.checked; TL.save(); TL.refreshSheet(); if (t.done && p.tasks.every(x => x.done)) toast("All tasks done. Nice work."); });
        $$("[data-tdel]", el).forEach(b => b.onclick = () => { p.tasks = p.tasks.filter(x => x.id !== b.dataset.tdel); TL.save(); TL.refreshSheet(); });
        const add = $("#tkAdd", el); if (add) add.onclick = () => { const t = $("#tkT", el).value.trim(); if (!t) { toast("Write the task first"); return; } p.tasks = p.tasks || []; p.tasks.push({ id: uid(), t, phase: +$("#tkP", el).value, due: $("#tkD", el).value, done: false }); TL.save(); TL.refreshSheet(); };
        const pk = $("[data-pick]", el); if (pk) pk.onclick = () => TL.pickRefs(p.refs || [], sel => { p.refs = sel; TL.save(); });
        const nw = $("[data-new]", el); if (nw) nw.onclick = async () => { const a = await TL.addRefs({ project: p.id }); if (a.length) { p.refs = (p.refs || []).concat(a.map(r => r.id)); TL.save(); } };
        $$("[data-ref]", el).forEach(b => b.onclick = () => TL.openRef(b.dataset.ref));
        const bind = (sel, key, ev = "oninput") => { const i = $(sel, el); if (i) i[ev] = debounce(() => { p[key] = i.value; TL.save(); }, 250); };
        bind("#pbName", "name"); bind("#pbClient", "client"); bind("#pbBrief", "brief"); bind("#pbNotes", "notes");
        const ps = $("#pbStart", el); if (ps) ps.onchange = () => { p.start = ps.value; TL.save(); };
        const pd = $("#pbDead", el); if (pd) pd.onchange = () => { p.deadline = pd.value; TL.save(); };
        $$("[data-rv]", el).forEach(c => c.onchange = () => { p.review = p.review || {}; p.review[c.dataset.rv] = c.checked; TL.save(); TL.refreshSheet(); });
        $("[data-arch]", el).onclick = () => { p.archived = !p.archived; TL.save(); toast(p.archived ? "Moved to finished" : "Back in active"); TL.closeSheet(); };
        $("[data-del]", el).onclick = () => TL.confirmBox(`<b>Delete “${esc(p.name)}”?</b><p class='lede'>Tasks and notes are deleted. Linked images stay in your library.</p>`, "Delete project", () => { S().projects = S().projects.filter(x => x.id !== p.id); TL.save(); TL.closeSheet(); toast("Project deleted"); });
        $("[data-ask]", el).onclick = () => {
          const open = (p.tasks || []).filter(t => !t.done).map(t => `- ${t.t} (${D.PHASES[t.phase]}${t.due ? ", due " + fmtDate(t.due, true) : ""})`).join("\n");
          const doneT = (p.tasks || []).filter(t => t.done).map(t => "- " + t.t).join("\n");
          TL.askClaude({
            title: "Plan this project",
            prompt: `I'm a transportation design student. Help me plan this project.\n\nProject: ${p.name} (${p.type}${p.client ? ", " + p.client : ""})\nToday: ${fmtDate(today(), true)}\nDeadline: ${p.deadline ? fmtDate(p.deadline, true) + " (" + relDays(daysUntil(p.deadline)) + ")" : "not set"}\nCurrent phase: ${D.PHASES[p.phase || 0]}\n\nBrief:\n${p.brief || "(no brief written yet)"}\n\nDone:\n${doneT || "- nothing yet"}\n\nStill to do:\n${open || "- no tasks listed"}\n\n${p.notes ? "Notes and tutor feedback:\n" + p.notes + "\n\n" : ""}Please give me:\n1. A realistic day-by-day or week-by-week plan to the deadline.\n2. What I should show at the next review.\n3. The biggest risks and how to avoid them.\n4. Three research questions or references that would make the concept stronger.`
          });
        };
      }
    };
  }, { full: true });
}
TL.openProject = openProject;
})();
/* Tapeline: Practice (drills, timer, session log, streaks, progress photos) */
"use strict";
(function () {
const TL = window.TL, D = TL.D, { $, $$, esc, uid, today, icon, imgTag, fmtDate, toast, iso, drillIcon } = TL;
const S = () => TL.S();
let dcat = "All";
const lvl = n => `<span class="lvl" aria-label="Level ${n} of 3">${[1, 2, 3].map(i => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;
const drill = id => D.DRILLS.find(d => d.id === id);

function heatmap(weeks = 16) {
  const m = TL.sessionsByDay(), goal = S().profile.goal || 20, cells = [];
  const end = new Date(); const dow = (end.getDay() + 6) % 7;
  const start = new Date(end); start.setDate(end.getDate() - dow - (weeks - 1) * 7);
  for (let i = 0; i < weeks * 7; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    const k = iso(d), v = m[k] || 0, fut = d > end;
    const l = v === 0 ? "" : v < goal / 2 ? "l1" : v < goal ? "l2" : "l3";
    cells.push(`<i class="${l} ${k === today() ? "today" : ""}" title="${k}: ${v} min" style="${fut ? "opacity:.25" : ""}"></i>`);
  }
  return `<div class="heat" role="img" aria-label="Practice minutes, last ${weeks} weeks">${cells.join("")}</div>`;
}

TL.views.practice = function () {
  const ss = S().sessions, st = TL.streak(), wk = TL.weekMinutes(), plan = TL.sessionPlan();
  const total = ss.reduce((a, s) => a + (s.min || 0), 0);
  const photos = ss.filter(s => s.thumb).sort((a, b) => (b.at || "").localeCompare(a.at || ""));
  const list = D.DRILLS.filter(d => dcat === "All" || d.cat === dcat);
  const html = `<div class="stack">
    <div class="dims">
      <div class="dim"><b>${st}</b><div class="rule"><i></i></div><span class="label">day streak</span></div>
      <div class="dim"><b>${wk}</b><div class="rule"><i></i></div><span class="label">min this week</span></div>
      <div class="dim"><b>${total < 120 ? total : Math.round(total / 6) / 10}</b><div class="rule"><i></i></div><span class="label">${total < 120 ? "min total" : "hours total"}</span></div>
    </div>
    <div class="card stack-sm"><div class="between"><span class="label">Last 16 weeks</span><span class="mono muted">goal ${S().profile.goal} min/day</span></div>${heatmap()}</div>
    <div class="hero-card"><div class="grid-bg"></div><div class="content">
      <div class="label">Today's session · ${plan.reduce((a, d) => a + d.min, 0)} min</div>
      ${plan.map((d, i) => `<button class="between" data-drill="${d.id}" style="border:0;background:none;color:inherit;text-align:left;padding:4px 0;width:100%"><span><span class="mono" style="opacity:.6">${i + 1} </span><b>${esc(d.name)}</b></span><span class="mono" style="opacity:.7">${d.min}′</span></button>`).join("")}
      <div class="row"><button class="btn" id="prGo">${icon("play")}Start session</button><button class="btn ghost small" id="prLog">Log without timer</button></div>
    </div></div>
    ${photos.length ? `<section class="stack-sm"><div class="sec-head"><h2 class="h">Your sketches</h2><span class="mono muted">${photos.length}</span></div>
      <div class="gallery">${photos.slice(0, 12).map(s => `<button data-sess="${s.id}">${imgTag(s.thumb, "")}<span class="d">${esc(fmtDate(s.date))}</span></button>`).join("")}</div></section>` : ""}
    <section class="stack-sm"><h2 class="h">Drills</h2>
      <div class="chips">${["All"].concat(D.DRILL_CATS).map(c => `<button class="chip" data-dc="${esc(c)}" aria-pressed="${dcat === c}">${esc(c)}</button>`).join("")}</div>
      ${list.map(d => { const n = ss.filter(s => s.drill === d.id).length; return `<button class="card tap drill" data-drill="${d.id}"><span class="badge">${drillIcon(d.cat)}</span><span class="stack-sm" style="gap:2px;min-width:0"><b style="font-weight:600">${esc(d.name)}</b><span class="mono muted">${esc(d.cat)} · ${lvl(d.level)}${n ? " · done " + n + "×" : ""}</span></span><span class="mono">${d.min}′</span></button>`; }).join("")}
    </section>
  </div>`;
  return {
    eyebrow: ss.length + " sessions logged", title: "Practice", html,
    fab: { label: "Log a session", fn: () => logSession({}) },
    bind: el => {
      $$("[data-drill]", el).forEach(b => b.onclick = () => openDrill(b.dataset.drill));
      $$("[data-dc]", el).forEach(b => b.onclick = () => { dcat = b.dataset.dc; TL.render(); });
      $$("[data-sess]", el).forEach(b => b.onclick = () => openSession(b.dataset.sess));
      $("#prGo", el).onclick = () => startTimer(plan[0], plan.slice(1));
      $("#prLog", el).onclick = () => logSession({});
    }
  };
};

function openDrill(id) {
  TL.openSheet(() => {
    const d = drill(id); const ss = S().sessions.filter(s => s.drill === id).sort((a, b) => (a.at || "").localeCompare(b.at || ""));
    const ph = ss.filter(s => s.thumb);
    return {
      title: esc(d.name),
      body: `<div class="row"><span class="tag blue">${esc(d.cat)}</span><span class="tag">${d.min} min</span>${lvl(d.level)}</div>
        <p style="margin:0;font-size:16px">${esc(d.goal)}</p>
        <ol class="steps">${d.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        <div class="card flat"><span class="label">Studio tip</span><p style="margin:4px 0 0">${esc(d.tip)}</p></div>
        ${ph.length >= 2 ? `<div class="stack-sm"><span class="label">First vs latest</span><div class="compare"><figure>${imgTag(ph[0].img, "First")}<figcaption class="mono muted">${esc(fmtDate(ph[0].date, true))}</figcaption></figure><figure>${imgTag(ph[ph.length - 1].img, "Latest")}<figcaption class="mono muted">${esc(fmtDate(ph[ph.length - 1].date, true))}</figcaption></figure></div></div>` : ""}
        ${ss.length ? `<div class="stack-sm"><span class="label">History · ${ss.length} session${ss.length > 1 ? "s" : ""}</span>${ph.length ? `<div class="gallery">${ph.slice().reverse().map(s => `<button data-sess="${s.id}">${imgTag(s.thumb, "")}<span class="d">${esc(fmtDate(s.date))}</span></button>`).join("")}</div>` : ""}<span class="lede">${ss.slice(-5).reverse().map(s => esc(fmtDate(s.date)) + " · " + s.min + " min" + (s.rating ? " · " + "★".repeat(s.rating) : "")).join("<br>")}</span></div>` : `<p class="lede">You haven't done this drill yet.</p>`}`,
      foot: `<button class="btn grow" data-start>${icon("play")}Start ${d.min}-min timer</button><button class="btn soft" data-log>Log</button>`,
      bind: el => {
        $("[data-start]", el).onclick = () => startTimer(d);
        $("[data-log]", el).onclick = () => logSession({ drill: d.id, min: d.min });
        $$("[data-sess]", el).forEach(b => b.onclick = () => openSession(b.dataset.sess));
      }
    };
  });
}
TL.openDrill = openDrill;

/* ---------- timer ---------- */
let wake = null, audioCtx = null;
async function keepAwake() { try { if ("wakeLock" in navigator) wake = await navigator.wakeLock.request("screen"); } catch (e) { wake = null; } }
function chime() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    [0, .18, .36].forEach((t, i) => { const o = audioCtx.createOscillator(), g = audioCtx.createGain(); o.type = "sine"; o.frequency.value = [880, 1175, 1568][i]; g.gain.setValueAtTime(.0001, audioCtx.currentTime + t); g.gain.exponentialRampToValueAtTime(.25, audioCtx.currentTime + t + .02); g.gain.exponentialRampToValueAtTime(.0001, audioCtx.currentTime + t + .5); o.connect(g).connect(audioCtx.destination); o.start(audioCtx.currentTime + t); o.stop(audioCtx.currentTime + t + .55); });
  } catch (e) {}
  try { navigator.vibrate && navigator.vibrate([200, 100, 200]); } catch (e) {}
}
function startTimer(d, queue = []) {
  try { audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)(); audioCtx.resume(); } catch (e) {}
  keepAwake();
  let total = d.min * 60, left = total, running = true, endAt = Date.now() + left * 1000, ticked = new Set(), int = null;
  const el = document.createElement("div"); el.className = "timer"; el.setAttribute("role", "dialog"); el.setAttribute("aria-label", "Drill timer");
  const C = 2 * Math.PI * 46;
  const draw = () => {
    const mm = Math.floor(left / 60), ss = left % 60;
    el.innerHTML = `<div class="between"><span class="label">${esc(d.cat)}${queue.length ? " · " + queue.length + " more after this" : ""}</span><button class="icon-btn" data-x aria-label="Stop" style="color:inherit;margin:0">${icon("close")}</button></div>
      <h2 class="title" style="font-size:24px;text-wrap:balance">${esc(d.name)}</h2>
      <div class="ring"><svg viewBox="0 0 100 100"><circle class="bgc" cx="50" cy="50" r="46"/><circle class="fg" cx="50" cy="50" r="46" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - left / total)}"/></svg>
        <div class="clock"><b>${mm}:${String(ss).padStart(2, "0")}</b><span class="label">${left === 0 ? "time's up" : running ? "drawing" : "paused"}</span></div></div>
      <div class="row" style="justify-content:center">${left > 0 ? `<button class="btn ink" data-pp style="background:var(--bg);color:var(--ink)">${icon(running ? "pause" : "play")}${running ? "Pause" : "Resume"}</button><button class="btn ghost small" data-more>+1 min</button>` : ""}<button class="btn" data-done>${left > 0 ? "Finish" : "Log it"}</button></div>
      <ol class="steps">${d.steps.map((s, i) => `<li class="${ticked.has(i) ? "ticked" : ""}" data-st="${i}">${esc(s)}</li>`).join("")}</ol>
      <p class="label" style="text-align:center">Tap a step when you've done it · ${esc(d.tip)}</p>`;
    $("[data-x]", el).onclick = stop;
    const pp = $("[data-pp]", el); if (pp) pp.onclick = () => { running = !running; if (running) endAt = Date.now() + left * 1000; draw(); };
    const mo = $("[data-more]", el); if (mo) mo.onclick = () => { left += 60; total += 60; endAt += 60000; draw(); };
    $("[data-done]", el).onclick = finish;
    $$("[data-st]", el).forEach(li => li.onclick = () => { const i = +li.dataset.st; ticked.has(i) ? ticked.delete(i) : ticked.add(i); li.classList.toggle("ticked"); });
  };
  const tick = () => {
    if (!running || left === 0) return;
    const nl = Math.max(0, Math.round((endAt - Date.now()) / 1000));
    if (nl !== left) { left = nl; const b = $(".clock b", el), fg = $(".fg", el); if (b) b.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"); if (fg) fg.setAttribute("stroke-dashoffset", C * (1 - left / total)); }
    if (left === 0) { chime(); draw(); }
  };
  function cleanup() { clearInterval(int); el.remove(); try { wake && wake.release(); } catch (e) {} wake = null; document.removeEventListener("visibilitychange", vis); }
  function stop() { TL.confirmBox("<b>Stop this drill?</b><p class='lede'>Nothing will be logged.</p>", "Stop", cleanup); }
  function finish() {
    const mins = Math.max(1, Math.round((total - left) / 60));
    cleanup();
    logSession({ drill: d.id, min: mins }, () => { if (queue.length) setTimeout(() => startTimer(queue[0], queue.slice(1)), 300); });
  }
  const vis = () => { if (document.visibilityState === "visible") { keepAwake(); tick(); } };
  document.addEventListener("visibilitychange", vis);
  document.body.appendChild(el); draw(); int = setInterval(tick, 500);
}
TL.startTimer = startTimer;

/* ---------- logging ---------- */
function logSession(pre, after) {
  const f = { drill: pre.drill || "", min: pre.min || 15, rating: 0, note: "", date: today(), photo: null };
  TL.openSheet(() => {
    const d = drill(f.drill);
    return {
      title: "Log session",
      body: `<div class="field"><span>Drill</span><select class="select" id="lsD"><option value="">Free sketching</option>${D.DRILL_CATS.map(c => `<optgroup label="${esc(c)}">${D.DRILLS.filter(x => x.cat === c).map(x => `<option value="${x.id}" ${x.id === f.drill ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</optgroup>`).join("")}</select></div>
        <div class="grid2"><label class="field"><span>Minutes</span><input class="input" type="number" min="1" max="600" inputmode="numeric" id="lsM" value="${f.min}"></label><label class="field"><span>Date</span><input class="input" type="date" id="lsDt" value="${f.date}" max="${today()}"></label></div>
        <div class="field"><span>Photo of your sketch</span>${f.photo ? `<div class="compare" style="grid-template-columns:1fr"><figure>${imgTag(f.photo.thumb, "Your sketch")}</figure></div><button class="btn small soft" id="lsPh">Change photo</button>` : `<button class="btn soft" id="lsPh">${icon("camera")}Add photo</button><span class="lede">Photos build your progress gallery and let Claude critique your work.</span>`}</div>
        <div class="field"><span>How did it go?</span><div class="stars">${[1, 2, 3, 4, 5].map(n => `<button data-r="${n}" aria-pressed="${f.rating >= n}" aria-label="${n} out of 5">★</button>`).join("")}</div></div>
        <label class="field"><span>Notes</span><textarea class="textarea" id="lsN" placeholder="What felt hard? What to try next time?">${esc(f.note)}</textarea></label>`,
      foot: `<button class="btn grow" data-ok>Save session</button>`,
      bind: el => {
        const keep = () => { f.drill = $("#lsD", el).value; f.min = Math.max(1, +$("#lsM", el).value || 1); f.date = $("#lsDt", el).value || today(); f.note = $("#lsN", el).value; };
        $$("[data-r]", el).forEach(b => b.onclick = () => { keep(); f.rating = +b.dataset.r; TL.refreshSheet(); });
        $("#lsPh", el).onclick = async () => { keep(); const fs = await TL.pickFiles({ multiple: false }); if (!fs.length) return; toast("Adding photo…"); try { f.photo = await TL.importImage(fs[0]); TL.refreshSheet(); } catch (e) { toast("That photo couldn't be read."); } };
        $("[data-ok]", el).onclick = () => {
          keep();
          const s = { id: uid(), drill: f.drill, min: f.min, date: f.date, rating: f.rating, note: f.note.trim(), at: new Date().toISOString() };
          if (f.photo) { s.img = f.photo.img; s.thumb = f.photo.thumb; }
          S().sessions.push(s); TL.save(); TL.closeSheet();
          const st = TL.streak();
          toast(st > 1 ? `Logged. ${st}-day streak.` : "Session logged", s.img ? { label: "Get critique", fn: () => critique(s) } : null);
          if (after) after(s);
        };
      }
    };
  });
}
TL.logSession = logSession;

function critique(s) {
  const d = drill(s.drill);
  TL.askClaude({
    title: "Critique this sketch", blobId: s.img,
    prompt: `I'm a transportation design student practising sketching. Please critique my sketch (photo attached).\n\nExercise: ${d ? d.name + " — goal: " + d.goal : "free sketching"}\nTime spent: ${s.min} min\nMy self-rating: ${s.rating ? s.rating + "/5" : "not rated"}\n${s.note ? "My notes: " + s.note + "\n" : ""}\nBe specific and honest, like a studio tutor:\n1. What works.\n2. The 3 biggest issues (perspective, proportion, line quality, ellipses, wheels, stance), with where they are on the page.\n3. One focused exercise for tomorrow to fix the main issue.`
  });
}
function openSession(id) {
  TL.openSheet(() => {
    const s = S().sessions.find(x => x.id === id); if (!s) return { title: "Deleted", body: "" };
    const d = drill(s.drill);
    return {
      title: esc(d ? d.name : "Free sketching"),
      body: `${s.img ? `<button class="detail-img" data-view>${imgTag(s.img, "Sketch")}</button>` : ""}
        <dl class="kv"><dt>Date</dt><dd>${esc(fmtDate(s.date, true))}</dd><dt>Time</dt><dd>${s.min} min</dd><dt>Rating</dt><dd>${s.rating ? "★".repeat(s.rating) + "☆".repeat(5 - s.rating) : "–"}</dd></dl>
        ${s.note ? `<div class="card flat"><span class="label">Notes</span><p style="margin:4px 0 0;white-space:pre-wrap">${esc(s.note)}</p></div>` : ""}
        <button class="btn danger" data-del>${icon("trash")}Delete session</button>`,
      foot: s.img ? `<button class="btn grow" data-ask>${icon("claude")}Get a critique from Claude</button>` : "",
      bind: el => {
        const v = $("[data-view]", el); if (v) v.onclick = () => TL.viewImage(s.img);
        const a = $("[data-ask]", el); if (a) a.onclick = () => critique(s);
        $("[data-del]", el).onclick = () => TL.confirmBox("<b>Delete this session?</b><p class='lede'>Its photo is deleted too.</p>", "Delete", async () => { S().sessions = S().sessions.filter(x => x.id !== s.id); if (s.img) { await TL.delBlob(s.img); await TL.delBlob(s.thumb); } TL.save(); TL.closeSheet(); });
      }
    };
  });
}
})();
/* Tapeline: Explore (proportions tool, events, community, resources, glossary) */
"use strict";
(function () {
const TL = window.TL, D = TL.D, { $, $$, esc, uid, today, icon, fmtDate, daysUntil, relDays, parseISO, MONTHS, toast, debounce, norm } = TL;
const S = () => TL.S();
TL.exploreTab = "proportions";
const SUBS = [["proportions", "Proportions"], ["events", "Events"], ["community", "Community"], ["resources", "Resources"], ["glossary", "Glossary"]];

/* ---------- proportions ---------- */
const prop = { seg: "hatch", ghost: "", v: null };
function segVals(id) { const s = D.SEGMENTS.find(x => x.id === id); return { L: s.L, H: s.H, WB: s.WB, FO: s.FO, D: s.D, glass: s.glass, dta: Math.round(s.WB * (id === "super" ? .42 : id === "coupe" ? .26 : id === "sedan" || id === "lsuv" ? .2 : .14)), type: id }; }
function shape(v) {
  // returns path strings in mm space (x from front, y up from ground)
  const RO = v.L - v.WB - v.FO, gc = v.type === "lsuv" || v.type === "csuv" ? 190 : v.type === "super" ? 100 : v.type === "coupe" ? 115 : 140;
  const belt = gc + (v.H - gc) * (1 - v.glass), roof = v.H;
  const fx = 0, rx = v.L, fa = v.FO, ra = v.FO + v.WB;
  const cowlX = fa + v.dta, noseH = gc + (belt - gc) * (v.type === "super" ? .45 : v.type === "mpv" || v.type === "lsuv" ? .9 : .72);
  const isFast = v.type === "coupe" || v.type === "super", isBox = v.type === "mpv" || v.type === "lsuv" || v.type === "csuv", isNotch = v.type === "sedan";
  const wsTopX = cowlX + (roof - belt) * (isBox ? .9 : isFast ? 1.9 : 1.45);
  const roofEndX = isFast ? ra + RO * .1 : isNotch ? ra - v.WB * .08 : isBox ? rx - RO * .25 : rx - RO * .45;
  const tailTopY = isFast ? belt + (roof - belt) * .05 : isNotch ? belt + 30 : isBox ? roof - 60 : roof - 120;
  const tailX = rx;
  const body = [
    `M ${fx + 40} ${gc}`, `L ${fx + 10} ${gc + 60}`, `Q ${fx} ${noseH - 40} ${fx + 30} ${noseH}`,
    `Q ${cowlX * .5} ${belt - (belt - noseH) * .25} ${cowlX} ${belt}`,
    `L ${wsTopX} ${roof}`,
    `Q ${(wsTopX + roofEndX) / 2} ${roof + 25} ${roofEndX} ${roof - (isFast ? 40 : 0)}`,
    isNotch ? `L ${rx - RO * .35} ${belt + 40} L ${tailX - 15} ${belt + 30}` : `Q ${tailX - RO * .1} ${(roof + tailTopY) / 2} ${tailX - 10} ${tailTopY}`,
    `Q ${tailX + 5} ${(tailTopY + gc) / 2} ${tailX - 30} ${gc + 40}`, `L ${tailX - 60} ${gc}`, "Z"
  ].join(" ");
  const gIn = 45;
  const glass = [`M ${cowlX + gIn} ${belt + 20}`, `L ${wsTopX + gIn * .3} ${roof - 35}`, `L ${Math.min(roofEndX, rx - 120) - gIn} ${roof - 35 - (isFast ? 35 : 0)}`,
    isNotch ? `L ${rx - RO * .5} ${belt + 20}` : isFast ? `L ${Math.min(roofEndX + RO * .25, rx - 150)} ${belt + 20}` : `L ${tailX - RO * .35} ${belt + 20}`, "Z"].join(" ");
  return { body, glass, gc, belt, roof, RO, fa, ra };
}
function propSVG(v, g) {
  const W = 420, Hh = 214, pad = 22, scale = Math.min((W - pad * 2 - 6) / 5700, (Hh - 82) / 2000);
  const X = x => pad + x * scale, Y = y => Hh - 58 - y * scale;
  const tr = (p) => p.replace(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (m, a, b) => `${X(+a).toFixed(1)} ${Y(+b).toFixed(1)}`);
  const s = shape(v), gs = g ? shape(g) : null;
  const wheel = (cx, d) => `<circle class="wheel" cx="${X(cx).toFixed(1)}" cy="${Y(d / 2).toFixed(1)}" r="${(d / 2 * scale).toFixed(1)}"/><circle class="rim" cx="${X(cx).toFixed(1)}" cy="${Y(d / 2).toFixed(1)}" r="${(d / 2 * scale * .62).toFixed(1)}"/><circle class="hub" cx="${X(cx).toFixed(1)}" cy="${Y(d / 2).toFixed(1)}" r="${(d * scale * .06).toFixed(1)}"/>`;
  const dim = (x1, x2, y, label) => `<line class="dimline" x1="${X(x1)}" y1="${y}" x2="${X(x2)}" y2="${y}"/><line class="dimline" x1="${X(x1)}" y1="${y - 5}" x2="${X(x1)}" y2="${y + 5}"/><line class="dimline" x1="${X(x2)}" y1="${y - 5}" x2="${X(x2)}" y2="${y + 5}"/><text class="dimtxt" x="${(X(x1) + X(x2)) / 2}" y="${y - 5}" text-anchor="middle">${label}</text>`;
  const gy = Y(0);
  return `<svg viewBox="0 0 ${W} ${Hh}" role="img" aria-label="Side view proportion drawing">
    ${gs ? `<path class="ghost" d="${tr(gs.body)}"/><circle class="ghost" cx="${X(gs.fa)}" cy="${Y(g.D / 2)}" r="${g.D / 2 * scale}"/><circle class="ghost" cx="${X(gs.ra)}" cy="${Y(g.D / 2)}" r="${g.D / 2 * scale}"/>` : ""}
    <path class="body" d="${tr(s.body)}"/><path class="glass" d="${tr(s.glass)}"/>
    <line class="axle" x1="${X(s.fa)}" y1="${Y(v.H + 120)}" x2="${X(s.fa)}" y2="${gy + 4}"/><line class="axle" x1="${X(s.ra)}" y1="${Y(v.H + 120)}" x2="${X(s.ra)}" y2="${gy + 4}"/>
    ${wheel(s.fa, v.D)}${wheel(s.ra, v.D)}
    <line class="ground" x1="${pad - 20}" y1="${gy}" x2="${W - pad + 20}" y2="${gy}"/>
    ${dim(0, s.fa, gy + 18, v.FO)}${dim(s.fa, s.ra, gy + 18, "WB " + v.WB)}${dim(s.ra, v.L, gy + 18, s.RO)}
    ${dim(0, v.L, gy + 42, "L " + v.L)}
    <line class="dimline" x1="${X(v.L) + 8}" y1="${gy}" x2="${X(v.L) + 8}" y2="${Y(v.H)}"/><line class="dimline" x1="${X(v.L) + 3}" y1="${Y(v.H)}" x2="${X(v.L) + 13}" y2="${Y(v.H)}"/><text class="dimtxt" x="${X(v.L) + 10}" y="${Y(v.H) - 5}" text-anchor="end">H ${v.H}</text>
  </svg>`;
}
function metrics(v) {
  const RO = v.L - v.WB - v.FO, hw = v.H / v.D, wbr = v.WB / v.L, ohr = v.FO / Math.max(1, RO);
  const tip = [];
  if (hw < 1.85) tip.push("Very low body for the wheel size: dramatic, supercar-like stance.");
  else if (hw < 2.25) tip.push("Body is about 2 wheels tall: sporty, well-planted proportion.");
  else if (hw > 2.6) tip.push("Body is tall for the wheels: bigger wheels or a lower roof would add stance.");
  if (wbr > .64) tip.push("Long wheelbase with short overhangs: modern EV and premium look.");
  if (v.FO > 950 && v.type !== "super" && v.type !== "coupe") tip.push("Long front overhang can look heavy; try pulling the front wheel forward.");
  if (v.dta / v.WB > .22) tip.push("Long dash-to-axle reads as premium, rear-drive.");
  return { RO, hw, wbr, ohr, tip };
}
function renderProportions() {
  if (!prop.v) prop.v = segVals(prop.seg);
  const v = prop.v, m = metrics(v), g = prop.ghost ? segVals(prop.ghost) : null;
  const sl = (k, label, min, max, step, fmt = x => x + " mm") => `<label class="slider"><span>${label}</span><span class="val" id="v_${k}">${fmt(v[k])}</span><input class="range" type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${v[k]}"></label>`;
  return `<div class="stack">
    <p class="lede">Sketch side-view proportions with real numbers. Start from a typical segment, then push it.</p>
    <div class="chips">${D.SEGMENTS.map(s => `<button class="chip" data-seg="${s.id}" aria-pressed="${prop.seg === s.id}">${esc(s.name)}</button>`).join("")}</div>
    <div class="bp"><div class="legend"><span><i></i>yours</span>${g ? `<span><i class="g"></i>${esc(D.SEGMENTS.find(s => s.id === prop.ghost).name)}</span>` : ""}</div><div id="propSvg">${propSVG(v, g)}</div></div>
    <div class="card stack-sm" id="propMetrics">${metricsHTML(v, m)}</div>
    <div class="card stack">
      ${sl("L", "Length", 3000, 5600, 10)}${sl("WB", "Wheelbase", 2000, 3400, 10)}${sl("FO", "Front overhang", 500, 1300, 10)}
      ${sl("H", "Height", 1050, 2000, 10)}${sl("D", "Wheel + tyre Ø", 520, 900, 5)}${sl("dta", "Dash-to-axle", 150, 1200, 10)}
      ${sl("glass", "Glasshouse share of height", .22, .5, .01, x => Math.round(x * 100) + "%")}
    </div>
    <div class="field"><span>Compare with</span><select class="select" id="ghostSel"><option value="">Nothing</option>${D.SEGMENTS.map(s => `<option value="${s.id}" ${prop.ghost === s.id ? "selected" : ""}>${esc(s.name)} (typical)</option>`).join("")}</select></div>
    <div class="row"><button class="btn soft small" id="prReset">Reset to ${esc(D.SEGMENTS.find(s => s.id === prop.seg).name)}</button><button class="btn small" id="prAsk">${icon("claude")}Review with Claude</button></div>
    <section class="stack-sm"><h2 class="h">Typical dimensions</h2><p class="lede">Rounded, typical values per segment (mm). Real cars vary.</p>
      <div class="table-wrap"><table class="specs"><thead><tr><th>Segment</th><th>Length</th><th>Wheelbase</th><th>Height</th><th>F. overhang</th><th>Wheel Ø</th><th>H ÷ wheel</th></tr></thead><tbody>
      ${D.SEGMENTS.map(s => `<tr><td>${esc(s.name)}</td><td>${s.L}</td><td>${s.WB}</td><td>${s.H}</td><td>${s.FO}</td><td>${s.D}</td><td>${(s.H / s.D).toFixed(2)}</td></tr>`).join("")}</tbody></table></div></section>
  </div>`;
}
function metricsHTML(v, m) {
  return `<div class="metric"><span>Rear overhang</span><b>${m.RO} mm</b></div>
    <div class="metric"><span>Body height in wheels</span><b>${m.hw.toFixed(2)} ×</b></div>
    <div class="metric"><span>Wheelbase share of length</span><b>${Math.round(m.wbr * 100)}%</b></div>
    <div class="metric"><span>Front ÷ rear overhang</span><b>${m.ohr.toFixed(2)}</b></div>
    ${m.RO < 300 ? `<p class="tag bad" style="align-self:flex-start">Rear overhang too short to be real</p>` : ""}
    ${m.tip.map(t => `<p class="lede" style="margin:0">→ ${esc(t)}</p>`).join("")}`;
}
function bindProportions(el) {
  $$("[data-seg]", el).forEach(b => b.onclick = () => { prop.seg = b.dataset.seg; prop.v = segVals(prop.seg); TL.render(); });
  $$("[data-k]", el).forEach(r => r.oninput = () => {
    const k = r.dataset.k; prop.v[k] = +r.value;
    $("#v_" + k, el).textContent = k === "glass" ? Math.round(prop.v[k] * 100) + "%" : prop.v[k] + " mm";
    const g = prop.ghost ? segVals(prop.ghost) : null;
    $("#propSvg", el).innerHTML = propSVG(prop.v, g);
    $("#propMetrics", el).innerHTML = metricsHTML(prop.v, metrics(prop.v));
  });
  $("#ghostSel", el).onchange = e => { prop.ghost = e.target.value; TL.render(); };
  $("#prReset", el).onclick = () => { prop.v = segVals(prop.seg); TL.render(); };
  $("#prAsk", el).onclick = () => {
    const v = prop.v, m = metrics(v), s = D.SEGMENTS.find(x => x.id === prop.seg);
    TL.askClaude({ title: "Review these proportions", prompt: `I'm a transportation design student working on side-view proportions for a ${s.name.toLowerCase()} concept.\n\nMy numbers (mm): length ${v.L}, wheelbase ${v.WB}, front overhang ${v.FO}, rear overhang ${m.RO}, height ${v.H}, wheel+tyre diameter ${v.D}, dash-to-axle ${v.dta}, glasshouse ${Math.round(v.glass * 100)}% of height.\nTypical ${s.name.toLowerCase()} for comparison: L ${s.L}, WB ${s.WB}, H ${s.H}, front overhang ${s.FO}, wheel ${s.D}.\n\nPlease:\n1. Say what character these proportions give (sporty, premium, practical…).\n2. Point out anything unrealistic for packaging (people, crash structure, battery or engine).\n3. Suggest 3 changes to make it look more planted and premium, with numbers.\n4. Name a few real vehicles with similar proportions I could study.` });
  };
}

/* ---------- events ---------- */
function renderEvents() {
  const evs = TL.allEvents().sort((a, b) => a.start.localeCompare(b.start));
  const upcoming = evs.filter(e => daysUntil(e.end || e.start) >= 0), past = evs.filter(e => daysUntil(e.end || e.start) < 0);
  const byMonth = {}; upcoming.forEach(e => { const k = e.start.slice(0, 7); (byMonth[k] = byMonth[k] || []).push(e); });
  const card = e => { const st = S().eventStars.includes(e.id), n = daysUntil(e.start), on = n <= 0 && daysUntil(e.end || e.start) >= 0;
    return `<div class="card event ${st ? "star" : ""} ${daysUntil(e.end || e.start) < 0 ? "past" : ""}"><div class="date-blk"><div class="m">${MONTHS[parseISO(e.start).getMonth()].toUpperCase()}</div><div class="d">${parseISO(e.start).getDate()}</div></div>
      <div class="stack-sm" style="gap:5px;min-width:0"><div class="between"><b style="font-size:16px">${esc(e.name)}</b><button class="icon-btn" data-star="${e.id}" aria-label="${st ? "Not interested" : "Interested"}" style="color:${st ? "var(--clay)" : "var(--muted)"};margin:-10px -10px -10px 0">${icon("star")}</button></div>
        <span class="lede">${esc(e.city)}<br><span class="mono">${esc(TL.fmtRange(e.start, e.end))}</span></span>
        <div class="row" style="gap:6px"><span class="tag">${esc(e.type || "Event")}</span>${on ? '<span class="tag ok">on now</span>' : n > 0 ? `<span class="tag blue">${relDays(n)}</span>` : ""}${e.tbc ? '<span class="tag warn">dates TBC</span>' : ""}${e.mine ? '<span class="tag clay">added by you</span>' : ""}</div>
        ${e.note ? `<p class="lede" style="margin:0">${esc(e.note)}</p>` : ""}
        <div class="row">${e.url ? `<a class="out" href="${esc(e.url)}" target="_blank" rel="noopener">${icon("ext")}${e.mine ? "Link" : "Official site"}</a>` : ""}${e.mine ? `<button class="link-btn" data-edel="${e.id}" style="color:var(--bad)">Remove</button>` : ""}</div></div></div>`; };
  return `<div class="stack">
    <p class="lede">Shows, design weeks and concours worth the trip from Barcelona. Star the ones you want to go to; they appear on Today. Dates checked ${esc(fmtDate(D.CHECKED, true))}. Always confirm on the official site.</p>
    ${Object.entries(byMonth).map(([k, list]) => `<section class="stack-sm"><span class="label">${MONTHS[+k.slice(5) - 1]} ${k.slice(0, 4)}</span>${list.map(card).join("")}</section>`).join("")}
    <button class="btn soft" id="evAdd">${icon("plus")}Add an event</button>
    ${past.length ? `<details><summary class="label" style="cursor:pointer;padding:8px 0">Past events (${past.length})</summary><div class="stack-sm">${past.reverse().map(card).join("")}</div></details>` : ""}
  </div>`;
}
function bindEvents(el) {
  $$("[data-star]", el).forEach(b => b.onclick = () => { const id = b.dataset.star, st = S().eventStars; S().eventStars = st.includes(id) ? st.filter(x => x !== id) : st.concat(id); TL.save(); TL.render(); });
  $$("[data-edel]", el).forEach(b => b.onclick = () => { S().myEvents = S().myEvents.filter(x => x.id !== b.dataset.edel); TL.save(); TL.render(); });
  $("#evAdd", el).onclick = addEvent;
}
function addEvent() {
  TL.openSheet(() => ({
    title: "Add an event",
    body: `<label class="field"><span>Name</span><input class="input" id="eaN" placeholder="e.g. IED end-of-year show"></label>
      <div class="grid2"><label class="field"><span>Start</span><input class="input" type="date" id="eaS"></label><label class="field"><span>End (optional)</span><input class="input" type="date" id="eaE"></label></div>
      <label class="field"><span>Where</span><input class="input" id="eaC" placeholder="City, venue"></label>
      <div class="field"><span>Type</span><select class="select" id="eaT">${["Design event", "Car show", "Motorbike show", "Talk / workshop", "Exhibition", "Meet-up", "Deadline / competition"].map(t => `<option>${t}</option>`).join("")}</select></div>
      <label class="field"><span>Link (optional)</span><input class="input" id="eaU" type="url" inputmode="url" placeholder="https://"></label>
      <label class="field"><span>Notes</span><textarea class="textarea" id="eaNo"></textarea></label>`,
    foot: `<button class="btn grow" data-ok>Add event</button>`,
    bind: el => { $("[data-ok]", el).onclick = () => {
      const n = $("#eaN", el).value.trim(), s = $("#eaS", el).value; if (!n || !s) { toast("Add a name and a start date"); return; }
      const e = { id: uid(), name: n, start: s, end: $("#eaE", el).value, city: $("#eaC", el).value.trim(), type: $("#eaT", el).value, url: $("#eaU", el).value.trim(), note: $("#eaNo", el).value.trim() };
      S().myEvents.push(e); S().eventStars.push(e.id); TL.save(); TL.closeSheet(); toast("Event added");
    }; }
  }));
}

/* ---------- community / resources / glossary ---------- */
function renderCommunity() {
  return `<div class="stack"><p class="lede">Places to share work, get feedback and follow the industry.</p>
    ${D.FORUMS.map(f => `<a class="card tap" href="${esc(f.url)}" target="_blank" rel="noopener" style="text-decoration:none"><div class="between"><b style="font-size:16px">${esc(f.name)}</b>${icon("ext")}</div><span class="tag" style="margin:6px 0">${esc(f.kind)}</span><p class="lede" style="margin:0">${esc(f.note)}</p></a>`).join("")}
    <div class="card flat"><b>Tip</b><p class="lede" style="margin:4px 0 0">Post process pages, not only final renders. Tutors and recruiters want to see how you think.</p></div></div>`;
}
function renderResources() {
  return `<div class="stack">${Object.entries(D.RESOURCES).map(([k, list]) => `<section class="stack-sm"><h2 class="h">${esc(k)}</h2><div class="card" style="padding:4px 14px">${list.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener" class="check" style="text-decoration:none;color:inherit"><span class="txt"><b style="font-weight:600">${esc(r.name)}</b><br><span class="mono muted">${esc(r.by)}</span><br><span class="lede">${esc(r.note)}</span></span>${icon("ext")}</a>`).join("")}</div></section>`).join("")}
    <p class="lede">Links to books and people open a web search, so you can pick the best shop or source.</p></div>`;
}
let gq = "";
function renderGlossary() {
  const list = D.GLOSSARY.filter(([t, d]) => !gq || norm(t + " " + d).includes(norm(gq)));
  return `<div class="stack"><label class="search">${icon("search")}<input class="input" id="gq" type="search" placeholder="Search ${D.GLOSSARY.length} studio terms" value="${esc(gq)}"></label>
    <dl class="gl card" style="margin:0">${list.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join("") || "<dd class='lede'>No match.</dd>"}</dl></div>`;
}

TL.views.explore = function () {
  const t = TL.exploreTab;
  const html = `<div class="stack"><div class="seg" id="exSeg">${SUBS.map(([k, l]) => `<button data-ex="${k}" aria-pressed="${t === k}">${l}</button>`).join("")}</div>
    ${t === "proportions" ? renderProportions() : t === "events" ? renderEvents() : t === "community" ? renderCommunity() : t === "resources" ? renderResources() : renderGlossary()}</div>`;
  return {
    eyebrow: "References & community", title: "Explore", html,
    bind: el => {
      $$("[data-ex]", el).forEach(b => b.onclick = () => { TL.exploreTab = b.dataset.ex; TL.render(); });
      if (t === "proportions") bindProportions(el);
      if (t === "events") bindEvents(el);
      if (t === "glossary") { const i = $("#gq", el); i.oninput = debounce(() => { gq = i.value; TL.render(); const n = $("#gq"); n.focus(); n.setSelectionRange(gq.length, gq.length); }, 200); }
    }
  };
};
})();

window.TL.VERSION = "1.0.0";
window.TL.boot();
