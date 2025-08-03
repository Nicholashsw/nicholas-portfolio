export const ui = {
  en: {
    indexPage: {
      pageTitle: 'Home',
      description: 'Welcome to my portfolio.',
    },
    homePage: {
      heroGreeting: 'Hi, I’m Nicholas 👋',
      heroSubtitlePart1: 'Quant researcher & engineer',
      heroSubtitlePart2: 'building FX, vol, and macro trading systems',
      heroIntroduction: 'Exploring the edges of alpha, one model at a time.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing Nicholas Hong or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | Nicholas Hong's Portfolio",
      metaDescription: "Discover all of Nicholas Hong's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },
    tipsPage: {
      metaTitle: 'Development Tips | Nicholas Hong',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.',
      required_field_custom: 'The {fieldName} field is required.',
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
    },
    site: {
      title: 'Nicholas Hong',
      description:
        'Quant researcher & engineer building FX, vol, and macro trading systems',
      rights: '© 2025 Nicholas Hong. All rights reserved.',
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
      tips: 'Tips',
      contact: 'Contact',
    },
    projectsContent: {
      vrpStrategy: {
        title: "Volatility Risk Premium (VRP) Strategy [WIP]",
        description: "Multi-asset options spread backtester using delta filters and macro trend signals.",
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
    },
  },
} as const;

export const languages = {
  en: { name: 'English', flag: 'us' },
} as const;

export type LanguageCode = keyof typeof languages;
export const defaultLanguage: LanguageCode = 'en';

export const getLanguageName = (lang: LanguageCode) => languages[lang];
