export const BASE_URL = 'https://proinvest.trade';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
}

export interface SEOConfig {
  [path: string]: {
    en: PageSEO;
    fr: PageSEO;
  };
}

export const seoConfig: SEOConfig = {
  '/': {
    en: {
      title: 'ProInvest - Sports Team Management Platform | TeamOps',
      description: 'ProInvest builds technology platforms for modern sports. TeamOps is the all-in-one team management app for youth and amateur sports teams. Scheduling, rosters, medical compliance, payments.',
      keywords: 'sports team management, hockey team app, youth sports software, team scheduling app, roster management, HIPAA compliant sports app, TeamOps',
    },
    fr: {
      title: 'ProInvest - Plateforme de Gestion d\'Équipe Sportive | TeamOps',
      description: 'ProInvest construit des plateformes technologiques pour le sport moderne. TeamOps est l\'app tout-en-un pour équipes jeunesse et amateurs. Horaires, alignements, conformité médicale, paiements.',
      keywords: 'gestion équipe sportive, app hockey, logiciel sport jeunesse, app horaire équipe, gestion alignement, TeamOps',
    },
  },

  '/products/teamops': {
    en: {
      title: 'TeamOps - Team Management App for Youth & Amateur Sports',
      description: 'TeamOps replaces spreadsheets, group chats, and paper forms. One app for scheduling, rosters, medical compliance, attendance, payments. HIPAA & GDPR compliant. Free during beta.',
      keywords: 'TeamOps, team management app, youth hockey app, amateur sports software, HIPAA compliant, roster management, attendance tracking, sports scheduling',
    },
    fr: {
      title: 'TeamOps - App de Gestion d\'Équipe pour Sports Jeunesse et Amateurs',
      description: 'TeamOps remplace vos tableurs, groupes de discussion et formulaires papier. Une app pour horaires, alignements, conformité médicale, présences, paiements. Conforme HIPAA/RGPD. Gratuit en bêta.',
      keywords: 'TeamOps, app gestion équipe, hockey jeunesse, logiciel sport amateur, conforme HIPAA, gestion alignement, suivi présences',
    },
  },

  '/products/proinvest-ecosystem': {
    en: {
      title: 'ProInvest Ecosystem - Enterprise Fan Engagement for Pro Sports',
      description: 'Enterprise fan engagement infrastructure for professional sports teams. White-label mobile apps, real-time contests, lifetime loyalty programs, and first-party analytics.',
      keywords: 'fan engagement platform, pro sports technology, white-label sports app, sports loyalty program, sports analytics, professional sports software',
    },
    fr: {
      title: 'Écosystème ProInvest - Engagement des Partisans pour Sports Pro',
      description: 'Infrastructure d\'engagement des partisans pour équipes sportives professionnelles. Apps mobiles, concours temps réel, programmes de fidélité à vie et analytique.',
      keywords: 'plateforme engagement partisans, technologie sport pro, app sport marque blanche, programme fidélité sport, analytique sportive',
    },
  },

  '/about': {
    en: {
      title: 'About ProInvest - Built by Coaches, for Coaches',
      description: 'Meet the team behind ProInvest and TeamOps. We\'ve spent years managing youth hockey teams and built the software we needed ourselves. Backed by NextAI and ZeroLabs.',
      keywords: 'ProInvest team, about ProInvest, sports tech startup, NextAI, ZeroLabs, Canadian sports technology',
    },
    fr: {
      title: 'À Propos de ProInvest - Par des Coachs, pour des Coachs',
      description: 'Rencontrez l\'équipe derrière ProInvest et TeamOps. Nous avons géré des équipes jeunesse pendant des années et créé le logiciel dont nous avions besoin. Appuyés par NextAI et ZeroLabs.',
      keywords: 'équipe ProInvest, à propos ProInvest, startup technologie sportive, NextAI, ZeroLabs, technologie sportive canadienne',
    },
  },

  '/contact': {
    en: {
      title: 'Contact ProInvest - Get in Touch',
      description: 'Contact the ProInvest team. Request beta access to TeamOps, ask questions, or learn more about our sports technology platforms.',
      keywords: 'contact ProInvest, TeamOps beta access, sports software demo, get in touch',
    },
    fr: {
      title: 'Contacter ProInvest - Nous Joindre',
      description: 'Contactez l\'équipe ProInvest. Demandez l\'accès bêta à TeamOps, posez vos questions ou apprenez-en plus sur nos plateformes technologiques sportives.',
      keywords: 'contacter ProInvest, accès bêta TeamOps, démo logiciel sport, nous joindre',
    },
  },

  '/feature-request': {
    en: {
      title: 'Feature Requests - Help Shape TeamOps',
      description: 'Submit feature requests for TeamOps and vote on ideas from the community. Help us build the team management app you need.',
      keywords: 'TeamOps feature request, sports app feedback, product roadmap, user feedback',
    },
    fr: {
      title: 'Demandes de Fonctionnalités - Aidez à Façonner TeamOps',
      description: 'Soumettez des demandes de fonctionnalités pour TeamOps et votez sur les idées de la communauté. Aidez-nous à créer l\'app dont vous avez besoin.',
      keywords: 'demande fonctionnalité TeamOps, feedback app sport, feuille de route produit, feedback utilisateur',
    },
  },
};

// Open Graph image (use an existing image)
export const OG_IMAGE = `${BASE_URL}/TeamOps_app_icon.png`;

// Organization info for structured data
export const ORGANIZATION = {
  name: 'ProInvest',
  url: BASE_URL,
  logo: `${BASE_URL}/proinvest-logo.png`,
  description: {
    en: 'ProInvest builds technology platforms for modern sports — from youth teams to professional leagues.',
    fr: 'ProInvest construit des plateformes technologiques pour le sport moderne — des équipes jeunes aux ligues professionnelles.',
  },
  foundingDate: '2024',
  founders: ['Philippe Trop', 'Blake Nielsen', 'Salvatore Papia', 'Martin Villeneuve'],
  address: {
    addressLocality: 'Montreal',
    addressRegion: 'Quebec',
    addressCountry: 'Canada',
  },
  contactEmail: 'hello@proinvest.trade',
  socialLinks: [
    'https://www.linkedin.com/in/philippetrop/',
    'https://www.linkedin.com/in/blake-nielsen-proinvest/',
  ],
};
