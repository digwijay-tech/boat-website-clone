import CardSm from "./CardSm"
import { useFetchData } from "./Hooks/useFetchData"


const CardGrid = () => {
    const products = useFetchData({url:"/product.json"})
    console.log(products)
  return (
    <div className="card-grid">
        {
            products && products.length  ?
            products.map(product =>(
                <CardSm {...product}/>
            )):<div> Products not found</div>
        }
    </div>
  )
}

export default CardGrid