import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Components/Header"
const App = () => {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  )
}

export default App