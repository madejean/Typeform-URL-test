import React from 'react';

class Body extends React.Component {
  render() {
    var borderColor = '#e6e3e3';
    var styles = {
      body : {
        padding: '10px 30px 10px 20px',
        color: '#4fb0ae',
        }
      }

   return (
        <div style={styles.body}>
          <h1>Welcome To MyMedSleuth</h1>
        </div>
    );
  }
}
export default Body;
