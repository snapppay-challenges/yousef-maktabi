# 📇 Snapp Contacts App

This is a contact management application which I developed as part of my technical interview for SnappPay.

---

## 🚀 Tech Stack

-   ⚛️ React (CRA - Create React App)
-   🟦 TypeScript
-   🌈 Tailwind CSS
-   📦 TanStack Query
-   ✨ Lucide React

---

## ✨ Features

-   🔄 Infinite Scroll – Automatically loads more contacts as you scroll down.
-   💾 Cache Mechanism – Caches contact lists to improve performance and reduce API calls.
-   🔍 Debounced Search Input – Minimizes requests with optimized input delay.
-   🌐 URL State Sync – Stores search queries in the URL to persist state across refresh/share.
-   📱 Responsive Design – Optimized layout for all screen sizes.

---

## 💡 Potential Enhancements

-   🎠 Convert Recently Viewed Contacts into a carousel to support more than 4 items.
-   🧮 Add Virtual Scrolling for improved performance with large datasets.
-   🧭 Introduce a Back to Top button after scrolling.
-   🧪 Add Tests to ensure component reliability and prevent regressions.
-   🔍 Improve Search Functionality to support case-insensitive name matching.

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

-   [x] Check first interviewer's comments
-   [ ] Main functionalities: These items SHOULD work correctly
    -   [x] List view
        -   [x] Show list of contacts properly with image, name, and tel and be clickable
        -   [x] Handle server errors - NOTE-Sobhan: except of the blocking point.
    -   [x] Pagination
        -   [x] Infinite scroll/page number button
        -   [x] Handle loading and end of the list
    -   [ ] Detail view
        -   [x] Handle routing properly
        -   [] Handle server errors
        -   [x] Handle routing error on manually changing the detail id
    -   [ ] Search
        -   [x] Using Debounce
        -   [ ] Handle multiple requests
        -   [x] Search by first name, last name, and telephone - NOTE-Sobhan: Last name is not implemented.
    -   [x] Most visited contacts
        -   [x] Handle incorrect items in the list (e.g., when you manually change the detail page address)
-   [ ] Clean code:
    -   [x] Well-structured project
    -   [x] Separate concerns
    -   [x] Component-thinking
    -   [x] Simple to understand and less complexity
    -   [x] No over-engineering
    -   [ ] Avoid bad-practice patterns (e.g., multi re-rendering components, useEffect chaining)
    -   [ ] No acute performance issues
    -   [x] Using pure CSS in a good way / Using CSS frameworks like Tailwind without extra complexity
-   [ ] Plus points and nice to have: DON’T judge just based on lack of these items; they should be better compared to other competitors:
    -   [x] Creativity or eye-catching design
    -   [x] Using absolute path
    -   [ ] Using ESLint
    -   [x] Using TypeScript in a best practice way (otherwise is a negative point)
    -   [ ] Using (unit/e2e) Test in an applicable way not just writing some samples
    -   [ ] Set up the project from scratch using Webpack, etc (without over-engineering).

## Sobhan

-   When we block the main URL, it will retry and at last it goes to the whole page error and we lose all recently visited contacts.
-   When we search, the result of the search will be shown in the list, and the recently visited contacts will not be shown until we remove the query.
-   We don't have not-found page for invalid URLs.
-   When we got some pages and the next page's request has error, it goes to the whole page error and we lose all recently visited contacts.
-   Didn't separate 400 error UI with 500 or server errors in contact detail page.
-   Usage of TS and Tailwind is good.
-   The code is well-structured and solid.
-   UI is good and pretty.

### Conclusion

I think he has a good understanding of the basics of React and TypeScript. expect of some error handling issues and last name search, other functionalities are fairly good implemented. In my idea he could pass this step as a mid-level candidate.

## Mohammadreza

If we want to evaluate this for a Senior position, there are several aspects and edge cases that are missing from this implementation, such as:

-   Lack of list virtualization for performance optimization.
-   No use of an AbortController to handle request cancellation.
    I have added some improvement notes, which could serve as discussion points or challenges in a future interview.
