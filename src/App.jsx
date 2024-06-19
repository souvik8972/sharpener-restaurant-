
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meal from './components/Meals/Meal'

function App() {
  const [cartIsShown, setCartIsShow] = useState(false)
  const showCart=()=>{
    setCartIsShow(true)
  }
  const hideCart=()=>{
    setCartIsShow(false)

  }
  
  return (
  
    <>
      {cartIsShown && <Cart onHideCart={hideCart} />}
      <Header onShowcart={showCart} ></Header>
      <main>
        <Meal/>
      </main>
    </>
  )
}

export default App
