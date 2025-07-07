import CategorySlider from "./Component/CategorySlider";
import Navbar from "./Component/Navbar";
import PoweredByList from "./Component/PoweredByList";
import LiveSale from "./Component/LiveSale";
import Policy from "./Component/Policy";
import Hero from "./Component/Hero";

const App = () => {

  return (
    <div>
      <Navbar />
      <CategorySlider />
      <Hero/>
      <PoweredByList />
      <Policy/>
      <LiveSale/>
    </div>
  );
};

export default App;
