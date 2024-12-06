import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import gsap from 'gsap'


const App = () => {

  useState[xValue, setXValue] = useState(0)

  let random = gsap.utils.random(-1000, 1000, 100)

  const boxRef = useRef()
  useEffect(()=>{
    gsap.to(boxRef.current)
  })

  return (
    

    <>
      <button onClick={() => {
        setXValue(random)

      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
      
      
    </>
  )
}

export default App
