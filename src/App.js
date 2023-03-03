import React from 'react';
import { BrowserRouter as Router,  Route,  Routes,  Navigate} from "react-router-dom";
import CreateRoutine from "./components/CreateRoutine/CreateRoutine";
import Routines from "./components/Routines/Routines";
import SingleRoutine from "./components/SingleRoutine/SingleRoutine";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";

function App() {
  return (
    <div   className="bg-image"
    style={{
      backgroundImage: 'url(./images/black_paper.webp)', height: '100vh'}}>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-routine" element={<CreateRoutine />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/single-routine/:id" element={<SingleRoutine />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    </Router>
    </div>
  );
}

export default App;