import React from 'react';

class Footer extends React.Component {
  render() {
    var borderColor = '#e6e3e3';
    var styles = {
      footer : {
        marginLeft: '10px',
        }
      }

   return (
        <div style={styles.footer}>
          <p>The information collected in this survey is strictly confidential and protected by Federal Law. Results are transmitted back to your health care providers.</p>
        </div>
    );
  }
}
export default Footer;
