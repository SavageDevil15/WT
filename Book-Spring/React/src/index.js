import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Collections from './Collections';

import "./main.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
			<Route path="/collections" element={<Collections />} />
			<Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

