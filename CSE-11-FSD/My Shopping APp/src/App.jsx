import { useState } from 'react'
import Product from './assets/components/Products/product'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 id="head">My Shopping App</h1>
    <div id="nav">
    <a href="#">Home</a>
    <a href="#">MyCart</a>
    <a href="#">MyProfile</a>
    <a href="#">MyOrders</a>
    <a href="#">Settings</a>
    </div>
    <Product/>
    </div>
  )
}

export default App
