
import './App.css';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
function App() {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>

    </Routes>
    <Footer/>
  </Router>
}

export default App;
