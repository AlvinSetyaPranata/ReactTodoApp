import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import { dateParser } from "../utils/dataParser";

function App() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [active, setActive] = useState({index: 0, status: false})

  const handleEdit = (id) => {
    navigate("/edit", { state: { id: id, title: data[id].title, date: dateParser(data[id].dates), place: data[id].place } })
  }

  useEffect(() => {
    console.log(data)

    fetch("http://127.0.0.1:8000/api/get/", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((res) => alert("Failed to fetch data"))
  }, [])


  return (
    <React.Fragment>
      {/* <h3 className="text-xl md:text-3xl font-bold mb-6">TodoApp</h3> */}

      <button className='rounded-md w-max bg-green-500 px-6 mb-12 py-3.5 text-white' onClick={() => navigate("/add")}>Tambah Todo +</button>

      <h4 className="text-base md:text-xl font-semibold text-left mb-4">List of your todo:</h4>

      <div className="grid gap-4">
      {/* dynamic */}
      {!data||data.length==0 && <p>No Todo Right now</p>}
      {data.map((value, index) => {
        return (
          <div className="grid gap-6 bg-slate-300 px-4 py-4 rounded-md  relative hover:cursor-pointer" onClick={() => setActive({index: index, status: !active.active})} key={index}>
          <div className="bg-green-600 rounded-full absolute -right-5 -top-3 p-2" onClick={() => handleEdit(index)}>
            <PencilSquareIcon className="fill-white w-[18px] h-[18px] hover:cursor-pointer" />
          </div>

          <div className="px-8 py-4 bg-gray-200 rounded-md">
            <div className="flex justify-between gap-20">
              <p>{value.title}</p>
              <p>{dateParser(value.dates)}</p>
            </div>
          </div>

          <p className={`${active.index==index && active.status ? 'block' : 'hidden'}`}>{value.place}</p>
        </div>
        )
      })}



      </div>

    </React.Fragment>
  )
}

export default App
