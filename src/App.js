import "./index.css";
import Header from "./sections/header/Header";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function App() {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
    >
      <Header data-scroll-container />
    </LocomotiveScrollProvider>
  );
}

export default App;
