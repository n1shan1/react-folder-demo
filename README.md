# React Starter Template

A clean and scalable folder structure for React projects.  
This starter template is suitable for small to medium applications, portfolio projects, SaaS MVPs, or learning React with best practices from day one.

---

## Features

- Vite for fast development and builds
- React Router setup for page navigation
- Context API for global state management
- Organized and modular folder structure
- Reusable UI component example
- Example custom hook and API service

---

## Folder Structure

```bash
src/
│
├── components/            # Reusable UI components
│   └── Button/
│       ├── index.jsx
│       └── styles.css
│
├── pages/                 # Route-based screens
│   ├── Home.jsx
│   └── Profile.jsx
│
├── hooks/                 # Reusable logic (custom hooks)
│   └── useFetch.js
│
├── services/              # API + external data interactions
│   └── api.js
│
├── context/               # Global state management
│   └── AuthContext.jsx
│
├── assets/                # Images, icons, etc.
│   └── logo.png
│
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Installation

```bash
npm install
npm run dev
````

---

## Usage

* Add new pages inside `src/pages` and register them in `App.jsx`.
* Place reusable UI elements inside `src/components`.
* Use `context` for any state shared across pages.
* Put API requests and data access logic inside `services`.
* Create shared logic and data fetching patterns inside `hooks`.

---

## Example Commands

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

## License

This project is open source and available under the MIT License.