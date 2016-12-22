import React, { Component } from 'react';
import './App.css';
import MaterialUiForm from './form/MaterialUiForm';
import Header from './components/common/Header';

class AppContainer extends Component {
  submitContact = (data) => {
    window.alert(JSON.stringify(data));
  }

  render() {
    return (
      <div className="">
        <Header /> 
          {this.props.children}
        <MaterialUiForm onSubmit={this.submitContact} />
      </div>
    );
  }

}

export default AppContainer;
