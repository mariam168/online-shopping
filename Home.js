import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.png';
import chart from './Assets/chart.png';
import sign from './Assets/sign.png';
import './style.css';

export default function Home() {
  const [paragraphs, setParagraphs] = useState([
    'Enjoy free delivery available to home or free to store',
    'Next day across fashion & furniture with next unlimited',
    'Be in the know - Opt into Emails',
  ]);
  const [currentParagraph, setCurrentParagraph] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 4000);
  
    return () => clearInterval(timer);
  }, [paragraphs]);

  return (
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
        <ul>
          <Link to="/Women">
            <li>Women</li>
          </Link>
          <Link to="/">
            <li>Men</li>
          </Link>
          <Link to="/">
            <li>Boys</li>
          </Link>
          <Link to="/">
            <li>Girls</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Holiday shop</li>
          </Link>
          <Link><li>Gifts & Flowers</li></Link>
                <Link><li>Baby</li></Link>
                <Link><li>Brands</li></Link>
                <Link><li>Beauty</li></Link>
                <Link><li>Sports</li></Link>
        </ul>
      </nav>

      <div className="joinEmail">
        <h3>{paragraphs[currentParagraph]}</h3>
      </div>

      <div className="newSeason">
        <div className="seasonParagraph">
          <p style={{ fontSize: '20px' }}>NEW SEASON</p>
          <p style={{ fontSize: '50px' }}>SILHOUETTES</p>
          <button>Sell trousers</button>
        </div>
        <div className="image"></div>
      </div>

      <div className="shops">
        <div className="shopContent">
          <div className="men"><h3>Men's smart shop</h3><button>Shop now</button></div>
          <div className="minimalism"><h3>Soft minimalism shop</h3><button>Shop now</button></div>
          <div className="boy"><h3>Boy's sets & outfits</h3><button>Shop now</button></div>
        </div>
        <div className="dressCode"><h1>DRESS CODE: DEMIN</h1><button>Shop now</button></div>
      </div>

      <div className="a-zBrand">
            <div className="march"><p>March top picks</p></div>

            <div className="hub"><p>The trainer hub</p></div>
            <div className="trend"><p>Trending: red</p></div>
            <div className="wester"><p>Western style</p></div>
            <div className="easter"><p>Easter</p></div>
            <div className="weeding"><p>The wedding shop</p></div>
            <div className="sweaty"><p>Sweaty Betty</p></div>
            <div className="eid"><p>The Eid shop</p></div>
            <div className="next"><p>discover brands at next</p></div>
      </div>

      <div className="secondShop">
        <div className="athleisure"><h3>Elevated athleisure</h3><button>Shop now</button></div>
        <div className="beds"><h3>Beautiful beds</h3><button>Shop now</button></div>
        <div className="airstrait"><h3>Just landed: Dyson Airstrait</h3><button>Shop now</button></div>
      </div>

      <div className="brands">
      <img src="https://www.next.co.uk/nxtcms/resource/blob/5613410/69d80a9fb606af6cf95ce405c42d027a/nike-logo-data.png" alt="image1"></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/6006552/727d0655f55eb264e2381ea334b73a1f/adidas-min-data.png" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/4156594/c73df2543ea23300f2dac9f530098dd8/loverose-data.jpg" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/5824808/a20401acf7da635ab1d04d62cdab1657/reiss-logo-data.jpg" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/6001580/bab9b56e2f7a6f365ad4c439a8a54df1/logo-joules-data.jpg" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/3667432/1d3afa6edd6ec7b8df52250fb0afb3c0/river-island-1--data.jpg" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/6014098/76e634638f465e7e8ada1db487d18151/sweatybettylogo-data.png" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/4758674/fdb67d1610be7c0e660532580cca28da/vs-data.png" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/4623996/c3203fd67b2662c12add6643f1eb8570/boss-logo-data.jpg" alt=""></img>
           <img src="https://www.next.co.uk/nxtcms/resource/blob/4515370/1ff35f11fcb02a454f0c793faa320084/bath-body-works-c-data.jpg" alt=""></img>
           <img src="" alt=""></img>
           <img src="" alt=""></img>
      </div>

      
     <div className='latest'>
        <h2>Latest news & articles</h2>
      <div className="latestContent">
      <div className="lavender"><h4>Trending: lavender</h4></div>
            <div className="bride"><h4>The bridesmaid edit</h4></div>
            <div className="stripes"><h4>The stripes edit</h4></div>
            <div className="furniture"><h4>Furniture updates</h4></div>
      </div>
      </div>
      <div className="delivery">
        <p>
          *Next day delivery is subject to stock, courier availability and
          courier area. Order cut off times may vary. For full exceptions,
          please refer to our terms & conditions.
        </p>
        <p>
          †Nextunlimited costs £22.50 for a 12-month subscription. Exceptions
          apply. For more information, please refer to the nextunlimited terms &
          conditions
        </p>
      </div>

      <hr />

      <div className="subscribe">
        <p>
          Keep up to date with the latest Next news, including exclusive offers
          and not to be missed
        </p>
        <p>sale and store events.</p>
        <p>Enter your email address below to opt in to email marketing.</p>
        <div>
          <input type="email"  />
        </div>
        <button>Subscribe</button>
        <p>See Next's full Terms and Conditions and Privacy Policy to find out more.</p>
      </div>

      <footer>
        <ul>
          <li className='first'>Help</li>
          <li>Frequently Asked Questions</li>
          <li>Delivery Information</li>
          <li>Arrange A Return</li>
          <li>Product Recall</li>
          <li>Customer Services - 0333 777 8000</li>
          <li>Contact Us</li>
          <li>Accessible Site</li>
          <li>Website Accessibility Policy</li>
        </ul>
        <ul>
          <li className='first'>Shopping With Us</li>
          <li>Next Unlimited</li>
          <li>Next Credit Options</li>
          <li>eGift Cards</li>
          <li>Gift Cards</li>
          <li>Gift Experiences</li>
          <li>Flowers, Plants & Wine</li>
          <li>Privacy & Cookie Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul>
          <li className='first'>Departments</li>
          <li>Womens</li>
          <li>Mens</li>
          <li>Boys</li>
          <li>Girls</li>
          <li>Home</li>
          <li>Furniture</li>
          <li>Beauty</li>
        </ul>
      </footer>
    </>
  );
}
