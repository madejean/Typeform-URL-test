import React from 'react';

class Header extends React.Component {
  render() {
    var styles = {
      header : {
        height: '210px',
        marginLeft: '5px',
        marginRight: '5px',
      },
      logo : {
        position: 'absolute',
        width: '250px',
        height: '130px',
        top: '25px',
        padding: '0px 10px 0px 10px',
      },
  };

  return (
    <div style={styles.header}>
      <img src="http://jenkins-20161013-190649-qnjift-host.mymedsleuth.com/media/bsw_logo.png" style={styles.logo}/>
    </div>
    )
  }
}

export default Header;
