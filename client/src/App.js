import { BrowserRouter, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import GithubRepositories from "./pages/GithubRepositories";
import NoPage from "./pages/NoPage";

import NavigationMenu from "./components/NavigationMenu";

function App() {
  return (
    <>
    <NavigationMenu />
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path="github_repositories" element={<GithubRepositories />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
