import React from 'react'
import {connect } from 'react-redux';
import {buyCake} from '../redux/cakes/cakeActions';
import {useState} from 'react'

function Newcakecontainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number)=> dispatch(buyCake(number)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Newcakecontainer)