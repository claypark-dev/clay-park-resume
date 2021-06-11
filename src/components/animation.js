import React, {useRef, useState} from "react"
import {Canvas, useFrame, useLoader} from 'react-three-fiber'
import * as THREE from "three";
import { PerspectiveCamera } from "three";
import "./animation.less"

const Box = props => {
    // This reference will give us direct access to the mesh so we can animate it
    const mesh = useRef();

    var mouseX = 0;
    var mouseY = 0;
    
    var targetX = 0;
    var targetY = 0;

    //Adding even listener for interactivity

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

   function onDocumentMouseMove(event){
        mouseX = (event.clientX - windowHalfX);
        mouseY = (event.clientY - windowHalfY);
        targetX = mouseX * .005;
        targetY = mouseY * .005;
    }
    document.addEventListener('mousemove', onDocumentMouseMove);
    // const normalMap = useLoader(TextureLoader, ['./NormalMap.png']);
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load('static/normalMaps/moonNormalMap.jpg');

    console.log(targetX);
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.y += 0.005 + .005 * (targetX)))
    useFrame(() => (mesh.current.rotation.x += 0.005 + .005 * (targetY)))

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
          metalness= '0.5'
          roughness = '0.9'
          normalMap = {normalTexture}
          attach="material"
          color='#f3f3f3'
        />
      </mesh>
    )
  }
  // const rootElement = document.getElementById("root");

const Animation = () => (
<Canvas alpha={false}>
    <ambientLight intensity={.2}/>
    <pointLight color={'#3700B3'} intensity={7} position={[-1.86, 1, -.2]} />
    <pointLight color={'#03DAC6'} intensity={7} position={[2.13, -3, -1.4]} />
    <pointLight color={'white'} position={[2,3,4]}/>
    <Box position={[0, 0, 0]} />
</Canvas>

)
export default Animation