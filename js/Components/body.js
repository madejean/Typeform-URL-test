import React from 'react';

class Body extends React.Component {
  render() {
    var borderColor = '#e6e3e3';
    var styles = {
      body: {
        padding: '10px 30px 10px 20px',
        background: '#e4eff8',
      },
      h2: {
        color: '#0031db',
        display: 'flex',
        justifyContent: 'center',
      },
      h3: {
        color:'#3d3d3d',
        display: 'flex',
        justifyContent: 'center',
      },
    }

   return (
        <div style={styles.body}>
          <h2 style={styles.h2}>Welcome to the BREEZE TRANSPLANT online health history questionnaire.</h2>
          <h3 style={styles.h3}>Please answer all questions truthfully, accurately, and completely, as the information you provide here will be used by our Transplant Team to detect any medical conditions that may affect your ability to donate a kidney.</h3>
          <h3 style={styles.h3}>This questionnaire is considered extremely confidential. Only health professionals on the Transplant Team will use this information. This information will not be shared with the recipient or others. It is confidential.</h3>
        </div>
    );
  }
}
export default Body;
