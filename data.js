const DEFAULT_PORTFOLIO = {
  theme: { bg:'#f7f6f2', ink:'#101010', muted:'#6f6f6b', line:'#d7d5ce', black:'#050505', white:'#f7f6f2', ikb:'#002FA7', fontDisplay:'Archivo', fontBody:'Inter' },
  links: { email:'mailto:paulafreireok@hotmail.com', linkedin:'#', behance:'#', resume:'#' },
  home: {
    name:'Paula Freire',
    location:'Buenos Aires, Argentina',
    kicker:'Designing clarity through visual systems.',
    intro:'I create brand systems, campaigns and digital experiences that turn complex strategies into clear, memorable communication.',
    capabilities:['Brand Systems','Campaigns','Communication','UX/UI','Retail','Culture','Art Direction'],
    process:[
      ['Research','Understand context, audience and business intent before making visual decisions.'],
      ['Strategy','Translate insights into a direction that connects brand goals with communication needs.'],
      ['Concept','Define the idea that will hold the system together across every format.'],
      ['System','Build the typographic, color and spatial language that carries the concept.'],
      ['Design','Execute with craft and precision, making the logic of the system visible and useful.'],
      ['Delivery','Hand off a system, not only files, with enough clarity to live beyond the first launch.']
    ],
    experience:[
      ['2023 — Now','Comms Analyst & Senior Graphic Designer','AB InBev / Cervecería y Maltería Quilmes'],
      ['2022 — 2023','Senior Graphic Designer','Mazalosa / Desiderata + System'],
      ['2021 — 2022','Graphic Designer','NAIMA / UCollective'],
      ['2020 — 2021','Graphic Designer Jr.','Agencia Chula']
    ]
  },
  projects: [
    { id:'desafiate-desafianos', visible:true, category:'Brand Systems', title:'DesafiaTE DesafiaNOS', client:'AB InBev / Pasantías 2026', role:'Regional visual adaptation · Campaign design · Communication assets', cover:'assets/desafiate-home.png', headline:'A regional employer branding campaign adapted for Bolivia, Paraguay and Uruguay.', challenge:'Adapt an existing campaign identity across Bolivia, Paraguay and Uruguay while respecting each country’s employer brand identity, visual guidelines and local communication needs.', response:'Translated the base concept into country-specific assets, adjusting layouts, messaging and visual applications to keep the campaign consistent while aligned with each local employer brand.', outcome:'A cohesive regional rollout that preserved the campaign’s core idea while allowing each country to communicate it in a way that felt ownable, aligned and locally relevant.', sections:[
      {title:'Overview', copy:'DesafiaTE · DesafiaNOS was a regional internship campaign built to attract young talent while respecting each country’s employer brand.', images:['assets/desafiate-hero-1.png','assets/desafiate-hero-2.jpg','assets/desafiate-bo.png']},
      {title:'Regional adaptations', copy:'One campaign system adapted across Bolivia, Paraguay and Uruguay.', images:['assets/desafiate-bo.png','assets/desafiate-py.png','assets/desafiate-uy-1.jpg']}
    ]},
    { id:'sin-filtrar', visible:true, category:'Brand Systems', title:'Sin Filtrar', client:'AB InBev / Regional Podcast', role:'Visual identity · Content brand system · Launch materials', cover:'assets/sin-filtrar-set.jpg', headline:'A podcast brand system designed to bring internal culture stories to life.', challenge:'Bring AB InBev culture closer to collaborators through a format that felt authentic, human and far from traditional corporate communication.', response:'Created a visual identity and 360° communication system for an internal podcast, connecting leadership stories, cultural principles and digital assets across channels.', outcome:'A recognizable internal content brand with 10 episodes, campaign assets and more than 900 total listens/views across the rollout.', sections:[
      {title:'Content brand system', copy:'Sin Filtrar translated culture into conversations: a visual identity, set language and communication system designed to support every episode.', images:['assets/sin-filtrar-set.jpg','assets/sin-filtrar-video.mp4','assets/sin-filtrar-spotify.png']},
      {title:'Launch & episode assets', copy:'The system was built to work across teasers, episode cards, QR posters, Spotify assets and internal channels.', images:['assets/sin-filtrar-01.jpeg','assets/sin-filtrar-02.jpeg','assets/sin-filtrar-03.jpeg','assets/sin-filtrar-04.jpeg','assets/sin-filtrar-05.jpeg','assets/sin-filtrar-06.jpeg']},
      {title:'Campaign rollout', copy:'A consistent visual language sustained the launch and continuity of the podcast across several months and multiple leadership stories.', images:['assets/sin-filtrar-07.jpeg','assets/sin-filtrar-08.jpeg','assets/sin-filtrar-09.jpeg']}
    ]},
    { id:'cultural-identity-bu-andina', visible:true, category:'Brand Systems', title:'Cultura BU Andina Identity', client:'AB InBev / BU Andina', role:'Brand guidelines · Asset center · Internal identity system', cover:'assets/culture-01.jpg', headline:'A practical identity toolkit and asset center for internal culture communications.', challenge:'Create a consistent source of truth for the visual identity of the 10 Principles, making it easier for teams to apply the system correctly across communications.', response:'Developed a brand manual with logo rules, color, typography, graphic system, photography criteria and applications, plus a digital site to centralize assets.', outcome:'A more consistent and scalable way to produce internal culture materials across teams, countries and channels.', sections:[
      {title:'Brand guidelines', copy:'The toolkit documents the visual system: logo versions, spacing, color usage, typography, graphic system and correct / incorrect applications.', images:['assets/culture-01.jpg','assets/culture-02.jpg','assets/culture-03.jpg','assets/culture-05.jpg','assets/culture-06.jpg']},
      {title:'Visual system', copy:'The identity is built through a gold, black and white palette, typographic rules and icons for the 10 Principles.', images:['assets/culture-11.jpg','assets/culture-12.jpg','assets/culture-13.jpg','assets/culture-16.jpg']},
      {title:'Asset center', copy:'The site centralizes brand resources so communication teams can find updated assets and apply the system consistently.', images:['assets/culture-asset-center.mp4']}
    ]},
    { id:'desiderata', visible:true, category:'Campaign Design', title:'Desiderata', client:'Mazalosa / Fashion Retail', role:'Senior Graphic Designer · Campaign design · Retail and digital assets', cover:'assets/desiderata-elmar.jpg', headline:'Brand experiences across retail, digital, OOH and campaign systems.', challenge:'Build campaign universes for a fashion retail brand across multiple touchpoints, from digital to physical retail.', response:'Designed campaign assets, retail graphics, digital communications, editorial layouts, packaging and brand visibility pieces with a consistent visual language.', outcome:'A body of work that shows brand experience across collections, launches, retail, OOH and digital communication.', sections:[
      {title:'The brand', copy:'Desiderata is a fashion retail brand with a broad ecosystem: collections, stores, social, e-commerce, OOH, brand activations and product launches.', images:['assets/desiderata-elmar.jpg','assets/desiderata-descontrol.jpg']},
      {title:'Campaigns', copy:'Selected visual systems for fashion campaigns, seasonal actions and product launches.', images:['assets/desiderata-elmar.jpg','assets/desiderata-descontrol.jpg','assets/desiderata-fragancias.jpg']},
      {title:'Digital & Social', copy:'Newsletters, web assets, social content and digital touchpoints.', images:['assets/desiderata-newsletter.jpg','assets/desiderata-descontrol.jpg']},
      {title:'Retail & Brand Experience', copy:'Material designed to live in stores, windows, promotional spaces and physical touchpoints.', images:['assets/desiderata-fragancias.jpg','assets/desiderata-elmar.jpg']}
    ]},
    { id:'ucollective', visible:true, category:'Campaign Design', title:'UCollective', client:'NAIMA / Fashion Brand', role:'Brand communication · Social media · Editorial campaigns', cover:'assets/ucollective-1.jpg', headline:'Editorial fashion campaigns and digital brand storytelling.', challenge:'Develop visual content for a contemporary fashion brand across collections, campaigns and social media.', response:'Created campaign visuals, feed assets, stories, web banners and editorial compositions aligned with the brand’s visual language.', outcome:'A curated body of work showing art direction, digital rhythm and fashion sensibility.', sections:[
      {title:'Editorial brand experience', copy:'A minimalist and image-led fashion universe built through social campaigns, photography and digital content.', images:['assets/ucollective-1.jpg','assets/ucollective-2.jpg','assets/ucollective-3.jpeg','assets/ucollective-newera-1.jpg','assets/ucollective-newera-2.jpg','assets/ucollective-newera-3.jpeg']},
      {title:'Digital campaigns', copy:'Launch pieces, social content and editorial compositions for collections and campaigns.', images:['assets/ucollective-2.jpg','assets/ucollective-3.jpeg','assets/ucollective-newera-1.jpg']},
      {title:'Street activation', copy:'The campaign extended beyond social media into street poster interventions, giving the brand a real presence in the city.', images:['assets/ucollective-street-1.jpeg','assets/ucollective-street-2.jpeg','assets/ucollective-street-3.jpeg','assets/ucollective-street-4.jpeg']}
    ]},
    { id:'presente', visible:true, category:'UX/UI Design', title:'Presente', client:'Academic UX/UI Project', role:'UX Research · UI Design · Product concept · Prototype', cover:'assets/presente-hero.jpg', headline:'A 360° digital gifting experience designed to make giving feel simple and stress-free.', challenge:'Design a mobile app that helps busy people remember important dates, choose better gifts and manage the full gifting process.', response:'Built a digital product concept with research, personas, information architecture, user flow, wireframes, UI kit, testing and final iOS screens.', outcome:'A complete academic product design case showing UX thinking, interface design and a human-centered approach to service design.', sections:[
      {title:'Product concept', copy:'Presente is a native iOS app concept for organizing, choosing and managing gifts through a 360° digital gifting service.', images:['assets/presente-hero.jpg','assets/presente-scene.png','assets/presente-mockup.png']},
      {title:'UX process', copy:'The case includes problem definition, personas, MVP, information architecture, user flow, wireframes and usability testing.', images:['assets/presente-media.png','assets/presente-rect3.png','assets/presente-rect.png']},
      {title:'UI system', copy:'A soft visual system with logo, icon, gradient, app screens and interface components designed for a warm mobile experience.', images:['assets/presente-logo.png','assets/presente-scene.png','assets/presente-mockup.png']}
    ]}
  ]
};
function getPublished(){ return JSON.parse(localStorage.getItem('paulaPortfolioPublished') || 'null') || DEFAULT_PORTFOLIO; }
function getDraft(){ return JSON.parse(localStorage.getItem('paulaPortfolioDraft') || 'null') || getPublished(); }
function saveDraft(data){ localStorage.setItem('paulaPortfolioDraft', JSON.stringify(data)); }
function publishDraft(){ localStorage.setItem('paulaPortfolioPublished', localStorage.getItem('paulaPortfolioDraft') || JSON.stringify(DEFAULT_PORTFOLIO)); }
function resetAll(){ localStorage.removeItem('paulaPortfolioDraft'); localStorage.removeItem('paulaPortfolioPublished'); }
