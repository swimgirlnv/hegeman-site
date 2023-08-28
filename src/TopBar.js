import './App.css'

function TopBar () {
  return (
    <div className="top-bar" id="navbar">
          <a className="navbar-first" href="#Intro"><strong>Welcome!</strong></a>
          <a href="#About">Your CCs</a>
          <div className="separator"></div>
          <a className="navbar-last" href="#Links">Important Links</a>
          <div className="separator"></div>
          <a className="navbar-last" href="#Events">Upcoming Events</a>
          <div className="separator"></div>
          <a className="navbar-last" href="#FAQs">FAQs</a>
        </div>
  );
}

export default TopBar;