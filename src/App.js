import './App.css';
import Navbars from './Navbar/navbar.index';
import Home from './Home/index.home';
import About from './component/About/index.about';

function App() {
  return (
    <div>  
      <Navbars />
      <Home/>
      <About/>
    </div>
  );
}

export default App;
