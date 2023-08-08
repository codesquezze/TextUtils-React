import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
// import Contact from './components/Contact';
// import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} navitem1="Home" />
      <Alert alert={alert} />
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} navitem1="About" navitem2="Contact Us" />
        <Alert alert={alert} /> */}
      {/* <Navbar/>     used when default props is used */}
      <div className="container">
        {/* <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Text Analyser" mode={mode} toggleMode={toggleMode} />} />
            
            <Route exact path="/About" element={<About  mode={mode} toggleMode={toggleMode}/>} />
            <Route exact path="/Contact Us" element={<Contact/>} />


          </Routes> */

          <Textform showAlert={showAlert} heading="Text Analyser" mode={mode} toggleMode={toggleMode} />
        }



      </div>

    </>
  );
}

export default App;
