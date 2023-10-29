import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import  "./App.css"
import CompanyTag from "./components/comapanyTags/CompanyTag";
import Residencies from "./components/Resindcies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient" />
            <Header />
            <Hero />
        </div>
        <CompanyTag/>
        <Residencies/>
        <Value/>
        <Contact/>
        <Started/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
