# 📇 Snapp Contacts App

This is a contact management application which I developed as part of my technical interview for SnappPay.

---

## 🚀 Tech Stack

- ⚛️ React (CRA - Create React App)
- 🟦 TypeScript
- 🌈 Tailwind CSS
- 📦 TanStack Query
- ✨ Lucide React

---

## ✨ Features

- 🔄 Infinite Scroll – Automatically loads more contacts as you scroll down.
- 💾 Cache Mechanism – Caches contact lists to improve performance and reduce API calls.
- 🔍 Debounced Search Input – Minimizes requests with optimized input delay.
- 🌐 URL State Sync – Stores search queries in the URL to persist state across refresh/share.
- 📱 Responsive Design – Optimized layout for all screen sizes.

---

## 💡 Potential Enhancements

- 🎠 Convert Recently Viewed Contacts into a carousel to support more than 4 items.
- 🧮 Add Virtual Scrolling for improved performance with large datasets.
- 🧭 Introduce a Back to Top button after scrolling.
- 🧪 Add Tests to ensure component reliability and prevent regressions.
- 🔍 Improve Search Functionality to support case-insensitive name matching.

---

## 🛠 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Yousef-Maktabi/snapp-contacts-application
cd snapp-contacts-application
```

### 2. Start the Backend Server

```bash
cd backend
npm install
npm start
```

Make sure your backend server is running before starting the frontend. By default, the backend runs at http://localhost:1337

### 3. Start the Frontend App

```bash
cd ../frontend
npm install
npm start
```

The application should now be running at http://localhost:3000


### Code review checklist

-   [ ] Check first interviewer's comments
-   [ ] Main functionalities: These items SHOULD work correctly
    -   [ ] List view
        -   [ ] Show list of contacts properly with image, name, and tel and be clickable
        -   [ ] Handle server errors
    -   [ ] Pagination
        -   [ ] Infinite scroll/page number button
        -   [ ] Handle loading and end of the list
    -   [ ] Detail view
        -   [ ] Handle routing properly
        -   [ ] Handle server errors
        -   [ ] Handle routing error on manually changing the detail id
    -   [ ] Search
        -   [ ] Using Debounce
        -   [ ] Handle multiple requests
        -   [ ] Search by first name, last name, and telephone
    -   [ ] Most visited contacts
        -   [ ] Handle incorrect items in the list (e.g., when you manually change the detail page address)
-   [ ] Clean code:
    -   [ ] Well-structured project
    -   [ ] Separate concerns
    -   [ ] Component-thinking
    -   [ ] Simple to understand and less complexity
    -   [ ] No over-engineering
    -   [ ] Avoid bad-practice patterns (e.g., multi re-rendering components, useEffect chaining)
    -   [ ] No acute performance issues
    -   [ ] Using pure CSS in a good way / Using CSS frameworks like Tailwind without extra complexity
-   [ ] Plus points and nice to have: DON’T judge just based on lack of these items; they should be better compared to other competitors:
    -   [ ] Creativity or eye-catching design
    -   [ ] Using absolute path
    -   [ ] Using ESLint
    -   [ ] Using TypeScript in a best practice way (otherwise is a negative point)
    -   [ ] Using (unit/e2e) Test in an applicable way not just writing some samples
    -   [ ] Set up the project from scratch using Webpack, etc (without over-engineering).
