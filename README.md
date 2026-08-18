<h1 align="center">📚 ToBeRead (TBR) - Literary Discovery Platform</h1>

<p align="center">
  A front-end web application that allows users to discover books and manage their personal reading lists using real-time data from the Open Library API.
</p>

## 📖 About The Project

ToBeRead was built to solve the problem of keeping track of books you want to read. By consuming a public API, users can search through millions of titles, view book details, and curate their own personalized "To Be Read" (TBR) list.

### 🛠️ Built With

* **Frontend:** React, JavaScript, HTML5, CSS3
* **API:** Open Library REST API

## ✨ Key Features

- **🔍 Real-Time Search:** Instant search functionality filtering through the Open Library database.
- **📋 Custom Reading Lists:** Users can add and remove books from their personal TBR list.
- **📱 Responsive UI:** Clean, intuitive interface that adapts seamlessly to desktop, tablet, and mobile screens.
- **⚡ Async Data Fetching:** Optimized API calls with error handling and loading states for a smooth user experience.

## 🧠 What I Learned

This project was fundamental in solidifying my understanding of frontend API integration:
- **Data Fetching:** Mastered the use of `fetch`, async/await, and handling complex, deeply nested JSON responses from a third-party REST API.
- **State Management:** Handled complex UI states (loading, error, empty results) and synchronized them with the user's reading list array using React hooks.
- **Debouncing:** Implemented performance optimization techniques on the search input to limit API calls and prevent rate-limiting from the Open Library servers.

## 🚀 Getting Started

\```bash
git clone https://github.com/Osvaldorg/To-Be-Read.git
npm install
npm run start
\```
