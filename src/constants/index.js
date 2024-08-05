import { spring } from 'framer-motion';
import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  postgresql,
  graphql,
  csharp,
  aws,
  mongo,
  java,
  laravel,
  angular,
  vue,
  pokt,
  classdojo,
  chegg,
  classdojo_com,
  intellisoft_com,
  shoclef_com,
  infurm_com,
  coupa_com,
  poktpool_com,
  reno_com,
  poshmark,
  chewy,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Angular',
    icon: angular
  },
  {
    name: 'Vue',
    icon: vue
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'Laravel',
    icon: laravel
  },
  {
    name: 'Graphql',
    icon: graphql,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Mongodb',
    icon: mongo
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
  {
    name: 'AWS',
    icon: aws
  }
];

const experiences = [
  {
    title: 'B.A. in Computer Science',
    company_name: 'University of Nevada - Reno',
    icon: reno_com,
    iconBg: '#333333',
    date: 'Aug 2009 - July 2012',
  },
  {
    title: 'FullStack Developer',
    company_name: 'Coupa Software',
    icon: coupa_com,
    iconBg: '#333333',
    date: 'Sept 2012 - Nov 2014',
  },
  {
    title: 'Senior FullStack Developer',
    company_name: 'Infurm Technologies',
    icon: infurm_com,
    iconBg: '#333333',
    date: ' Nov 2014 - April 2017',
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'Shoclef',
    icon: shoclef_com,
    iconBg: '#333333',
    date: 'May 2017 - Feb 2019',
  },
  {
    title: 'Web3 FullStack Developer',
    company_name: 'IntelliSoft',
    icon: intellisoft_com,
    iconBg: '#333333',
    date: 'Mar 2019 - May 2020',
  },
  {
    title: 'Senior Frontend Developer',
    company_name: 'ClassDojo',
    icon: classdojo_com,
    iconBg: '#333333',
    date: 'June 2020 - July 2022',
  },
  {
    title: 'Lead FullStack Developer',
    company_name: 'poktpool',
    icon: poktpool_com,
    iconBg: '#333333',
    date: 'June 2024 - July 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'poktpool',
    description: 'poktpool is a staking pool for POKT tokens, offering a platform for users to earn rewards.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: pokt,
    demo: 'https://poktpool.com',
  },
  {
    id: 'project-2',
    name: 'ClassDojo',
    description:
      'ClassDojo connects primary school teachers, students and \
      families through communication features, such as a feed for photos and videos from the school day.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: classdojo,
    demo: 'https://classdojo.com/',
  },
  {
    id: 'project-3',
    name: 'Chegg',
    description: 'If we’re successful, we can change the outcomes of millions of people.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: chegg,
    demo: 'https://www.chegg.com/',
  },
  {
    id: 'project-4',
    name: 'chewy',
    description: `We’re here to stick by your side through the highs, lows and in-betweens of pet parenthood, with everything you and your pet need for a happy and healthy life. At Chewy, our mission is to be the most trusted and convenient destination for pet parents and partners, everywhere.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: chewy,
    demo: 'https://chewy.com/',
  },
  {
    id: 'project-5',
    name: 'poshmark',
    description:
      'Poshmark is a leading fashion resale marketplace powered by a vibrant, highly engaged community of buyers and sellers and real-time social experiences.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: poshmark,
    demo: 'https://poshmark.com',
  },
];

export { services, technologies, experiences, projects };
