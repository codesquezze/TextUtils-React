import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
// import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";

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
    }, 1500)
  }
  let style={
    color:'red',
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} navitem1="Home" navitem2="About" />
        <Alert alert={alert}/>

      <div className="container">

        <Routes>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Text Analyser" mode={mode} toggleMode={toggleMode} />} />
          <Route path="/Home" element={<Textform showAlert={showAlert} heading="Text Analyser" mode={mode} toggleMode={toggleMode} />} />

          <Route path="/About" element={<About showAlert={showAlert} heading="About Text Analyser" mode={mode} toggleMode={toggleMode} />} />

          {/* <Route  path="./Contact" element={<Contact />} /> */}


        </Routes>
      </div>
    </>
  );
}

export default App;
