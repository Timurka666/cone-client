import './App.css';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { TrianglePoints, fetchTriangles } from './api/fetchTrianges';
import { Cone } from './components/cone';
import { Input } from './components/input';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [trianglePoints, setPoints] = useState<TrianglePoints['points']>([]);
  const [highPoint, setHeight] = useState<number>(10);
  const [radius, setRadius] = useState<number>(5);
  const [segments, setSegments] = useState<number>(25);
  const debouncedRadius = useDebounce<number>(2500, radius);
  const debouncedSegments = useDebounce<number>(2500, segments);

  useEffect(() => {
    fetchTriangles(radius, segments).then((data) => {setPoints(data.points)})
  }, [debouncedRadius, debouncedSegments]);
  return (
    <>
    <Canvas style={{marginTop: '100px'}}>

      <ambientLight />
      <Cone height={highPoint} radius={radius} scale={0.3} points={trianglePoints} />
    </Canvas>

    <div className='inputs-wrapper'>
      <Input
      name="Height"
      type='number'
      value={highPoint}
      onChange={(e) => {setHeight(Number(e.target.value))}}/>

      <Input
      name='Radius'
      type='number'
      value={radius}
      onChange={(e) => {Number(e.target.value) > 0 ? setRadius(Number(e.target.value)) : setRadius(1)}}/>

      <Input
      name="Segment's count"
      type='number'
      value={segments}
      onChange={(e) => {Number(e.target.value) > 2 ? setSegments(Number(e.target.value)) : setSegments(3)}}/>
    </div>
    </>
  );
}

export default App;
