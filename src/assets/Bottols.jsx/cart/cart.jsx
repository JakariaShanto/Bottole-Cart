

const Cart = ({cart}) => {
  return (
    <div>
      <div>
        {
          <h4>Cart : {cart.length}</h4>
        }
        <div>
            {cart.map(bottol=> <img  src={bottol.img}></img>)}
        </div>

      </div>
    </div>
  );
};

export default Cart;