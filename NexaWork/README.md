# NexaWork

NexaWork is a full-stack SaaS platform for employee productivity and company reporting.

## Overview

NexaWork enables organizations to streamline reporting and team performance tracking:

- **Employees** submit daily, weekly, and monthly reports.
- **Managers** review reports, assign tasks, and monitor team performance.
- **Company owners / admins** manage employees, departments, reports, analytics, and system settings.

## Tech Stack

### Frontend

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Axios
- React Hook Form
- Zod
- Zustand
- TanStack Query
- Lucide React Icons

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (auth structure)
- Helmet, CORS, Morgan
- Nodemon, Dotenv

## Project Structure

```
NexaWork/
├── frontend/      # Next.js 15 application
├── backend/       # Express + MongoDB API
├── docs/          # Project documentation
├── README.md
├── .gitignore
└── package.json
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- MongoDB instance (local or Atlas)

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Development Roadmap

This repository currently contains only the project architecture and configuration.
Business logic, APIs, database schemas, authentication, and features will be added incrementally.

1. Authentication flow (JWT, roles, sessions)
2. User and company models
3. Reports module (daily / weekly / monthly)
4. Tasks module
5. Projects and departments
6. Analytics and admin settings

## License

Proprietary - All rights reserved.
