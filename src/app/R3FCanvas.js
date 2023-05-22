"use client"

import { Canvas } from "@react-three/fiber"
import { KeyboardControls } from "@react-three/drei"

import MyGame from "@components/MyGame"
import Interface from "@/components/Interface"

export default function R3FCanvas() {
  const Controls = {
    forward: "forward",
    back: "back",
    left: "left",
    right: "right",
    jump: "jump",
  }

  return (
    <KeyboardControls
      map={[
        { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
        { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
        { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
        { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
        { name: Controls.jump, keys: ["Space"] },
      ]}
    >
      <Canvas
        shadows
        // camera={{
        //   fov: 45,
        //   near: 0.1,
        //   far: 200,
        //   position: [2.5, 4, 6],
        // }}
      >
        <MyGame />
      </Canvas>
      <Interface />
    </KeyboardControls>
  )
}
