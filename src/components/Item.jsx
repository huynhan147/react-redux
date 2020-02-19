import React from "react";
import {bindActionCreators, compose} from "redux";
import * as UserAction from "../actions/user";
import {connect} from "react-redux";

function Item({userItem, userActionCreators}) {
    const { deleteUser } = userActionCreators;

    return(
        <tr>
            <th scope="row">{userItem.id}</th>
            <td>
                <img src={userItem.avatar} alt={userItem.avatar}/>
            </td>
            <td>{userItem.name}</td>
            <td>{userItem.createdAt}</td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteUser(userItem.id)}>Delete</button>
                <button className="btn btn-success">Edit</button>
            </td>
        </tr>
    );
}

const mapDispatchToProps = (dispatch) => ({
    userActionCreators: bindActionCreators(UserAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Item);