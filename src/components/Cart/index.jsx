import { useCart } from "../../hooks/useCart";
import Card from "../Card";
import './index.css';

function Cart() {

    const {cart, clearCart, totalCost} = useCart()

    return ( 
        <div className="cart">
            <h2>Total: {totalCost}</h2>
            <button className = 'clear' onClick={() => clearCart()}>Очистить корзину</button>
            <ul className='card-container'>
          {cart.map((a) => (
            <Card key = {a.id} info={a}></Card>
          ))}
          </ul>
        </div>
     );
}

export default Cart;