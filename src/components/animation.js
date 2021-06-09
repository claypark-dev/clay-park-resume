import React, {useRef, useState} from "react"
import {Canvas, useFrame, useLoader} from 'react-three-fiber'
import * as THREE from "three";
import { PerspectiveCamera } from "three";
import "./animation.less"

const Box = props => {
    // This reference will give us direct access to the mesh so we can animate it
    const mesh = useRef();


    // const normalMap = useLoader(TextureLoader, ['./NormalMap.png']);
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load('/static/normalMaps/normalMapBundle.jpg');

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.y += 0.005))

    useFrame(state => {
      state.camera.position.z = 1 
    })
    useFrame(state => {
      state.camera.position.x = 0 
    })
    useFrame(state => {
      state.camera.position.y = 0 
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
      >
        <sphereBufferGeometry args={[.5, 64, 64]}/>
        <meshStandardMaterial
          metalness= '0.7'
          roughness = '0.2'
          normalMap = {normalTexture}
          attach="material"
          color='white'
        />
      </mesh>
    )
  }
  const rootElement = document.getElementById("root");

const Animation = () => (
<Canvas alpha={false}>
    <ambientLight intensity={.2}/>
    <pointLight color={'#ff7f7f'} intensity={7} position={[-1.86, 1, -.2]} />
    <pointLight color={'teal'} intensity={7} position={[2.13, -3, -1.4]} />
    <pointLight color={'white'} position={[2,3,4]}/>
    <Box position={[0, 0, 0]} />
</Canvas>

)
export default Animation