import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './app-container.css';
import Header from './header';
import { getAllSelections, checkSelections, updateValue } from '../actions/selections-actions';
import { getCheckMessages } from '../selectors/message-selectors';
import MainPanelContainer from './main-panel-container';
import OverviewContainer from './overview-container';
import PreviewContainer from './preview-container';
import SidepanelContainer from './sidepanel-container';
import 'bootstrap-grid/dist/grid.min.css';

class AppContainer extends Component {
  componentDidMount() {
    this.props.actions.getAllSelections();
  }
  render() {
    return (
      <div className='container'>
        <Header />
					<div className="row">
						<div className='col-md-12'>
							<MainPanelContainer />
						</div>
					</div>
					<div className='row'>
						<div className='col-md-3'>
							<OverviewContainer />
						</div>
						<div className='col-md-6'>
							<PreviewContainer />
						</div>
						<div className='col-md-3'>
							<SidepanelContainer />
						</div>
					</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checkMessages: getCheckMessages(state),
  loading: state.selections.loading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    getAllSelections,
    checkSelections,
    updateValue,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
