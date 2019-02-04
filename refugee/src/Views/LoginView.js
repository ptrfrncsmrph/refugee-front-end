import React from 'react';

import {adminLogIn} from '../store/actions';

import LoginForm from '../components/Login/LoginForm';

class LoginView extends React.Component {
    state= {
        login: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    submitLogin = () => {
        this.props.adminLogIn(this.state.login);
    };


    render() {
        return (
            <LoginForm 
                handleChanges={this.handleChanges}
                submitLogin={this.submitLogin}
            />
        );
    }
}

export default LoginView;