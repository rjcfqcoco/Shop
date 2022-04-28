import React, { useState } from 'react'
import { FaShoppingCart} from "react-icons/fa";
export default function Header() {
  let [cartOpen, setcartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logotype' >Gaming stuff</span>
            <ul className = 'nav'>
              <li>Интересно кто мы?</li>
              <li>Хочешь связаться с нами?</li>
              <li>Кабинет</li>
              <li>Заходи к нам </li>
            </ul>
            <FaShoppingCart onClick={() => setcartOpen(cartOpen = !cartOpen)} className = {`shop-cart-button ${cartOpen && 'active'}`} />


            {cartOpen && (
              <div className = 'shop-cart'>

              </div>
            )}
        </div>
        <div className='present'>  </div>
    </header>
  )
}
