import React from 'react';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import RatingStars from './components/RatingStars';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-around">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <Header />
          <PersonalInfo />
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12">
          <Education />
          <Projects />
          <ContactForm />
          <RatingStars />
        </div>
      </div>
    </div>
  );
}

export default App;
