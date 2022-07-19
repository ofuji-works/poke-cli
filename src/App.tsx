import React, { FC } from "react"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

const App: FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
