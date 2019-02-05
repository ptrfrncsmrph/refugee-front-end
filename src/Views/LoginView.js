import React from 'react';
import axios from 'axios';

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

    

    handleSubmit = event => {
        event.preventDefault();
        //const endpoint = `${process.env.REACT_APP_API_URL}/api/login`;
        const endpoint = 'http://localhost:4000/login';

        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log('response', res.data.token)
                localStorage.setItem('jwt', res.data.token);
            })
            .catch(err => console.log(err))
    }
    


    render() {
        return (
            <LoginForm 
                handleChanges={this.handleChanges}
                submitLogin={this.handleSubmit}
            />
        );
    }
}

export default LoginView;