import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('bg-info')

  return (
    <>
      <div className={`${color} text-white `}>
         <h3 className='text-white'>Background Changer</h3>
         <div className='pt-5'>
            <button className='btn btn-secondary rounded-5 px-3' type='button'>
               <button className='btn btn-danger rounded-5 px-3'
               type='button'
               onClick={() => setColor('bg-danger')}>Red
               </button>
               <button className='btn btn-primary rounded-5 ms-2 px-3'
               type='button'
               onClick={() => setColor('bg-primary')}
               >Blue</button>
               <button className='btn btn-warning rounded-5 ms-2 px-3'
               type='button'
               onClick={() => setColor('bg-warning')}
               >Yellow</button>
            </button>
         </div>
      </div>

    </>
  )
}

export default App
