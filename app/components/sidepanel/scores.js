import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';
import styles from './scores.css';

class Scores extends Component {

  constructor() {
    super();
    this.addScore = this.addScore.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.state = {
      scores: [],
      scoreInput: '',
    };
  }

  addScore() {
    const currentScores = this.state.scores;
    const newScores = currentScores.concat(this.state.scoreInput);
    this.setState({ scores: newScores });
    this.props.setBoxScores(newScores);
  }

  handleScoreChange(e) {
    this.setState({ scoreInput: e.target.value });
  }

  render() {
    const scores = this.state.scores;
    return (
			<div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					Scores
				</div>
				<div className={featureStyle.featureBody}>
            <input name="score" type="text" placeholder="Score" onChange={this.handleScoreChange}/>
            <button onClick={this.addScore}>add</button>
            {
              scores.map((score, idx) => {
                return (
                  <div className={styles.score} key={idx}> {score}</div>
                );
              })
            }
				</div>
			</div>
    );
  }
}

export default Scores;
