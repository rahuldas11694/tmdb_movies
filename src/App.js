import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies';
import Banner from './components/Banner';
import Details from './components/Details';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Banner/>
        <Movies/>
        <Details/>
      </BrowserRouter>
    </div>
  );
}

export default App;
