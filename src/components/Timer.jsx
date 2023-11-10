import React, { useContext, useState, useEffect, useRef} from 'react'
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';
import SettingsContext from './SettingsContext';

function Timer() {
    const red = "#f54e4e";
    const green = "#4aec8c"

    const settingsInfo = useContext(SettingsContext);
    const [isPaused,setIsPaused] = useState(true);
    const [secondsLeft, setSecondsLeft] = useState(0)
    const [mode, setMode] = useState("work") // work/ break/ null
    
    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);
    

  function switchMode(){
    const nextMode = modeRef.current === "work" ? "break" : "work"
    const nextSeconds = (nextMode === "work" ? settingsInfo.workMinutes  : settingsInfo.breakMinutes ) * 60
    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  function initTimer(){
      setSecondsLeft(settingsInfo.workMinutes * 60);
  
  }

  function tick(){ 
    secondsLeftRef.current --;
    setSecondsLeft(secondsLeftRef.current)
  }

  useEffect(() => {
        initTimer()
        const interval = setInterval(()=>{
          if(isPausedRef.current){
            return;
          }
          if (secondsLeftRef.current === 0){
            return switchMode()
          }
          tick();
        }, 1000)

        return () => clearInterval(interval);
    }, [settingsInfo])

    const totalSeconds = mode === "work" ? 
    settingsInfo.workMinutes * 60 : 
    settingsInfo.breakMinutes * 60;
    const percentage = Math.round((secondsLeft/totalSeconds * 100) )

    const minutes = Math.floor(secondsLeft / 60)
    let seconds = secondsLeft % 60
    if (seconds < 10)seconds = "0" + seconds;

  return (
    <div className='mt-[50px]'>
        <div className='h-[50%] flex items-center justify-center'>
        <CircularProgressbar 
        className='w-[300xp] h-[300px]'
        value={percentage}
         text={minutes+ ":" + seconds}
         styles={buildStyles({
            textColor:"#fff",
            pathColor: mode === "work" ? green : red,
            tailColor: "rgba(255,255,255,.2)"
         })}
        />
        </div>
       
        <div className='flex justify-center mt-5'>
            {isPaused ? <PlayButton/> :  <PauseButton/>}
            
        </div>
         <div className='flex justify-center mt-5'>
            <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
         </div>


    </div>
  )
}

export default Timer