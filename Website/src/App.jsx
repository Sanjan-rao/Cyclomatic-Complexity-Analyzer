import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CyclomaticComplexity from './components/CyclomaticComplexity';
import DownloadPage from './components/DownloadPage';
import HomePage from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage/></>} />
          <Route path="/cc-complexity" element={<><Navbar /><CyclomaticComplexity /></>} />
          <Route path="/download" element={<><Navbar /><DownloadPage /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
