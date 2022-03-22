import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions';

export default function Hookcakecontainer() {
    const noOfCakes = useSelector( state=> state.cake.numOfCakes )
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Cakes - {noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}
