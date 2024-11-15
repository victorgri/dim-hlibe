import { Header } from "./components/Header/Header"
import { Links } from "./components/Links/Links"
import './App.css'

export const App = () => {
  return (
    <div className="main">
      <Header />
      <Links />
    </div>
  )
}