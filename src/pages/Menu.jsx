import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../Components/MenuItem'
import '../styles/Menu.css'
import { useNavigate } from 'react-router-dom'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

function Menu() {
  const navigate = useNavigate()

  return (
    <div className='menu'>
      <h1 className='menuTitle'> Our Menu </h1>
      <div className='menuList'>
    
        {MenuList.map((menuItem) => (
          <MenuItem data = {menuItem}/>
        ))}         
      </div>
        <ShoppingCartSharpIcon className='SubmitButton' onClick={()=>navigate('/cart')}></ShoppingCartSharpIcon>
    </div>
  )
}

export default Menu