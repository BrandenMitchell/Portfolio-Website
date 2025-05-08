import './App.css';
import {NavBar} from "../src/Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../src/Components/Banner";
import {Skills} from "../src/Components/Skills";
import {Projects} from "../src/Components/Project";
import {Contact} from "../src/Components/Contact";
import {Footer} from "../src/Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
