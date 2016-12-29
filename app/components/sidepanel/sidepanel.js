import React, { PropTypes } from 'react';
import BoardGrade from './board-grade';
import Scores from './scores';
import Dimensions from './dimensions';
import PaletType from './palet-type';

const Sidepanel = (props) => {
  const { boxHasScores, boardGradeValues, paletTypes, width, actions, length } = props;
  const setBoxScores = actions.setBoxScores;
  const setFefcoSheet = actions.setFefcoSheet;
  const checkDropdowns = actions.checkDropdowns;
  const updateValue = actions.updateValue;
  return (
    <div>
			<BoardGrade boardGradeValues={boardGradeValues}
									checkDropdowns={checkDropdowns}
									updateValue={updateValue}/>
			{ boxHasScores && <Scores setBoxScores={setBoxScores} setFefcoSheet={setFefcoSheet} /> }
			<Dimensions width={width}
                  length={length}
                  checkDropdowns={checkDropdowns}
                  updateValue={updateValue}/>
			<PaletType paletTypes={paletTypes}
                 checkDropdowns={checkDropdowns}
                 updateValue={updateValue} />
    </div>
  );
};

Sidepanel.propTypes = {
  boxHasScores: PropTypes.bool.isRequired,
  boardGradeValues: PropTypes.object,
  paletTypes: PropTypes.object,
  actions: PropTypes.object.isRequired,
  width: PropTypes.object,
  length: PropTypes.object,
};

export default Sidepanel;
