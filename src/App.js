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
        <Header />
        <Intro />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
