import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CyclomaticComplexity from './components/CyclomaticComplexity';
import DownloadPage from './components/DownloadPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/cc-complexity" element={<><Navbar /><CyclomaticComplexity /></>} />
          <Route path="/download" element={<><Navbar /><DownloadPage /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
