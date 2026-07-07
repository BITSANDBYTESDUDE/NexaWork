# NexaWork

NexaWork is a modern employee productivity and workflow management platform that helps organizations manage daily tasks, weekly reports, team collaboration, and performance tracking.

## 🚀 Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animation**: Framer Motion
- **HTTP Client**: Axios
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand
- **Server State**: TanStack Query

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB + Mongoose
- **Development**: Nodemon
- **Security**: Helmet, CORS
- **Logging**: Morgan

## 📁 Project Structure

```
NexaWork/
├── frontend/          # Next.js application
├── backend/          # Express.js API
├── package.json      # Monorepo configuration
├── .gitignore
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn
- MongoDB instance

### Installation

1. **Clone the repository**
   ```bash
   cd NexaWork
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` files in both `frontend/` and `backend/`
   - Configure your database connection and other settings

4. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start individually:
   npm run dev:frontend  # Frontend on http://localhost:3000
   npm run dev:backend   # Backend on http://localhost:5000
   ```

## 📦 Project Overview

This is the initial project setup. The following will be implemented in future iterations:

- [ ] User authentication and authorization
- [ ] Employee management
- [ ] Task and project management
- [ ] Weekly reports system
- [ ] Analytics and dashboards
- [ ] Team collaboration tools
- [ ] Performance tracking
- [ ] Notifications system
- [ ] File upload and management
- [ ] API integrations

## 📝 License

This project is licensed under the MIT License.
