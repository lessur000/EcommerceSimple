import { useEffect } from "react";
import useProductStore from "../store/useProductStore"


const FetchProducts = () => {
    const {fetchProducts, products} = useProductStore();

    useEffect(() => {
        fetchProducts();
    },[fetchProducts, products])
 
    return null
}

export default FetchProducts