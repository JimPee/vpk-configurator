import Select from 'react-select';
import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';
import CharSelect from '../dropdowns/char-select';

class BoardGrade extends Component {
  constructor() {
    super();
    this.boardGradeChange = this.boardGradeChange.bind(this);
    this.state = {
      boardGrade: '',
    };
  }

  boardGradeChange(val) {
    this.setState({ boardGrade: val });
  }

  render() {
    const { boardGradeValues, checkDropdowns, updateValue } = this.props;
    if (!boardGradeValues) {
      return null;
    }
    return (
      <div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					Board Grade
				</div>
				<div className={featureStyle.featureBody}>
					<CharSelect
            key={boardGradeValues.char}
            char={boardGradeValues}
            checkDropdowns={checkDropdowns}
            updateValue={updateValue}
          />
				</div>
      </div>
    );
  }
}

export default BoardGrade;
