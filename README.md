# 🎬 Movie Discover

A feature-rich movie discovery platform built using **React**, **Chakra UI**, and **React Query**, powered by the **TMDB API**. Users can browse popular movies, search by title, filter by genre, release year, rating, and view detailed movie information.

## 🚀 Features

### 🔹 Core Features
- **Movie Listing**: Grid layout with infinite scrolling for browsing popular movies.
- **Search & Filters**:
  - Search movies by title in real-time.
  - Filter by genre, release year, and rating.
- **Movie Details**:
  - View full plot description, cast, crew, user ratings, reviews.
  - Watch trailers (if available).
- **Responsive Design**: Optimized for both desktop and mobile.

### 🔹 Additional Features
- **Dark/Light Mode** 🌗
- **Watchlist**: Save favorite movies to local storage.
- **Smooth UI Animations**
- **Optimized API Calls**: Data fetching using React Query with caching & pagination.

---

## 🛠️ Tech Stack
- **Frontend**: React (TypeScript), Chakra UI
- **State Management**: React Query
- **API**: TMDB API
- **Routing**: React Router

## 📦 Installation

1. **Clone the Repository**
```sh
git clone https://github.com/Musaraf-M/movie-discover.git
cd movie-discover
```

2. **Install Dependencies**
```sh
npm install
```

3. **Set Up Environment Variables**
Create a `.env` file in the root directory and add your TMDB API key:
```
VITE_TMDB_API_KEY=your_api_key_here
```

4. **Run the Project**
```sh
npm run dev
```

---

## 📂 Project Structure
```
📦 movie-discover
├── 📂 src
│   ├── 📂 components  # UI Components
│   ├── 📂 hooks       # Custom Hooks for API Calls
│   ├── 📂 pages       # Page Components
│   ├── 📂 utils       # Utility Functions
│   ├── main.tsx      # Entry Point
│   ├── app.tsx       # Routes & Layout
├── .env              # Environment Variables
├── package.json      # Dependencies & Scripts
├── README.md         # Project Documentation
```

---

## 🌎 Deployment
- Deployed on **Vercel**
- Live Demo: [your-demo-link](https://your-demo-url.vercel.app)

---

## 🛠️ Future Enhancements
- **User Authentication** for personal watchlists.
- **Movie Reviews & Ratings** by users.
- **Social Sharing** for movie pages.

---

## 🤝 Contribution
1. **Fork the repository**
2. **Create a new branch**
```sh
git checkout -b feature-name
```
3. **Commit changes & push**
```sh
git commit -m "Added new feature"
git push origin feature-name
```
4. **Create a Pull Request**

---

## 📄 License
This project is **MIT Licensed**. Feel free to use and modify! 🎥✨

