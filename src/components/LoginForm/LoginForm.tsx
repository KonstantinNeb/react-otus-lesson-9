import React, { useState } from "react"
import styles from "./LoginForm.module.css"
import { useNavigate } from "react-router-dom"

type LoginFormProps = {
  onSubmit: (name: string) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const [term, setTerm] = useState("")
  const navigate = useNavigate()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        localStorage.setItem("auth", term)
        if (term) {
          navigate("/game", { replace: true })
          location.reload()
        }
      }}
    >
      <div className={styles.centerScreen}>
        <div>Hello! Please enter your name:</div>
        <br />
        <input
          type="text"
          placeholder="Input your name"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          type="submit"
          data-testid="nameButton"
          className={styles.submitButton}
        >
          Start
        </button>
      </div>
    </form>
  )
}
