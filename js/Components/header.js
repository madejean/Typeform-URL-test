import React from 'react';

class Header extends React.Component {
  render() {
    var styles = {
      header : {
        height: '90px',
        marginLeft: '5px',
        marginRight: '5px',
        background:'#fafafa',
      },
      logo : {
        position: 'absolute',
        width: '200px',
        height: '50px',
        top: '25px',
        padding: '0px 10px 0px 10px',
      },
  };

  return (
    <div style={styles.header}>
      <img src='http://www.medsleuth.com/wp-content/uploads/2010/08/logo.png' style={styles.logo}/>
    </div>

    )
  }
}

export default Header;
