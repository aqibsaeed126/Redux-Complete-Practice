import './App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg'
import * as actionCreator  from './store/actions/actions'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Age: {this.props.age}</span>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
          {this.props.loading && <img src={logo} className='App-logo' />}
        </header>
        <div>History</div>
        
        <div>
          <ul>
            {
              this.props.history.map(item => (
                 <li 
                  key={item.id} 
                  onClick={()=>this.props.onDelAge(item.id)}
                 > 
                  {item.age} 
                 </li>
              ))
            }
          </ul>
        </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history,
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: ()=> dispatch(actionCreator.ageUp(1)),
    onAgeDown: ()=> dispatch(actionCreator.ageDown(1)),
    onDelAge: (id)=> dispatch({type: 'DELAGE', val: id }), 
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
