import React, { Component, PropTypes } from 'react';
import featureStyle from './feature-style.css';
import Select from 'react-select';

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
    const { boardGradeValues } = this.props;
    return (
			<div className={featureStyle.feature}>
				<div className={featureStyle.featureHeader}>
					Board Grade
				</div>
				<div className={featureStyle.featureBody}>
					<Select
            name="form-field-name"
            placeholder="Board grade"
            labelKey="desc"
            valueKey="value"
            value={this.state.boardGrade}
            options={boardGradeValues}
            onChange={ this.boardGradeChange }
					/>
				</div>
      </div>
    );
  }
}

export default BoardGrade;
