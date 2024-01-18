import React from 'react';
import { Dogs } from './Components/Dogs';
import { CreateDogForm } from './Components/CreateDogForm';
import { Section } from './Components/Section';
import './App.css'; // Import your App's CSS

const App = () => {
  return (
    <div className="app-container">
      {/* Header or Navigation can go here if you have any */}
      
      {/* Main Section */}
      <Section label="Dogs">
        {/* You can conditionally render different components based on state or routing */}
        <Dogs /> {/* Renders the list of dogs */}
        {/* <CreateDogForm /> Uncomment if you want to render the form */}
      </Section>

      {/* Footer can go here if you have any */}
    </div>
  );
};

export default App;
