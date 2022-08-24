import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from "./Pages/MultiStepForm";
import PhoneOTPVerification from "./Pages/PhoneOTPVerification";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/multistep-form" exact element={<MultiStepForm/>} />
          <Route path="/phone-verification" element={<PhoneOTPVerification />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
