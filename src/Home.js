import React from 'react'
import "./Home.css";
import Product from './Product';
import HomeCarousel from './HomeCarousel'; 
import CategoryBanner from './CategoryBanner';



function Home() {
  return (
    <div className='home'>
       
        <div className='home__container'>
              <HomeCarousel />
              


        <div className='home__row'>
           <Product id="1230"
           title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses " 
           price={29.99} 
           image="https://m.media-amazon.com/images/I/81SrwYY-6-L._SX342_.jpg" 
           rating={3}/>


          <Product id="1231"
           title="Wallet Pack of 2- Secure Crypto Wallet - Trusted Cold Storage for Bitcoin, Ethereum, NFT's & More Coins " 
           price={51.87} 
           image="https://m.media-amazon.com/images/I/71N7rWZviFL._AC_SY355_.jpg" 
           rating={4} />

        </div>
        <div className='home__row'>
           <Product id="1232"
           title="OnePlus 10 Pro|5G Android|U.S.Unlocked|Triple Camera| Volcanic Black " 
           price={521.95} 
           image="https://m.media-amazon.com/images/I/61iEEZhRt5L._AC_SY445_.jpg" 
           rating={4} />


            <Product id="1233"
            title="Bluetooth Speaker with HD Sound, Portable Wireless, IPX5 Waterproof,BT5.3 " 
           price={34.99} 
           image="https://m.media-amazon.com/images/I/81l7mB5LhsL._AC_SY355_.jpg" 
           rating={4} /> 


            <Product id="1234"
            title="Rockland Journey Softside Upright Luggage Set,Expandable, Red, 4-Piece (14/19/24/28) " 
           price={99.75} 
           image="https://m.media-amazon.com/images/I/91W5S0nw2qL._AC_SX355_.jpg" 
           rating={3} />


        </div>
        <div className='home__row'>
         <Product id="1235"
           title="Apple 2025 MacBook Air 13-inch Laptop with M4 chip, 24GB Unified Memory, 1TB SSD Storage - Midnight" 
           price={1539.00} 
           image="https://m.media-amazon.com/images/I/71cWZUr9SVL._AC_SY355_.jpg" 
           rating={5} />
           

        </div>
        </div>
    </div>
  )
}


export default Home