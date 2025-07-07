import CategorySlider from "./Component/CategorySlider";
import Navbar from "./Component/Navbar";
import PoweredByList from "./Component/PoweredByList";
import LiveSale from "./Component/LiveSale";
import Policy from "./Component/Policy";
import Hero from "./Component/Hero";
import PrimeSeries from "./Component/PrimeSeries";
import BigDeal from "./Component/BigDeal";

const App = () => {

  return (
    <div>
      <Navbar />
      <CategorySlider />
      <Hero/>
      <PoweredByList />
      <Policy/>
      <LiveSale/>
      <PrimeSeries/>
      <BigDeal/>
    </div>
  );
};

export default App;
