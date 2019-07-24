import React, { Component } from 'react';
import './App.css';
import { setName1, setName2, computeScores } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {

  return {
    name_1: state.name_1,
    name_2: state.name_2,
    name_1_score: state.name_1_score,
    name_2_score: state.name_2_score,
    total_score: state.total_score,
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    onName1Change: (event) => dispatch(setName1(event.target.value)),
    onName2Change: (event) => dispatch(setName2(event.target.value)),
    onLightFire: (scores) => dispatch(computeScores(scores)),
  }
}

class App extends Component {

  scoreToText(score) {

    const flames = ["FRIENDSHIP","LOVE","AFFECTION","MARRIAGE","ENEMIES","SWEETHEART"];
    let offset = score % flames.length;

    return offset == 0 ? flames[flames.length - 1] : flames[offset - 1];
  }

  render() {

    const {
      onName1Change,
      onName2Change,
      name_1,
      name_2,
      name_1_score,
      name_2_score,
      total_score,
    } = this.props;

    return (
      <div className="flames-container">
        <h1>FLAMES</h1>
        <div className="flames-yourname flames-input">
          <label>Your Name </label><input type='text' onChange={onName1Change} />
        </div>
        <div className="flames-crushname flames-input">
          <label>Your Crush </label><input type='text' onChange={onName2Change} />
        </div>
        <div className="flames-button">
          <button onClick={() => {

            // convert string to array
            const name1Array = name_1.split('');
            const name2Array = name_2.split('');

            // remove same letters
            const name1Filtered = name1Array.filter(function(letter) {

              return !name2Array.includes(letter);
            })
            const name2Filtered = name2Array.filter(function(letter) {

              return !name1Array.includes(letter);
            })

            console.log('LENGTH = ', name1Filtered.length);

            // get score
            this.props.onLightFire({
              name_1_score: name1Filtered.length,
              name_2_score: name2Filtered.length,
              total_score: name1Filtered.length + name2Filtered.length,
            });            
          }}>Predict Future</button>
        </div>
        <div className="flames-result">
          <label className='yours'>You towards your crush:<br/>{this.scoreToText(name_1_score)}</label>
          <label className='crush'>Your crush towards you:<br/>{this.scoreToText(name_2_score)}</label>
          <label className='together'>Future Together: {this.scoreToText(total_score)}</label>
          <div className='again'><button>Try Again!</button></div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
