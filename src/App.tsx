import { NavBar, Header, Design, Approach, Guidelines, Footer } from "./components"

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Design />
        <Approach />
        <Guidelines />
        <Footer />
      </main>
    </>
  )
}

export default App
