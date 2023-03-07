import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import { Store } from "redux"
import "@testing-library/jest-dom"
import { Field } from "./Field"
import appStore from "../Store/store"

let store: Store

describe("render tests", () => {
  beforeEach(() => {
    store = appStore
  })

  it("has no cell", () => {
    render(
      <Provider store={store}>
        <Field cellCount={0} />
      </Provider>
    )
    expect(screen.queryByTestId("0")).not.toBeInTheDocument()
  })

  it("has cell inside", () => {
    render(
      <Provider store={store}>
        <Field cellCount={1} />
      </Provider>
    )
    expect(screen.getByTestId("0")).toBeInTheDocument()
  })

  it("click test", () => {
    render(
      <Provider store={store}>
        <Field cellCount={1} />
      </Provider>
    )
    const cell = screen.getByTestId("0")
    fireEvent(cell, new MouseEvent("click", { bubbles: true }))
    expect(screen.getByTestId("0")).toHaveClass("cellDead")
  })
})
