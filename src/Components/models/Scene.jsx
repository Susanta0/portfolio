/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Muru (https://sketchfab.com/muru)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/elf-wizard-ca5564a738174feca82c9d89610c017d
Title: Elf Wizard
*/
'use client'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Cartun(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')

  const modelRef= useRef()

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15
    
  })
  
  return (
    <group {...props} dispose={null}
    ref={modelRef}
    position={[0,-1.5,0]}
    scale={[5.06,6.06,.06]}
    rotation={[0.25, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface3_lambert1_0.geometry}
        material={materials.lambert1}
        scale={0.01}
      />
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_39.geometry}
        material={materials.mat_face}
        skeleton={nodes.Object_39.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_41.geometry}
        material={materials.mat_hat}
        skeleton={nodes.Object_41.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_43.geometry}
        material={materials.mat_skin}
        skeleton={nodes.Object_43.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_45.geometry}
        material={materials.mat_shoes}
        skeleton={nodes.Object_45.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_47.geometry}
        material={materials.mat_coat}
        skeleton={nodes.Object_47.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_49.geometry}
        material={materials.mat_shorts}
        skeleton={nodes.Object_49.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_51.geometry}
        material={materials.mat_shoes}
        skeleton={nodes.Object_51.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_53.geometry}
        material={materials.mat_shoes}
        skeleton={nodes.Object_53.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_55.geometry}
        material={materials.mat_shoes}
        skeleton={nodes.Object_55.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_57.geometry}
        material={materials.mat_coat}
        skeleton={nodes.Object_57.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_59.geometry}
        material={materials.mat_shoes}
        skeleton={nodes.Object_59.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_61.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_61.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_63.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_63.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_65.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_65.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_67.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_67.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_69.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_69.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_71.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_71.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_73.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_73.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_75.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_75.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_77.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_77.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_79.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_79.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_81.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_81.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_83.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_83.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_85.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_85.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_87.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_87.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_89.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_89.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_91.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_91.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_93.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_93.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_95.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_95.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_97.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_97.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_99.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_99.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_101.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_101.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_103.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_103.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_105.geometry}
        material={materials.mat_hair}
        skeleton={nodes.Object_105.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <skinnedMesh
        geometry={nodes.Object_107.geometry}
        material={materials.lambert1}
        skeleton={nodes.Object_107.skeleton}
        position={[0, 0.003, 0.029]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.subtool215_low_mat_staf_0.geometry}
        material={materials.mat_staf}
        position={[0.114, 0.225, 0.135]}
        rotation={[0.281, -0.167, 0.825]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.subtool202_low1_mat_book_0.geometry}
        material={materials.mat_book}
        position={[-0.22, 0.266, 0.081]}
        rotation={[0.168, -0.55, 2.687]}
        scale={0.008}
      />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')