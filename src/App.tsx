import React from 'react';
import logo from './logo.png';
import './App.css';
import PatientList from './components/PatientList';
import BiomarkerSummary from './components/BiomarkerSummary';
import getPatients from './data/getPatients';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <main>
        <section id="patients">
          <h2>Patient List</h2>
          <p>Fetch the list of patients (hint: use the <code>getPatients</code> function) and render into a list or table here.</p>
          <PatientList></PatientList>
        </section>
        <section id="biomarkers">
          <h2>Biomarker Summary</h2>
          <p>Sort through the patient list and collect unique biomarkers and positive and negative counts per biomarker name. Render those counts into a table here.</p>
          <BiomarkerSummary></BiomarkerSummary>
        </section>
      </main>
    </div>
  );
}

export default App;
