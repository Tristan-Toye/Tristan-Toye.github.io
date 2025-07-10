// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Tristan-Toye', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 32, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['Tristan-Toye/Tristan-Toye.github.io','Tristan-Toye/gitignore'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Organisations',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'HydroTeam',
          description:
            'Co founder of the hydrogen racing team at KUL. During the founding year, we build a prototype Radical class racecar with a hydrogen powered ICE engine. I was part of the leadership and supervised 20 part-timers.',
          imageUrl:
            'hydro.png',
          link: 'https://github.com/HydroTeamBelgium',
        },
        {
          title: 'SwitchSkills',
          description:
            'Proof of Concept for the Nation Builder program by the US department of State. Matching tool to trade skills without monetary exchange.',
          imageUrl: 'switchskills.png',
          link: 'https://github.com/SwitchSkills',
        },
        {
          title: 'Metaverse Raccoons',
          description:
            'Metaverse driving simulator with AI traffic sign recognition and automatic city builder using GNSS data',
          imageUrl:
            'metaverse.png',
          link: 'https://github.com/MetaverseRaccoons',
        }
      ],
    },
  },
  seo: { title: 'Portfolio of Tristan Toye', description: 'Tristan Toye resume portfolio cv', imageURL: '' },
  social: {
    linkedin: 'tristan-toye',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'toye.tristan.work@gmail.com',
  },
  resume: {
    fileUrl: 'resume.pdf', // Google Drive link. Replace YOUR_FILE_ID with your actual file ID
  },
  skills: [
    'Python',
    'C#',
    'Rust',
    'MySQL',
    'PostgreSQL',
    'Java',
    'Git',
    'numpy & pandas',
    'nlp',
    'Docker',
    'AWS',
    'Google cloud'
  ],
  experiences: [
    {
      company: 'Imec',
      position: 'R&D engineer',
      from: 'March 2025',
      to: 'Present',
      companyLink: 'https://www.imec-int.com/en/expertise/compute-system-architecture',
    },
    {
      company: 'Google developer group (Leuven campus)',
      position: 'Corporate relations lead',
      from: 'July 2025',
      to: 'Present',
      companyLink: 'https://gdg.community.dev/',
    },
    {
      company: 'HydroTeam',
      position: 'Co-Founder & Electronics lead',
      from: 'July 2024',
      to: 'July 2025',
      companyLink: 'https://www.hydroteam.be/',
    },
    {
      company: 'Cardio Flow Design',
      position: 'R&D software engineer',
      from: 'October 2023',
      to: 'August 2024',
      companyLink: 'https://cfd.life/en/',
    },
    {
      company: 'Manipal University Jaipur',
      position: 'Researcher',
      from: 'July 2023',
      to: 'October 2023',
      companyLink: 'https://munsocietybelgium.org/',
    },
    {
      company: 'MUN Society Belgium (MSB)',
      position: 'active member',
      from: 'September 2022',
      to: 'August 2023',
      companyLink: 'https://munsocietybelgium.org/',
    },
    {
      company: 'Twipe',
      position: 'Junior software engineer',
      from: 'Jul 2022',
      to: 'May 2023',
      companyLink: 'https://www.twipemobile.com/',
    },
  ],
  certifications: [
    {
      name: 'Diplomacy Award',
      body: 'Harvard WorldMUN',
      year: 'March 2023',
      link: 'https://drive.google.com/file/d/1mIWYmpEU0TsaMQvGn6bAVBU-FzQMftIB/view?usp=sharing',
    },
    {
      name: 'Best Delegate Award',
      body: 'Oxford MUN',
      year: 'November 2022',
      link: 'https://drive.google.com/file/d/1BqTEqK2Cs-z0neHFgSx_vS7_EeUTy0Z3/view?usp=sharing',
    },
    {
      name: 'Engineering Alumni Award',
      body: 'KU Leuven',
      year: 'December 2021',
      link: 'https://drive.google.com/file/d/1l3i9zE3dsEoqDGS8VXoOqy_h95ScM6U_/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Ku Leuven',
      degree: 'Master of engineering computer science: Artificial Intelligence',
      from: '2024',
      to: '2026',
    },
    {
      institution: 'KU Leuven',
      degree: 'Bachelor of Engineer: computer science & electrical engineering',
      from: '2020',
      to: '2023',
    },
  ],
  publications: [
    {}
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

   enablePWA: true,
};

export default CONFIG;
