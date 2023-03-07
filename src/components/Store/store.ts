import { configureStore } from "@reduxjs/toolkit"
import FlowSliceReducer, { FlowSliceState } from "./flowSlice"
import GameplaySliceReducer, { GameSliceState } from "./gameplaySlice"

export type AppStateType = {
  gameplay: GameSliceState
  flow: FlowSliceState
}

export default configureStore({
  reducer: {
    flow: FlowSliceReducer,
    gameplay: GameplaySliceReducer,
  },
})

export const gameplayState = (state: AppStateType) => state.gameplay

export const flowState = (state: AppStateType) => state.flow
