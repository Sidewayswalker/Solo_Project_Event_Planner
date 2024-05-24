import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
       <h1>Steven Karl</h1>
       <h1>My Picture</h1>
       <h1>Description</h1>
       <h1>Goals</h1>
      </div>
    </div>
  );
}

export default AboutPage;
