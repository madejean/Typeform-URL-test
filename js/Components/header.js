import React from 'react';

class Header extends React.Component {
  render() {
    var styles = {
      header : {
        height: '90px',
      }
        /*marginLeft: '5px',
        marginRight: '5px',
        background:'#fafafa',
      },
      logo : {
        position: 'absolute',
        width: '200px',
        height: '50px',
        top: '25px',
        padding: '0px 10px 0px 10px',
      },*/
  };

  return (
    <div style={styles.header}>
    </div>

    )
  }
}

export default Header;
