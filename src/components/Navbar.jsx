import { Link } from 'react-router-dom';

export function Navbar() {
    return (
      <header className="navbar">
        <Link to="/">
          <img src="/LogoAndTitle.png" alt="MasterMinds Logo" className="logo" />
        </Link>
        <div className="nav-buttons">
            <Link to="/login">
                <button className="nav-button">Log In</button>
            </Link>
            <Link to="/signup">
                <button className="nav-button">Sign Up</button>
            </Link>
        </div>
      </header>
    );
  }  