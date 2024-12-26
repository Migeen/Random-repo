import Container from "./components/Container"
import Nav from "./components/Nav"


function App() {

  return (
    <div className="flex flex-col bg-secondaryBlack  w-full h-screen">
      <Nav />
      <Container />
    </div>
  )
}

export default App
