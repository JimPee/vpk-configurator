import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './app-container.css';
import Header from './header';
import { getAllSelections, checkSelections, updateValue } from '../actions/selections-actions';
import { getCheckMessages } from '../selectors/message-selectors';
import MainPanelContainer from './main-panel-container';

class AppContainer extends Component {
  componentDidMount() {
    this.props.actions.getAllSelections();
  }
  render() {
    return (
      <div>
        <Header />
        <div className={styles.mainContainer}>
          <MainPanelContainer className={styles.container} />
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
