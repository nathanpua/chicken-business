import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context'

function MenuItem(props) {
    const {id,image,name,price} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <div className='menuItem' >
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>
            {name}
        </h1>
        <p>
            {price}
            <br />
            <br />
            <button className='addToCartBttn' onClick={()=>addToCart(id)}>
                 Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} 
            </button>
        </p>
        
    </div>
  )
}

export default MenuItem
