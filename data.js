const DEFAULT_PORTFOLIO = {
  theme: { bg:'#f7f6f2', ink:'#101010', muted:'#6f6f6b', line:'#d7d5ce', black:'#050505', white:'#f7f6f2', ikb:'#002FA7', fontDisplay:'Archivo', fontBody:'Inter' },
  links: { email:'mailto:paulafreireok@hotmail.com', linkedin:'#', behance:'#', resume:'#' },
  home: {
    name:'Paula Freire',
    location:'Buenos Aires, Argentina',
    kicker:'Designing clarity through visual systems.',
    intro:'I create campaigns, presentations and brand experiences that connect strategy, creativity and people across brands, teams and regions.',
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
      ['2021 — 2022','Graphic Designer','NAIMA / Ucollective'],
      ['2020 — 2021','Graphic Designer Jr.','Agencia Chula']
    ]
  },
  projects: [
    { id:'desafiate-desafianos', visible:true, category:'Brand Systems', title:'DesafiaTE DesafiaNOS', client:'AB InBev / Pasantías 2026', role:'Regional visual adaptation · Campaign design · Communication assets', cover:'assets/desafiate-home.png', headline:'A regional employer branding campaign adapted for Bolivia, Paraguay and Uruguay.', challenge:'Adapt an existing campaign identity across Bolivia, Paraguay and Uruguay while respecting each country’s employer brand identity, visual guidelines and local communication needs.', response:'Translated the base concept into country-specific assets, adjusting layouts, messaging and visual applications to keep the campaign consistent while aligned with each local employer brand.', outcome:'A cohesive regional rollout that preserved the campaign’s core idea while allowing each country to communicate it in a way that felt ownable, aligned and locally relevant.', sections:[
      {title:'Overview', copy:'DesafiaTE · DesafiaNOS was a regional internship campaign built to attract young talent while respecting each country’s employer brand.', images:['assets/desafiate-hero-1.png','assets/desafiate-hero-2.jpg','assets/desafiate-bo.png']},
      {title:'Regional adaptations', copy:'One campaign system adapted across Bolivia, Paraguay and Uruguay.', images:['assets/desafiate-bo.png','assets/desafiate-py.png','assets/desafiate-uy-1.jpg']}
    ]},
    { id:'desiderata', visible:true, category:'Campaign Design', title:'Desiderata', client:'Mazalosa / Fashion Retail', role:'Senior Graphic Designer · Campaign design · Retail and digital assets', cover:'assets/desiderata-elmar.jpg', headline:'Brand experiences across retail, digital, OOH and campaign systems.', challenge:'Build campaign universes for a fashion retail brand across multiple touchpoints, from digital to physical retail.', response:'Designed campaign assets, retail graphics, digital communications, editorial layouts, packaging and brand visibility pieces with a consistent visual language.', outcome:'A body of work that shows brand experience across collections, launches, retail, OOH and digital communication.', sections:[
      {title:'The brand', copy:'Desiderata is a fashion retail brand with a broad ecosystem: collections, stores, social, e-commerce, OOH, brand activations and product launches.', images:['assets/desiderata-elmar.jpg','assets/desiderata-descontrol.jpg']},
      {title:'Campaigns', copy:'Selected visual systems for fashion campaigns, seasonal actions and product launches.', images:['assets/desiderata-elmar.jpg','assets/desiderata-descontrol.jpg','assets/desiderata-fragancias.jpg']},
      {title:'Digital & Social', copy:'Newsletters, web assets, social content and digital touchpoints.', images:['assets/desiderata-newsletter.jpg','assets/desiderata-descontrol.jpg']},
      {title:'Retail & Brand Experience', copy:'Material designed to live in stores, windows, promotional spaces and physical touchpoints.', images:['assets/desiderata-fragancias.jpg','assets/desiderata-elmar.jpg']}
    ]},
    { id:'ucollective', visible:true, category:'Campaign Design', title:'UCollective', client:'NAIMA / Fashion Brand', role:'Brand communication · Social media · Editorial campaigns', cover:'assets/ucollective-1.jpg', headline:'Editorial fashion campaigns and digital brand storytelling.', challenge:'Develop visual content for a contemporary fashion brand across collections, campaigns and social media.', response:'Created campaign visuals, feed assets, stories, web banners and editorial compositions aligned with the brand’s visual language.', outcome:'A curated body of work showing art direction, digital rhythm and fashion sensibility.', sections:[
      {title:'Editorial Brand Experience', copy:'A minimalist and image-led fashion universe built through social campaigns, photography and digital content.', images:['assets/ucollective-1.jpg','assets/ucollective-2.jpg','assets/ucollective-3.jpeg']},
      {title:'Digital Campaigns', copy:'Launch pieces, social content and editorial compositions for collections and campaigns.', images:['assets/ucollective-2.jpg','assets/ucollective-3.jpeg']}
    ]},
    { id:'sin-filtrar', visible:true, category:'Brand Systems', title:'Sin Filtrar', client:'AB InBev / Regional Podcast', role:'Visual identity · Content brand system · Launch materials', cover:'', headline:'A podcast identity system designed for internal culture storytelling.', challenge:'Create a flexible identity for a podcast that could live across internal channels, countries and formats.', response:'Built a visual system adaptable to covers, launch communications, clips, presentations and internal platforms.', outcome:'A recognizable content brand connecting culture, leadership and storytelling across the business.', sections:[{title:'Coming soon', copy:'This case is ready to be edited when final assets are available.', images:[]}]},
    { id:'cultural-identity-bu-andina', visible:true, category:'Communication Systems', title:'Cultural Identity — BU Andina', client:'AB InBev / BU Andina', role:'Internal branding · Culture communication · Regional visual system', cover:'', headline:'A visual system for cultural communication across a regional business unit.', challenge:'Give culture initiatives a clear identity across countries, channels and moments.', response:'Designed a system for cultural narratives, leadership moments and regional materials across screens, newsletters and decks.', outcome:'A stronger visual identity for BU Andina culture communications: connected, clear and recognizable.', sections:[{title:'Coming soon', copy:'Add project images, videos and sections from the private editor.', images:[]}]},
    { id:'presente', visible:true, category:'UX/UI Design', title:'Presente', client:'Digital Product Concept', role:'UX/UI · Visual design · Digital product concept', cover:'', headline:'A simple and emotional digital gifting experience.', challenge:'Design a digital gifting experience that felt simple, immediate and useful.', response:'Created clear user flows and a soft, approachable visual system prioritizing the emotional quality of giving.', outcome:'A product case showing UX thinking, interface design and human-centered visual decisions.', sections:[{title:'Coming soon', copy:'Add app screens and UX process from the private editor.', images:[]}]}
  ]
};
function getPublished(){ return JSON.parse(localStorage.getItem('paulaPortfolioPublished') || 'null') || DEFAULT_PORTFOLIO; }
function getDraft(){ return JSON.parse(localStorage.getItem('paulaPortfolioDraft') || 'null') || getPublished(); }
function saveDraft(data){ localStorage.setItem('paulaPortfolioDraft', JSON.stringify(data)); }
function publishDraft(){ localStorage.setItem('paulaPortfolioPublished', localStorage.getItem('paulaPortfolioDraft') || JSON.stringify(DEFAULT_PORTFOLIO)); }
function resetAll(){ localStorage.removeItem('paulaPortfolioDraft'); localStorage.removeItem('paulaPortfolioPublished'); }
