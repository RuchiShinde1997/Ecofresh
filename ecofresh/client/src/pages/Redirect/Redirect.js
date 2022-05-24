/**
 * @author Mugdha Agharkar
 */

import React from "react";
import { Link } from "react-router-dom";

function Redirect() {
    return(
        <div style={{padding: "40px"}}>You need to <Link to='/login'>Login</Link> or <Link to="/register">Register</Link> to access this page. </div>
    )
}

export default Redirect;
