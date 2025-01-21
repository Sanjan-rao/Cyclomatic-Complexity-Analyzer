import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CyclomaticComplexity from './components/CyclomaticComplexity'
import DownloadPage from './components/DownloadPage';

function App() {

  return (
    <> 
    <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/cc-complexity' element={<><Navbar/><CyclomaticComplexity/></>}/>
        <Route path='/download' element = {<><Navbar/><DownloadPage/></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
