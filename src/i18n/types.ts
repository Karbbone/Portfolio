export type Locale = "fr" | "en";

export interface WorkExperience {
  position: string;
  dateRange: string;
  tasks: string[];
}

export interface SkillSection {
  title: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    keywords: string;
    jobTitle: string;
    jobDescription: string;
  };
  header: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    backToPortfolio: string;
    menuLabel: string;
    closeMenuLabel: string;
    languageSelector: string;
  };
  hero: {
    name: string;
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    downloadCv: string;
    addLinkedin: string;
    portraitAlt: string;
  };
  work: {
    title: string;
    timelineLabel: string;
    showExperience: string;
    currentPosition: string;
    present: string;
    viewSite: string;
    missionsTitle: string;
    techStackTitle: string;
    experiences: {
      mediamag: WorkExperience;
      inovera: WorkExperience;
    };
  };
  expH: {
    title: string;
    frontend: SkillSection;
    backend: SkillSection;
    devops: SkillSection;
    visitSite: string;
  };
  expS: {
    title: string;
    listening: {
      title: string;
      description: string;
    };
    teamwork: {
      title: string;
      description: string;
    };
    curious: {
      title: string;
      description1: string;
      description2: string;
    };
    volunteer: {
      title: string;
      description: string;
      cta: string;
    };
  };
  projects: {
    title: string;
    sourceCode: string;
    pokemonStudio: {
      description: string;
    };
    todaysFlag: {
      description: string;
    };
  };
  contact: {
    title: string;
    emailInfo: string;
    labelName: string;
    labelFirstName: string;
    labelEmail: string;
    labelMessage: string;
    submit: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    copyright: string;
    legalLink: string;
  };
  legal: {
    title: string;
    editorTitle: string;
    editorName: string;
    editorStatus: string;
    editorStatusValue: string;
    editorLocation: string;
    editorLocationValue: string;
    editorEmail: string;
    publicationDirectorTitle: string;
    publicationDirector: string;
    publicationContact: string;
    hostingTitle: string;
    hostingProvider: string;
    hostingAddress: string;
    hostingPhone: string;
    hostingWebsite: string;
    hostingNote: string;
    intellectualPropertyTitle: string;
    intellectualProperty1: string;
    intellectualProperty2: string;
    personalDataTitle: string;
    personalData1: string;
    personalData2: string;
    cookiesTitle: string;
    cookiesIntro: string;
    cookiesUmami: string;
    cookiesRecaptcha: string;
    cookiesEmailjs: string;
    cookiesNote1: string;
    cookiesNote2: string;
    liabilityTitle: string;
    liability1: string;
    liability2: string;
    accessibilityTitle: string;
    accessibility: string;
    lawTitle: string;
    law: string;
  };
}
