import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header fixed-top d-flex flex-column">
        <div className="header-top wk-back-accent d-flex"></div>
        <div className="header-bottom wk-back-primary d-flex"></div>
      </header>
    );
  }
}

export default Header;
