
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import Image from 'next/image'
import classes from './information.module.css'

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'black' : 'white'} />
    </mesh>
  )
}

export function Information() {
  return (
    <div id="canvas">
      <Canvas>
        {/* <ambientLight /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <spotLight intensity={0.5} position={[3000, 3000, 4000]} />
        <Box position={[-1.2, 1, 1]} />
        <Box position={[10, 1, 2]} />
      </Canvas>
      <Image src="/img/pivottech.png" width={600} height={200} className={classes.img} alt=""/>
    </div>
  );
}