import React from 'react'
import {connect } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';
import { buyIcecream } from '../redux/icecream/icecreamActions';

function Itemcontainer(props) {
    return (
        <div>
            <h2>Number of Items - {props.numOfItems}</h2>
            <button onClick={props.dispatchItem}>Buy Item</button>
        </div>
    )
}


const mapStateToProps = (state, ownprops) => {
    return {
        numOfItems: ownprops.cake ? state.cake.numOfCakes : state.icecream.numOfIcecreams,
    }
}

const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        dispatchItem: ownprops.cake ? ()=>dispatch(buyCake()) : ()=>dispatch(buyIcecream()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Itemcontainer)