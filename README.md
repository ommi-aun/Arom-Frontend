# Arom AI – Frontend

The frontend for [arom.ai](https://arom.ai) — an intelligent AI assistant for research, writing, coding, and more.

## Tech Stack

- [Next.js 16](https://nextjs.org) – React framework with App Router
- [TypeScript](https://www.typescriptlang.org) – Type-safe JavaScript
- [Tailwind CSS 4](https://tailwindcss.com) – Utility-first CSS framework

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

Navigate to [http://localhost:3000/chat](http://localhost:3000/chat) to try the chat demo.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── chat/
│       ├── page.tsx      # Chat page (server component)
│       └── ChatInterface.tsx  # Interactive chat UI
└── components/
    ├── Navbar.tsx        # Navigation header
    ├── Hero.tsx          # Hero section
    ├── Features.tsx      # Features grid
    ├── HowItWorks.tsx    # Steps section
    ├── Pricing.tsx       # Pricing plans
    └── Footer.tsx        # Footer
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deploy on Vercel

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
