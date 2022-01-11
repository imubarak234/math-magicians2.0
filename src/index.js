import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import registerServiceWorker from 'react-service-worker';
import {
  Navigation,
  Footer,
  Home,
  Calculator,
  Quotes,
} from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

registerServiceWorker.unregister();
