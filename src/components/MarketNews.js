import React from 'react';
import { Link } from 'react-router-dom';

export default function MarketNews() {
  return (
    <>
      <div className="market-news mt15">
        <h2 className="heading">Market News</h2>
        <ul>
          <li>
            <Link to="/news-details">
              <strong>Slash Protocol</strong>
             Slash Protocol combines best of defi infrastructure including Cross Chain Swap, Decentralized Exchange ,On Chain Option Trading , Largest NFT Market Place.
              <span>2021-05-04 20:22</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>KCS Pay Fees Feature is Coming Soon</strong>
              To accelerate the ecosystem construction of KuCoin Share (KCS) and
              promote the implementation of the KCS application.
              <span>2019-12-04 20:22</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>KCS Pay Fees Feature is Coming Soon</strong>
              To accelerate the ecosystem construction of KuCoin Share (KCS) and
              promote the implementation of the KCS application.
              <span>2019-12-04 20:22</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>Uniswap V3</strong>
             Uniswap v3 flips v2 on volume — and both versions flip Bitcoin on fee revenue
              <span>2021-05-24 20:22</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>Slash Protocol</strong>
             Slash Protocol combines best of defi infrastructure including Cross Chain Swap, Decentralized Exchange ,On Chain Option Trading , Largest NFT Market Place.
              <span>2021-05-04 20:22</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
