// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from '@/i18n/ui';
import placeholderImage from '@/assets/placeholder.webp';
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from './type';

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: 'vrpStrategy',
    slug: 'vrp-strategy',
    imageUrl: placeholderImage,
    tags: ['FX', 'Options', 'Backtesting'],
    category: 'Quantitative Research',
    date: '2025-06-01',
    keyFeatures: [
      { id: 'multiAssetBacktesting' },
      { id: 'optionsSpread20_10Delta' },
      { id: 'macroTrendFilter200DMA' },
      { id: 'volatilityRiskPremiumCapture' },
    ],
    galleryImages: [],
  },
  {
    id: 'qrtDataChallenge',
    slug: 'qrt-data-challenge',
    imageUrl: placeholderImage,
    tags: ['Machine Learning', 'XGBoost', 'Finance'],
    category: 'Machine Learning / Quant Research',
    date: '2025-08-01',
    keyFeatures: [
      { id: 'timeSeriesML' },
      { id: 'featureEngineering' },
      { id: 'ensembleModels' },
      { id: 'hybridDeepLearning' },
    ],
    galleryImages: [],
  },
  {
    id: 'embeddedAmplifier',
    slug: 'embedded-amplifier',
    imageUrl: placeholderImage,
    tags: ['STM32', 'Python', 'Electronics'],
    category: 'Embedded Systems',
    date: '2025-05-01',
    keyFeatures: [
      { id: 'analogDigitalIntegration' },
      { id: 'realTimeVolumeControl' },
      { id: 'frequencyResponseTuning' },
      { id: 'autoClippingProtection' },
    ],
    galleryImages: [],
  },
  {
    id: 'ibkrPowerBIDashboard',
    slug: 'ibkr-dashboard',
    imageUrl: placeholderImage,
    tags: ['Power BI', 'IBKR', 'SQL'],
    category: 'WIP / On Hold',
    date: '2025-04-01',
    keyFeatures: [],
    galleryImages: [],
  },
  {
    id: 'autoApplyAgent',
    slug: 'auto-apply-agent',
    imageUrl: placeholderImage,
    tags: ['GPT', 'Automation', 'Job Applications'],
    category: 'WIP / On Hold',
    date: '2025-04-01',
    keyFeatures: [],
    galleryImages: [],
  },
];


export const projectsContent = {
  vrpStrategy: {
    title: 'Volatility Risk Premium (VRP) Strategy [WIP]',
    description: 'Multi-asset strategy using spot, futures, and options spreads to capture the volatility risk premium.',
    imageAltText: 'Chart showcasing volatility capture from FX options',
    categoryText: 'Quantitative Research',
    dateText: 'June 2025',
    detailedDescription: `A multi-market strategy capturing the volatility risk premium across Spot FX, Futures (6E, 6J), and Options on FX Futures using 20–10 delta bull/bear spreads. Entry is trend-filtered via the 200-day moving average, and coded in Python using historical data fetched from IBKR. Work-in-progress extensions include macro event triggers and multi-asset overlays (Gold, CHF, VIX).`,
    keyFeatures: {
      multiAssetBacktesting: {
        title: 'Multi-Asset Backtesting',
        description: 'Runs on Spot FX, Futures, and Options instruments with synchronized logic.'
      },
      optionsSpread20_10Delta: {
        title: '20–10 Delta Option Spread',
        description: 'Implements bull put and bear call spreads based on option delta slices.'
      },
      macroTrendFilter200DMA: {
        title: '200-Day Trend Filter',
        description: 'Determines bullish or bearish macro regime for strategy entry.'
      },
      volatilityRiskPremiumCapture: {
        title: 'Volatility Risk Premium Alpha',
        description: 'Harvests premium from option sellers by maintaining defined risk.'
      },
    },
    galleryImages: {},
    challenges: 'Building an event-driven backtester, aligning option chain dates, and integrating macro filters.',
    learnings: 'Deepened understanding of derivatives greeks, macro-volatility interplay, and options structuring.',
  },

  qrtDataChallenge: {
    title: 'QRT Data Challenge: Liquid Asset Reconstruction',
    description: 'Data science competition solving time series reconstruction with ML and feature engineering.',
    imageAltText: 'Liquid asset heatmap and reconstructed curves',
    categoryText: 'Machine Learning / Quant Research',
    dateText: 'August 2025',
    detailedDescription: `Participating in QRT's financial data competition to reconstruct missing liquid asset performance. Currently applying XGBoost and LightGBM with temporal features, volatility regimes, and anomaly detection logic. Exploring CNN + MLP hybrid models and feature selection to optimize RMSE. Ongoing experiment tracking and pipeline tuning in Python.`,
    keyFeatures: {
      timeSeriesML: {
        title: 'Time-Series Forecasting',
        description: 'Applies temporal machine learning to reconstruct missing asset returns.'
      },
      featureEngineering: {
        title: 'Feature Engineering',
        description: 'Builds volatility clusters, lag windows, macro regimes for predictive power.'
      },
      ensembleModels: {
        title: 'XGBoost & LightGBM',
        description: 'Runs boosting trees with cross-validation to minimize error.'
      },
      hybridDeepLearning: {
        title: 'CNN + MLP Prototype',
        description: 'Experimental convolutional and dense neural net for signal refinement.'
      },
    },
    galleryImages: {},
    challenges: 'Tuning RMSE under data gaps, avoiding leakage, and aligning features to macro shifts.',
    learnings: 'Improved financial ML modeling, validation discipline, and experiment management.',
  },

  embeddedAmplifier: {
    title: 'Automatic Volume Control for Audio Amplifier',
    description: 'Engineered and integrated a closed-loop audio amplifier using analog circuitry and real-time Python feedback.',
    imageAltText: 'Block diagram of audio amplifier with microcontroller',
    categoryText: 'Embedded Systems',
    dateText: 'May 2025',
    detailedDescription: `Designed and built a closed-loop audio amplifier system (THAT2180C VCA, LM380N PA, CA3140 VU Meter) on STM32 using MicroPython. Calibrated subsystem gains and offsets, characterized PA response from 100Hz to 50kHz, and implemented a control algorithm in Python with Jupyter+ipywidgets to maintain real-time loudness stability using RMS feedback. System reduces clipping and auto-adjusts volume.`,
    keyFeatures: {
      analogDigitalIntegration: {
        title: 'Analog + Digital Integration',
        description: 'Combined analog audio electronics with STM32 feedback loop using MicroPython.'
      },
      realTimeVolumeControl: {
        title: 'Real-Time Volume Control',
        description: 'Maintains consistent RMS output using step-up/down logic and VU feedback.'
      },
      frequencyResponseTuning: {
        title: 'PA Frequency Characterization',
        description: 'Measured and tuned amplifier response from 100Hz to 50kHz.'
      },
      autoClippingProtection: {
        title: 'Clipping Protection',
        description: 'System detects saturation and reduces gain to prevent distortion.'
      },
    },
    galleryImages: {},
    challenges: 'Tuning feedback loop timing, analog signal noise, and VU accuracy under dynamic load.',
    learnings: 'Gained hands-on experience in embedded systems, control theory, audio electronics, and microcontroller firmware.',
  },

  ibkrPowerBIDashboard: {
    title: '[Inactive] IBKR Power BI Dashboard',
    description: '[To be resumed] Live portfolio tracker integrating Python, Supabase, and Power BI for FX and equities.',
    imageAltText: 'IBKR dashboard preview',
    categoryText: 'WIP / On Hold',
    dateText: 'Paused',
    detailedDescription: 'This project is paused. Intended to visualize live portfolio holdings and performance using IBKR API + Power BI with SQL integration.',
    keyFeatures: {},
    galleryImages: {},
    challenges: '',
    learnings: '',
  },

  autoApplyAgent: {
    title: '[Inactive] AutoApply Agent',
    description: '[To be resumed] AI agent that auto-fills internship/job applications using resume parsing and GPT.',
    imageAltText: 'Agent UI preview',
    categoryText: 'WIP / On Hold',
    dateText: 'Paused',
    detailedDescription: 'This project is paused. Goal was to create a browser automation + GPT-powered agent to select resumes, answer questions, and track application progress across portals like Workday and Greenhouse.',
    keyFeatures: {},
    galleryImages: {},
    challenges: '',
    learnings: '',
  },
}



