import { createContext } from "react"

interface ContextType {
  userName: string | null
  setUserName: (userName: string | null) => void
}
export const AuthContext = createContext<ContextType>({} as ContextType)
