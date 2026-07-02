const DEFAULT_PORTFOLIO = {
  theme: { bg:'#f7f6f2', ink:'#101010', muted:'#002FA7', line:'#d7d5ce', black:'#050505', white:'#f7f6f2', ikb:'#002FA7', fontDisplay:'Archivo', fontBody:'Inter' },
  links: { email:'mailto:paulafreireok@hotmail.com', linkedin:'https://www.linkedin.com/in/paulafreireok/', behance:'https://www.behance.net/paulafreireok', resume:'#' },
  home: {
    name:'Paula Freire',
    location:'Buenos Aires, Argentina',
    kicker:'Designing clarity through visual systems.',
    intro:'I turn complex ideas into clear, memorable brand experiences.',
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
    { id:'desafiate-desafianos', visible:true, category:'Brand Systems', title:'DesafiaTE DesafiaNOS', client:'AB InBev / Pasantías 2026', role:'Regional visual adaptation · Campaign design · Communication assets', cover:'assets/desafiate-home.png', headline:'A regional employer branding campaign adapted for Bolivia, Paraguay and Uruguay.', challenge:'Adapt an existing campaign across Bolivia, Paraguay and Uruguay while aligning with each country´s employer brand, visual guidelines and local communication needs.', response:'Localized layouts, copy and visual assets for each market while maintaining a consistent regional identity.', outcome:'Delivered a cohesive regional rollout that balanced regional consistency with local relevance.', sections:[
      {title:'Overview', layout:'vertical', images:['assets/desafiate-hero-1.png','assets/desafiate-hero-2.jpg','assets/desafiate-bo.png']},
            {title:'Video adaptations', layout:'vertical', images:['assets/video-1.mp4','assets/video-2.mp4','assets/video-3.mp4']},
{title:'Regional adaptations', layout:'horizontal', images:['assets/KV_DESAFIANOS.png','assets/desafiate-py.png','assets/desafiate-uy-1.jpg']}
    ]},
    { id:'sin-filtrar', visible:true, category:'Brand Systems', title:'Sin Filtrar', client:'AB InBev / Regional Podcast', role:'Visual identity · Content brand system · Launch materials', cover:'assets/sin-filtrar-set.jpg', headline:'A podcast brand that brings leadership stories and company culture together.', challenge:'Bring AB InBev culture closer to employees through a format that felt authentic, human and far from traditional corporate communication.', response:'Created the visual identity and launch system for an internal podcast, bringing together leadership stories, cultural principles and digital content across multiple channels.', outcome:'Built an internal content brand with 10 podcast episodes, supporting campaign assets and more than 900 listens and views.', sections:[
      {title:'Launch Film', layout:'full-video', images:['assets/sin-filtrar-video.mp4']},
      {title:'Launch & episode assets', layout:'full-video', images:['assets/imagen-1.jpeg','assets/imagen-2.jpeg','assets/imagen-3.jpeg']},
      {title:'Campaign rollout', images:['assets/sin-filtrar-07.jpeg','assets/sin-filtrar-08.jpg','assets/sin-filtrar-09.jpeg','assets/sin-filtrar-22.jpeg']}
    ]},
    { id:'cultural-identity-bu-andina', visible:true, category:'Brand Systems', title:'Cultura BU Andina Identity', client:'AB InBev / BU Andina', role:'Brand guidelines · Resource hub · Internal identity system', cover:'assets/culture-08.jpg', headline:'A practical identity toolkit and resource hub for internal culture communications.', challenge:'Create a single source of truth for the visual identity of the 10 Principles, making it easier for teams to apply the system consistently across communications.', response:'Developed brand guidelines covering logo usage, color, typography, graphic elements, photography and applications, supported by a digital asset hub.', outcome:'Enabled a more consistent and scalable approach to creating internal culture communications across teams, countries and channels.', sections:[
      {title:'The Brand', images:['assets/culture-01.jpg','assets/culture-02.jpg']},
      {title:'Visual system', images:['assets/culture-11.jpg','assets/culture-13.jpg','assets/culture-16.jpg','assets/culture-17.jpg']},
      {title:'Resource hub', copy:'The site centralizes brand resources so communication teams can find updated assets and apply the system consistently.', images:['assets/culture-asset-center.mp4']}
    ]},
    { id:'desiderata', visible:true, category:'Campaign Design', title:'Desiderata', client:'Mazalosa / Fashion Retail', role:'Senior Graphic Designer · Campaign design · Retail and digital assets', cover:'assets/desiderata-elmar.jpg', headline:'Brand experiences across retail, digital, OOH and seasonal campaigns.', challenge:'Build campaign concepts for a fashion retail brand across multiple touchpoints, from digital to in-store.', response:'Designed campaign assets, retail graphics, digital content, editorial layouts, packaging and in-store branding within a consistent visual system.', outcome:'A cohesive body of work spanning collections, launches, retail, OOH and digital channels.', sections:[
      {title:'The Brand', layout:'horizontal', images:['assets/desiderata-elmar.jpg']},
      {title:'Campaigns', layout:'horizontal', images:['assets/desiderata-cyber.mp4','assets/desiderata-descontrol.jpg','assets/desiderata-fragancias.jpg','assets/desiderata-verano.jpg']},
      {title:'Digital & Social', layout:'vertical', images:['assets/desiderata-newsletter.jpg','assets/desiderata-mama.jpg','assets/desiderata-insta.jpg']},
      {title:'Street activation', copy:'The campaign extended beyond social media into street poster interventions, giving the brand a real presence in the city.', images:['assets/IMG_5961.jpg','assets/IMG_5962.jpg','assets/IMG_5963.jpg','assets/viapublica.jpeg']},
      {title:'Retail & Brand Experience', layout:'mixed', images:['assets/bolsa2.jpg','assets/bolsa.jpg','assets/desiderata-fragancia2.jpg','assets/desiderata-violeta.jpg','assets/desiderata-umbro.jpg','assets/desiderata-umbro2.jpg']}
    ]},
    { id:'ucollective', visible:true, category:'Campaign Design', title:'UCollective', client:'NAIMA / Fashion Brand', role:'Brand communication · Social media · Editorial campaigns', cover:'assets/ucollective-2.jpg', headline:'Editorial fashion campaigns and digital brand storytelling.', challenge:'Develop visual content for a contemporary fashion brand across collections, campaigns and social media.', response:'Created campaign visuals, social content, web banners and editorial layouts aligned with the brand´s visual language.', outcome:'A curated body of work reflecting art direction, digital storytelling and a contemporary fashion aesthetic.', sections:[
      {title:'Editorial brand experience', copy:'A minimalist and image-led fashion universe built through social campaigns, photography and digital content.', images:['assets/uco2.jpg','assets/ucollective-3.jpeg','assets/uco3.jpeg']},
      {title:'Digital campaigns', copy:'Launch pieces, social content and editorial compositions for collections and campaigns.', images:['assets/uco4.jpg','assets/uco5.jpg','assets/uco6.jpg']},
      {title:'Street activation', copy:'The campaign extended beyond social media into street poster interventions, giving the brand a real presence in the city.', images:['assets/ucollective-street-1.jpeg','assets/ucollective-street-2.jpeg','assets/ucollective-street-3.jpeg','assets/ucollective-street-4.jpeg']}
    ]},
    { id:'presente', visible:true, category:'UX/UI Design', title:'Presente', client:'Academic UX/UI Project', role:'UX Research · UI Design · Product concept · Prototype', cover:'assets/presente-hero.jpg', headline:'An end-to-end gifting experience designed to make gift giving simple and stress-free.', challenge:'Design a mobile app that helps people remember important occasions, choose meaningful gifts and manage the entire gifting experience.', response:'Developed a product concept through user research, personas, information architecture, user flows, wireframes, UI design, usability testing and a high-fidelity prototype for iOS.', outcome:'A UX/UI case study demonstrating user-centered thinking, interface design and service design principles.', sections:[
      {title:'Product concept', copy:'Presente is a native iOS app concept for organizing, choosing and managing gifts through a 360° digital gifting service.', images:['assets/presente0.jpg','assets/presente-mockup.png']},
      {title:'UX process', copy:'The case includes problem definition, personas, MVP, information architecture, user flow, wireframes and usability testing.', images:['assets/pre2.png','assets/pre5.jpg']},
      {title:'UI system', copy:'A soft visual system with logo, icon, gradient, app screens and interface components designed for a warm mobile experience.', images:['assets/presente-logo.png','assets/presente-scene.png','assets/pre3.png']}
    ]}
  ]
};
function getPublished(){ return JSON.parse(localStorage.getItem('paulaPortfolioPublished') || 'null') || DEFAULT_PORTFOLIO; }
function getDraft(){ return JSON.parse(localStorage.getItem('paulaPortfolioDraft') || 'null') || getPublished(); }
function saveDraft(data){ localStorage.setItem('paulaPortfolioDraft', JSON.stringify(data)); }
function publishDraft(){ localStorage.setItem('paulaPortfolioPublished', localStorage.getItem('paulaPortfolioDraft') || JSON.stringify(DEFAULT_PORTFOLIO)); }
function resetAll(){ localStorage.removeItem('paulaPortfolioDraft'); localStorage.removeItem('paulaPortfolioPublished'); }
