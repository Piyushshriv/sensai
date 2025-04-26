SENSAI - AI Career Coach
Welcome to SENSAI, your intelligent career companion!
SENSAI is a full-stack AI-powered platform built with modern technologies like Next.js, React, Tailwind CSS, Shadcn UI, Prisma, Clerk authentication, and Gemini AI (Flash 2.0). It is designed to empower users by offering advanced career-building tools, including a Resume Builder, Cover Letter Generator, and Mock Interview Preparation with AI-generated questions.

Whether you're a student, a recent graduate, or a professional seeking to move ahead in your career, SENSAI is crafted to assist you with smart, personalized, and efficient career services.

## ✨ Project Highlights

- **Next.js Full Stack App**: Built with the power of server-side rendering, API routes, and optimized performance.
- **AI-Powered Content Generation**: Leverages Google's **Gemini AI (Flash 2.0)** for generating resumes, cover letters, and interview questions based on user input.
- **Modern UI/UX**: Styled beautifully with **Tailwind CSS** and **Shadcn UI** components for a sleek, responsive, and accessible interface.
- **Secure Authentication**: Integrates **Clerk** for seamless and secure user management (login, signup, profile).
- **Database Management**: Uses **Prisma ORM** connected to a **PostgreSQL** database for efficient and scalable backend management.
- **Mock Interview Practice**: Personalized interview questions generated dynamically to help users practice and prepare effectively.
- **Resume Builder**: Guided, intuitive resume creation with Markdown support and instant PDF export.
- **Cover Letter Generator**: Personalized cover letters tailored to user skills, experiences, and job roles.
- **Responsive and Mobile-Friendly**: Fully optimized for desktops, tablets, and smartphones.
- **Deployment Ready**: Configured for deployment on Vercel or any cloud hosting platform.

---

## 🛠️ Tech Stack

| Technology        | Role                                        |
| ----------------- | ------------------------------------------- |
| Next.js (React)    | Frontend and Backend (API Routes)           |
| Tailwind CSS       | Styling and Responsive Design              |
| Shadcn UI          | Pre-built, accessible, customizable UI     |
| Clerk              | Authentication and User Management        |
| Prisma ORM         | Database schema and interaction            |
| PostgreSQL         | Relational Database                        |
| Gemini AI (Flash 2.0) | AI Content and Interview Question Generation |
| Vercel             | Deployment and Hosting                     |

---

## 📚 Features Overview

### 1. AI Resume Builder
Create a professional and ATS-friendly resume quickly.  
- **Form-based Input**: Collects information like education, work experience, skills, projects.
- **Markdown Preview**: Live preview of the resume in Markdown format.
- **PDF Export**: Export resumes easily using `html2pdf.js`.
- **Smart Suggestions**: Gemini AI enhances entries with smart, job-ready phrases.

### 2. AI Cover Letter Generator
Generate customized cover letters in seconds.  
- **Position and Company-based Customization**: Users provide the role, company, and a few background details.
- **Professional Tone**: Gemini AI structures the letter professionally.
- **Editable Output**: Users can tweak, customize, and download the letter.

### 3. Mock Interview Practice
Prepare for interviews with realistic, AI-curated questions.  
- **Industry and Role Specific**: Tailored questions based on user's target job/industry.
- **Difficulty Level Adjustment**: Choose between beginner, intermediate, and advanced levels.
- **Instant Feedback (Upcoming)**: Planned feature for giving feedback based on user answers.

### 4. Authentication
Secure sign-up/login with:
- Social auth (Google, GitHub)
- Email/password login
- Session management via Clerk.

### 5. User Dashboard
A centralized place to manage:
- Resumes
- Cover Letters
- Saved Interview Questions
- User Profile Settings

---

## 🏗️ Architecture Overview

- **Frontend**: Built with **Next.js** pages and API routes, uses React components from **Shadcn UI** styled with **Tailwind**. Pages dynamically fetch data from the backend.
- **Backend**: API routes in Next.js handle resume generation, cover letter generation, and mock interview question fetching.
- **Database**: **PostgreSQL** accessed via **Prisma** for storing user data, resumes, and histories.
- **AI Integration**: Communicates with Gemini AI API endpoints to generate text-based outputs.
- **Authentication**: Managed entirely via **Clerk**, ensuring security and scalability.
- **Deployment**: Designed for seamless deployment on **Vercel**, but adaptable to AWS, Railway, or other platforms.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PostgreSQL Database
- Gemini API Key
- Clerk Project Setup

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/sensai-ai-career-coach.git
cd sensai-ai-career-coach
```

2. Install dependencies
```bash
npm install
# or
pnpm install
```

3. Configure your environment variables (`.env.local`)

```plaintext
DATABASE_URL=your_postgres_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run Prisma migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
# or
pnpm dev
```

---

## 📈 Roadmap

- [x] Resume Builder MVP
- [x] Cover Letter Generator
- [x] Mock Interview Question Generator
- [x] Clerk Authentication
- [x] User Dashboard
- [ ] Interview Answer Feedback (AI Evaluation)
- [ ] Advanced Resume Templates
- [ ] Job Description Analyzer
- [ ] LinkedIn Profile Review Automation
- [ ] Career Progress Tracker

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a pull request. Let's build the future of AI-assisted career coaching together!

If you find this project useful, don't forget to **star ⭐ the repo**!

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more information.

---

Let's connect and grow together!

