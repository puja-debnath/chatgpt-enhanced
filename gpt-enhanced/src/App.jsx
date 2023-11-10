import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex absolute bottom-0 left-0 right-0 top-0 bg-gray-700'>
      <aside className='w-1/5 bg-gray-900 h-full relative'>
        <div className='text-center  text-white top-9 absolute left-10'>
           <span className=' border-2 border-radius-1  pl-9 pt-4 pb-4 pr-10 text-left hover:bg-gray-800 
           transition-all duration-200 ease-in-out'>+ New Chat 
         </span>
        </div>
      </aside>
      <section className='relative w-full text-center'>
           <div className=' flex  '>
           <div className=' flex bg-gray-600 w-full justify-center'>
                    <div className='bg-white border-radius-5 h-10 w-10 rounded-full ml-6 mt-4'>
                       <img src='https://images.unsplash.com/photo-1682685795463-0674c065f315?w=500&auto=
                       format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3
                       fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' alt='photo' className='h-10 w-10 rounded-full' />
                    </div>
                      <div className='m-5'>
                   hello world!
                      </div>
           </div>        
           </div>

           <div className=' flex   '>
           <div className=' flex bg-gray-500 w-full  justify-center'>
                    <div className='bg-green-600  border-radius-5 h-10 w-10 rounded-full ml-6 mt-4'>
                       <img />
                    </div>
                      <div className='m-5'>
                   i am an AI 
                      </div>
                      </div>
                    </div>
        <div className=' bottom-0 inset-x-0 absolute '>
          <textarea  className='bg-gray-600 border-radius-2 border-solid p-1 rounded-md shadow-lg text-white m-4 w-5/6  '
          placeholder='Send a message'/>
        </div>
      </section>
    </div>
    )
}

export default App
