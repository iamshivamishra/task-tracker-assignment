This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with my browser to see the result.

I can start editing the page by modifying `app/page.tsx`. The page auto-updates as me edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy my Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




-------------------------------------------------------------------------------------------------------

                                      ABOUT MY PROJECT


# Task Tracker — Next.js + MongoDB

A full-stack task management app built with Next.js 15, TypeScript, Tailwind CSS, and MongoDB.

---

## Tech Stack

- **Frontend:** Next.js 15 (App Router), React, Tailwind CSS
- **Backend:** Next.js API Routes (Node.js + Express alternative)
- **Database:** MongoDB Atlas + Mongoose
- **Language:** TypeScript

---

## Features

- Create, Read, Update, Delete tasks (CRUD)
- Filter tasks by status — All, Pending, In Progress, Completed
- Priority levels — Low, Medium, High
- Form validation
- Responsive UI (mobile + desktop)
- Dynamic updates without page refresh
- REST API with proper error handling

---

## Folder Structure

task-tracker/

├── src/

│   └── app/

│       ├── api/

│       │   └── tasks/

│       │       ├── route.ts          # GET, POST

│       │       └── [id]/

│       │           └── route.ts      # PUT, DELETE

│       ├── components/

│       │   ├── Navbar.tsx

│       │   ├── TaskForm.tsx

│       │   ├── TaskCard.tsx

│       │   └── TaskList.tsx

│       ├── globals.css

│       ├── layout.tsx

│       └── page.tsx

├── lib/

│   └── mongodb.ts

├── models/

│   └── Task.ts

├── .env.local

└── package.json



---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/username/task-tracker.git
cd task-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env.local` file in the root folder:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/tasktracker
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in my browser.

### 5. Build for production

```bash
npm run build
npm start
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Fetch all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## Task Schema

| Field | Type | Values |
|-------|------|--------|
| title | String | Required |
| description | String | Optional |
| status | String | pending, in-progress, completed |
| priority | String | low, medium, high |
| createdAt | Date | Auto generated |
| updatedAt | Date | Auto generated |

---

## Deployment

### Frontend + Backend — Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and import my repo
3. Add environment variable in Vercel dashboard:
   - Key: `MONGODB_URI`
   - Value: your MongoDB Atlas connection string
4. Click **Deploy**

### MongoDB — Atlas

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free cluster
3. Add database user and password
4. Allow network access from anywhere (`0.0.0.0/0`)
5. Copy the connection string to `.env.local`

---
