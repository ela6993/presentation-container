import { useCart } from '../../hooks/useCart';
import './index.css';

function Card({ info }) {
    const { cart, addToCart, removeFromCart } = useCart();

    const cartItem = cart.find(item => item.id === info.id);
    const itemCount = cartItem ? cartItem.number : 0;

    return ( 
        <div className='Card'>
            <div className='image-container'>
                <img src={info.image} alt={info.title} />
            </div>
            <div className='category-container'>
                <p className='cat'>{info.category}</p>
            </div>
            <div className='title-container'>
                <h4 className='title'>{info.title}</h4>
            </div>
            <div className='price-container'>
                <h2 className='price'>${info.price}</h2>
                <div className='buttons'>
                    {itemCount > 0 ? (
                        <>
                            <button className='countButton' onClick={() => removeFromCart(info)}>-</button>
                            <div className='number'>{itemCount}</div>
                            <button className='countButton' onClick={() => addToCart(info)}>+</button>
                        </>
                    ) : (
                        <button className='addButton' onClick={() => addToCart(info)}>Add to cart</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
