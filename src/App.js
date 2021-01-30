import React, {useState, useEffect} from 'react';
//import Products from './components/Products/Products';
import {commerce} from './lib/commerce'; //commerce instance to handle backend functions
import { Products, Navbar } from './components';


const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(products);

  return (
    <div>
      <Navbar/>
      <Products products={products}/>
    </div>
  )
}

export default App
