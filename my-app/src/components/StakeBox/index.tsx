import stakeIcon from '../../assets/img/stake.png';
import coraIcon from '../../assets/img/coraIcon.png';
import timeIcon from '../../assets/img/time.png';
import './main.css';

function StakeBox() {
  return (
    <>
      <div className="new-contract">
        <img className="stake-icon" src={stakeIcon} />
        <div className="new-contract-box">
          <p>Stake your Coras and earn APY%.
            You create contracts to earn APY% on your Coras.
            Stake your Coras and earn APY%</p>

          <p>Stake your Coras and earn APY%</p>

          <div className="terms">
            <div className="d-flex justify-content-between you-stake">
              <div className="d-flex align-items-center">
                <span>I want to stake</span>
              </div>
              <div className="d-flex align-items-center">
                <input placeholder="0.00" type="number" />
                <img className="pic" src={coraIcon} />
              </div>
            </div>
            <div className="d-flex justify-content-between stake-time">
              <div className="d-flex align-items-center">
                <span>During</span>
              </div>
              <div className="d-flex align-items-center">
                <input placeholder="6" type="number" />
                <span>Months</span>
                <img className="pic" src={timeIcon} />
              </div>
            </div>
          </div>
          <p className="main-button">Stake Now</p>
        </div>
      </div>
    </>
  )
}

export default StakeBox;