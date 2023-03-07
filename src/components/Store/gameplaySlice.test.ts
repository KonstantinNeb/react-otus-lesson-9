import gameplaySlice, {
  startGame,
  stopGame,
  restartGame,
  gameSpeed,
  fieldWidth,
  fieldHeight,
  gameCellCount,
  fillPercentage,
} from "./gameplaySlice"
import {
  GAME_FIELDWIDTH,
  GAME_FIELDHEIGHT,
  GAME_CELLCOUNT,
  GAME_POPULATION,
  GAME_SPEED,
} from "../Game/Game"
/**Описывается состояние поля игры*/
describe("flowSlice states tests", () => {
  it("initial state test", () => {
    expect(gameplaySlice(undefined, { type: "" })).toEqual({
      running: true,
      restart: false,
      speed: GAME_SPEED,
      width: GAME_FIELDWIDTH,
      height: GAME_FIELDHEIGHT,
      cellCount: GAME_CELLCOUNT,
      percentage: GAME_POPULATION,
    })
  })
  it("'startGame' state test", () => {
    expect(gameplaySlice(undefined, startGame()).running).toBeTruthy()
  })
  it("'stopGame' state test", () => {
    expect(gameplaySlice(undefined, stopGame()).running).toBeFalsy()
  })

  it("'restartGame' state test", () => {
    expect(gameplaySlice(undefined, restartGame()).restart).toBeTruthy()
  })
  it("'gameSpeed' state test", () => {
    expect(gameplaySlice(undefined, gameSpeed({ value: 10 })).speed).toEqual(10)
  })
  it("'fieldWidth' state test", () => {
    expect(gameplaySlice(undefined, fieldWidth({ value: 10 })).width).toEqual(
      10
    )
  })
  it("'fieldHeight' state test", () => {
    expect(gameplaySlice(undefined, fieldHeight({ value: 10 })).height).toEqual(
      10
    )
  })
  it("'gameCellCount' state test", () => {
    expect(
      gameplaySlice(undefined, gameCellCount({ value: 10 })).cellCount
    ).toEqual(10)
  })
  it("'fillPercentage' state test", () => {
    expect(
      gameplaySlice(undefined, fillPercentage({ value: 10 })).percentage
    ).toEqual(10)
  })
})
