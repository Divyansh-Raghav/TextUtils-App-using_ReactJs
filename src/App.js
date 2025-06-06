import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React ,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert (null);
    },1500);
  }
  const toggleMode=(newMode)=>{
    setMode(newMode);
  

    if (newMode === 'light') {
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
      
    } else if (newMode === 'dark') {
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode enabled', 'success');

    } else if (newMode === 'green') {
      document.body.style.backgroundColor = '#014d40';
      showAlert('Green mode enabled', 'success');
    } else if (newMode === 'red') {
      document.body.style.backgroundColor = '#6c1a1a';
      showAlert('Red mode enabled', 'success');
    }
     }
  
  return (
    <>
     <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} AboutText="About Us"/>
    <Alert alert={alert} />
    <div className="container">
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter, Charactercounter, Remove ExtraSpaces" mode={mode} />} />
        <Route path="/about" element={<About mode={mode} />} />
      </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
