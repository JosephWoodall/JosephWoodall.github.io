import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import GithubRepositories from "./pages/GithubRepositories";
import NoPage from "./pages/NoPage";

import NavigationMenu from "./components/NavigationMenu";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavigationMenu />
      <div className='body-background'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="github_repositories" element={<GithubRepositories />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
