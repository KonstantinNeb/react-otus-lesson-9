import { createSlice, PayloadAction } from "@reduxjs/toolkit"

/**Controls effect for a game field*/
import {
  GAME_FIELDWIDTH,
  GAME_FIELDHEIGHT,
  GAME_CELLCOUNT,
  GAME_POPULATION,
  GAME_SPEED,
} from "../Game/Game"
export type GameSliceState = {
  running: boolean
  restart: boolean
  speed: number
  width: number
  height: number
  cellCount: number
  percentage: number
}

export type GameStateAction = PayloadAction<{
  value: number
}>

const initialState = {
  running: true,
  restart: false,
  speed: GAME_SPEED,
  width: GAME_FIELDWIDTH,
  height: GAME_FIELDHEIGHT,
  cellCount: GAME_CELLCOUNT,
  percentage: GAME_POPULATION,
} as GameSliceState

/**Game state description*/
export const gameplaySlice = createSlice({
  name: "gameplay",
  initialState: initialState,
  reducers: {
    startGame: (state) => {
      state.running = true
    },
    stopGame: (state) => {
      state.running = false
    },
    restartGame: (state) => {
      state.restart = !state.restart
    },
    gameSpeed: (state, action: GameStateAction) => {
      state.speed = action.payload.value
    },
    fieldWidth: (state, action: GameStateAction) => {
      state.width = action.payload.value
    },
    fieldHeight: (state, action: GameStateAction) => {
      state.height = action.payload.value
    },
    gameCellCount: (state, action: GameStateAction) => {
      state.cellCount = action.payload.value
    },
    fillPercentage: (state, action: GameStateAction) => {
      state.percentage = action.payload.value
    },
  },
})
export const {
  startGame,
  stopGame,
  restartGame,
  gameSpeed,
  fieldWidth,
  fieldHeight,
  gameCellCount,
  fillPercentage,
} = gameplaySlice.actions

export default gameplaySlice.reducer
