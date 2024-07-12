import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import About from "./pages/about/About";
import Container from "./layout/Container";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
export default function LinksRoutes() {
  return (
      <Router>
        <NavBar/>
        <Container>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
  );
}
