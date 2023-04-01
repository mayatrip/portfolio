import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';

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
    </div>
  );
}

export default App;
