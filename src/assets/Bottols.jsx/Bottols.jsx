import { useEffect, useState } from "react";
import Bottol from "./Bottol.jsx/Bottol";
import { addToLs, getStoredCart } from "./loacalstorg/localstorage";
import Cart from "./cart/cart";
const Bottols = () => {
  

  const [bottols, setBottols] = useState([]);
  const [cart, setcart] = useState([])

  useEffect(()=>{
    fetch('src/assets/public/Public.json')
    .then(res=> res.json())
    .then(data => setBottols(data))
  },[])

  useEffect(()=>{
    if(bottols.length){
      const saveCart = getStoredCart();
      console.log(saveCart, bottols);
      const showCart = [];

      for(const id of saveCart){
        console.log(id)
        const bottol = bottols.find(bottole => bottole.id === id);
        if(bottol){
          showCart.push(bottol)
        }

      }
      setcart(showCart);
    }
  },[bottols])

  const handlerForPurchase = (bottol)=>{
    // console.log("paisi")
    // console.log(bottol.name)
    const newcart= [...cart, bottol];
    setcart(newcart);
    addToLs(bottol.id)

  }

  return (
    <div>
      <h3>Bottols Available : {bottols.length}</h3>
      <Cart cart={cart}></Cart>
      <div className="bottols">
        {
          bottols.map(bottol => <Bottol
          bottol={bottol}
          key={bottol.id}
          handlerForPurchase={handlerForPurchase}
          > </Bottol>
          )
        }
      </div>
    </div>
  );
};

export default Bottols;