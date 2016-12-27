import React, { PropTypes } from 'react';
import DropdownsPanel from './dropdown-panel';

const Dropdowns = (props) => {
  const { actions, dropdowns, loading } = props;

  return (
    <div>
      <DropdownsPanel
        checkDropdowns={actions.checkDropdowns}
        updateValue={actions.updateValue}
        dropdowns={dropdowns}
        loading={loading}
      />
    </div>
  );
};

Dropdowns.propTypes = {
  actions: PropTypes.object.isRequired,
  dropdowns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Dropdowns;
