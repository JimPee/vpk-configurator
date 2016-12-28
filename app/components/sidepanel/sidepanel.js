import React, { PropTypes } from 'react';
import BoardGrade from './board-grade';
import Scores from './scores';
import Dimensions from './dimensions';
import PaletType from './palet-type';

const Sidepanel = (props) => {
  const { actions } = props;
  return (
    <div>
			<BoardGrade />
			<Scores />
			<Dimensions />
			<PaletType />
    </div>
  );
};

Sidepanel.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default Sidepanel;
