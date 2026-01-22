import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Checklist from "./components/Checklist";
import Assistant from "./components/Assistant";

import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Goals from "./pages/Goals";
import Tips from "./pages/Tips";
import Settings from "./pages/Settings";

function App() {
  const [air, setAir] = useState(0);

  const [olahraga, setOlahraga] = useState(false);
  const [tidur, setTidur] = useState(false);
  const [sarapan, setSarapan] = useState(false);
  const [meditasi, setMeditasi] = useState(false);
  const [jalan, setJalan] = useState(false);

  const [target, setTarget] = useState(
    Number(localStorage.getItem("target")) || 8
  );

  const [persistData, setPersistData] = useState(
    localStorage.getItem("persistData") === "true"
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  // Load / reset data
  useEffect(() => {
    if (persistData) {
      setAir(Number(localStorage.getItem("air")) || 0);
      setOlahraga(localStorage.getItem("olahraga") === "true");
      setTidur(localStorage.getItem("tidur") === "true");
      setSarapan(localStorage.getItem("sarapan") === "true");
      setMeditasi(localStorage.getItem("meditasi") === "true");
      setJalan(localStorage.getItem("jalan") === "true");
    } else {
      setAir(0);
      setOlahraga(false);
      setTidur(false);
      setSarapan(false);
      setMeditasi(false);
      setJalan(false);
    }
  }, [persistData]);

  // Save settings
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("persistData", persistData);
    localStorage.setItem("target", target);
  }, [darkMode, persistData, target]);

  // Save data if persist ON
  useEffect(() => {
    if (persistData) {
      localStorage.setItem("air", air);
      localStorage.setItem("olahraga", olahraga);
      localStorage.setItem("tidur", tidur);
      localStorage.setItem("sarapan", sarapan);
      localStorage.setItem("meditasi", meditasi);
      localStorage.setItem("jalan", jalan);
    }
  }, [persistData, air, olahraga, tidur, sarapan, meditasi, jalan]);

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <div className="container grid">
                  <Dashboard air={air} setAir={setAir} target={target} />
                  <Checklist
                    olahraga={olahraga} setOlahraga={setOlahraga}
                    tidur={tidur} setTidur={setTidur}
                    sarapan={sarapan} setSarapan={setSarapan}
                    meditasi={meditasi} setMeditasi={setMeditasi}
                    jalan={jalan} setJalan={setJalan}
                  />
                  <Assistant
                    air={air}
                    target={target}
                    olahraga={olahraga}
                    tidur={tidur}
                    sarapan={sarapan}
                    meditasi={meditasi}
                    jalan={jalan}
                  />
                </div>
              </>
            }
          />

          <Route path="/history" element={<History />} />
          <Route path="/goals" element={<Goals target={target} setTarget={setTarget} />} />
          <Route path="/tips" element={<Tips />} />
          <Route
            path="/settings"
            element={
              <Settings
                persistData={persistData}
                setPersistData={setPersistData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
