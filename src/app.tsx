import './app.css';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyLayout from './components/layout/my-layout';
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <App />
    </Router>
  );
}
