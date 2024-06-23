import React, { useRef } from 'react'
import {useGLTF, useTexture} from '@react-three/drei'

export function Card({type="shield", ...props}) {
    const { nodes, materials } = useGLTF('/models/card.glb')
    const texture = useTexture(`cards/${type}.jpg`)
    return (
        <group {...props} dispose={null}>
            <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} >
                <meshStanderdMaterial {...materials.Front} map={texture} color='white' />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
                material={materials.Borders}
            />
            <mesh castShadow receiveShadow geometry={nodes.Plane_2.geometry} material={materials.Back} />
        </group>
    )
}

useGLTF.preload('/models/card.glb')