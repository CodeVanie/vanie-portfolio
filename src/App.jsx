import { useState } from "react"
import { Header, Content, Footer } from "./components/body.js";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <>
        <Header currentPage={selectedPage} onNavBarClick={setSelectedPage}/>
        <Content selectedPage={selectedPage}/>
        <Footer />
    </>
  )
}

export default App
