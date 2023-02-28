import React from 'react';
import { BrowserRouter as Router,  Route,  Routes,  Navigate} from "react-router-dom";
// import CreateRoutine from "./components/CreateRoutine/CreateRoutine";
// import Routines from "./components/Routines/Routines";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (

    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create-routine" element={<CreateRoutine />} />
          <Route path="/routine" element={<Routines />} /> */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;