# Medify

Medify is a React + Vite web app for discovering **medical centers** by location and booking an appointment slot.

It includes:
- **Home** page with multiple marketing/feature sections (Hero, Carousel, Specialisation, etc.)
- **Hospital listing** page to search and view available medical centers and book a time slot
- **My bookings** page to view saved bookings (stored in `localStorage`)

## Tech Stack

- React (Vite)
- React Router
- Material UI (MUI) + Emotion
- Swiper (carousel)
- Deployed-ready for Vercel (SPA rewrite configured)

## Routes

- `/` — Home
- `/hospitals` — Hospital listing + booking slots
- `/my-bookings` — View saved bookings

## Data Source

Medical centers are fetched from:

- `https://meddata-backend.onrender.com/data?state=<state>&city=<city>`

Bookings are saved locally in the browser using `localStorage` under the key: `bookings`.

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run the dev server

```bash
npm run dev
```

Vite will print a local URL (commonly `http://localhost:5173`).

### 3) Build for production

```bash
npm run build
```

### 4) Preview the production build

```bash
npm run preview
```

## Deployment (Vercel)

This repo includes a `vercel.json` rewrite so React Router routes work on refresh (SPA fallback to `/`).

## Notes

- The UI is component-driven under `src/components`.
- Booking persistence uses the browser’s `localStorage`, so bookings are per-device/per-browser.

---

### Repo Structure (high level)

- `src/pages` — route pages (`HomePage`, `HospitalListing`, `Booking`)
- `src/components` — UI sections and reusable components
- `src/context` — `HospitalContextProvider` for fetched results and booking storage