import './navBar.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import StoreContext from '../context/store-context';


function NavBar() 
{
  const cart = useContext(StoreContext).cart;

    return (
      <nav>
        <div className='navBar'>
          <Link to="/">Home</Link>
          <Link to="/Catalog">Catalog</Link>
          <Link to="/About">About</Link>
          <form className="d-flex">
            <Link className="btn btn-outline-light" to="/cart">
              <span className="badge bg-primary me-2">{cart.length}</span>
              View Cart
            </Link>
          </form>
        </div>
      </nav>
    );
}

export default NavBar;