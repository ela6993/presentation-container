import { useEffect, useState } from "react";
import './App.css'
import ButtonGroup from "./components/ButtonGroup";
import Spinner from "./components/Spinner";
import ProductList from "./components/ProductList";

/* container component */

function App() {
  const [data, setData] = useState([])
  const [fdata, setFdata] = useState([])
  const [activeCategory, setActive] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
    const result = await response.json()
    setData(result)
    setFdata(result)
    } catch (error){
      console.error(error)
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleFilter = (category) => {
    setActive(category)
    if (category) {
      setFdata(data.filter((a) => a.category === category))
    } else {
      setFdata(data)
    }
  }

  return (
    <div className="App">

        <ButtonGroup activeCategory={activeCategory} onFilter={handleFilter}></ButtonGroup>

        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          <ProductList fdata = {fdata}></ProductList>
        )}

    </div>
  );
}

export default App;
