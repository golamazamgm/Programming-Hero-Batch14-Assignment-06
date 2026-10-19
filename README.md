<div align="center">

# 🏋️‍♂️ FITLOG — TRAIN WITH INTENT. LOG EVERY SET.

**A dark, sleek, and responsive gym companion web application for discovering lifts, customizing daily workout routines, and tracking session metrics.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://programming-hero-batch14assignment6.vercel.app/)
[![Assignment Repository](https://img.shields.io/badge/PH--B14--A6-Fit--Log-c2f800?style=for-the-badge&logo=github&logoColor=black)](https://github.com/ProgrammingHero1/B14-A6-Fit-Log)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

### 🌐 [Explore Live Application](https://programming-hero-batch14assignment6.vercel.app/) • 📦 [Source Repository](https://github.com/golamazamgm/Programming-Hero-Batch14-Assignment-06)

</div>

<br />

## 📖 Project Overview

**FITLOG** is an intuitive, performance-focused fitness web application built with **Next.js (App Router)**, **React 19**, and **Tailwind CSS v4**. Developed as part of **Programming Hero Batch 14 (Assignment 06)**, FitLog acts as a modern gym partner that eliminates guesswork: browse comprehensive compound and isolation exercises, inspect granular mechanics, curate a personalized **Today's Plan**, bookmark workouts for later sessions, and monitor real-time aggregates for time and calorie expenditure.

The app features a custom athletic dark aesthetic inspired by modern fitness wearables and dashboards, accented with high-visibility electric lime (`#c2f800`), smooth micro-interactions, responsive navigation, and robust error handling.

---

## ✨ Key Features

### 1. 📚 The Exercise Library
- **Curated Workout Catalog**: Fetches and renders lifts targeting every major muscle group (Chest, Back, Arms, Shoulders, Legs, and Core).
- **Responsive Grid**: Displays workouts in a clean, modern card grid (3 columns on desktop, 2 on tablet, and 1 on mobile).
- **Instant Visual Indicators**: Each card showcases an exercise graphic, target muscle category pills, equipment requirements, estimated duration, estimated calorie burn, and community ratings.
- **Next.js Server-Side Fetching**: Implements cached and revalidated server-side data fetching (`revalidate: 3600`) for blazing-fast page loads and optimized SEO.

### 2. 🔍 Dynamic Workout Detail Pages (`/[workoutID]`)
- **Granular Lift Mechanics**: Dedicated dynamic route (`/[workoutID]`) rendering comprehensive exercise breakdowns and high-resolution visuals.
- **Key Specifications Panel**: Formatted specifications table detailing equipment type, difficulty level, prescribed sets, repetition ranges, duration, calories, and rating.
- **Step-by-Step Instructions**: Clean numbered guide detailing setup, concentric phase, and eccentric execution for safe lifting form.
- **Interactive Action Controls**: Direct client actions to lock an exercise into **Today's Plan** or save it to the **Saved Shelf**, with duplicate validation.

### 3. 📋 Interactive "Today's Plan" Routine Builder
- **Daily Workout Session**: Users can curate up to 5 focused lifts for their active training day.
- **Completion Check-Off**: Mark individual exercises as **"Done"** with visual toggle status transitions.
- **One-Click Routine Pruning**: Remove finished or unwanted workouts with instant toast confirmation and state recomputation.
- **Empty State Guidance**: Helpful illustrated call-to-actions when no exercises are scheduled, guiding users back to the library.

### 4. 🔖 "Save for Later" Bookmark Shelf
- **Dedicated Exercise Wishlist**: Save workouts you want to try later without cluttering today's active session.
- **Seamless Tab Switching**: Switch between **Today's Plan** and **Saved** with persistent tabs in a single unified dashboard.

### 5. 📊 Real-Time Metrics & Volume Dashboard
- **Dynamic Aggregate Computation**: Automatically recalculates session metrics across current plans:
  - **Total Exercises**: Cumulative count of chosen workouts.
  - **Total Minutes**: Estimated total duration calculated dynamically.
  - **Total Calories**: Sum of estimated energy expenditure in kcal.
- **Live Reactivity**: Counters update instantly when exercises are added, removed, or filtered.

### 6. ⚡ Multi-Criteria Smart Sorting
- Effortlessly organize planned and bookmarked exercises using an instant client-side dropdown:
  - **Duration**: Sort from shortest to longest session length.
  - **Calories**: Sort based on energy expenditure.
  - **Rating**: Sort by top-rated exercises first.

### 7. 🔔 Global State & Responsive Navbar Counters
- **React Context API (`MyPlanContext`)**: Shared state across routes to keep plan count, saved count, and list contents synchronized.
- **Live Badge Counters**: The sticky top navigation bar displays real-time counter pills for active plans (filled neon badge) and saved items (outline badge).
- **Mobile Responsive Drawer**: Compact hamburger drawer navigation ensuring fluid usability across mobile screens, tablets, and wide monitors.

### 8. 🎨 Premium Athletic Aesthetic & Feedback
- **Tailored Color Palette**: Rich obsidian tones (`#0f1013`, `#16171b`) with high-contrast electric lime (`#c2f800`).
- **Modern Typography**: Typographic pairing using Google Fonts — **Oswald** for bold display headers and **Geist** for crisp interface legibility.
- **Loading Skeletons & Fallbacks**: Integrated Next.js `<Suspense>` boundaries with custom pulsing skeletons to prevent layout shift.
- **Toast Notifications**: Powered by `react-toastify` for clear, non-intrusive feedback on user actions.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) | App Router, Server Components, Dynamic Routing, Metadata API |
| **Library** | [React 19](https://react.dev/) | Hooks (`useContext`, `useState`), Suspense boundaries |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict static typing, custom interfaces (`Workout`, `MyPlanContextType`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS styling engine |
| **UI Components** | [DaisyUI v5](https://daisyui.com/) | Accessible, themeable UI components |
| **Typography** | [Google Fonts](https://fonts.google.com/) | Oswald (Athletic headings) & Geist (Body) |
| **Notifications** | [React-Toastify](https://fkhadra.github.io/react-toastify/) | Modern toast alerts for user interactions |
| **Deployment** | [Vercel](https://vercel.com/) | Global edge deployment and continuous delivery |

---

## 🔌 API Reference

The application interfaces with the following Cloudflare Workers REST endpoints:

- **Fetch All Workouts**:
  ```http
  GET https://api.abcz.workers.dev/api/fitlog
  ```
- **Fetch Single Workout Details**:
  ```http
  GET https://api.abcz.workers.dev/api/fitlog/:id
  ```
*(Alternative fallback endpoint supported: `https://api.api-store.workers.dev/api/fitlog`)*

---

## 📂 Project Architecture

```plaintext
b14-a6-solve/
├── public/                      # Static assets & images
│   ├── banner.png               # Hero equipment illustration
│   ├── logo.png                 # FitLog brand mark
│   └── ...
├── src/
│   └── app/
│       ├── layout.tsx           # Root layout (fonts, context providers, toast container)
│       ├── page.tsx             # Home view (Hero banner + Suspense Workout Library)
│       ├── globals.css          # Tailwind CSS v4 & DaisyUI theme configuration
│       ├── type.ts              # TypeScript interface definitions for workouts
│       ├── [workoutID]/         # Dynamic route for single exercise breakdown
│       │   ├── page.tsx         # Workout details & specifications view
│       │   └── loading.tsx      # Loading state fallback
│       ├── my-plan/             # Workout planner & saved shelf
│       │   └── page.tsx         # Tabbed dashboard (Today's Plan, Saved, Stats, Sort)
│       ├── context/             # Global application state
│       │   └── myPlanContext.tsx# React Context Provider for plans and saved lifts
│       └── components/          # Reusable UI component modules
│           ├── navBar.tsx       # Sticky navigation with live badge counters
│           ├── hero.tsx         # Hero banner with call-to-action
│           ├── workoutCard.tsx  # Interactive exercise card item
│           ├── workoutsContainer.tsx # Async server component fetching workout data
│           ├── workoutSkeleton.tsx   # Pulse skeleton placeholder loader
│           ├── FooterSection.tsx     # Brand footer
│           └── ClientSideButtons/    # Action buttons with toast integrations
│               ├── SaveTodaysPlanBtn.tsx # Add to active plan button
│               └── SaveLaterBtn.tsx      # Add to saved collection button
├── package.json                 # Project dependencies and script scripts
├── tsconfig.json                # TypeScript compiler configuration
└── next.config.ts               # Next.js configuration
```

---

## 🚀 Getting Started Locally

Follow these instructions to run the project locally on your machine:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18.18 or higher recommended)
- `npm` (bundled with Node.js) or `pnpm` / `yarn` / `bun`

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/golamazamgm/Programming-Hero-Batch14-Assignment-06.git
   cd Programming-Hero-Batch14-Assignment-06
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 🎯 Assignment Requirements Checklist

| Requirement | Description | Status |
|---|---|:---:|
| **Full Responsiveness** | Flawless experience across mobile, tablet, and desktop devices | ✅ Complete |
| **Meaningful Git Commits** | Structured, frequent commits reflecting development progress | ✅ Complete |
| **Error-Free Deployment** | Fully functional production build running live on Vercel | ✅ Complete |
| **Standard README.md** | Comprehensive project overview, tech stack, and 5+ core features | ✅ Complete |
| **Navbar & Badges** | Brand logo, active route highlighting, and live badge counters | ✅ Complete |
| **Hero / Banner** | Oswald display typography, punchy copy, CTA, and gym artwork | ✅ Complete |
| **The Library Grid** | 12 lifts from API, 3-column desktop layout, category pills & metrics | ✅ Complete |
| **Dynamic Detail Pages** | Two-column specifications layout, instructions, and save actions | ✅ Complete |
| **My Plan & Saved Tabs** | Dual tabs for today's workout vs saved, with sorting and metrics | ✅ Complete |
| **Completion Tracking** | Mark exercises as completed and toggle active daily lifts | ✅ Complete |

---

## 👨‍💻 Author

- **Developer**: Golam Azam ([@golamazamgm](https://github.com/golamazamgm))
- **Course**: Programming Hero Web Development Batch 14
- **Assignment**: Assignment 06 (Fit-Log Gym Companion)
- **Live URL**: [https://programming-hero-batch14assignment6.vercel.app/](https://programming-hero-batch14assignment6.vercel.app/)

---

## 📄 License

This project was developed for educational purposes as part of the Programming Hero Web Development course curriculum.
