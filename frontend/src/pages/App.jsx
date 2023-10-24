import { useNavigate } from "react-router-dom";
import React from "react";

function App() {
  const navigate = useNavigate()

  const handleEdit = (id) => {

    // sessionStorage.setItem("toEdit", JSON.stringify({
    //   id: id,
    // }))
    navigate("/edit", {state: {id: id}})
  }

  return (
    <React.Fragment>
      {/* <h3 className="text-xl md:text-3xl font-bold mb-6">TodoApp</h3> */}

      <button className='rounded-md w-max bg-green-500 px-6 mb-12 py-3.5 text-white' onClick={() => navigate("/add")}>Tambah Todo +</button>

      <h4 className="text-base md:text-xl font-semibold text-left mb-4">List of your todo:</h4>

      <div className="grid gap-6 bg-slate-300 px-4 py-4 rounded-md">
        <div className="px-8 py-4 bg-gray-200 rounded-md">
          <div onClick={() => handleEdit(0)} className="flex justify-between gap-20 hover:cursor-pointer">
            <p>Go Swimming</p>
            <p>12.00</p>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default App
