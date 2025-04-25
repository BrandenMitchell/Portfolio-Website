import './App.css';
import {NavBar} from "../src/Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../src/Components/Banner";
import {Skills} from "../src/Components/Skills";
import {Projects} from "../src/Components/Project";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
