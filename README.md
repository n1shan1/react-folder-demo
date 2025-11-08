# React Starter Template

A clean and scalable folder structure for React projects.
This starter template is suitable for small to medium applications, portfolio projects, SaaS MVPs, or learning React with best practices from day one.

---

## Features

- Create React App for fast development and builds
- React Router setup for page navigation
- Context API for global state management
- Organized and modular folder structure
- Reusable UI component example
- Example custom hook and API service
- Testing setup with Jest and React Testing Library

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
└── index.js
```

---

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm or yarn

### Environment Variables

Create a `.env` file in the root directory and copy the contents from `.env.example`. Update the values as needed for your environment.

```bash
cp .env.example .env
```

### Installation

```bash
npm install
npm start
```

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
npm start
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm test
```

---

## License

This project is open source and available under the MIT License.