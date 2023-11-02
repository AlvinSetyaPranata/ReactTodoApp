import React, { useEffect, useRef } from 'react'
import Input from '../components/input'
import { useNavigate } from 'react-router-dom'


function Add() {
  const titleRef = useRef()
  const timeRef = useRef()
  const locationRef = useRef()    


  const handler = async () => {

    const data = {
      title: titleRef.current.value,
      dates: timeRef.current.value,
      place: locationRef.current.value,
    }

    await fetch("http://127.0.0.1:8000/api/add/", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status == 200) {
        alert("Berhasil menambahkan todo")
      } else if (response.status == 400) {
        alert("Gagal menambahkan todo")
      }


    }).catch(() => {
      alert("Gagal menambahkan todo")      
    })
  }

  const navigate = useNavigate()


  return (
    <React.Fragment>
       <h3 className="text-xl md:text-3xl font-bold mb-6">Add Todo</h3>
        <div className='py-8 grid gap-12'>
          <div className='grid gap-4'>
            <label className='font-semibold'>What do you want todo?</label>
            <Input ref={titleRef} placeholder="e.g I want to go swimming"/>
          </div>
          <div className='grid gap-4'>
            <label className='font-semibold'>When do you want todo?</label>
            <Input ref={timeRef} type="datetime-local"/>
          </div>
          <div className='grid gap-4'>
            <label className='font-semibold'>Where do you want todo?</label>
            <Input ref={locationRef}/>
          </div>

          <div className='flex gap-4'>
          <button className='rounded-md w-full bg-red-500 py-3.5 text-white' onClick={() => navigate("/")}>Cancel</button>
          <button className='rounded-md w-full bg-green-500 py-3.5 text-white' onClick={handler}>Add Todo</button>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Add