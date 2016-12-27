import React, { PropTypes } from 'react';
import CharInput from './char-input';
import CharSelect from './char-select';
import styles from './dropdown-panel.css';

const DropdownPanel = (props) => {
  const { dropdowns, checkDropdowns, updateValue } = props;
  return (
    <div className={styles.panel}>
      {
        dropdowns.map(dropdown => {
          return !dropdown.list ?
          <CharInput
            key={dropdown.char}
            char={dropdown}
            checkDropdowns={checkDropdowns}
            updateValue={updateValue}
          /> :
          <CharSelect
            key={dropdown.char}
            char={dropdown}
            checkDropdowns={checkDropdowns}
            updateValue={updateValue}
          />;
        })
      }
    </div>
  );
};

DropdownPanel.propTypes = {
  dropdowns: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  checkDropdowns: PropTypes.func,
  updateValue: PropTypes.func,
};

export default DropdownPanel;
