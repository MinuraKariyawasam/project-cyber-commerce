import React,{ useState, useEffect } from 'react'
import {commerce} from './lib/commerce'; //instance to handle backend calls

//import Products from './components/Products/Products';
//import Navbar from './components/Navbar/Navbar';

import {Products, Navbar,Cart} from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async()=>{
        const { data } = await commerce.products.list(); //api call

        setProducts(data);
    };

    //cart
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
    
      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };
    //   const refreshCart = async () => {
    //     const newCart = await commerce.cart.refresh();
    
    //     setCart(newCart);
    //   };
      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);
    
      return (
          <div >
    
            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />

          </div>
      );
    };
    
    export default App;