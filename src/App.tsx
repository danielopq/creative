import { NavBar, Header, Design, Approach, BrandNaming, Footer } from "./components"

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Design />
        <Approach />
        <BrandNaming />
        <Footer />
      </main>
    </>
  )
}

export default App
