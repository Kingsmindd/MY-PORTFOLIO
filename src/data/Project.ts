import SpaceTourism from '../assets/Space-tourism.png';
import Personalfinance from '../assets/Personal finance tracker .png';

export interface Project {
 title: string;
 description: string;
 tech: string[];
 image: string;
 liveUrl?: string;
 githubUrl: string;
 gitHubBackend?: string;
 featured?: boolean;
 caseStudy?: {
  problem: string;
  role: string;
  features: string[];
  decisions: string[];
  learning: string;
 };
}
export const projects: Project[] = [
 {
  title: 'Personal Finance Tracker',
  description: 'A full-stack application for recording income and expenses, exploring monthly trends, and keeping personal finances in one place.',
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
  image: Personalfinance,
  liveUrl: 'https://personal-finance-tracker-jet-alpha.vercel.app/',
  githubUrl: 'https://github.com/Kingsmindd/personal-finance-tracker-frontend-',
  gitHubBackend: 'https://github.com/Kingsmindd/personal-finance-tracker-api',
  featured: true,
  caseStudy: {
   problem: 'Keeping track of individual purchases is only part of managing money. I wanted one place to record transactions, review income against expenses, and see how those totals change over time.',
   role: 'I built the React interface and the Express API, connected PostgreSQL through Prisma, and implemented the transaction and account workflows.',
   features: [
    'Create, edit, and delete income and expenses with categories and transaction dates.',
    'Search, filter, sort, and paginate transactions.',
    'Review income, expenses, balances, and monthly analytics.',
    'Export transaction records as CSV and manage account preferences.'
   ],
   decisions: [
    'PostgreSQL Decimal fields and Prisma decimal arithmetic keep stored amounts and calculated totals precise.',
    'Transaction queries use the authenticated user ID to scope access to each account.',
    'Short-lived JWT access tokens work alongside rotating, hashed refresh tokens for trusted devices.',
    'Zod validates request data, while separate routes, controllers, and services organize the API.'
   ],
   learning: 'This project brought the interface, authentication, validation, and database together. It also made the details of session expiry, transaction dates, and consistent error handling concrete parts of the development process.'
  }
 },
 {
  title: 'Space Tourism',
  description: 'A responsive multi-page space tourism website, built with reusable React components and layouts that adapt across screen sizes.',
  tech: ['React', 'TypeScript', 'Tailwind CSS'],
  image: SpaceTourism,
  liveUrl: 'https://space-tourism-ih71.vercel.app/',
  githubUrl: 'https://github.com/Kingsmindd/SPACE-TOURISM'
 }
];