import React from 'react'



const Input = React.forwardRef((props, ref) => {

  return <input className='px-4 py-3.5 rounded-md bg-slate-300 outline-none min-w-[300px]' ref={ref} required={true} {...props}/>
})

export default Input