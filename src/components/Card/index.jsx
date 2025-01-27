import './index.css'

function Card(props) {
    const{ info } = props

    return ( 
        <div className='Card'>
            <div className='image-container'>
                <img src = {info.image}></img>
            </div>
            <div className='category-container'>
                <p className='cat'>{info.category}</p>
            </div>
            <div className='title-container'>
                <h4 className='title'>{info.title}</h4>
            </div>
            <div className='price-container'>
                <h2 className='price'>${info.price}</h2>
            </div>
        </div>
     );
}

export default Card;