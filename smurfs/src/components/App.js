import React, { Component } from "react";
import { connect } from 'react-redux';
import { getData, setForm, deleteSmurf } from '../actions';
import "./App.css";
import Loader from 'react-loader-spinner';
import Form from './Form';
import SmurfList from './SmurfsList';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getData();
  }
  
  render() {
    return (
      <div className="App">
        <h1 style={{color: 'white'}}>SMURFS' VILLAGE</h1>
        <button className="add-btn" onClick={this.props.setForm}>Add a SMURF</button>
        {this.props.form ? (
          <Form getData={this.props.getData} setForm={this.props.setForm}/>
        ) : null}
        {this.props.loading ? ( <Loader type="Puff" color="#438ef1" />) : null}
        <SmurfList smurfs={this.props.smurfs} deleteSmurf={this.props.deleteSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
    form: state.form
  };
};
export default connect(
  mapStateToProps,
  { getData, setForm, deleteSmurf }
)(App);
