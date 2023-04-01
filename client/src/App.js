import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ResumeView from './views/ResumeView';
import ProjectsView from './views/ProjectsView';
import ContactMeView from './views/ContactMeView';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />
      <NavBar />

      <h1>Maya's Portfolio</h1>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView/>} />
        <Route path="/resume" element={<ResumeView/>} />
        <Route path="/projects" element={<ProjectsView/>} />
        <Route path="/contact-me" element={<ContactMeView/>} />
      </Routes>
    </div>
  );
}

export default App;
