import flowSlice, { init, mutate, nextState } from "./flowSlice"
/**Описывается состояние поля игры*/
describe("flowSlice states tests", () => {
  it("initial state test", () => {
    expect(flowSlice(undefined, { type: "" })).toEqual({
      value: [],
    })
  })
  it("'init' state test", () => {
    expect(
      flowSlice(undefined, init({ cellCount: 1, percentage: 100 }))
    ).toEqual({
      value: [true],
    })
  })
  it("'mutate' state test", () => {
    expect(
      flowSlice({ value: [true, true, true, true] }, mutate({ cellIndex: 0 }))
    ).toEqual({
      value: [false, true, true, true],
    })
  })

  it("'nextState' state test", () => {
    expect(
      flowSlice(
        { value: [true, true, true, true, true, true, true, true, true] },
        nextState({ cellInRow: 3 })
      )
    ).toEqual({
      value: [true, false, true, false, false, false, true, false, true],
    })
  })
})
