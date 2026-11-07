/* ============================================================
   data.js  —  THIS IS THE ONLY FILE YOU NEED TO EDIT
   ============================================================
   Everything on the website is generated from this file.
   Change text here, save the file, refresh the browser.

   Image folders:
     assets/img/profile/   portrait, cutout, hero background
     assets/img/design/    design work
     assets/img/photo/     photography
     assets/img/moments/   competition photos
   ============================================================ */

const SITE = {

  /* ---------- 1. BASICS ---------- */
  name: "Sabit Hossain",
  role: "Industrial & Production Engineering · BUET",

  // The scrolling strip. Real names of things — not adjectives.
  /* The sideways rail under the hero. Each tab is one event you
     actually worked on, with the photo from it. Add or remove
     freely — the rail duplicates itself to loop, so any count works. */
  events: [
    { img: "tedx-buet.jpg",       name: "TEDxBUET",           note: "Event Coordinator · 400 attendees" },
    { img: "bueten-summit.jpg",   name: "BUETEN Summit 2026", note: "Logistics, design & stall ops" },
    { img: "over-the-wall-1.jpg", name: "Over The Wall S5",   note: "Marico · semi-finalist" },
    { img: "researchspark.jpg",   name: "ResearchSpark 3MT",  note: "Backdrop, banners & rulebook" },
    { img: "ipe-fiesta.jpg",      name: "IPE Fiesta 2026",    note: "Identity, assets & crests" },
    { img: "innovade.jpg",        name: "INNOVADE 2026",      note: "North South University" },
    { img: "industrial-tour.jpg", name: "Industrial Tour",    note: "UniMed UniHealth factory visit" },
  ],

  // Rotating line under your name in the hero.
  taglines: [
    "Visual identity",
    "Print & campaign design",
    "Event photography",
    "Short-form video",
    "Sponsorship outreach",
  ],

  intro:
    "Second-year Industrial & Production Engineering student at BUET. I design identities, shoot events and edit video — mostly for student organisations and campus campaigns in Dhaka.",

  cutout: "cutout.png",     // background-removed portrait, used in the hero
  portrait: "about.jpg",    // normal photo, used in About (the outdoor one;
                            // portrait.jpg is the whiteboard shot the hero
                            // cutout came from, so it repeated the hero)
  heroImage: "hero.jpg",    // faint background texture behind the hero

  /* ---------- 2. ABOUT ---------- */
  about: {
    heading: "An engineer who never put down the camera.",
    body: [
      "Second-year Industrial & Production Engineering at BUET. I plan campus activations and then build everything they need — the sponsor deck, the identity, the booth, the photographs, the edit.",
      "In practice that has meant 548 registrations for Marico's Over The Wall, the highest BUET has recorded and 4th nationally of 7,665; 730 people through a photobooth across a 19-hour activation; ৳100,000 from Eastern Bank and ৳200,000 from Rototech; 30+ designs for a 400-seat TEDxBUET; and the rulebook for a 105-entry research competition. The camera came first, though, and it never went away.",
    ],
    facts: [
      { k: "Based in",   v: "Dhaka, Bangladesh" },
      { k: "Studying",   v: "B.Sc. IPE, BUET — 2nd year · CGPA 3.75" },
      { k: "Scholarship",v: "Academic Excellence, 2024" },
      { k: "Also",       v: "Class Representative, IPE 2-2" },
      { k: "Languages",  v: "Bangla (native), English (professional)" },
      { k: "Currently",  v: "Open to internships & collaborations" },
    ],
  },

  /* ---------- 3. DESIGN — PROJECT GROUPS ----------
     These become the filter buttons, IN THIS ORDER — and the wall
     below sorts itself to match. Move a group up or down here and
     both the buttons and the "All" view follow.                   */
  designGroups: [
    {
      id: "identity",
      name: "Identity & Stationery",
      year: "2025",
      client: "Self-initiated",
      blurb:
        "Two complete takes on the same stationery brief. The first uses an angular red cut and a skyline photograph — confident, corporate, hard to ignore. The second strips everything out: black, white, a rotated grid, nothing else. Running both to finish was the point; the second only works because the first proved how much could be removed.",
      metrics: ["2 directions", "Front + back", "Print-ready"],
    },
    {
      id: "print",
      name: "Print & Campaign",
      year: "2021–26",
      client: "Various",
      blurb:
        "Work that leaves the screen. A Bengali-typography Iftar banner printed at several metres wide and installed on campus — the photo of it hanging is the piece that matters. Plus corporate flyers, a campus-ambassador recruitment poster, an art competition call and folded brochures. Designing for distance is a different discipline from designing for a feed.",
      metrics: ["Large-format print", "Bengali typography", "Installed on campus"],
    },
    {
      id: "tedx",
      name: "TEDxBUET",
      year: "2025",
      client: "TEDxBUET",
      blurb:
        "Over thirty promotional designs across four months — speaker announcements, countdowns, partner credits, day-of signage — all on one grid and one type scale. The identity treats the X as a window rather than a logo: texture and photography show through it, so the same mark carries very different content. I also closed 2 of 6 in-kind partnerships and led a 9-member team.",
      metrics: ["30+ designs", "400 attendees", "9-member team"],
    },
    {
      id: "efootball",
      name: "eFootball Master's Cup",
      year: "2025",
      client: "IPE Fiesta · BUET",
      blurb:
        "Instead of a generic congratulations post, every champion and runner-up got their own player card — portrait cut-out, rating, position, full stats block. The results post became a collectible, and the format scaled across every bracket without redesign.",
      metrics: ["Player-card system", "Champion + runner-up sets", "Tournament key art"],
    },
    {
      id: "shuttered",
      name: "Shuttered 2.0",
      year: "2026",
      client: "IPE Fiesta · BUET",
      blurb:
        "The intra-IPE photography competition, designed as a campaign rather than a poster. One blue-and-skyline system runs through the announcement, the deadline countdowns at one day and six hours out, the extension notice and the submission-closed card. The layout stays locked; only the number changes — so each piece is instantly recognisable in a crowded feed.",
      metrics: ["Full campaign", "25–26 Jan 2026", "Countdown system"],
    },
    {
      id: "goaljog",
      name: "শিল্পে GOALযোগ",
      year: "2026",
      client: "AIPE · BUET",
      blurb:
        "A traditional freshers' reception rebuilt as a department-wide festival of eighteen events. I secured the BDT 100,000 title sponsorship from Eastern Bank PLC and seven of eight partners, then carried one visual system across every single sub-event — chess, badminton, card games, a typing championship, an integration bee, a treasure hunt, a meme battle — plus a sponsor-announcement series and champion cards for every bracket. Thirty-seven pieces, one identity.",
      metrics: ["18 events", "৳100,000 title sponsor", "7 of 8 partners", "37 assets"],
    },
  ],

  /* ---------- 4. DESIGN — EVERY PIECE ---------- */
  design: [
    /* --- শিল্পে GOALযোগ: sponsors --- */
    { img: "goaljog-sponsor-ebl.jpg",      group: "goaljog", title: "Title Sponsor — Eastern Bank PLC" },
    { img: "goaljog-ebl-account.jpg",      group: "goaljog", title: "EBL Campus Account" },
    { img: "goaljog-sponsor-ryze.jpg",     group: "goaljog", title: "Strategic Partner — RYZE" },
    { img: "goaljog-sponsor-perfetti.jpg", group: "goaljog", title: "Confectionery Partner — Perfetti Van Melle" },
    { img: "goaljog-sponsor-fun.jpg",      group: "goaljog", title: "Snacks Partner — ACI Fun" },
    { img: "goaljog-sponsor-udvash.jpg",   group: "goaljog", title: "Merchandise Partner — Udvash" },
    { img: "goaljog-sponsor-goldmark.jpg", group: "goaljog", title: "Cookies Partner — GoldMark" },
    { img: "goaljog-sponsor-bhaiya.jpg",   group: "goaljog", title: "Co-Sponsor — Bhaiya Housing" },
    { img: "goaljog-sponsor-chb.jpg",      group: "goaljog", title: "Accommodation Partner — CHB" },
    { img: "goaljog-sponsor-bakery.jpg",   group: "goaljog", title: "Bakery Partner — Vieille 19" },
    { img: "goaljog-sponsor-rihwan.jpg",   group: "goaljog", title: "Gift Partner — Rihwan" },

    /* --- শিল্পে GOALযোগ: sub-events --- */
    { img: "goaljog-hunt-announce.jpg",      group: "goaljog", title: "GOALমোল গুপ্তধন — Treasure Hunt" },
    { img: "goaljog-hunt-champ.jpg",         group: "goaljog", title: "Treasure Hunt — Champions" },
    { img: "goaljog-quiz-announce.jpg",      group: "goaljog", title: "বিশ্বকাপের শিল্পে ধাঁধা — Quiz" },
    { img: "goaljog-quiz-semis.jpg",         group: "goaljog", title: "Quiz — Semi-finals" },
    { img: "goaljog-quiz-champ.jpg",         group: "goaljog", title: "Quiz — Champion" },
    { img: "goaljog-quiz-runner.jpg",        group: "goaljog", title: "Quiz — Runner-Up" },
    { img: "goaljog-chess-announce.jpg",     group: "goaljog", title: "Blitz Brawl — Chess" },
    { img: "goaljog-chess-champ.jpg",        group: "goaljog", title: "Blitz Brawl — Champion" },
    { img: "goaljog-chess-runner.jpg",       group: "goaljog", title: "Blitz Brawl — Runner-Up" },
    { img: "goaljog-cards-announce.jpg",     group: "goaljog", title: "29 Card Game" },
    { img: "goaljog-cards-champ.jpg",        group: "goaljog", title: "29 Card Game — Champion" },
    { img: "goaljog-cards-runner.jpg",       group: "goaljog", title: "29 Card Game — Runner-Up" },
    { img: "goaljog-badminton-announce.jpg", group: "goaljog", title: "Men's Doubles Badminton" },
    { img: "goaljog-badminton-champ.jpg",    group: "goaljog", title: "Badminton — Champion" },
    { img: "goaljog-badminton-runner.jpg",   group: "goaljog", title: "Badminton — Runner-Up" },
    { img: "goaljog-badminton-women.jpg",    group: "goaljog", title: "Women's Badminton" },
    { img: "goaljog-type-announce.jpg",      group: "goaljog", title: "TypeRacing Championship" },
    { img: "goaljog-type-semis.jpg",         group: "goaljog", title: "TypeRacing — Semi-finals" },
    { img: "goaljog-type-finalist.jpg",      group: "goaljog", title: "TypeRacing — Finalists" },
    { img: "goaljog-type-champ.jpg",         group: "goaljog", title: "TypeRacing — Champion" },
    { img: "goaljog-type-runner.jpg",        group: "goaljog", title: "TypeRacing — Runner-Up" },
    { img: "goaljog-bee-champ.jpg",          group: "goaljog", title: "Integration Bee — Champion" },
    { img: "goaljog-bee-runner.jpg",         group: "goaljog", title: "Integration Bee — Runner-Up" },
    { img: "goaljog-meme.jpg",               group: "goaljog", title: "Meme Battle" },
    { img: "goaljog-reel-duel.jpg",          group: "goaljog", title: "Reel Duel — Section A vs B" },
    { img: "goaljog-photo-comp.jpg",         group: "goaljog", title: "Photography Competition" },

    /* --- Shuttered 2.0 --- */
    { img: "shuttered-announce.jpg",  group: "shuttered", title: "Shuttered 2.0 — Announcement" },
    { img: "shuttered-1day.jpg",      group: "shuttered", title: "One Day Left" },
    { img: "shuttered-6hours.jpg",    group: "shuttered", title: "Six Hours Left" },
    { img: "shuttered-extended.jpg",  group: "shuttered", title: "Deadline Extended" },
    { img: "shuttered-closed.jpg",    group: "shuttered", title: "Submissions Closed" },

    /* --- eFootball Master's Cup --- */
    { img: "efootball-keyart.jpg",      group: "efootball", title: "Master's Cup — Key Art" },
    { img: "efootball-announce.jpg",    group: "efootball", title: "FC25 — Tournament Announcement" },
    { img: "efootball-card-champ.jpg",  group: "efootball", title: "Champion Card — Auntik" },
    { img: "efootball-card-runner.jpg", group: "efootball", title: "Runner-Up Card — Ayan" },
    { img: "efootball-champ.jpg",       group: "efootball", title: "Champion — Sufian Palak" },
    { img: "efootball-runner.jpg",      group: "efootball", title: "Runner-Up — Sayem Billah" },
    { img: "efootball-grid.jpg",        group: "efootball", title: "The Full Set" },

    /* --- TEDxBUET --- */
    { img: "tedx-billboard.jpg",       group: "tedx", title: "TEDxBUET — Billboard" },
    { img: "tedx-billboard-night.jpg", group: "tedx", title: "TEDxBUET — Night Billboard" },
    { img: "tedx-mark-red.jpg",        group: "tedx", title: "The X as a Window" },
    { img: "tedx-mark-dark.jpg",       group: "tedx", title: "X — Dark Variant" },
    { img: "tedx-registration.jpg",    group: "tedx", title: "Registration Opens" },
    { img: "tedx-instagram.jpg",       group: "tedx", title: "Instagram Rollout" },
    { img: "tedx-proposal.jpg",        group: "tedx", title: "Partnership Proposal" },

    /* --- Print & campaign --- */
    { img: "iftar-installed.jpg",           group: "print", title: "Iftar Banner — Installed on Campus" },
    { img: "iftar-artwork.jpg",             group: "print", title: "Iftar Banner — Artwork" },
    { img: "iftar-banner-flat.jpg",         group: "print", title: "Iftar Banner — Flat" },
    { img: "iftar-24hrs.jpg",               group: "print", title: "24 Hours Remaining" },
    { img: "flyer-corporate-mockup.jpg",    group: "print", title: "Corporate Flyer" },
    { img: "flyer-corporate.jpg",           group: "print", title: "Corporate Flyer — Artwork" },
    { img: "flyer-art-stand.jpg",           group: "print", title: "Art Competition — Stand" },
    { img: "flyer-art-competition.jpg",     group: "print", title: "Art Competition — Artwork" },
    { img: "flyer-ambassador-poster.jpg",   group: "print", title: "Campus Ambassador — Poster" },
    { img: "flyer-ambassador.jpg",          group: "print", title: "Campus Ambassador — Artwork" },
    { img: "flyer-seminar-wall.jpg",        group: "print", title: "Web Design Seminar — Wall" },
    { img: "flyer-seminar.jpg",             group: "print", title: "Web Design Seminar — Artwork" },
    { img: "brochure-corporate.jpg",        group: "print", title: "Corporate Brochure" },
    { img: "brochure-business.jpg",         group: "print", title: "Business Brochure" },
    { img: "brochure-teal.jpg",             group: "print", title: "Brochure — Teal Direction" },
    { img: "skinzen.jpg",                   group: "print", title: "SkinZen — AdMaker 2025" },

    /* --- Identity & stationery --- */
    { img: "cards-mockup.jpg",      group: "identity", title: "Hossain Enterprise — Cards" },
    { img: "cards-red-front.jpg",   group: "identity", title: "Red Direction — Front" },
    { img: "cards-red-back.jpg",    group: "identity", title: "Red Direction — Back" },
    { img: "cards-mono-mockup.jpg", group: "identity", title: "Mono Direction — Mockup" },
    { img: "cards-mono-front.jpg",  group: "identity", title: "Mono Direction — Front" },
    { img: "cards-mono-back.jpg",   group: "identity", title: "Mono Direction — Back" },
  ],

  /* ---------- 5. PHOTOGRAPHY ----------
     location: shown under the title on hover and in the viewer.

     The ones already filled in are MY GUESSES from recognising the
     place — check them. Everything with location: "" I couldn't
     identify; type the place between the quotes.

     award: "" shows no badge. Your four photography prizes are:
       "1st · BUETPS"   "1st Runner-up · Creatix Lens of Light"
       "1st · Scintilla"   "5th · Oxyprism"                       */
  photos: [
    { img: "river-gorge.jpg",    title: "The Gorge",             category: "Landscape",    location: "Kathmandu–Pokhara Highway, Nepal",   award: "1st Runner-up · Creatix Lens of Light" },
    { img: "dhaka-night.jpg",    title: "Dhaka After Rain",      category: "Street",       location: "Dhaka, Bangladesh",                  award: "" },
    { img: "silhouette.jpg",     title: "Underpass",             category: "Street",       location: "BUET campus, Dhaka",                                   award: "" },
    { img: "holi.jpg",           title: "Colour Festival",       category: "Street",       location: "BUET campus, Dhaka",                                   award: "" },
    { img: "street-cat.jpg",     title: "Shared Breakfast",      category: "Street",       location: "BUET campus, Dhaka",                                   award: "" },
    { img: "city-sunset.jpg",    title: "Rush Hour, Gold Hour",  category: "Street",       location: "Seoul, South Korea",                                   award: "" },
    { img: "mackerel-sky.jpg",   title: "Mackerel Sky",          category: "Street",       location: "BUET campus, Dhaka",                                   award: "" },
    { img: "craftsman.jpg",      title: "The Welder",            category: "People",       location: "BUET campus, Dhaka",                                   award: "" },
    { img: "congregation.jpg",   title: "Before the Prayer",     category: "People",       location: "Al-Masjid an-Nabawi, Madina",                                   award: "" },
    { img: "prayer-flags.jpg",   title: "Flags at Altitude",     category: "Landscape",    location: "Annapurna Base Camp, Nepal",                                   award: "" },
    { img: "mountain-pano.jpg",  title: "The Range",             category: "Landscape",    location: "Nagarkot, Nepal",                                   award: "" },
    { img: "fisherman.jpg",      title: "Still Water",           category: "Landscape",    location: "Zero Point, Sylhet · Bangladesh–India border", award: "1st · Scintilla DSLR" },
    { img: "boats-dusk.jpg",     title: "Boats at Dusk",         category: "Landscape",    location: "",                                   award: "" },
    { img: "beach-boats.jpg",    title: "Beached",               category: "Landscape",    location: "",                                   award: "" },
    { img: "lake-boats.jpg",     title: "Harbour Morning",       category: "Landscape",    location: "",                                   award: "" },
    { img: "harbour.jpg",        title: "Moored",                category: "Landscape",    location: "",                                   award: "" },
    { img: "marina.jpg",         title: "The Marina",            category: "Landscape",    location: "",                                   award: "" },
    { img: "karst-river.jpg",    title: "Limestone River",       category: "Landscape",    location: "",                                   award: "" },
    { img: "moonlight.jpg",      title: "Moon on Water",         category: "Landscape",    location: "",                                   award: "" },
    { img: "sky-tree.jpg",       title: "One Tree",              category: "Landscape",    location: "",                                   award: "" },
    { img: "courtyard.jpg",      title: "Courtyard, Midday Sun", category: "Architecture", location: "Al-Masjid an-Nabawi, Madina",        award: "" },
    { img: "arches.jpg",         title: "Arches",                category: "Architecture", location: "Al-Masjid an-Nabawi, Madina",        award: "" },
    { img: "mosque-detail.jpg",  title: "Inlay",                 category: "Architecture", location: "Sheikh Zayed Grand Mosque, Abu Dhabi", award: "" },
    { img: "mosque-floor.jpg",   title: "White Marble",          category: "Architecture", location: "Sheikh Zayed Grand Mosque, Abu Dhabi", award: "" },
    { img: "lalbagh.jpg",        title: "Lalbagh Fort",          category: "Architecture", location: "Lalbagh Fort, Dhaka",                award: "" },
    { img: "lalbagh-garden.jpg", title: "Lalbagh Garden",        category: "Architecture", location: "Lalbagh Fort, Dhaka",                award: "" },
    { img: "petronas.jpg",       title: "Twin Towers",           category: "Architecture", location: "Kuala Lumpur, Malaysia",             award: "" },
    { img: "rain-vortex.jpg",    title: "Falling Water",         category: "Architecture", location: "Jewel Changi, Singapore",            award: "" },
    { img: "cloud-forest.jpg",   title: "Cloud Forest",          category: "Architecture", location: "Gardens by the Bay, Singapore",      award: "" },
    { img: "pink-corner.jpg",    title: "Corner, Pink Sky",      category: "Architecture", location: "",                                   award: "" },
    { img: "brass.jpg",          title: "Brass, Lit From Within",category: "Still Life",   location: "",                                   award: "" },
    { img: "candlelight.jpg",    title: "Candle Study",          category: "Still Life",   location: "",                                   award: "" },
    { img: "machine.jpg",        title: "Red Machine",           category: "Still Life",   location: "",                                   award: "" },
    { img: "night-lights.jpg",   title: "Bokeh Bench",           category: "Still Life",   location: "",                                   award: "" },
    { img: "pool-abstract.jpg",  title: "Surface Tension",       category: "Still Life",   location: "",                                   award: "" },
    { img: "hibiscus.jpg",       title: "Hibiscus",              category: "Still Life",   location: "",                                   award: "" },
    { img: "hibiscus-red.jpg",   title: "Hibiscus, Open",        category: "Still Life",   location: "",                                   award: "" },
  ],

  /* ---------- 6. FILM ---------- */
  /* Two kinds of entry:
       youtubeId — loads an inline player when you click it
       url       — opens elsewhere in a new tab, for platforms that
                   refuse to embed (Facebook reels, for one)
     `poster` for a url entry is a frame grab you drop in
     assets/img/video/. Without one the card shows a plain play panel. */
  videos: [
    {
      title: "AdMaker 2025 — SkinZen",
      youtubeId: "b_HnTgOqtDE",
      vertical: true,
      year: "2025",
      role: "Concept · Shoot · Edit (CapCut)",
      summary: "A vertical spot for AdMaker 2025, built around the SkinZen product concept.",
    },
    {
      title: "Marico Ignite — Campus Ambassador",
      youtubeId: "0z2SkSctAlI",
      vertical: false,
      year: "2026",
      role: "Concept · Shoot · Edit (CapCut)",
      summary: "Campaign film documenting the Ignite activation that drove 548 BUET registrations.",
    },
    {
      title: "The Future is in Supply Chain",
      url: "https://www.facebook.com/share/r/1JB38XmnJM/",
      poster: "iscea-supply-chain.jpg",
      vertical: true,
      year: "2026",
      role: "Edit",
      summary: "Promo reel for the AIPE seminar with ISCEA Bangladesh, held at BUET in July.",
    },
  ],

  /* ---------- 7. EXPERIENCE TIMELINE ---------- */
  experience: [
    {
      org: "Marico Bangladesh Ltd.",
      short: "M", logo: "marico.png",
      role: "Ignite Campus Ambassador",
      period: "Jul 2026 — Present",
      current: true,
      metrics: [
        { v: "548",    l: "registrations" },
        { v: "4th",    l: "nationally of 7,665" },
        { v: "+47%",   l: "on previous best" },
        { v: "730",    l: "photobooth participants" },
      ],
      points: [
        "Campus's highest-ever sign-up for a national product-innovation competition — about 1 in 10 BUET undergraduates.",
        "Built the activation end to end: 3-day booth, a 193-member community, an employer-branding roadshow with 11 HR and alumni speakers, 39 volunteers.",
        "Ran a 19-hour brand activation for a men's grooming sub-brand, plus two campus insight surveys.",
      ],
    },
    {
      org: "BUET Entrepreneurship Development Club",
      short: "EDC", logo: "edc.png",
      role: "Manager of Sponsorships",
      period: "Oct 2024 — Present",
      current: true,
      ladder: ["Member · Oct 2024", "Executive · Feb 2026", "Manager of Events · Jul 2026", "Manager of Sponsorships · Nov 2026"],
      metrics: [
        { v: "4",    l: "events in 4 months" },
        { v: "40",   l: "person team led" },
        { v: "500+", l: "at BUETEN Summit" },
        { v: "20+",  l: "startup stalls run" },
      ],
      points: [
        "Ran logistics, design and stall operations for BUETEN Summit 2026 — the largest summit ever held at BUET.",
        "Co-organised Robi's \"Privacy First\" roadshow; anchored a 3-hour Excel workshop and hosted a panel.",
      ],
    },
    {
      org: "Association of Industrial & Production Engineers",
      short: "IPE", logo: "aipe.png",
      role: "Event Executive",
      period: "Dec 2025 — Present",
      current: true,
      ladder: ["Member · Dec 2025", "Event Executive · Jul 2026"],
      metrics: [
        { v: "৳100K", l: "title sponsor" },
        { v: "18",    l: "events in one festival" },
        { v: "7 / 8", l: "partners closed" },
        { v: "12",    l: "companies at Corporate Connect" },
      ],
      points: [
        "Co-led turning the freshers' reception into শিল্পে GOALযোগ, a department-wide festival.",
        "Built IPE Fiesta 2026's identity — logo, assets, acrylic crests. Authored the Lean Sprint 3.0 casebook.",
        "Lead photographer for the Grand Rally, Flashmob and Corporate Connect.",
      ],
    },
    {
      org: "IEOM Society BUET Student Chapter",
      short: "IEOM", logo: "ieom.png",
      role: "Deputy Director, Sponsorship",
      period: "Jul 2026 — Present",
      current: true,
      metrics: [
        { v: "105", l: "entries to 3MT" },
        { v: "1",   l: "rulebook authored" },
      ],
      points: [
        "Wrote the rulebook and marking criteria for ResearchSpark — the chapter's most successful event to date.",
        "Designed the stage backdrop, X-banners, stall proposals and the judge and sponsor crests.",
      ],
    },
    {
      org: "BUET Robotics Society",
      short: "BRS", logo: "brs.png",
      role: "Asst. Secretary, Corporate Relations & Sponsorship",
      period: "Mar 2025 — Present",
      current: true,
      ladder: ["Student Member · Mar 2025", "Asst. Secretary · Jul 2026"],
      metrics: [{ v: "৳200K", l: "from Rototech" }],
      points: [
        "Co-secured the Robo Carnival sponsorship and run corporate outreach for the society's flagship events.",
      ],
    },
    {
      org: "BUET Career Club",
      short: "BCC", logo: "career-club.png",
      role: "Coordinator, Event Management",
      period: "Aug 2026 — Present",
      current: true,
      metrics: [{ v: "~70", l: "at Grameenphone roadshow" }],
      points: [
        "Coordinate event operations across the club's career-focused programming.",
      ],
    },
    {
      org: "Manufactura 1.0",
      short: "M1", logo: "manufactura.png",
      role: "Co-Founder, Mentor & Lead Organizer",
      period: "Dec 2025 — Jan 2026",
      metrics: [
        { v: "20",  l: "teams" },
        { v: "50%", l: "of the IPE '24 batch" },
        { v: "8",   l: "industry judges" },
      ],
      points: [
        "Launched IPE BUET's first ever business competition with one co-founder — presented by Eastern Bank PLC, powered by RYZE.",
        "Recruited judges from FMCG and telecom; mentored teams to a BDT 15,000 prize-pool final.",
      ],
    },
    {
      org: "TEDxBUET",
      short: "TED", logo: "tedx.png",
      role: "Event Coordinator",
      period: "Aug — Dec 2025",
      metrics: [
        { v: "30+", l: "designs" },
        { v: "400", l: "attendees" },
        { v: "9",   l: "person team led" },
      ],
      points: [
        "Built one unified visual identity across a four-month campaign.",
        "Closed 2 of 6 in-kind partnerships; directed speaker coordination and backstage logistics.",
      ],
    },
  ],

  /* ---------- 8. EVERY OTHER ROLE ----------
     logo:  a file in assets/img/logos/ — drop one in and it appears.
     short: the initials shown until that file exists.             */
  roles: [
    { org: "BUET Photographic Society",         title: "Executive",                  period: "Apr 2026 —",          short: "PS",   logo: "buetps.png",       note: "Lead photographer across departmental events. Member since Jul 2025." },
    { org: "IPE '23, BUET",                     title: "Class Representative",       period: "2-2 term",            short: "IPE",  logo: "ipe.png",          note: "Previously CR for the 1-1 term. Cohort communication and coordination." },
    { org: "Infinix",                           title: "Campus Ambassador",          period: "Jul 2026 —",          short: "IX",   logo: "infinix.png",      note: "Ran a 50-response purchase-intent survey on campus." },
    { org: "InfoGram",                          title: "Campus Ambassador",          period: "May 2026 —",          short: "IG",   logo: "infogram.png",     note: "Brought on 4 media partners." },
    { org: "IEOM Society International",        title: "Student Member",             period: "Jun 2026 —",          short: "IEOM", logo: "ieom-intl.png",    note: "International chapter of the Industrial Engineering & Operations Management society." },
    { org: "RS Coalition",                      title: "Graphic Design Specialist",  period: "Mar 2021 — Mar 2022", short: "RS",   logo: "rs-coalition.png", note: "My first design role. 2nd prize in their national brochure contest." },
    { org: "Josephite Language & Reading Club", title: "Deputy Secretary",           period: "2019 — 2020",         short: "JLRC", logo: "josephite.png",    note: "Script evaluation, event management and department coordination." },
    { org: "St. Joseph Higher Secondary School",title: "School Prefect",             period: "Jul 2019 — Jun 2020", short: "SJ",   logo: "stjoseph.png",     note: "Student leadership across the school body." },
    { org: "Scintilla Science Club",            title: "Executive Committee Member", period: "2018",                short: "SSC",  logo: "scintilla.png",    note: "Where the photography started — 1st in the DSLR segment at the 63rd festival." },
  ],

  /* ---------- 9. ACHIEVEMENTS ---------- */
  /* `img` is optional and lives in assets/img/moments/. Where a row
     has one it sits on that row, so the photo is attached to the
     result it belongs to. Rows without one keep the column aligned. */
  achievements: [
    { title: "Semi-finalist, Over The Wall Season 5",      meta: "of 7,665 participants",        date: "Nov 2026",    img: "over-the-wall-s5.jpg" },
    { title: "Finalist, IEOM AUST Research Symposium 2.0", meta: "of 233 teams",                 date: "Jun 2026",    img: "research-symposium.jpg", more: ["research-symposium-2.jpg"] },
    { title: "Semi-finalist, KBEC_NEXUS Season 2",         meta: "Team Jungle · NCC Bank presents · KBEC, KUET", date: "Dec 2025", img: "kbec-nexus.jpg" },
    { title: "Semi-finalist, Over The Wall Season 4",      meta: "top 15 teams of 6,000+",       date: "Nov 2025",    img: "over-the-wall.jpg" },
    { title: "Champion, BUET EDC Case Clash",              meta: "of 32 teams",                  date: "Oct 2024",    img: "edc-case-clash.jpg" },
    // `imgDir` lets a row borrow a photo already in the gallery instead of
    // keeping a second copy. `more` adds extra shots to the lightbox only.
    { title: "2nd, Brochure Design Contest",               meta: "RS Coalition",                 date: "May 2021",    img: "brochure-rs-coalition.jpg", more: ["brochure-rs-award.jpg"] },
    { title: "1st Runner-up, Creatix Lens of Light",       meta: "\"The Gorge\" · Nepal",        date: "Sep 2020",    img: "river-gorge.jpg", imgDir: "photo" },
    { title: "5th, Oxyprism Online Talent Mania",          meta: "\"The Gorge\" · Nepal",        date: "Sep 2020",    img: "river-gorge.jpg", imgDir: "photo" },
    { title: "1st, Scintilla DSLR Segment",                meta: "63rd Annual Science Festival", date: "Mar 2019",    img: "fisherman.jpg",   imgDir: "photo" },
  ],

  /* ---------- 10. SKILLS ----------
     No percentage bars. A number like "87% at hosting" is invented
     precision that nobody believes, and sixteen of them in a row read
     as noise. `core: true` makes a skill stand out as a headline one. */
  skills: [
    {
      group: "Design & Visual",
      items: [
        { name: "Adobe Illustrator", core: true, note: "Identity, logos, crests" },
        { name: "Adobe Photoshop",   core: true },
        { name: "Adobe Lightroom" },
        { name: "Canva" },
      ],
    },
    {
      group: "Camera & Film",
      items: [
        { name: "DSLR photography",    core: true, note: "3 competition wins" },
        { name: "CapCut",              core: true, note: "Video editing" },
        { name: "Event documentation" },
      ],
    },
    {
      group: "Analysis & Communication",
      items: [
        { name: "PowerPoint", core: true, note: "Sponsorship decks that closed ৳300K" },
        { name: "MS Excel",   note: "Pivot tables, XLOOKUP" },
        { name: "Casebook & rulebook writing" },
        { name: "Anchoring & hosting" },
      ],
    },
    {
      group: "On the ground",
      items: [
        { name: "Brand activation",       core: true, note: "730-participant photobooth" },
        { name: "Corporate partnerships", core: true, note: "Eastern Bank, Rototech" },
        { name: "Event operations",       note: "18-event festival" },
        { name: "Volunteer coordination", note: "39 volunteers" },
      ],
    },
  ],

  /* ---------- 11. CONTACT ---------- */
  contact: {
    email: "sabit.tahsan@gmail.com",
    phone: "+880 1703-655752",
    location: "Dhaka, Bangladesh",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sabit-hossain-4a6098305/", handle: "sabit-hossain" },
      { label: "Behance",  url: "https://behance.net/sabithossain2",              handle: "sabithossain2" },
      { label: "Facebook", url: "https://www.facebook.com/t4h54n",                handle: "t4h54n" },
      { label: "Email",    url: "mailto:sabit.tahsan@gmail.com",                  handle: "sabit.tahsan@gmail.com" },
    ],
    /* This PDF still lists both referees' mobile numbers and emails.
       Sabit chose to publish it as-is. Set this back to "" to pull the
       download button (and the file) off the site. */
    cvFile: "Sabit-Hossain-CV.pdf",
  },

  /* ---------- 12. REFERENCES ----------
     Referees' phone numbers and emails are hidden by default —
     publishing someone else's contact details is their call.
     Ask them, then set this to true if they agree.              */
  showReferenceContacts: false,

  references: [
    { name: "Rashik Ahnaf",       title: "Lecturer, Dept. of IPE, BUET · Vice-President, AIPE BUET", email: "rashik@ipe.buet.ac.bd",     phone: "+880 1723-836132" },
    { name: "Sheikh Mahir Abrar", title: "Lecturer, Dept. of IPE, BUET",                             email: "mahirabrar@ipe.buet.ac.bd", phone: "+880 1874-578446" },
  ],
};
