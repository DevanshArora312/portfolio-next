import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { setRotate, setY, setlastX,setSpeed } from "../redux/slices/hutRotate";
import { useSelector, useDispatch } from "react-redux";

export function Hut({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF("/baker_and_the_bridge.glb");
  const hutRef = useRef();
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setRotate(props.rotation));
    }, []);
    const rotate = useSelector((state) => state.hutRotate.rotation);
    const lastX = useSelector(state => state.hutRotate.lastX);
    const rotationSpeed = useSelector(state => state.hutRotate.speed);
    
    const dampingFactor = 0.95;

    // Handle pointer (mouse or touch) down event
    const handlePointerDown = (event) => {
        // event.stopPropagation();
        event.preventDefault();
        setIsRotating(true);

        // Calculate the clientX based on whether it's a touch event or a mouse event
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;

        // Store the current clientX position for reference
        dispatch(setlastX(clientX));
    };

    // Handle pointer (mouse or touch) up event
    const handlePointerUp = (event) => {
        // event.stopPropagation();
        event.preventDefault();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        dispatch(setlastX(clientX));
        setIsRotating(false);
    };

    // Handle pointer (mouse or touch) move event
    const handlePointerMove = (event) => {
        // event.stopPropagation();
        event.preventDefault();
        if (isRotating) {
        // If rotation is enabled, calculate the change in clientX position
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;

        // calculate the change in the horizontal position of the mouse cursor or touch input,
        // relative to the viewport's width
        const delta = (clientX - lastX) / viewport.width;

        // Update the island's rotation based on the mouse/touch movement
        dispatch(setY(rotate[1] + delta * 0.01 * Math.PI));
        hutRef.current.rotation.y = rotate[1];

        // Update the reference for the last clientX position
        dispatch(setlastX(clientX));

        // Update the rotation speed
        dispatch(setSpeed(delta * 0.01 * Math.PI));

        }
    };

    // Handle keydown events
    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);

        hutRef.current.rotation.y += 0.005 * Math.PI;
        dispatch(setSpeed(0.007));
        } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);

        hutRef.current.rotation.y -= 0.005 * Math.PI;
        dispatch(setSpeed(-0.007));
        }
    };

    // Handle keyup events
    const handleKeyUp = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsRotating(false);
        }
    };

    useEffect(() => {
        // Add event listeners for pointer and keyboard events
        const canvas = gl.domElement;
        canvas.addEventListener("pointerdown", handlePointerDown);
        canvas.addEventListener("pointerup", handlePointerUp);
        canvas.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        // Remove event listeners when component unmounts
        return () => {
        canvas.removeEventListener("pointerdown", handlePointerDown);
        canvas.removeEventListener("pointerup", handlePointerUp);
        canvas.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

    // This function is called on each frame update
    useFrame(() => {
        // If not rotating, apply damping to slow down the rotation (smoothly)
        if (!isRotating) {
        // Apply damping factor
        dispatch(setSpeed(rotationSpeed*dampingFactor));

        // Stop rotation when speed is very small
        if (Math.abs(rotationSpeed) < 0.001) {
            dispatch(setSpeed(0));
        }

        hutRef.current.rotation.y += rotationSpeed;
        dispatch(setY(hutRef.current.rotation.y));
        } else {
        // When rotating, determine the current stage based on island's orientation
        const rotation = hutRef.current.rotation.y;
        /**
         * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
         * The goal is to ensure that the rotation value remains within a specific range to
         * prevent potential issues with very large or negative rotation values.
         *  Here's a step-by-step explanation of what this code does:
         *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
         *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
         *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
         *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
         *     This is done to ensure that the value remains positive and within the range of
         *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
         *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
         *     modulo operation to the value obtained in step 2. This step guarantees that the value
         *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
         *     circle in radians.
         */
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the island's orientation
          switch (true) {
            case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
              setCurrentStage(4);
              break;
            case normalizedRotation >= 2.5 && normalizedRotation <= 3:
              setCurrentStage(3);
              break;
            case normalizedRotation >= 4 && normalizedRotation <= 4.4:
              setCurrentStage(2);
              break;
            case normalizedRotation >= 5.9 && normalizedRotation <= 6.1:
              setCurrentStage(1);
              break;
            default:
              setCurrentStage(null);
          }
        }
    });
 
  return (
    <a.group {...props} ref={hutRef} >
      <group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              geometry={nodes.characters_STONE_a_0.geometry}
              material={materials.STONE_a}
            />
            <mesh
              geometry={nodes.characters_STONE_a_0_1.geometry}
              material={materials.STONE_a}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              geometry={nodes.characters007_bush_0.geometry}
              material={materials.bush}
            />
            <mesh
              geometry={nodes.characters007_bush_0_1.geometry}
              material={materials.bush}
            />
          </group>
          <mesh
            geometry={nodes.characters001_charcters_0.geometry}
            material={materials.charcters}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters002_watermill_0.geometry}
            material={materials.watermill}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters003_terrain_left_0.geometry}
            material={materials.terrain_left}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters004_house_0.geometry}
            material={materials.house}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh  
            geometry={nodes.characters005_bridge_0.geometry}
            material={materials.bridge}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters006_tree_0.geometry}
            material={materials.tree}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters008_water_0.geometry}
            material={materials.water}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters009_terrain_right_0.geometry}
            material={materials.terrain_right}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            geometry={nodes.characters010_wheat_0.geometry}
            material={materials.wheat}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
    </a.group>
  );
}

// useGLTF.preload("/baker_and_the_bridge.glb");
