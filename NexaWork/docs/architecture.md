# NexaWork Architecture

## High-Level Overview

NexaWork is a monorepo with two main applications:

- `frontend/` - Next.js 15 (App Router) TypeScript application
- `backend/` - Node.js + Express REST API backed by MongoDB

## Roles

| Role    | Capabilities                                                        |
|---------|---------------------------------------------------------------------|
| Employee | Submit reports, view assigned tasks, manage profile                |
| Manager  | Review reports, assign tasks, monitor team performance            |
| Admin    | Manage employees, departments, projects, reports, analytics, settings |

## Frontend Layout

- `app/(auth)/` - Authentication routes (login, register, forgot-password)
- `app/employee/` - Employee dashboard, reports, tasks, profile
- `app/manager/` - Manager dashboard, team, reports, tasks
- `app/admin/` - Admin dashboard, employees, departments, projects, reports, analytics, settings
- `components/` - UI primitives, shared, dashboard, and form components
- `features/` - Domain-driven feature modules (auth, employees, reports, tasks, projects, analytics)
- `services/` - API clients and external service integrations
- `hooks/` - Reusable React hooks
- `store/` - Zustand stores
- `types/` - Shared TypeScript types
- `utils/` - Utility helpers
- `constants/` - Application constants

## Backend Layout

- `src/config/` - Database and third-party service configuration
- `src/models/` - Mongoose schemas (User, Company, Report, Task, Project, Department, Notification)
- `src/controllers/` - Route handlers
- `src/routes/` - Express routers
- `src/middleware/` - Auth, error handling, validation middleware
- `src/services/` - Business logic services
- `src/validators/` - Request validators
- `src/utils/` - Helpers
- `src/emails/` - Email templates and senders
- `src/uploads/` - File upload handling
- `src/server.js` - Express application entrypoint

## Next Steps

1. Implement authentication (JWT, role-based access)
2. Define Mongoose schemas
3. Build report submission and review flows
4. Build task assignment and tracking
5. Build admin analytics and settings
