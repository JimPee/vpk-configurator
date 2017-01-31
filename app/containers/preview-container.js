import React, { Component } from 'react';
import { connect } from 'react-redux';
import Preview from '../components/preview/preview';
import { getDropdowns } from '../selectors/dropdown-selectors';

class PreviewContainer extends Component {
  render() {
    return (
      <div>
        <Preview {...this.props} />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  dropdowns: getDropdowns(state),
});

export default connect(mapStateToProps)(PreviewContainer);
