import "./index.css";
import Header from "./sections/header/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Intro from "./sections/intro/Intro";

function App() {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
    >
      <main data-scroll-container>
        <Header
          title="Mesurer votre santé avec Beco"
          descr="Nous vous offrons des solutions innovantes pour prendre soin de votre santé
            au quotidien via des objets connectés."
          cta="Découvrir nos produits"
        />
        <Intro />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
