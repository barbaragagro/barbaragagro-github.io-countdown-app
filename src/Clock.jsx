import React, {useState} from 'react'
import { useEffect } from 'react';
import './App.css'

export default function Clock(deadline) {
    const [days,setDays]=useState(0);
    const [hours,setHours]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [seconds,setSeconds]=useState(0);



    function setTime(deadline){
        let time= Date.parse(deadline.deadline) - Date.parse(new Date());
        const Vseconds= Math.floor((time/1000)%60);
        const Vminutes= Math.floor((time/1000/60)%60);
        const Vhours= Math.floor((time/1000/60/60)%24);
        const Vdays= Math.floor((time/(1000*60*60*24)));
            

        setDays(Vdays);
        setHours(Vhours);
        setMinutes(Vminutes);
        setSeconds(Vseconds);
        
    }
    setInterval(() => {
        setTime(deadline)},
        1000);

     useEffect(()=>setTime(deadline));



    function leading0(num) {
        return num < 10 ? '0' + num : num;
    }
    
 

  return (
    <div>
        <div className='Clock-days'>{leading0(days)} days</div>
        <div className='Clock-hours'>{leading0(hours)} hours</div>
        <div className='Clock-minutes'>{leading0(minutes)} minutes</div>
        <div className='Clock-seconds'>{leading0(seconds)} seconds</div>
    </div>
  )
}
