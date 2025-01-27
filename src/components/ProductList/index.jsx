import Card from "../Card";

/*Products Presentation*/

function ProductList(props) {
    return ( 
        <ul className='card-container'>
          {props.fdata.map((a) => (
            <Card key = {a.id} info={a}></Card>
          ))}
          </ul>
     );
}

export default ProductList;