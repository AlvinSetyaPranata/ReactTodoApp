import React, { useEffect, useMemo, useRef } from 'react'
import Input from '../components/input'
import { useNavigate, useLocation } from 'react-router-dom'
import { dateIsoParser, dateParser } from '../utils/dataParser'

function Edit() {
  const titleRef = useRef()
  const timeRef = useRef()
  const locationRef = useRef()

  const navigate = useNavigate()
  const {state} = useLocation()


  useEffect(() => {   
        
    if (state.id == undefined || state.id == null) { 
      navigate("/")
    }
    // call data from api

  }, [])


  const handleEdit = () => {
    const data = {
      title: titleRef.current.value, 
      dates: timeRef.current.value,
      place: locationRef.current.value
    }

    fetch("http://127.0.0.1:8000/api/add/", {
      method: "POST",
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify(data)
    })
  }


  return (
    <React.Fragment>
    <h3 className="text-xl md:text-3xl font-bold mb-6">Edit Todo</h3>
     <div className='py-8 grid gap-12'>
       <div className='grid gap-4'>
         <label className='font-semibold'>What do you want todo?</label>
         <Input defaultValue={state.title} ref={titleRef}/>
       </div>
       <div className='grid gap-4'>
         <label className='font-semibold'>When do you want todo?</label>
         <Input defaultValue={state.date} placeholder={state.date} ref={timeRef} type="text" onFocus={(e) => {e.target.type = "datetime-local"}} onBlur={(e) => {e.target.type ="text"}}/>
       </div>
       <div className='grid gap-4'>
         <label className='font-semibold'>Where do you want todo?</label>
         <Input defaultValue={state.place} ref={locationRef} />
       </div>

       <div className='flex gap-4'>
       <button className='rounded-md w-full bg-red-500 py-3.5 text-white' onClick={() => navigate("/")}>Cancel</button>
       <button className='rounded-md w-full bg-blue-500 py-3.5 text-white' onClick={handleEdit}>Change Todo</button>
       </div>
     </div>
 </React.Fragment>
  )
}

export default Edit