import React, { Component } from 'react';
import Header from './header';
import OverviewContainer from './overview-container';
import PreviewContainer from './preview-container';
import DropdownsContainer from './dropdowns-container';
import OrderContainer from './order-container';
import 'bootstrap-grid/dist/grid.min.css';
import './app-container.css';

class AppContainer extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
						<OrderContainer />
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
						<DropdownsContainer />
					</div>
				</div>
      </div>
    );
  }
}

export default AppContainer;
