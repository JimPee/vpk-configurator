import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'bootstrap-grid/dist/grid.min.css';
import MessagesContainer from './messages-container';
import { getCheckMessages } from '../selectors/message-selectors';
import './app-container.css';
import Header from './header';
import OverviewContainer from './overview-container';
import PreviewContainer from './preview-container';
import DropdownsContainer from './dropdowns-container';
import OrderContainer from './order-container';

class AppContainer extends Component {
  render() {
    return (
      <div className='container'>
        <Alert stack={{ limit: false, spacing: 10 }} />
        <div className='row'>
          <div className='col-md-12'>
            <Header />
          </div>
        </div>
				<div className='row'>
					<div className='col-md-3'>
						<OverviewContainer />
            <OrderContainer />
            <MessagesContainer />
					</div>
					<div className='col-md-5'>
						<PreviewContainer />
					</div>
					<div className='col-md-4'>
						<DropdownsContainer />
					</div>
				</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  checkMessages: getCheckMessages(state),
});

export default connect(mapStateToProps)(AppContainer);