export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  // Sort by date, most recent first. Ensure 'date' is a valid date string.
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  // Remove problematic type assertion and use string for key
  const currentProjectId = project.id as string;

  // Use 'as any' for ui to bypass index type errors
  const langUi = ui as any;
  const projectContentSource =
    lang in langUi && langUi[lang]?.projectsContent?.[currentProjectId]
      ? langUi[lang].projectsContent
      : langUi[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  if (!i18nData) {
    // Fallback if translation for the project ID is missing
    // This might happen if i18n/ui.ts is not updated after adding a new project
    console.warn(
      `Translation missing for project ID: ${project.id} in language: ${lang}. Using default values.`
    );
    return {
      ...project,
      title: project.id, // Fallback title
      description: 'Description missing for this project.', // Fallback description
      imageAltText: 'Placeholder image', // Fallback alt text
      categoryText: project.category,
      dateText: project.date,
      detailedDescription: 'Detailed description missing.',
      keyFeaturesTranslated:
        project.keyFeatures?.map((kf) => ({
          ...kf,
          title: kf.id,
          description: 'N/A',
        })) ?? [],
      galleryImagesTranslated:
        project.galleryImages?.map((gi) => ({
          ...gi,
          alt: 'N/A',
          caption: 'N/A',
        })) ?? [],
      challenges: 'Challenges information missing.',
      learnings: 'Learnings information missing.',
    };
  }

  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: 'Description missing',
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: '',
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? 'Detailed description missing',
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? 'Challenges information missing',
    learnings: i18nData?.learnings ?? 'Learnings information missing',
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills
export const skillsList: Array<SkillData> = [
  {
    id: 'frontendDevelopment',
    iconName: 'MonitorSmartphone',
    technologies: [
      { id: 'html', name: 'HTML' },
      { id: 'css', name: 'CSS' },
      { id: 'javascript', name: 'JavaScript' },
      { id: 'typescript', name: 'TypeScript' },
    ],
  },
  {
    id: 'backendDevelopment',
    iconName: 'ServerCog',
    technologies: [
      { id: 'nodejs', name: 'Node.js' },
      { id: 'restapi', name: 'REST APIs' },
    ],
  },
  {
    id: 'uiUxDesign',
    iconName: 'PenTool',
    technologies: [
      { id: 'figma', name: 'Figma' },
      { id: 'responsiveDesign', name: 'Responsive Design' },
    ],
  },
  {
    id: 'devOps',
    iconName: 'Network',
    technologies: [
      { id: 'git', name: 'Git' },
      { id: 'docker', name: 'Docker' },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  // Fallback: just return the skillsList with id as title/description
  return skillsList.map((skill) => ({
    ...skill,
    title: skill.id,
    description: 'Description missing for this skill.',
  }));
}
