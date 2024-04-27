import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="">
          <img src="Logo.jpeg" style={{ width: '50px', height: '50px' }} alt="Mindtrack Encoder page" />
        </Link>
      </div>
      <div className="navbar-options">
        <ul>
        <li>
          <Link to="/encoder">
              <button className="nav-btn">
                All Records
              </button>
              </Link>
          </li>
          <li>
          <Link to="/addRecord">
              <button className="nav-btn">
                Add Records
              </button>
              </Link>
          </li>
            <li>
              <Link to="/">
              <button className="nav-btn">
                Logout
              </button>
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;