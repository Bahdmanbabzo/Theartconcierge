import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html} from '@react-three/drei';
import { Suspense } from 'react';
import Portal from './Portal';
import OrbsScene from './OrbsScene';

const World = () => {
    return (
        <div className="h-screen w-screen fixed top-0">
            <Canvas 
            shadows 
            camera={{ position: [0, 0, 3] }}
            colorManagement
            gl={{
                powerPreference:"high-performance",
                alpha:false, 
                antialias:false,
                stencil:false,
                depth:false
            }}
            >
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 8, 40]} />
               
                <Suspense fallback={<Html center>Loading.</Html>}>
                    <OrbsScene />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default World;