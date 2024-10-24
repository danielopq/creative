import { Navbar, Header, Design, Approach, BrandNaming, Footer } from "./components"

const App: React.FC = () => {
  return (
    <>
      <Navbar />
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
