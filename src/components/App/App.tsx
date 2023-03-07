import { useState, useEffect } from "react"
import { AuthContext } from "../Context"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../Routes/AppRouter"

export const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    setUserName(localStorage.getItem("auth"))
  }, [])
  return (
    <AuthContext.Provider
      value={{
        userName: userName,
        setUserName: setUserName,
      }}
    >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
