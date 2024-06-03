import React from "react";
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="containerAboutPage">
      <div>
        <h1>Steven Karl</h1>
        <img
          src="/Steve_Hat.jpg"
          alt="My Hat"
          width="300"
          height="400"
          id="My_Picture"
        />
        <div id="Multi_Box" style={{ display: 'flex' }}>
          <div id="Tech_List_Box">
            <h2><u>Technologies</u></h2>
              <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST API</li>
                <li>React</li>
                <li>Redux</li>
                <li>Git</li>
                <li>SQL</li>
              </ul>
          </div>
          {/* <div id="Challenge_List_Box">
            <h2><u>Challenges</u></h2>
            <ol>
              <li></li>
            </ol>
          </div>
          <div id="Challenge_List_Box">
            <h2><u>Challenges</u></h2>
            <ol>
              <li></li>
            </ol>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
