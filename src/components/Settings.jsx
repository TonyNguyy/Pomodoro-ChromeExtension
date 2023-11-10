import React, { useContext } from 'react'
import ReactSlider from "react-slider"
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';


function Settings() {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div className="mt-5 p-20">
       
        <label className='font-semibold text-white text-2xl'>
            Work: {settingsInfo.workMinutes}:00
        </label>
        <ReactSlider
        className=' h-[40px] border-[1px] border-green-600 rounded-[2rem] mb-10 mt-2'
        thumbClassName='h-[40px] bg-green-200 w-[40px] rounded-full focus:bg-green-400'
        trackClassName=''
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        />

        <label className='font-semibold text-white text-2xl '>
            Break: {settingsInfo.breakMinutes}:00
        </label>
        <ReactSlider
        className='h-[40px] border-[1px] border-red-600 rounded-[2rem] mt-2 '
        thumbClassName='h-[40px] bg-red-200 w-[40px] rounded-full focus:bg-red-400'
        trackClassName=''
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        /> 
        <BackButton
        onClick={()=> settingsInfo.setShowSettings(false)}
        />
       

    </div>
  )
}

export default Settings;