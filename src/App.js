import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={HomePage}  
          />

          <Route
            path="details/:id"
            exact={true}
            component={DetailsPage}
          />

          <Route component={NotFoundPage}></Route>
          
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
