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
              <strong>Slash Dex</strong>
             Slash Protocol Team to release Slash Dex testnet to early Community Members.
              <span>2021-05-29 23:06</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>Uniswap v3 looks set for layer-two scaling on both Arbitrum and Optimism</strong>
              The Uniswap community has voted in favor of launching the leading decentralized exchange’s v3 iteration on layer-two scaling solution, Arbitrum.
Uniswap’s creator, Hayden Adams, announced the vote on May 27, revealing the proposal’s governance vote received 41.35 million votes in favor and zero opposing votes from UNI token holders.
              <span>2021-05-27 20:22</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong> Uniswap Scaling</strong>
             Uniswap Holders Consider Arbitrum for Scaling DeFi’s Top DEX
Moving an implementation of Uniswap v3 onto the rollup platform is at the heart of a new poll put forth by Compound's Robert Leshner.
              <span>2021-05-26 15:50</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>Uniswap V3</strong>
             Uniswap v3 flips v2 on volume — and both versions flip Bitcoin on fee revenue
              <span>2021-05-24 13:12</span>
            </Link>
          </li>
          <li>
            <Link to="/news-details">
              <strong>Slash Protocol</strong>
             Slash Protocol combines best of defi infrastructure including Cross Chain Swap, Decentralized Exchange ,On Chain Option Trading , Largest NFT Market Place.
              <span>2021-05-04 08:22</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
