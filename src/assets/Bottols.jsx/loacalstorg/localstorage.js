const getStoredCart = ()=>{
  const storedcartString = localStorage.getItem('cart')
  if(storedcartString){
    return JSON.parse(storedcartString);
  }
  return [];
}

const savecartToLs = cart =>{
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
}


const addToLs = id=>{
  const  cart = getStoredCart()
  cart.push(id)
  savecartToLs(cart);
}
export {addToLs, getStoredCart}