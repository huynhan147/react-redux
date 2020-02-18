import React from "react";

function Item({userItem}) {
    return(
        <tr>
            <th scope="row">{userItem.id}</th>
            <td>
                <img src={userItem.avatar} alt={userItem.avatar}/>
            </td>
            <td>{userItem.name}</td>
            <td>{userItem.createdAt}</td>
            <td>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-success">Edit</button>
            </td>
        </tr>
    );
}
export default Item;