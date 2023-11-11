import { useState } from 'react'
import Timer from './components/Timer'
import Settings from './components/Settings'
import SettingsContext from './components/SettingsContext'

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  

  return (
    <main className='bg-[#30384b] w-screen h-screen overflow-hidden'>
      <h1 className='flex justify-center text-center mt-10 text-5xl text-pink-100 font-semibold'>
        Pomodoro Counter
      </h1>

      <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        showSettings,
        setShowSettings,
      }}>

      {showSettings ? <Settings/> : <Timer/>}

    </SettingsContext.Provider>  
    </main>
  )
}

export default App
