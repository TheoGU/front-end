import flattenDepth from 'lodash/flattenDepth';

// MARK: Links shared between nav and footer (no duplicate code)
const contactLink = {
  name: 'Contact Us',
  href: '/contact',
};

const faqLink = {
  name: 'FAQ',
  href: '/faq',
};

const podcastLink = {
  name: 'Podcast',
  href: '/podcast',
};

const getInvolvedLink = {
  name: 'Get Involved',
  href: '/get_involved',
};

const eventsLink = {
  name: 'Events',
  href: '/events',
};

// MARK: Top-level navigation items
const whoWeServeLink = {
  name: 'Who We Serve',
  href: '/who_we_serve',
};

const accountWithSublinks = {
  name: 'Account',
  href: '/login',
  sublinks: [
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Join',
      href: '/join',
    },
  ],
  icon: 'UserLogo',
};

const aboutUs = {
  name: 'About Us',
  href: '/about',
  sublinks: [contactLink, faqLink, podcastLink],
};

const events = {
  ...eventsLink,
};

const getInvolved = {
  ...getInvolvedLink,
  sublinks: [
    {
      name: 'Sponsorship',
      href: '/sponsorship',
    },
    {
      name: 'Leadership Circle',
      href: '/leadership_circle',
    },
  ],
};

const profile = {
  name: 'Profile',
  href: '/profile',
};

const logout = {
  name: 'Logout',
  href: '/login?loggedOut=true',
};

// MARK: Nav items
export const loggedInNavItems = [aboutUs, whoWeServeLink, events, getInvolved, profile, logout];
export const loggedOutNavItems = [
  aboutUs,
  whoWeServeLink,
  events,
  getInvolved,
  accountWithSublinks,
];

// Extracts sublinks to list everything as a single, top-level list
export const mobileLoggedInNavItems = flattenDepth(
  [
    logout,
    profile,
    aboutUs,
    whoWeServeLink,
    events,
    getInvolved,
  ].map(({ sublinks = [], ...item }) => [item, sublinks]),
  2,
);
export const mobileLoggedOutNavItems = flattenDepth(
  [
    ...accountWithSublinks.sublinks,
    aboutUs,
    whoWeServeLink,
    events,
    getInvolved,
  ].map(({ sublinks = [], ...item }) => [item, sublinks]),
  2,
);

// MARK: Footer items
export const footerItems = {
  column1: [
    {
      href: '/about',
      name: 'About Us',
    },
    contactLink,
    faqLink,
  ],
  column2: [
    {
      href: '/code_schools',
      name: 'Code Schools',
    },
    {
      href: '/jobs',
      name: 'Job Board',
    },
    eventsLink,
    {
      href: '/who_we_serve',
      name: 'Who We Serve',
    },
  ],
  column3: [
    getInvolvedLink,
    {
      href: '/podcast',
      name: 'Podcast',
    },
    {
      href: '/history',
      name: 'History',
    },
    {
      href: '/donate',
      name: 'Donate',
    },
  ],
  column4: [
    {
      href: '/press',
      name: 'Press',
    },
    {
      href: '/branding',
      name: 'Branding',
    },
    {
      href: '/team',
      name: 'Team',
    },
  ],
  legal: [
    {
      href: '/terms',
      name: 'Terms of Use',
    },
    // TODO: Create a link for this
    // {
    //   href: 'https://www.anotherfakeurl.com/',
    //   name: 'Cookies',
    //   analyticsEventLabel: 'Cookies',
    // },
    {
      // NOTE: If you change this route, please update the redirect in `vercel.json` as well
      href: 'https://www.iubenda.com/privacy-policy/8174861',
      name: 'Privacy',
      analyticsEventLabel: 'Privacy',
    },
  ],
};
