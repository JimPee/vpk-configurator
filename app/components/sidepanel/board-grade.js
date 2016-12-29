import React, { Component, PropTypes } from 'react';
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
      <div>
				<CharSelect
          key={boardGradeValues.char}
          char={boardGradeValues}
          checkDropdowns={checkDropdowns}
          updateValue={updateValue}
        />
      </div>
    );
  }
}

BoardGrade.propTypes = {
  checkDropdowns: PropTypes.func,
  updateValue: PropTypes.func,
  boardGradeValues: PropTypes.object,
};

export default BoardGrade;
