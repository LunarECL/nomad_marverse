import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
