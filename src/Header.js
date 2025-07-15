import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import CategoryBanner from './CategoryBanner';



function Header() {

  const[{basket,user},dispatch]= useStateValue();

  const handleAuthentication =() => {
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to='/'>
        <img className='header__logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/> 
      
      </Link>
     

      <div className='header__search'>
            <input className="header__searchInput" type="text"/>
            <SearchIcon className='header__searchIcon'/>
            
      </div>

      <div className='header__nav'>
        <Link to='/login'>
          <div className='header__option'>
              <span onClick={handleAuthentication} className='header__optionOne'> Hello {user? user.email : "Guest"}</span>
             
              <span className='header__optionTwo'> 
                { user ? 'Sign Out': 'Sign In'}
              </span>
          </div>
        </Link>

        <Link to='/orders'>
         <div className='header__option'>

          <span className='header__optionOne'>Returns</span>
          <span className='header__optionTwo'>& Orders</span>

         </div>
        </Link>
        <div className='header__option'>

          <span className='header__optionOne'>Your</span>
          <span className='header__optionTwo'>Prime</span>

         </div>

        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <AddShoppingCartIcon/>
            <span className='header__optionLineTWo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
         
        




      </div>
    </div>
  )
}

export default Header