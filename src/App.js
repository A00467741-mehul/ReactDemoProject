import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './Aboutme';
import React, { useState } from 'react';
import MyTown from './MyTown';

function App() {

  const [showResult,setShowResult] = useState('aboutme');

  return (
    <>
      <h1 className='mt-3'>
        Mini React Project
      </h1>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-6'>
            <Button variant="primary" onClick={() => setShowResult('aboutme')} style={{marginBottom:10}}>About me</Button>
            {showResult === 'aboutme' && <AboutMe /> }
          </div>
          <div className='col-sm-6'>
            <Button variant="success" onClick={() => setShowResult('mytown')} style={{marginBottom:10}}>My Town</Button>
            {showResult === "mytown" && <MyTown />}
          </div>
        </div>
       </div> 
    </>
  );
}

export default App;
