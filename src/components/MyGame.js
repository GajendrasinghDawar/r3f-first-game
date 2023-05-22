import { Physics } from "@react-three/rapier"

import Lights from "./Lights"
import { Level } from "./Level"
import Player from "./Player"

import useGame from "@/stores/useGame"
import Effects from "./Effects"

export default function MyGame() {
  const blockCounts = useGame((state) => state.blockCounts)
  const blockSeed = useGame((state) => state.blockSeed)

  return (
    <>
      <color args={["hsl(252, 77.8%, 89.4%)"]} attach={"background"} />
      <Physics>
        <Lights />
        <Level count={blockCounts} seed={blockSeed} />
        <Player />
      </Physics>
      <Effects />
    </>
  )
}
