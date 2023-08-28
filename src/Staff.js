import React, { useState } from "react";
import './staff.css'

export default function Staff() {

  return (
    <div className="staff-content">
      <div className="member-content">
        <div><img className="img" src="https://i.imgur.com/lBnlA0r.jpg"></img></div>
        <div className="text">
          <h1>Becca</h1>
          <h2>Room 201A (Tower A)</h2>
          <p>Computer Science / Literary Arts, Class of '24.5</p>
          <p>Email:
            <a href="mailto:" className="email">rebecca_waterson@brown.edu</a>
          </p>
          <br></br>
          <p className="paragraph">
          Hello! My name is Becca and I am so excited to be back on campus! 
          I’m finishing my junior year this semester and starting my senior 
          year next semester, as well as concentrating in Computer Science and 
          Literary Arts. My home is Incline Village, Nevada, and love anything 
          to do with the outdoors! My door is always open and I’m always happy 
          to chat; I can’t wait to meet you all! P.S. My number is (775)420-0604 
          if you need anything!
          </p>
        </div>
      </div>

      <div className="member-content">
        <div><img className="img" src="https://i.imgur.com/rQVI1Xg.jpg"></img></div>
        <div className="text">
          <h1>Jasmine</h1>
          <h2>Room 208C (Tower C)</h2>
          <p>Computer Science / Literary Arts, Class of '24.5</p>
          <p>Email:
            <a href="mailto:" className="email">jasmine_xi@brown.edu</a>
          </p>
          <br></br>
          <p className="paragraph">
          Hi everyone! My name is Jasmine and I’m so excited to be one of your CCs. 
          A little bit about me: I’m a sophomore from Connecticut studying bio and econ, 
          and am a big sports fan. Please reach out if you need anything. My number is 
          (475)-343-8339 and I live in 208. Looking forward to meeting everyone and 
          planning some fun events with my fellow CCs!
          </p>
        </div>
      </div>

      <div className="member-content">
        <div><img className="img" src="https://i.imgur.com/UuQDKcs.png"></img></div>
        <div className="text">
          <h1>Joyce</h1>
          <h2>Room 214B (Tower E)</h2>
          <p>Computer Science / Literary Arts, Class of '24.5</p>
          <p>Email:
            <a href="mailto:" className="email">joyce_gao@brown.edu</a>
          </p>
          <br></br>
          <p className="paragraph">
          Hi! My name is Joyce, and I am a junior concentrating in cognitive neuroscience and 
          (maybe) English. I am from Beijing, China. When I am not in tower A, you can probably 
          find me enjoying Ratty food, or procrastinating in my natural habitat (the Rock). 
          Really excited to meet you all! 
          </p>
        </div>
      </div>
    </div>

  );
}
