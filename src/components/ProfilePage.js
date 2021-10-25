import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const ProfilePage = ({login}) => {

    return(
        <div className="profile">
            <h1 className="login">
                <span className="login__label">login: </span>
                {login}
            </h1>
            <Link className="back-link" to="/">Go Back</Link>

        </div>
    )
}

const mapStateToProps = state => ({
    login: state.user.login,
})

export default connect(mapStateToProps, null)(ProfilePage)