import Button from "../Button";

/*Buttons Presentation */

function ButtonGroup({activeCategory, onFilter}) {
    return ( 
        <div className="buttons-container">
          <Button onClick={() => onFilter("")}
           active={activeCategory}
           category="">All
          </Button>

          <Button onClick={() => onFilter("men's clothing")}
           active={activeCategory}
           category="men's clothing">Men's clothing
          </Button>
          
          <Button onClick={() => onFilter("women's clothing")}
           active={activeCategory}
           category="women's clothing">Women's clothing
          </Button>

          <Button onClick={() => onFilter("jewelery")}
           active={activeCategory}
           category="jewelery">Jewerely
          </Button>

          <Button onClick={() => onFilter("electronics")}
           active={activeCategory}
           category="electronics">Electronics
          </Button>

        </div>
     );
}

export default ButtonGroup;