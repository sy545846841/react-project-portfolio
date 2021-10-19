import react from "react";
import AboutSection from "./components/AboutSection";
import AboutUs from "./pages/AboutUs";
import ServiceSection from "./components/ServiceSection";
import FaqSection from "./components/FaqSection";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AboutUs />
      <ServiceSection />
      <FaqSection />
    </>
  );
}

export default App;
