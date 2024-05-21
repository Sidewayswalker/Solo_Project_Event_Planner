import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Welcome to EventPlanner, your non-obtrusive event planning application! 
          Whether you're organizing a small gathering or a large event, EventPlanner 
          makes it easy and efficient using our seamless text API.
          </p>

          <p>
          EventPlanner is a solo project developed during my time at Prime Digital Academy. 
          This journey has been incredibly enriching, allowing me to learn and grow as a 
          developer. From initial concept to final implementation, I've poured my passion 
          and dedication into creating an application that truly simplifies event planning.
          </p>

          <h3>Features</h3>
          <p>
            <li>
              <b>Non-Obtrusive: </b> 
              Start planning your events without the hassle of email sign-ups. 
              Simply create an account with a username and password, and you're ready to go!
            </li>
            <li>
              <b>Text API: </b> 
              Use our intuitive text-based interface to create, update, and manage your 
              events effortlessly.
            </li>
            <li>
            <b>Solo Project: </b>
            Developed as a comprehensive solo project, EventPlanner showcases 
            my proficiency in various technologies. I utilized JavaScript for 
            dynamic functionality, React for building the user interface, Redux 
            for state management, and SQL for robust database interactions. 
            This project demonstrates my ability to integrate these technologies 
            into a cohesive and efficient application.
            </li>
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
