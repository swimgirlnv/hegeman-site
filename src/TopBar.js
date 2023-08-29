import './App.css'
import { FaBars } from "react-icons/fa";


function TopBar () {
  return (
    <div className="topNavigation" id="navbar">
          <a className="navbar-first" href="#Intro"><strong>Welcome!</strong></a>
          <div className='navLinks'>
            <a href="#About">Your CCs</a>
            <a className="navbar-last" href="#Links">Important Links</a>
            <a className="navbar-last" href="#Events">Upcoming Events</a>
            <a className="navbar-last" href="#FAQs">FAQs</a>
          </div>
          

          <div className='navLinksMini' id="navLinksMini">
            <a href="#About">Your CCs</a>
            <a className="navbar-last" href="#Links">Important Links</a>
            <a className="navbar-last" href="#Events">Upcoming Events</a>
            <a className="navbar-last" href="#FAQs">FAQs</a>
          </div>
          <div
          className='hamburgerIcon'
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            const sidebar = document.querySelector(`.navLinksMini`);
            if (sidebar) {
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              sidebar.classList.toggle(`open`);
            }
          }}
        >
          <FaBars className='hamburger' />
        </div>
    </div>
  );
}

export default TopBar;