import React from "react";
import { Link } from "react-router-dom";
import logo from './Assets/logo.png';
import chart from './Assets/chart.png';
import sign from './Assets/sign.png';
export default function Women(){
    return(
        <>
        <div className="storeHelp">
        <div className="storeHelpContent">
          <Link to="/">
            <span>Store Locator</span>
          </Link>
          <span>|</span>
          <Link to="/">
            <span>Help</span>
          </Link>
        </div>
      </div>

      <div className="logoSection">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <input
          type="search"
          placeholder="Search product or brand"
          className="search"
        />
        <img
          src={
            'https://www.next.co.uk/static-content/icons/header/next/v2/vision/search-input-button.svg'
          }
          alt="search_icon"
          className="searchIcon"
        />

        <button className="checkout">Checkout</button>
        <img src={chart} alt="chart" className="chartIcon" />
        <span className="amount">1</span>
        <img src={sign} alt="sign" className="sign" />
      </div>

        <nav>
        <ul className="womenNav">
          <Link to="/Women/Dresses">
            <li>DRESSES</li>
          </Link >
          <Link to="/Women/Accessories">
            <li>ACCESSORIES</li>
          </Link>
          <Link to="/Women/ShopBySize">
            <li>SHOP BY SIZE TYPE</li>
          </Link>
          <Link to="/Women/Work">
            <li>WORKWEAR & TAILORING</li>
          </Link>
          <Link to="/Women/Linger">
            <li>LINGERIE & NIGHTWEAR</li>
          </Link>
          <Link to="/Women/Beauty">
            <li>BEAUTY</li>
          </Link>
          
        </ul>

      </nav>
      <div className="women">
        <h3>All Dresses (1700)</h3>
        <p>Sort</p><input type="search" placeholder="Most Relevant"></input>
      </div>
      
      <div class="items">
        
      <div class="itemContent">
        <div class="item">
          <div className="dress1"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
        </div>
        <div class="item">
          <div className="dress2"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        <div class="item">
          <div className="dress3"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
        </div>
        <div class="item">
          <div className="dress4"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
       
        
    </div>
    <div class="itemContent">
        <div class="item">
        <div className="dress5"></div>
        <p>mariamsamuel122@gmail</p>
          <p>15$</p>
        </div>
        <div class="item">
          <div className="dress6"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        <div class="item">
          <div className="dress7"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        <div class="item">
          <div className="dress8"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        </div>
    <div class="itemContent">
        <div class="item">
        <div className="dress9"></div>
        <p>mariamsamuel122@gmail</p>
          <p>15$</p>
        </div>
        <div class="item">
          <div className="dress10"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        <div class="item">
          <div className="dress11"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        <div class="item">
          <div className="dress12"></div>
          <p>mariamsamuel122@gmail</p>
          <p>15$</p>
          </div>
        </div>
    
</div>

      </>
    )
}