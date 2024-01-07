import React from "react";
import {useParams} from "react-router-dom";

function Users(){
    const {userid}=useParams()
    return (
        <div className="">Users:userid</div>
    )
}

export default Users