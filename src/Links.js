import React, { useState } from "react";
import './links.css'

export default function Links() {

  return (
    <div className="item1" id="Links">
      <div className="buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSft1SOAEudOnRge8JZsW4G-HiUCB4_lBoHu-P5WW1usMpiHqw/viewform?usp=sf_link" target='blank'>
          <div className="btn">
            <div className="slide">
              <div className="image">
                <img
                    src={'https://cdn-icons-png.flaticon.com/512/5968/5968528.png'}
                    width={50}
                    height={50}
                    alt={`Slack logo`}
                />
                </div>
                <div className={"text2"}>Anonymous Feedback Form</div>
              </div>
            </div>
        </a>

        <a href="https://groupme.com/join_group/96061953/3ZQ19k49" target='blank'>
          <div className="btn">
            <div className="slide">
              <div className="image">
                <img
                    src={'https://assets.stickpng.com/images/62e9136aa1e1b17f781f57e6.png'}
                    width={50}
                    height={50}
                    alt={`GroupMe logo`}
                />
                </div>
                <div className={"text2"}>Join our GroupMe!</div>
              </div>
            </div>
        </a>
        </div>
      
    </div>

  );
}
