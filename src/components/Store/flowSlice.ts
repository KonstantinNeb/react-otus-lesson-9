import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialize, mutateCell, nextStep } from "../Game/Game"
export type FlowSliceState = { value: boolean[] | undefined }
export type ActionType = PayloadAction<{
  cellCount?: number
  percentage?: number
  cellIndex?: number
  cellInRow?: number
}>
/**Описывается состояние поля игры*/
export const flowSlice = createSlice({
  name: "flow",
  initialState: {
    value: [],
  } as FlowSliceState,
  reducers: {
    init: (state, action: ActionType) => {
      state.value =
        action.payload.cellCount &&
        (action.payload.percentage || action.payload.percentage === 0)
          ? initialize(action.payload.cellCount, action.payload.percentage)
          : state.value
    },
    mutate: (state, action: ActionType) => {
      state.value =
        state.value &&
        (action.payload.cellIndex || action.payload.cellIndex === 0)
          ? mutateCell(action.payload.cellIndex, state.value)
          : state.value
    },
    nextState: (state, action: ActionType) => {
      state.value =
        state.value && action.payload.cellInRow
          ? nextStep(state.value, action.payload.cellInRow)
          : state.value
    },
  },
})
export const { init, mutate, nextState } = flowSlice.actions

export default flowSlice.reducer
