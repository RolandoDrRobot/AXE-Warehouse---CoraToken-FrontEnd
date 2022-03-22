import React from 'react';
import exchangeIcon from '../../assets/img/exchange.png';
import usdcIcon from '../../assets/img/usdcIcon.png';
import investIcon from '../../assets/img/invest.png';
import coinIcon from '../../assets/img/coin.png';
import gasFeeIcon from '../../assets/img/gasIcon.png';
import Palmer from '../../components/Palmer/index';
import { useWeb3React } from '@web3-react/core';
import './main.css';

function InvestBox() {

  const { account } = useWeb3React();

  return (
    <>
      <Palmer />
      <img src={investIcon} className="pet" alt="" />
      <div className={ 'invest-box' + (account ? ' yellow-border' : '') }>
        <div className="trade-box">
          <p>Stake your Coras and earn APY%.
            You create contracts to earn APY% on your Coras.
            Stake your Coras and earn APY%
          </p>
          <p>Stake your Coras and earn APY%</p>
          <div className="d-flex you-pay">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img className="token-pic" src={usdcIcon} alt="" />
              <span>USDC</span>
              <span className="title-input">You pay</span>
            </div>
            <div>
            </div>
            <div className="d-flex align-items-center">
              <span>$</span>
              <input placeholder="0.00" type="number" />
            </div>
          </div>

          <div className="d-flex justify-content-center exchange-icon">
            <div>
            </div>
            <div className="exchange-icon-img">
              <img src={exchangeIcon} alt="" />
            </div>
            <div>
            </div>
          </div>

          <div className="d-flex you-receive">
            <div className="position-relative d-flex align-items-center justify-content-center">
              <img className="token-pic" src={coinIcon} alt="" />
              <span>Coras</span>
              <span className="title-input">You receive</span>
            </div>
            <div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span>200</span>
            </div>
          </div>
          <p className="main-button">Invest Now</p>

          <div className="mt-4 d-flex justify-content-between">
            <div>
              <span className="transaction-cost-title">transaction cost</span>
              <span className="cost"><span>≈ $</span> 200.005</span>
            </div>
            <div className="gas-container d-flex align-items-center justify-content-center">
              <img className="gas-pic" src={gasFeeIcon} alt="" />
              <span>0.005</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default InvestBox;