import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import App from './App';
import BucketList from './BucketList.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/cs378-p4/" element={<Login />} />
        {/* <Route path="/cs378-p4/Home" element={<App />} />
        <Route path="/cs378-p4/Weekly" element={<BucketList title="Weekly"/>} />
        <Route path="/cs378-p4/Monthly" element={<BucketList title="Monthly"/>} />
        <Route path="/cs378-p4/Yearly" element={<BucketList title="Yearly"/>} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
