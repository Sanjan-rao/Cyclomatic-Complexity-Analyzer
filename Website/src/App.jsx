import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CyclomaticComplexity from './components/CyclomaticComplexity'
import DownloadPage from './components/DownloadPage';

function App() {

  return (
    <> 
    <Router>
      <Routes>
        <Route path='https://cyclomatic-complexity-analyzer.onrender.com/' element={<Navbar/>}/>
        <Route path='https://cyclomatic-complexity-analyzer.onrender.com/cc-complexity' element={<><Navbar/><CyclomaticComplexity/></>}/>
        <Route path='https://cyclomatic-complexity-analyzer.onrender.com/download' element = {<><Navbar/><DownloadPage/></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
