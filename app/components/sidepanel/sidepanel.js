import React, { PropTypes } from 'react';
import BoardGrade from './board-grade';
import Scores from './scores';
import Dimensions from './dimensions';
import PaletType from './palet-type';

const Sidepanel = (props) => {
  const { boxHasScores } = props;
  return (
    <div>
			<BoardGrade />
			{ boxHasScores && <Scores /> }
			<Dimensions />
			<PaletType />
    </div>
  );
};

Sidepanel.propTypes = {
  boxHasScores: PropTypes.bool.isRequired,
};

export default Sidepanel;
