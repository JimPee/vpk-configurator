import React, { PropTypes } from 'react';
import BoardGrade from './board-grade';
import Scores from './scores';
import Dimensions from './dimensions';
import PaletType from './palet-type';

const Sidepanel = (props) => {
  const { boxHasScores, boardGradeValues } = props;
  return (
    <div>
			<BoardGrade boardGradeValues={boardGradeValues}/>
			{ boxHasScores && <Scores /> }
			<Dimensions />
			<PaletType />
    </div>
  );
};

Sidepanel.propTypes = {
  boxHasScores: PropTypes.bool.isRequired,
  boardGradeValues: PropTypes.array,
};

export default Sidepanel;
