import { Link } from 'react-router-dom';
import './Navbar.css';
import Swal from 'sweetalert2'


const send_data = () => {
  Swal.fire({
    title: "Are You Sure ?",
    text: "Data Will Be Published !",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, publish it !"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Success !",
        text: "Your Data Has Been Published !",
        icon: "success"
      });
    }
  });
}



const Publisher_Navbar = () => {
 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="">
          <img src="/logo.png" alt="Neuracare - Publisher" />
        </Link>
      </div>
      <div className="navbar-options">
        <ul>
          <li>
          <Link to="">
              <button className="nav-btn" onClick={send_data}>
                Publish Data!
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

export default Publisher_Navbar;