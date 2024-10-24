import Navbar from "./components/navBar/Navbar";
import Header from "./components/header/Header";
import Design from "./components/design/Design";
import Approach from "./components/approach/Approach";
import BrandNaming from "./components/brandNaming/BrandNaming";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Design />
        <Approach />
        <BrandNaming />
      </main>
    </>
  )
}

export default App
