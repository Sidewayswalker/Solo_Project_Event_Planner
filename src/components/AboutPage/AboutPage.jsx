import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="containerAboutPage">
      <div>
       <h1>Steven Karl</h1>
       <img src="/Steve_Hat.jpg" alt='My Hat' width="300" height="400" id='My_Picture'/>
       <h2>Description</h2>
       <p>
        Embarking on the path of software development has 
        been an exhilarating journey for me. With every line 
        of code I write, I feel a sense of achievement, fueled 
        by my determination to master this new craft. Each 
        challenge I encounter serves as an opportunity for growth, 
        propelling me forward in my quest for excellence. My 
        journey is defined by resilience and an insatiable thirst 
        for knowledge as I navigate the dynamic landscape of software 
        development. It's a personal saga of transformation and 
        perseverance, highlighting the profound impact of embracing 
        change and pursuing my passions with unwavering dedication. 
        </p>
       <h2>Goals</h2>
       <p>
        <li>Create a C.R.U.D Web Application</li>
        <li>Enchance my skills with Javascript, HTML & CSS</li>
        <li>Communicate from Server to Client using SQL, React, Redux</li>
        <li>Utilize all the knowledge I've gained from Prime Digital Academy's Full Stack Program</li>
        <li>Give myself an open concept project that I can continue to build on.</li>
       </p>
      </div>
    </div>
  );
}

export default AboutPage;
