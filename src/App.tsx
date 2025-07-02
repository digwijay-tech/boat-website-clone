
import CardSm from "./Component/CardSm"
import CategorySlider from "./Component/CategorySlider"
import Navbar from "./Component/Navbar"
import PoweredByList from "./Component/PoweredByList"

const App = () => {
  return (
    <div>
      <Navbar/>
      <CategorySlider/>
      <PoweredByList/>
      <br />
      <CardSm/>
    </div>
  )
}

export default App