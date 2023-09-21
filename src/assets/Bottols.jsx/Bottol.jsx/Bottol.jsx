import '../Bottol.jsx/Bottols.css'
const Bottol = ({bottol, handlerForPurchase}) => {
  const {name, price, img} = bottol;
  return (
    <div className="bottol-container">
      {/* <h2>choto bottols</h2> */}
      <h4>{name}</h4>
      <img src={img}></img>
      <p>{price}</p>
      <button onClick={()=>handlerForPurchase(bottol)}> Purchase</button>
    </div>
  );
};

export default Bottol;