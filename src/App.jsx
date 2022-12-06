import React, {useState} from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button} from 'react-bootstrap';

function App() {
  const [deadline, setDeadline]= useState('December 25, 2022');
  const [newDeadline, setNewDeadline]= useState('');

  return (
    <div className="App">
      <div className='App-title'>Countdown to {deadline}</div>
      <div>
        <Clock deadline={deadline}/>
      </div>
      <Form inline>
        <div className='DeadlineInput'>
          <FormControl className='DeadlineInputSize' placeholder='New date' onChange={event=>setNewDeadline(event.target.value)}></FormControl>
          <Button className='buttonClass' onClick={()=>setDeadline(newDeadline)}>Submit</Button>
          </div>
      </Form>
      <p className='explanationClass'>Write date in this format: month day, year (example: january 1, 2024)</p>
    </div>
  );
}

export default App;
