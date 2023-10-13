import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://mhussain.net/",
  author: "Mustafa Hussain",
  desc: "Personal blog for Mustafa Hussain",
  title: "Mustafa Hussain",
  lightAndDarkMode: true,
  postPerPage: 7,
};

export const LOGO_IMAGE = {
  enable: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/mustafah15",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "facebook.com/mhussain.net",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/mhussaincodes",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mustafah15/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:me@mhussain.net",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/mhussain_net",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCdEaI0IcAo__xEP7_gxQ59w",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Strava",
    href: "https://www.strava.com/athletes/24381730",
    linkTitle: `${SITE.title} on Strava`,
    active: true,
  },
];
