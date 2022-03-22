import './App.css';
import {connect} from 'react-redux';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={()=>this.props.updateA(this.props.b)}>Update A</button>
          <span>A is {this.props.a}</span>
          <button onClick={()=>this.props.updateB(this.props.a)}>Update B</button>
          <span>B is {this.props.b}</span>
        </div>
      </div>
    );
  }
  
}

const mapStateToProps = (store)=> {
  console.log(store);
  return {
    a: store.rA.a,
    b: store.rB.b,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateA: (b) => dispatch({type: 'UPDATEA', b:b}),
    updateB: (a) => dispatch({type: 'UPDATEB', a:a}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
