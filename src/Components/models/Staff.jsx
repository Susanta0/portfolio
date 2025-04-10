/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: charlieblair6516 (https://sketchfab.com/charlieblair6516)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chinese-lantern-staff-affc1382f5f040d88d767f04c6155d11
Title: Chinese Lantern Staff
*/

"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Staff(props) {
  const { nodes, materials } = useGLTF('/models/staff-transformed.glb')

  const modelRef=useRef()

  useFrame(()=>{
    modelRef.current.rotation.y +=0.007
  })

  return (
    <group {...props} dispose={null}
    scale={[20,20,20]}
    position={[-0.8,-1,0]}
    ref={modelRef}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tassles_lambert14_0.geometry}
        material={materials.lambert14}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tassle_knot_strings_0.geometry}
        material={materials.strings}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.String_loop_lambert1_0.geometry}
        material={materials.lambert1}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knot_Tassle_knots_0.geometry}
        material={materials.Tassle_knots}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tassle_bead_tassle_bead_0.geometry}
        material={materials.tassle_bead}
        position={[-0.007, 0.055, 0]}
        scale={0.006}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tassle_hook_Hilt_metals_0.geometry}
        material={materials.Hilt_metals}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knot_loops_Staff_tassle_loops_0.geometry}
        material={materials.Staff_tassle_loops}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.staff_Staff_main_body_0.geometry}
        material={materials.Staff_main_body}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Branch_Main_Branch_0.geometry}
        material={materials.Main_Branch}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lantern_Lantern_paper_0.geometry}
        material={materials.Lantern_paper}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lantern_tassle_rim_Lantern_Structure_0.geometry}
        material={materials.Lantern_Structure}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lantern_Tassles_Lantern_Tassles1_0.geometry}
        material={materials.Lantern_Tassles1}
        position={[-0.001, 0.001, 0]}
        scale={[0.011, 0.01, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tassle_bead1_lantern_light_0.geometry}
        material={materials.lantern_light}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Berry1_Berries1_0.geometry}
        material={materials.Berries1}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plant_branch1_Plant_branches_and_ribs_0.geometry}
        material={materials.Plant_branches_and_ribs}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leaf1_Leaves_0.geometry}
        material={materials.Leaves}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/staff-transformed.glb')
