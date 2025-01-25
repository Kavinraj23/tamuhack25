import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Home Page Component
function HomePage() {
  const [username, setInputOne] = useState("");
  const [password, setInputTwo] = useState("");

  return (
    <div className="app">
      <h1>Login Information</h1>
      <div className="input-container">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setInputOne(e.target.value)}
            placeholder="Enter username"
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setInputTwo(e.target.value)}
            placeholder="Enter password"
          />
        </label>
      </div>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
}

// Profiles Page Component
function ProfilesPage() {
  return (
    <div>
      <h1>Calander</h1>
      <p>This is the profiles page.</p>
    </div>
  );
}

function FillerPage() {
  return (
    <div>
      <h1>Filler</h1>
      <p>COCK.</p>
    </div>
  );
}

// Error Component
function ErrorPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

// Main App Component with Router
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/filler" element={<FillerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
