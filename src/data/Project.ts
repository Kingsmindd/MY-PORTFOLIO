import SpaceTourism from "../assets/Space-tourism.png";
import Personalfinance from "../assets/Personal finance tracker .png";
import Audiophile from "../assets/audiophile.png";
import TaskDuty from "../assets/task-duty.png";

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
    architecture?: string[];
  };
}
export const projects: Project[] = [
  {
    title: "Personal Finance Tracker",
    description:
      "A full-stack application for recording income and expenses, exploring monthly trends, and keeping personal finances in one place.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    image: Personalfinance,
    liveUrl: "https://personal-finance-tracker-jet-alpha.vercel.app/",
    githubUrl:
      "https://github.com/Kingsmindd/personal-finance-tracker-frontend-",
    gitHubBackend: "https://github.com/Kingsmindd/personal-finance-tracker-api",
    featured: true,
    caseStudy: {
      problem:
        "Keeping track of individual purchases is only part of managing money. I wanted one place to record transactions, review income against expenses, and see how those totals change over time.",
      role: "I built the React interface and the Express API, connected PostgreSQL through Prisma, and implemented the transaction and account workflows.",
      features: [
        "Create, edit, and delete income and expenses with categories and transaction dates.",
        "Search, filter, sort, and paginate transactions.",
        "Review income, expenses, balances, and monthly analytics.",
        "Export transaction records as CSV and manage account preferences.",
      ],
      decisions: [
        "PostgreSQL Decimal fields and Prisma decimal arithmetic keep stored amounts and calculated totals precise.",
        "Transaction queries use the authenticated user ID to scope access to each account.",
        "Short-lived JWT access tokens work alongside rotating, hashed refresh tokens for trusted devices.",
        "Zod validates request data, while separate routes, controllers, and services organize the API.",
      ],
      learning:
        "This project brought the interface, authentication, validation, and database together. It also made the details of session expiry, transaction dates, and consistent error handling concrete parts of the development process.",
    },
  },
  {
    title: "Space Tourism",
    description:
      "A responsive multi-page space tourism website, built with reusable React components and layouts that adapt across screen sizes.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: SpaceTourism,
    liveUrl: "https://space-tourism-ih71.vercel.app/",
    githubUrl: "https://github.com/Kingsmindd/SPACE-TOURISM",
  },

  {
    title: "Audiophile",
    description:
      "A full-stack audio storefront with authentication, account-specific shopping bags saved across devices, guest checkout, order history, and an admin dashboard.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    image: Audiophile,
    liveUrl: "https://final-audio-file.vercel.app",
    githubUrl: "https://github.com/Kingsmindd/Final-Audio-File",
    caseStudy: {
      problem:
        "I wanted to connect a product storefront to a working backend, including accounts, saved shopping bags, checkout, and administration.",
      role: "I developed and connected the React frontend and Express backend, implemented MongoDB persistence, and refined the shopping and admin workflows.",
      features: [
        "Browse headphones, speakers, and earphones by category.",
        "Keep account-specific shopping bags across devices.",
        "Place guest or signed-in demo orders and view order history.",
        "Manage products, users, and order statuses through an admin dashboard.",
      ],
      decisions: [
        "The backend reads product prices from MongoDB and calculates order totals instead of trusting browser values.",
        "Authenticated routes identify the account from its token and restrict access to private records.",
        "Bag revisions prevent older sessions from silently overwriting newer changes.",
        "Cloudinary stores uploaded product images.",
      ],
      learning:
        "This project helped me understand how frontend state, authentication, database records, and deployment settings must work together. Testing invalid requests also improved my approach to validation and error handling.",
      architecture: ["React", "Express API", "Mongoose", "MongoDB"],
    },
  },
  {
    title: "Task Duty",
    description:
      "A full-stack task manager with authentication, task creation and editing, priority categories, due dates, search, and completion tracking.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: TaskDuty,
    liveUrl: "https://task-duty-one.vercel.app",
    githubUrl: "https://github.com/Kingsmindd/TASK-ONE-",
    gitHubBackend: "https://github.com/Kingsmindd/TaskDuty-backend-",
    caseStudy: {
      problem:
        "I wanted a focused application for organizing personal tasks, distinguishing priorities, and tracking what still needs to be done.",
      role:
        "I built the React interface and connected it to an Express API, with authentication and MongoDB storage for each user's tasks.",
      features: [
        "Create, edit, and delete tasks.",
        "Organize tasks as Urgent or Important.",
        "Set due dates and track completion.",
        "Search tasks and keep each account's records separate.",
      ],
      decisions: [
        "Task queries include the authenticated owner's ID so users access their own records.",
        "Separate routes, controllers, and services organize request handling and database operations.",
        "Mongoose schemas validate task fields and constrain priority categories.",
        "PATCH requests update selected task fields without replacing the entire task.",
      ],
      learning:
        "Building Task Duty strengthened my understanding of CRUD operations, account ownership, form state, and connecting a React interface to a persistent backend.",
      architecture: ["React", "Express API", "Mongoose", "MongoDB"],
    },
  },
];
