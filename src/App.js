import React, { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import User from "./components/User";
import Dummy1 from "./components/Friyay/dummy1";
import Dummy2 from "./components/Friyay/dummy2";
import Dummy3 from "./components/Friyay/dummy3";
import Dummy4 from "./components/Friyay/dummy4";

const productListData = [
  {
    id: 1,
    name: 'Apple',
    desc: 'Italian apple',
    price: '12$'
  },
  {
    id: 2,
    name: 'Salt',
    desc: 'Rock salt',
    price: '2$'
  },
  {
    id: 3,
    name: 'Soap',
    desc: 'Lifeboy',
    price: '5$'
  }
]

const App = () => {
  const [id, setId] = useState(true);

  const onClickhandler = () => {
    setId(false) // this is not right!!!!
  }

  return (
    <div>
      {/* <ProductList productListData={productListData} />
      <User userId={'fdf'} />  */}
    {/* <Dummy1 value={id} /> */}

    {/* <Dummy2 />
    <Dummy3 />

    <button onClick={onClickhandler}>App Component - Click me</button> */}

    {id ? <Dummy4 /> : null}
  <button onClick={onClickhandler}>App Component - Click me</button>
      
    </div>
    
  )
}
export default App;
