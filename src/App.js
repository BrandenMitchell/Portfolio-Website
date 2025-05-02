import './App.css';
import {NavBar} from "../src/Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../src/Components/Banner";
import {Skills} from "../src/Components/Skills";
import {Projects} from "../src/Components/Project";
import {Contact} from "../src/Components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
