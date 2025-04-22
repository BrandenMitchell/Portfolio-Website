import './App.css';
import {NavBar} from "../src/Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "../src/Components/Banner";
import {Skills} from "../src/Components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
