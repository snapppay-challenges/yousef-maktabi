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
