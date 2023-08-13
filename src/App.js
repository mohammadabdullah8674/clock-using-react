import "./styles.css";
import Footer from "./components/Footer";
import AnalogClock from "./components/AnalogClock";
import DigitalClock from "./components/DigitalClock";

export default function App() {
  return (
    <div>
      <DigitalClock />
      <AnalogClock />
      <Footer />
    </div>
  );
}
