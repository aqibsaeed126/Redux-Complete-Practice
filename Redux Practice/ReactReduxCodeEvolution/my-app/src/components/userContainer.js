import React from 'react';
import {fetchUsers} from '../redux/user/userActions';
import {connect} from 'react-redux';

function Usercontainer(props) {
    return (
        <div>
            <h2>User</h2>
            <button onClick={props.fetchUser}>Fetch Data</button> 
            <p>{props.loading}</p>
            {props.loading && <div>loading . . . . </div>}
            {!props.loading && <div>
                    {
                        props.users?.map((user)=>{
                        return <p>{user.id - user.name}</p>})
                    }
                </div>
            }
        </div>
        
    )
}

const mapStateToProps = (state)=>{
    return {
        loading: state.loading,
        users: state.users,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchUser: ()=> dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Usercontainer)