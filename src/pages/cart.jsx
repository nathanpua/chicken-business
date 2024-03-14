import React, { useContext } from 'react'
import { MenuList } from '../helpers/MenuList'
//import MenuItem from '../Components/MenuItem'
import { ShopContext } from '../context/shop-context'
import { CartItem } from '../Components/CartItem'
import '../styles/cart.css'

import { useNavigate } from 'react-router-dom'

export const Cart = () => {
    const { cartItems,getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()

  return ( 
    <div className='cart'>
        <div>
            <h1> Cart items</h1>
        </div>
    
        <div className='cartItems'>
            {MenuList.map((menuItem) => {
                if (cartItems[menuItem.id] !== 0){
                    return <CartItem data={menuItem}/>
                }
            })} 
        </div>
        {totalAmount > 0? (
        <div className='checkout'>
            
            <p> Subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate('/menu')}> Continue Shopping </button>
            <button> Checkout </button>
        </div> ) : 
        (<h1>
            Your Cart is Empty
            <div className='checkout2'>
                <button onClick={()=>navigate('/menu')}> Continue Shopping </button>
            </div>

        </h1>)}

    </div>
  )
}
