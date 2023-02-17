import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/Home";
import GithubRepositories from "./pages/GithubRepositories";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="github_repositories" element={<GithubRepositories />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
