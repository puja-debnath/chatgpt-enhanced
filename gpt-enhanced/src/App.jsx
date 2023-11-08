import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' flex bg-gray-800  absolute left-0 right-0 top-0 bottom-0'>
    <aside className='w-1/6 bg-gray-900  text-white items-center text-center p-4'>
      <div className='border-2 border-radius-1 border-solid p-3 text-left hover:bg-gray-800'>
        <span className='pl-2 pr-4 transition-all duration-200 ease-in-out'>+</span>New chat 
     </div>

       </aside>
    <section className=' left-0 right-0 top-0 bottom-0'>
      <h3>jdfhgjkzxvxdc</h3>
    </section>
   </div>


    )
}

export default App
