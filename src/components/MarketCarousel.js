import React from 'react';
import Slider from 'react-slick';

export default function MarketCarousel() {
  const settings = {
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="market-carousel">
      <Slider {...settings}>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/1.png'} alt="" />
            <strong>Ethereum</strong>
          </div>
          <h2>237394.06 ETH</h2>
          <p>$12,000</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/16.png'} alt="" />
            <strong>Uniswap</strong>
          </div>
          <h2>626984.06 UNI</h2>
          <p>$11,020</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/3.png'} alt="" />
            <strong>Polygon</strong>
          </div>
          <h2>624582.06 MATIC</h2>
          <p>$41,000</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/4.png'} alt="" />
            <strong>Chainlink</strong>
          </div>
          <h2>223222.06 LINK</h2>
          <p>$5,000</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/5.png'} alt="" />
            <strong>Maker Dao</strong>
          </div>
          <h2>267211.06 MKR</h2>
          <p>$21,000</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/6.png'} alt="" />
            <strong>Bitcoin</strong>
          </div>
          <h2>529922.06 BTC</h2>
          <p>$12,003</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/7.png'} alt="" />
            <strong>Slash Protocol</strong>
          </div>
          <h2>229922.06 SLASH</h2>
          <p>$14,111</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/8.png'} alt="" />
            <strong>Cardano</strong>
          </div>
          <h2>93793.39 ADA</h2>
          <p>$13,401</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/9.png'} alt="" />
            <strong>Binance Coin</strong>
          </div>
          <h2>328229.32 BNB</h2>
          <p>$12,402</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
        <div className="market-carousel-item">
          <div className="market-carousel-item-name">
            <img src={'img/icon/10.png'} alt="" />
            <strong>Neo</strong>
          </div>
          <h2>33398.32 NEO</h2>
          <p>$23,202</p>
          <button className="btn buy">Deposit</button>
          <button className="btn sell">Withdraw</button>
        </div>
      </Slider>
    </div>
  );
}
