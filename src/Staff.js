import React, { useState } from "react";
import './staff.css'

export default function Staff() {

  return (
    <div className="staff-content">
      <h3><b>Meet your CCs!</b></h3>
      <br></br>
      <div className="member-content">
        <div><img className="img" src="https://i.imgur.com/lBnlA0r.jpg"></img></div>
        <div className="text">
          <h1>Becca</h1>
          <h2>Room 201A (Tower A)</h2>
          <p>Computer Science / Literary Arts, Class of '24.5</p>
          <p style={{fontStyle: 'italic'}}>Email:
            <a href="mailto:" className="email"> rebecca_waterson@brown.edu</a>
          </p>
          <br></br>
          <p className="paragraph">
          Hello! My name is Becca and I am so excited to meet y'all! 
          I've got a year and a half left, and I'm concentrating in Computer Science and 
          Literary Arts. I love anythingto do with glitter and lizards! 
          My door is always open and I’m always happy 
          to chat! P.S. My number is (775)420-0604 
          if you need anything!
          </p>
        </div>
      </div>

      <div className="member-content">
        <div><img className="img" src="https://i.imgur.com/gKmktCq.jpg"></img></div>
        <div className="text">
          <h1>Jasmine</h1>
          <h2>Room 208C (Tower C)</h2>
          <p>Business Econonomics and Biology, Class of 2026</p>
          <p style={{fontStyle: 'italic'}}>Email:
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
        <div><img className="img" src="https://i.imgur.com/YJPBnMo.png"></img></div>
        <div className="text">
          <h1>Joyce</h1>
          <h2>Room 214B (Tower E)</h2>
          <p>Cognitive Neuroscience</p>
          <p style={{fontStyle: 'italic'}}>Email:
            <a href="mailto:" className="email">joyce_gao@brown.edu</a>
          </p>
          <br></br>

          <p className="paragraph">
          Hi! My name is Joyce, and I am a junior concentrating in cognitive neuroscience. I am from Beijing, China. When I am not in tower A, you can probably 
          find me enjoying Ratty food, or procrastinating in my natural habitat (the Rock). 
          Really excited to meet you all! 
          </p>
        </div>
      </div>
    </div>

  );
}
