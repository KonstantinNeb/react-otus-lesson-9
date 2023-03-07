import { Field } from "../Field/Field"
import { PlayProp } from "../PlayProp/PlayProp"
import { FieldProp } from "../FieldProp/FieldProp"
import { GAME_FIELDWIDTH } from "../Game/Game"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FlowSliceState, init, nextState } from "../Store/flowSlice"
import {
  startGame,
  stopGame,
  restartGame,
  gameSpeed,
  fieldWidth,
  fieldHeight,
  gameCellCount,
  fillPercentage,
  GameSliceState,
} from "../Store/gameplaySlice"
import { AppStateType, flowState, gameplayState } from "../Store/store"
import { AuthContext } from "../Context"
import { useContext } from "react"

export const GamePanel: React.FC = () => {
  const dispatch = useDispatch()
  const gameState = useSelector<AppStateType, FlowSliceState>(flowState)

  const { running, restart, cellCount, percentage, speed, width, height } =
    useSelector<AppStateType, GameSliceState>(gameplayState)

  useEffect(() => {
    if (running && !gameState) {
      dispatch(init({ cellCount, percentage }))
    }
  }, [running, gameState])
  useEffect(() => {
    dispatch(init({ cellCount, percentage }))
  }, [restart, cellCount, percentage])

  useEffect(() => {
    if (running) {
      const timer = setTimeout(() => {
        const cellInRow = cellCount ? Math.ceil(Math.sqrt(cellCount)) : 0
        dispatch(nextState({ cellInRow }))
      }, 1000 / speed)
      return () => clearTimeout(timer)
    }
  })

  const { setUserName } = useContext(AuthContext)

  return (
    <div style={{ width: GAME_FIELDWIDTH }}>
      <div style={{ fontSize: 18, paddingBottom: 20, color: "red" }}>
        Welcome to game of life, {localStorage.getItem("auth")}!
        &nbsp;&nbsp;&nbsp;
        <button
          type="submit"
          onClick={() => {
            window.location.href = "/login"
            setUserName(null)
            localStorage.removeItem("auth")
          }}
        >
          Logout
        </button>
      </div>
      <PlayProp
        onRestart={() => dispatch(restartGame())}
        onPlayChange={(val) => dispatch(val ? startGame() : stopGame())}
        onSpeedChange={(s) => dispatch(gameSpeed({ value: s }))}
      ></PlayProp>
      <FieldProp
        onCellCountChange={(c) => dispatch(gameCellCount({ value: c }))}
        onHeightChange={(h) => dispatch(fieldHeight({ value: h }))}
        onPopulationChange={(p) => dispatch(fillPercentage({ value: p }))}
        onWidthChange={(w) => dispatch(fieldWidth({ value: w }))}
      ></FieldProp>
      <Field width={width} height={height} cellCount={cellCount} />
    </div>
  )
}
