import React, { PropTypes } from 'react';
import BoardGrade from './board-grade';
import Scores from './scores';
import Dimensions from './dimensions';
import PaletType from './palet-type';

const Sidepanel = (props) => {
  const { boxHasScores, boardGradeValues, paletTypes } = props;
  return (
    <div>
			<BoardGrade boardGradeValues={boardGradeValues}/>
			{ boxHasScores && <Scores /> }
			<Dimensions />
			<PaletType paletTypes={paletTypes} />
    </div>
  );
};

Sidepanel.propTypes = {
  boxHasScores: PropTypes.bool.isRequired,
  boardGradeValues: PropTypes.array,
  paletTypes: PropTypes.array,
};

export default Sidepanel;
