import { useFrame, useThree } from "@react-three/fiber"
import { TrianglePoints } from "../api/fetchTrianges"
import { Triangle } from "./triangle"
import { useEffect, useRef } from "react"
import * as THREE from "three";

export function Cone(props: {height: number, radius: number, scale: number, points: TrianglePoints['points']}) {
    const ref = useRef<THREE.Group>(null!);
    const {gl} = useThree();
    gl.setSize(window.innerWidth, window.innerHeight/2)
    useFrame(() => {ref.current.rotateY(0.01)})
    
    useEffect(() => {

    }, [props]);

    return (
        <group scale={props.scale} ref={ref}>
        {props.points.map((el, i, arr) => {
          return i !== arr.length - 1 ?
          <Triangle
          points={[{x: el.x, z: el.y, y: 0}, {x: 0, y: props.height, z: 0}, {x: arr[i+1].x, y: 0, z: arr[i+1].y}]} key={i} />
          
          : <Triangle
          points={[{x: el.x, z: el.y, y: 0}, {x: 0, y: props.height, z: 0}, {x: arr[0].x, y: 0, z: arr[0].y}]} key={i} />
        })}
      </group>
    )
}