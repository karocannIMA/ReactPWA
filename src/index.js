import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import {Link, Route, BrowserRouter as Router,Routes} from 'react-router-dom';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </Router>
  
);

let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response);
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
