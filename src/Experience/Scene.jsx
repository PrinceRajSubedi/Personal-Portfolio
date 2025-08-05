import React, { Suspense } from 'react'
import Model from './models/Room.jsx' 
import { AmbientLight } from 'three'


const Scene = () => {
  return (
    <>
      <Suspense>
        
        <Model/>
      </Suspense>
    </>
  )
}

export default Scene
