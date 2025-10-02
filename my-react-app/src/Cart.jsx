import Signup from "./Signup";

function Cart(props){
    
    const cartItems = props.cartItems;

    return(
    <>
        <div>
      <h2>🛒 Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ol>
          {cartItems.map((item, index) => (
            <li key={index}><ul><li>Name:  {item.name}</li><li> Price:  {item.price} </li><li>Category:  {item.category}</li></ul></li>
          ))}
        </ol>
      ) : (
        <p>Your cart is empty 😢</p>
      )}
    </div>
    </>
    )



}

export default Cart;