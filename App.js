
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Newtect from './components/Newtect';
import Alert from './Alert';
import React,{ useState } from 'react';
// import {
//   BrowserRouter as Router,Routes,Route
// } from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert()
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='gray';
    document.title=" TextUtility-dark mode"
    showAlert("dark mode has been enabled",'success')
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    document.title=" TextUtlity-light mode"

    showAlert("light mode has been enabled",'success')
  }
  }
  

return (
<>
<Navbar  title="TextAnalyzer"about="aboutus" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/> 
<Newtect showAlert={showAlert} mode={mode}/>

{/* <Router>
<Navbar  title="TextAnalyzer"about="aboutus" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>  */}


{/* <Routes>
         
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Newtect showAlert={showAlert} mode={mode}/>} /> */}
          {/* <Newtect showAlert={showAlert} mode={mode} /> */}
        
{/* </Routes> */}
 

{/* </Router> */}
</>
);
  
}

export default App;
