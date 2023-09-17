import "./App.css";
import HomePage from "./pages/homepage";
import MoviePage from "./pages/movies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // return <MoviePage />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Movies/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
