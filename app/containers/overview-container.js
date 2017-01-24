import React, { Component } from 'react';
import { connect } from 'react-redux';
import Overview from '../components/overview/overview';
import { getDropdowns } from '../selectors/dropdown-selectors';

class OverviewContainer extends Component {
  render() {
    return (
      <div>
        <Overview {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dropdowns: getDropdowns(state),
  loading: state.dropdowns.loading,
});

export default connect(mapStateToProps)(OverviewContainer);
