import { useState, useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { GamePanel } from "../GamePanel/GamePanel"
import { LoginForm } from "../LoginForm/LoginForm"

export const AppRouter: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null)
  const [hasAuthData, initAuthData] = useState(false)
  useEffect(() => {
    setUserName(localStorage.getItem("auth"))
    initAuthData(true)
  }, [])

  if (!hasAuthData) {
    return null
  }

  return userName ? (
    <Routes>
      <Route path="/game" element={<GamePanel />} />
      <Route path="/" element={<Navigate to="/game" />} />
    </Routes>
  ) : (
    <Routes>
      <Route
        path="/login"
        element={<LoginForm onSubmit={() => setUserName("")} />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  )
}
