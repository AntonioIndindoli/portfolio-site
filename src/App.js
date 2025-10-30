import { Col } from "react-bootstrap";
import LandingPage from "./LandingPage";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Col className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Col >
  );
}

export default App;
