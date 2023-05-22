import React, { useEffect, useRef } from "react"
import { useKeyboardControls } from "@react-three/drei"
import { addEffect } from "@react-three/fiber"

import useGame from "@/stores/useGame"

export default function Interface() {
  const timeRef = useRef()

  const forward = useKeyboardControls((state) => state.forward)
  const leftward = useKeyboardControls((state) => state.left)
  const backward = useKeyboardControls((state) => state.back)
  const rightward = useKeyboardControls((state) => state.right)
  const jump = useKeyboardControls((state) => state.jump)

  const restart = useGame((state) => state.restart)
  const phase = useGame((state) => state.phase)

  const keyStyle =
    "w-[40px] h-[40px] m-3 border-2 border-[hsl(52,97.9%,82.0%)] bg-[hsla(0,0%,100%,0.386)] rounded"
  const activeButton = "bg-yellow-400"

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useGame.getState()
      let elapsedTime = 0

      if (state.phase === "playing") elapsedTime = Date.now() - state.startTime
      else if (state.phase === "ended")
        elapsedTime = state.endTime - state.startTime

      elapsedTime /= 1000
      elapsedTime = elapsedTime.toFixed(2)

      if (timeRef.current) timeRef.current.textContent = elapsedTime
    })

    return () => {
      unsubscribeEffect()
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 w-full h-full pointer-events-none">
      <div
        ref={timeRef}
        className="absolute top-[0] left-0 text-[6vh] text-center bg-[hsla(0,0%,0%,0.071)]  text-[hsl(206,24.0%,9.0%)] font-bold  pt-[5px] w-full"
      >
        0.00
      </div>

      {phase === "ended" && (
        <div
          className="flex top-[25%] justify-center absolute left-0 w-full text-[80px]  pt-3 text-[hsl(206,24.0%,9.0%)] font-bold pointer-events-auto cursor-pointer bg-[hsla(0,0%,0%,0.071)] hover:bg-[hsla(0,0%,0%,0.114)]"
          onClick={restart}
        >
          Restart
        </div>
      )}

      {/* Controls */}

      <div className="absolute bottom-[2%] left-0 w-full">
        <div className="flex justify-center">
          <div className={` ${keyStyle} ${forward ? activeButton : " "}`}></div>
        </div>
        <div className="flex justify-center">
          <div className={`${keyStyle} ${leftward ? activeButton : " "}`}></div>
          <div className={`${keyStyle} ${backward ? activeButton : " "}`}></div>
          <div
            className={`${keyStyle} ${rightward ? activeButton : " "}`}
          ></div>
        </div>
        <div className="flex justify-center">
          <div
            className={`${keyStyle} w-[144px] ${jump ? activeButton : " "}`}
          ></div>
        </div>
      </div>
    </div>
  )
}
