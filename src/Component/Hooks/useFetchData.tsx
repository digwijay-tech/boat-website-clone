import { useEffect, useState } from "react"
import type { Product } from "../../../public/model"
import axios from "axios"

type FetchProps ={
    url? :string
}
type ProductRes ={
  products : Product[]
  metadata : any[]
}
export const useFetchData = ({url=""}:FetchProps) => {

      const [products, setProducts] = useState<Product[]>([])
  useEffect(()=>{
    axios
    .get<ProductRes>(url)
    .then(response => {
      console.log(response.data.products)
      setProducts(response.data.products)} )
      .catch(error=>console.log(error))
  },[])
 return products
}
