import React from 'react';
import { Link } from 'react-router-dom';
import nftIcon from '../../assets/img/nft.png';
import homeIcon from '../../assets/img/home.png';
import investIcon from '../../assets/img/invest.png';
import stakeIcon from '../../assets/img/stake.svg';
import walletIcon from '../../assets/img/wallet.png';
import './main.css';

function Navbar() {
  return (
    <>
      <div className="navbar">
       <Link to="/" className="button">
          <img src={homeIcon} alt="" />
          Home
        </Link>
        <Link to="/stake" className="button">
          <img src={stakeIcon} alt="" />
          Stake
        </Link>
        <Link to="/invest" className="button">
          <img src={investIcon} alt="" />
          Invest
        </Link>
        <Link to="/nftroom" className="button">
          <img src={nftIcon} alt="" />
          NFTs
        </Link>
        <Link to="/wallet" className="button">
          <img src={walletIcon} alt="" />
          Wallet
        </Link>
      </div>
    </>
  )
}

export default Navbar;
