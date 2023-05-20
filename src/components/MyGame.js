import { OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"

import Lights from "./Lights"
import { Level } from "./Level"

export default function MyGame() {
  return (
    <>
      <OrbitControls makeDefault />
      <Lights />
      <Physics debug>
        <Level />
      </Physics>
    </>
  )
}
