
import React, { useRef,useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { createRoot } from 'react-dom/client'

// const Thing = () => {
//     const ref = useRef();
//     useFrame(() => (ref.current.rotation.z += 0.01));
//     return (
//         <mesh
//             ref={ref}
//             onClick={e => console.log('click')}
//             onPointerOver={e => console.log('hover')}
//             onPointerOut={e => console.log('unhover')}
//         >
//             <planeBufferGeometry attach='geometry' args={[10, 10,10]} />
//             <meshBasicMaterial
//                 attach='material'
//                 color='black'
//                 opacity={0.5}
//                 transparent
//             />
//         </mesh>
//     );
// };

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 2.5 : 1}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

export function Information(){
    return (
        <Canvas>
            {/* <Thing /> */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    );
} 