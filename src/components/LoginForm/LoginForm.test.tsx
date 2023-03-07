import { LoginForm } from "./LoginForm"
import { act, render, screen } from "@testing-library/react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "@testing-library/jest-dom"
describe("render tests", () => {
  it("render", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm onSubmit={() => {}} />} />
          <Route path="/login" element={<LoginForm onSubmit={() => {}} />} />
        </Routes>
      </BrowserRouter>
    )
    expect(screen.getByPlaceholderText("Input your name")).toBeInTheDocument()
  })
})

describe("click tests", () => {
  it("submit called", () => {
    let x = "qwe1"
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginForm onSubmit={() => (x = "qwe1")} />}
          />
          <Route
            path="/login"
            element={<LoginForm onSubmit={() => (x = "qwe1")} />}
          />
        </Routes>
      </BrowserRouter>
    )

    const button = screen.getByRole("button")
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }))
    })
    expect(x).toBe("qwe1")
  })
})
