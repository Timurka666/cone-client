import { useEffect, useRef } from "react";
import * as THREE from 'three'

export function Triangle(props: {points: {x: number, y: number, z:number}[]}) {
    const shapeRef = useRef<THREE.ShapeGeometry>(null!);
    const lineRef = useRef<THREE.BufferGeometry>(null!);
    useEffect(() => {
        shapeRef.current.setFromPoints(props.points.map((el) => {
            return new THREE.Vector3(el.x, el.y, el.z);
        }));
        lineRef.current.setFromPoints(props.points.map((el) => {
            return new THREE.Vector3(el.x, el.y, el.z);
        }))
        
    }, [props.points]);

    return (
        <>
        <mesh>
            <shapeGeometry ref={shapeRef}>
                <shape></shape>
            </shapeGeometry>
            <meshPhysicalMaterial color="#AFAFAF" side={THREE.DoubleSide} />
        </mesh>
        <mesh>
            <line>
                <bufferGeometry ref={lineRef} />
                <lineBasicMaterial color="black" />
            </line>
        </mesh>
        </>
    )
}