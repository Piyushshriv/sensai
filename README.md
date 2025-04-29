

---

# SENSAI - AI Career Coach

Welcome to **SENSAI**, your intelligent career companion!  
SENSAI is a full-stack AI-powered platform built with modern technologies like **Next.js**, **React**, **Tailwind CSS**, **Shadcn UI**, **Prisma**, **Clerk authentication**, and **Gemini AI (Flash 2.0)**. It is designed to empower users by offering advanced career-building tools, including a **Resume Builder**, **Cover Letter Generator**, and **Mock Interview Preparation** with AI-generated questions.

Whether you're a student, a recent graduate, or a professional seeking to move ahead in your career, SENSAI is crafted to assist you with smart, personalized, and efficient career services.

---

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



## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more information.



## 💬 Connect

- **LinkedIn**: [Piyush Shrivastava]([https://linkedin.com/in/yourname](https://www.linkedin.com/in/piyush-shrivastava-71a954253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Ba42wQZlwTjSsOMqwWcfs7Q%3D%3D))
- **Email**:piyushshrivastava76@gmail.com

Let's connect and grow together!
![Screenshot (129)](https://github.com/user-attachments/assets/b441fab2-84b7-49a4-9041-aa167087e861)
![Screenshot (127)](https://github.com/user-attachments/assets/936f1a0c-2a15-4722-b024-606dc0f3e9e8)
![Screenshot (126)](https://github.com/user-attachments/assets/6aede245-1ce4-49f7-8891-69a9e12ad7cb)
![Screenshot (125)](https://github.com/user-attachments/assets/e83c3297-8344-48b3-b913-892ea6b675d3)
![Screenshot (124)](https://github.com/user-attachments/assets/273bf58c-b6a8-4743-a3da-cf14d76dd10d)
![Screenshot (123)](https://github.com/user-attachments/assets/3d4d55fc-0731-4ba8-8445-89abab41768a)
![Screenshot (121)](https://github.com/user-attachments/assets/22719b74-588a-4f6c-adf2-58ddf8e8f504)
![Screenshot (120)](https://github.com/user-attachments/assets/e2d43edb-3a46-410e-8cb2-34443701e421)
![Screenshot (119)](https://github.com/user-attachments/assets/f69d2e23-d36a-4c85-b874-8c89ab35cf15)
![Screenshot (118)](https://github.com/user-attachments/assets/e030eb48-f63f-4f1c-b83f-3e9ccc6a4e4a)
![Screenshot (117)](https://github.com/user-attachments/assets/e44b45a4-3823-494b-972f-1dd00c802380)
![Screenshot (116)](https://github.com/user-attachments/assets/380948ae-1980-44c8-8edd-6f46270b65f7)
![Screenshot (115)](https://github.com/user-attachments/assets/4cbd98b5-d412-4cdf-821f-9ec6fe9f7274)
![Screenshot (114)](https://github.com/user-attachments/assets/42ac47f4-f105-4eb9-ad6c-2a7d305f7956)
![Screenshot (113)](https://github.com/user-attachments/assets/ade6b7e6-45bc-44a5-836f-de773d9fd2bc)
![Screenshot (111)](https://github.com/user-attachments/assets/dcd640e9-3436-4c03-943d-78f10fed613b)
![Screenshot (110)](https://github.com/user-attachments/assets/281a9573-e76f-4bbb-9ce5-7a1c5e3dd048)
![Screenshot (109)](https://github.com/user-attachments/assets/47f61276-ed7d-410d-89d3-b3ca24b8289f)
![Screenshot (108)](https://github.com/user-attachments/assets/15058459-f7c4-43e9-a97b-e82d3dfed18e)
![Screenshot (107)](https://github.com/user-attachments/assets/022c62b4-ab20-4909-bfde-328fecac896b)
![Screenshot (106)](https://github.com/user-attachments/assets/5da79948-8853-4376-8d7b-a98bf50f7a73)
![Screenshot (105)](https://github.com/user-attachments/assets/f24a8fb7-204a-4fff-abf9-b8f98345253d)
![Screenshot (104)](https://github.com/user-attachments/assets/e7940332-b0d3-497b-86f8-184d4a71e35a)


