import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import Home from './components/home';
import About from './components/about';
import Admin from './components/admin';
import GlobalContext from './context/global-context';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Cart from './components/cart';


function App() {
  return (
    <div className="App">
      <GlobalContext>
        <BrowserRouter>

          <NavBar></NavBar>

          <Route path="/admin" exact component={Admin} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/about' exact component={About} />
          <Route path='/' exact component={Home} />
          <Route path='/catalog' component={Catalog} />

          <Footer></Footer>
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
