  import "./App.css";
import Bubbles from "./Bubbles";
import Links from "./Links";
  import Staff from "./Staff";
import TopBar from "./TopBar";

  function App() {
    
    return (
      <div className="App">
        <TopBar />
        <div className="page-content" id="Intro">
          <div className="intro">
            <div className="left-side-intro" >
              <h2><b>Welcome to Hegeman Hall!</b></h2>
              <br></br>
              <div> 
                <br></br>
                <p>This site is meant as a digital bulletin board where you can find important links and information 
                  pertaining to upcoming events and announcements from your CCs!
                </p>
                <br></br>
                <p>Speaking of... let's dive in and meet them!</p>
              </div>
            </div>
            <div className="right-side-intro">
              <img className="dolphin" 
              src="https://i.imgur.com/IeUC1U8.png"
              alt="Sponge Bob's House"></img>
            </div>
            <Bubbles />
          </div>
            <div className="about" id="About">
              <div className="about-content">
                <h3><b>Meet your CCs!</b></h3>
                <br></br>
                <Staff />
              </div>
            </div>
          </div>

          <Links />
        <div className="footer">
          <p>Made with love in Providence</p>
        </div>

      </div>
    )
  }

  export default App;

  