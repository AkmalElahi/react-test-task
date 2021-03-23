import React from 'react';
import './styles.scss';

const Header: React.FC = () => {

  return (
    <div className="header">
      <div className="header__info">
        <div data-testid="header-balance-title" className="header__info-title">Balance</div>
        <div data-testid="header-balance-text" className="header__info-text">
          213 920 $
        </div>
      </div>
      <div className="header__info">
        <div data-testid="header-payout-title" className="header__info-title">Payout</div>
        <div data-testid="header-payout-text" className="header__info-text">
          159 465 $
        </div>
      </div>
    </div>
  );
};

export default Header;
