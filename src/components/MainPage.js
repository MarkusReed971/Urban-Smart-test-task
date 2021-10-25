import React from "react";
import { useHistory } from "react-router";
import { changeUser } from './../redux/actions';
import { connect } from 'react-redux';

const MainPage = ({user, isEnabledButton, onChangeLogin, onChangePassword}) => {

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/profile");
    }

    return(
        <div className="main">
            <form className="auth-form" onSubmit={handleSubmit}>
                <input 
                    className="auth-form__text-input"
                    placeholder="login"
                    type="text" 
                    value={user.login}
                    onChange={e => onChangeLogin({...user, login: e.target.value})}
                />
                <input 
                    className="auth-form__text-input"
                    placeholder="password"
                    type="password" 
                    value={user.password}
                    onChange={e => onChangePassword({...user, password: e.target.value})}
                />
                <input 
                    className="auth-form__submit-input"
                    type="submit" 
                    value="sign in" 
                    disabled={!isEnabledButton}
                />
                {
                    !isEnabledButton 
                    ? <span className="auth-form__warning">Incorrect data</span>
                    : null
                }
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user,
    isEnabledButton: state.isEnabledButton
})

const mapDispatchToProps = dispatch => {
    return {
      onChangeLogin: (user) => dispatch(changeUser(user)),
      onChangePassword: (user) => dispatch(changeUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)