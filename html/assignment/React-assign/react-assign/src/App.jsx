
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section"
import './app.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Section />
      <div className="card-items">
      <Card name="Pizza" price="400rs"></Card>
      <Card name="Burger" price="400rs"></Card>
      <Card name="Noodles" price="400rs"></Card>
      </div>
      <Footer/>
    </div>
  );
}
export default App