import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function MarketPairs() {
  return (
    <>
      <div className="market-pairs">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <i className="icon ion-md-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <Tabs defaultActiveKey="btc">
          <Tab eventKey="star" title="★">
            <table className="table star-active">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/BTC
                  </td>
                  <td>0.0613525</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> UNI/BTC
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+5.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SNX/BTC
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-1.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/BTC
                  </td>
                  <td>0</td>
                  <td className="green">0%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="btc" title="BTC">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> USDC/BTC
                  </td>
                  <td>37545.67</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/BTC
                  </td>
                  <td>0.0648499</td>
                  <td className="green">+5.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> UNI/BTC
                  </td>
                  <td>0.002996</td>
                  <td className="red">-1.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MATIC/BTC
                  </td>
                  <td>0.0103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MKR/BTC
                  </td>
                  <td>0.0303</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SHIBA2/BTC
                  </td>
                  <td>0.0000002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SHIBA/BTC
                  </td>
                  <td>0.0000000035</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DOGE/BTC
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SNX/BTC
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> 1INCH/BTC
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> PERP/BTC
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/BTC
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/BTC
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/BTC
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/BTC
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/BTC
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/BTC
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/BTC
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/BTC
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/BTC
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/BTC
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/BTC
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/BTC
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> CEL/BTC
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/BTC
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="eth" title="ETH">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTC/ETH
                  </td>
                  <td>0.00020255</td>
                  <td className="green">+1.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> UNI/ETH
                  </td>
                  <td>0.00013192</td>
                  <td className="red">-0.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MATIC/ETH
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LINK/ETH
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/ETH
                  </td>
                  <td>0</td>
                  <td className="red">0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MKR/ETH
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/ETH
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/ETH
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/ETH
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SHIBA/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SHIBA2/ETH
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DOGE/ETH
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/ETH
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/ETH
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/ETH
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/ETH
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/ETH
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/ETH
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/ETH
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/ETH
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/ETH
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> CEL/ETH
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/ETH
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="SLASH" title="SLASH">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/SLASH
                  </td>
                  <td>0.00350255</td>
                  <td className="red">-6.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> UNI/SLASH
                  </td>
                  <td>0</td>
                  <td className="green">+0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MATIC/SLASH
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SNX/SLASH
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/SLASH
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/SLASH
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/SLASH
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/SLASH
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/SLASH
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/SLASH
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/SLASH
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/SLASH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/SLASH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/SLASH
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/SLASH
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/SLASH
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/SLASH
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/SLASH
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/SLASH
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/SLASH
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/SLASH
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/SLASH
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/SLASH
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/SLASH
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/SLASH
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="usdt" title="USDT">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/USDT
                  </td>
                  <td>0.00350255</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/USDT
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+6.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> UNI/USDT
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LINK/USDT
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MKR/USDT
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MATIC/USDT
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/USDT
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/USDT
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/USDT
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/USDT
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/USDT
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/USDT
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/USDT
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/USDT
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/USDT
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> USDT/USDT
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/USDT
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/USDT
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/USDT
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/USDT
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/USDT
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/USDT
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/USDT
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/USDT
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/USDT
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="dai" title="DAI">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/DAI
                  </td>
                  <td>0.05320255</td>
                  <td className="green">+6.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> SLASH/DAI
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+0.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LINK/DAI
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MKR/DAI
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MATIC/DAI
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/DAI
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/DAI
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/DAI
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/DAI
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/DAI
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/DAI
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/DAI
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/DAI
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/DAI
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/DAI
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DAI/DAI
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/DAI
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/DAI
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/DAI
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/DAI
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/DAI
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/DAI
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/DAI
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/DAI
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/DAI
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
