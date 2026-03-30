import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Community from "./pages/Community";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    const [page, setPage] = useState("home");

    return (
        <div className="app">
            <NavBar setPage={setPage} />

            <main className="main-content">
                {page === "home" && <Home />}
                {page === "videos" && <Videos />}
                {page === "community" && <Community />}
                {page === "about" && <About />}
                {page === "contact" && <Contact />}
            </main>

            <Footer setPage={setPage} />
        </div>
    );
}

export default App;