import React, { useEffect, useRef } from 'react'
import Input from '../components/input'
import { useNavigate, useLocation } from 'react-router-dom'

function Edit() {
  const titleRef = useRef()
  const timeRef = useRef()
  const locationRef = useRef()

  const navigate = useNavigate()
  const {state} = useLocation()


  useEffect(() => {
    if (!state.id) { 
      navigate("/")
    }
    // call data from api

  }, [])

  return (
    <React.Fragment>
    <h3 className="text-xl md:text-3xl font-bold mb-6">Edit Todo</h3>
     <div className='py-8 grid gap-12'>
       <div className='grid gap-4'>
         <label className='font-semibold'>What do you want todo?</label>
         <Input ref={titleRef}/>
       </div>
       <div className='grid gap-4'>
         <label className='font-semibold'>When do you want todo?</label>
         <Input ref={timeRef} />
       </div>
       <div className='grid gap-4'>
         <label className='font-semibold'>Where do you want todo?</label>
         <Input ref={locationRef} />
       </div>

       <div className='flex gap-4'>
       <button className='rounded-md w-full bg-red-500 py-3.5 text-white' onClick={() => navigate("/")}>Cancel</button>
       <button className='rounded-md w-full bg-blue-500 py-3.5 text-white'>Change Todo</button>
       </div>
     </div>
 </React.Fragment>
  )
}

export default Edit