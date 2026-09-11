import {
  FeatureItem,
  CategoryItem,
  StepItem,
  AppScreenshot,
  TargetUserItem,
} from '../types';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.verbixo.english';

export const IOS_APP_URL = 'https://verbixo.in';

export const APP_INFO = {
  name: 'VERBIXO: English Learning',
  packageId: 'com.verbixo.english',
  tagline: 'Speak English With Confidence.',
  supportingLine: 'Learn. Practice. Communicate.',
  shortDescription:
    'Build practical English speaking and communication skills with daily-use sentences, real-life conversations and interactive practice.',
  trustBadge: 'Daily Practice • Spoken English • Real-Life Communication',
  iconUrl: '/app-assets/icon.png',
};

export const ABOUT_INFO = {
  title: 'English For Real Life.',
  description:
    'VERBIXO helps learners practice practical English for everyday situations instead of focusing only on isolated grammar rules.',
  highlights: [
    {
      title: 'Daily English Practice',
      desc: 'Bite-sized daily routines that make speaking second nature.',
      icon: 'CalendarDays',
    },
    {
      title: 'Spoken English',
      desc: 'Natural expressions and everyday pronunciation rhythms.',
      icon: 'MessageSquareHeart',
    },
    {
      title: 'Real-Life Conversations',
      desc: 'Situational dialogues tailored for real interactions.',
      icon: 'Users2',
    },
    {
      title: 'Communication Skills',
      desc: 'Express opinions and thoughts clearly with confidence.',
      icon: 'Sparkles',
    },
    {
      title: 'Interactive Learning',
      desc: 'Active sentence formation exercises and instant feedback.',
      icon: 'CheckCircle2',
    },
    {
      title: 'Progress & Streaks',
      desc: 'Habit-building streak counters to keep you consistent.',
      icon: 'Flame',
    },
  ],
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'daily-sentences',
    title: 'DAILY USE SENTENCES',
    description:
      'Practice useful English sentences you can actually use in everyday conversations.',
    icon: 'BookOpenCheck',
    badge: 'Core Daily Habit',
  },
  {
    id: 'spoken-english',
    title: 'SPOKEN ENGLISH',
    description:
      'Understand commonly used expressions and practice forming natural sentences.',
    icon: 'Volume2',
    badge: 'Fluency Focus',
  },
  {
    id: 'real-life-english',
    title: 'REAL-LIFE ENGLISH',
    description:
      'Practice English around everyday situations like greetings, family, school, friends, shopping, travel and conversations.',
    icon: 'Compass',
    badge: '9+ Situations',
  },
  {
    id: 'communication-skills',
    title: 'COMMUNICATION SKILLS',
    description:
      'Improve the way you express yourself and build confidence in common communication situations.',
    icon: 'Award',
    badge: 'Confidence Builder',
  },
  {
    id: 'interactive-practice',
    title: 'INTERACTIVE PRACTICE',
    description:
      'Learn through short activities, sentence-based exercises and practical practice.',
    icon: 'Target',
    badge: 'Active Exercises',
  },
  {
    id: 'progress-streaks',
    title: 'PROGRESS & STREAKS',
    description:
      'Keep your learning habit going by tracking progress and maintaining your practice streak.',
    icon: 'Flame',
    badge: 'Daily Motivation',
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'greetings',
    title: 'Greetings',
    description: 'Polite welcomes, introductions, and everyday icebreakers.',
    icon: 'HandMetal',
    samplePhrases: [
      {
        en: '“Nice to meet you! How have you been lately?”',
        context: 'Friendly informal greeting',
      },
      {
        en: '“Good morning, hope you are having a productive week.”',
        context: 'Polite daytime greeting',
      },
      {
        en: '“It was wonderful catching up with you today.”',
        context: 'Wrap-up & parting farewell',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family',
    description: 'Conversations about relatives, routines, and home life.',
    icon: 'Home',
    samplePhrases: [
      {
        en: '“My older brother works in healthcare in the city.”',
        context: 'Describing family members',
      },
      {
        en: '“We usually gather together for dinner on weekends.”',
        context: 'Sharing home traditions',
      },
      {
        en: '“Could you please help me set the table tonight?”',
        context: 'Everyday household dialogue',
      },
    ],
  },
  {
    id: 'school',
    title: 'School',
    description: 'Classroom questions, student interactions, and assignments.',
    icon: 'GraduationCap',
    samplePhrases: [
      {
        en: '“Could you explain the instructions for this assignment once more?”',
        context: 'Asking a teacher or peer',
      },
      {
        en: '“Let’s review our notes together in the library after class.”',
        context: 'Peer study session',
      },
      {
        en: '“When is the final project deadline scheduled?”',
        context: 'Academic planning',
      },
    ],
  },
  {
    id: 'friends',
    title: 'Friends',
    description: 'Casual meetups, sharing plans, weekend leisure, and humor.',
    icon: 'Smile',
    samplePhrases: [
      {
        en: '“Are you free to grab a cup of coffee this afternoon?”',
        context: 'Inviting a friend',
      },
      {
        en: '“That movie sounds interesting, let’s go watch it this Friday.”',
        context: 'Planning an outing',
      },
      {
        en: '“Thanks for always having my back, I really appreciate it.”',
        context: 'Expressing genuine gratitude',
      },
    ],
  },
  {
    id: 'shopping',
    title: 'Shopping',
    description: 'Inquiring prices, sizes, store locations, and checking out.',
    icon: 'ShoppingBag',
    samplePhrases: [
      {
        en: '“Excuse me, do you have this jacket in a medium size?”',
        context: 'Asking retail staff',
      },
      {
        en: '“Where is the fitting room located?”',
        context: 'Navigating stores',
      },
      {
        en: '“Do you accept digital payments or card here?”',
        context: 'Payment at cashier',
      },
    ],
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Directions, transit tickets, hotels, and exploring new cities.',
    icon: 'Plane',
    samplePhrases: [
      {
        en: '“Could you tell me how to reach the nearest metro station?”',
        context: 'Asking for street directions',
      },
      {
        en: '“I have a reservation under the name Gehlot for two nights.”',
        context: 'Hotel check-in',
      },
      {
        en: '“Which platform does the express train depart from?”',
        context: 'Transit station guidance',
      },
    ],
  },
  {
    id: 'daily-conversations',
    title: 'Daily Conversations',
    description: 'Everyday remarks, weather, casual check-ins, and small talk.',
    icon: 'Coffee',
    samplePhrases: [
      {
        en: '“The weather feels surprisingly pleasant this evening.”',
        context: 'Natural small talk',
      },
      {
        en: '“Let’s take a quick five-minute break to recharge.”',
        context: 'Workday dialogue',
      },
      {
        en: '“What are your plans for the upcoming weekend?”',
        context: 'Casual interest inquiry',
      },
    ],
  },
  {
    id: 'questions-answers',
    title: 'Questions & Answers',
    description: 'Structuring clear inquiries and giving natural responses.',
    icon: 'HelpCircle',
    samplePhrases: [
      {
        en: '“What would you recommend I try on the menu?”',
        context: 'Open advice inquiry',
      },
      {
        en: '“In my opinion, this approach is much more efficient.”',
        context: 'Expressing a viewpoint',
      },
      {
        en: '“Could you clarify what you meant by that statement?”',
        context: 'Seeking clarification',
      },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    description: 'Expressing opinions, active listening, and persuasive speaking.',
    icon: 'Mic',
    samplePhrases: [
      {
        en: '“I see your point, and I also think we should consider this factor.”',
        context: 'Constructive discussion',
      },
      {
        en: '“Let me summarize the key takeaways so we are on the same page.”',
        context: 'Clarifying agreement',
      },
      {
        en: '“I feel confident speaking up during group discussions now.”',
        context: 'Personal achievement',
      },
    ],
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'LEARN',
    description: 'Understand useful English sentences and expressions.',
    details:
      'Discover context-driven sentence structures designed for daily situations instead of boring isolated grammar charts.',
    icon: 'BookOpen',
  },
  {
    number: '02',
    title: 'PRACTICE',
    description:
      'Practice sentence formation and real-life English situations.',
    details:
      'Engage in interactive exercises, test your comprehension, and repeat practical sentence patterns until they feel natural.',
    icon: 'Layers',
  },
  {
    number: '03',
    title: 'COMMUNICATE',
    description:
      'Use what you learn and become more confident in everyday conversations.',
    details:
      'Apply spoken phrases smoothly in your real conversations with friends, colleagues, travel partners, and teachers.',
    icon: 'Sparkles',
  },
];

export const SCREENSHOTS: AppScreenshot[] = [
  {
    id: 1,
    src: '/app-assets/screenshot-1.png',
    alt: 'VERBIXO Spoken English Practice Interface',
    title: 'Daily Practice Hub',
    subtitle: 'Clear, distraction-free everyday learning flow',
  },
  {
    id: 2,
    src: '/app-assets/screenshot-2.png',
    alt: 'VERBIXO Daily Use Sentences & Practical Conversations',
    title: 'Daily Use Sentences',
    subtitle: 'Bite-sized expressions for immediate conversation',
  },
  {
    id: 3,
    src: '/app-assets/screenshot-3.png',
    alt: 'VERBIXO Real-Life Scenarios and Topic Explorer',
    title: 'Real-Life Scenarios',
    subtitle: 'Practical topics from greetings to shopping & travel',
  },
  {
    id: 4,
    src: '/app-assets/screenshot-4.png',
    alt: 'VERBIXO Communication Skills Practice',
    title: 'Communication Builder',
    subtitle: 'Build natural speaking rhythm and confidence',
  },
  {
    id: 5,
    src: '/app-assets/screenshot-5.png',
    alt: 'VERBIXO Interactive Learning Activities',
    title: 'Interactive Practice',
    subtitle: 'Engaging sentence exercises and exercises',
  },
  {
    id: 6,
    src: '/app-assets/screenshot-6.png',
    alt: 'VERBIXO Sentence Formation Modules',
    title: 'Sentence Mastery',
    subtitle: 'Form natural spoken phrases step-by-step',
  },
  {
    id: 7,
    src: '/app-assets/screenshot-7.png',
    alt: 'VERBIXO Comprehensive Category Library',
    title: 'Category Explorer',
    subtitle: 'Broad variety of situational learning modules',
  },
  {
    id: 8,
    src: '/app-assets/screenshot-8.png',
    alt: 'VERBIXO Progress & Daily Streak Tracker',
    title: 'Habit & Streaks',
    subtitle: 'Track your daily consistency and ongoing progress',
  },
];

export const WHY_VERBIXO_POINTS = [
  {
    title: 'Practical English Over Theory',
    description:
      'Learn actual sentences people use every day, avoiding obscure grammatical technicalities that hold you back from speaking.',
    icon: 'CheckCircle',
  },
  {
    title: 'Everyday Communication Focus',
    description:
      'Target real scenarios: buying coffee, asking directions, answering interviews, and joking with friends.',
    icon: 'MessageSquare',
  },
  {
    title: 'Useful, Ready-To-Use Sentences',
    description:
      'No meaningless filler sentences. Everything you practice in VERBIXO can be spoken immediately.',
    icon: 'Sparkles',
  },
  {
    title: 'Real-Life Situational Immersion',
    description:
      'Organized by actual social contexts so your brain connects vocabulary directly to the environment you are in.',
    icon: 'Globe',
  },
  {
    title: 'Regular Habit & Practice Streaks',
    description:
      'Simple, bite-sized sessions encourage a sustainable daily routine that builds lasting confidence.',
    icon: 'TrendingUp',
  },
];

export const TARGET_USERS: TargetUserItem[] = [
  {
    id: 'students',
    title: 'Students',
    description:
      'Prepare for classroom discussions, presentations, and peer conversations with clear, articulate English.',
    suitableFor: 'School & College Learners',
    icon: 'GraduationCap',
  },
  {
    id: 'beginners',
    title: 'Beginners',
    description:
      'Start speaking with simple, structured everyday sentences without feeling overwhelmed by complex grammar.',
    suitableFor: 'First-time Learners',
    icon: 'Sparkles',
  },
  {
    id: 'english-learners',
    title: 'English Learners',
    description:
      'Bridge the gap between reading English and actively speaking it out loud in routine situations.',
    suitableFor: 'Active Practice Seekers',
    icon: 'BookOpen',
  },
  {
    id: 'conversations',
    title: 'People Preparing For Conversations',
    description:
      'Get ready for social gatherings, travel interactions, workplace greetings, and casual small talk.',
    suitableFor: 'Social & Career Readiness',
    icon: 'Users',
  },
  {
    id: 'spoken-practice',
    title: 'People Practicing Spoken English',
    description:
      'Maintain an active daily rhythm, sharpen sentence formation, and keep speaking skills fresh.',
    suitableFor: 'Daily Habit Builders',
    icon: 'Mic',
  },
];
