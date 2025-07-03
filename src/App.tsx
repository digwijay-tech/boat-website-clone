// import CardSm from "./Component/CardSm";
import CategorySlider from "./Component/CategorySlider";
import Navbar from "./Component/Navbar";
import PoweredByList from "./Component/PoweredByList";
// import { useFetchData } from "./Component/Hooks/useFetchData";
import LiveSale from "./Component/LiveSale";
import Policy from "./Component/Policy";

const App = () => {
  // const products = useFetchData({ url: "/product.json" });
  return (
    <div>
      <Navbar />
      <CategorySlider />
      <PoweredByList />
      <Policy/>
      {/* <br /> */}

      {/* {products && products.length > 0 ? (
        products.map((product) => <CardSm {...product} />)
      ) : (
        <div>Error </div>
      )} */}
      <LiveSale/>
    </div>
  );
};

export default App;
