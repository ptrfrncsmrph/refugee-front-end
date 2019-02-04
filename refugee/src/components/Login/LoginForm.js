import React from 'react';


function Login(props) {

    
    return (
        <div className="loginForm">
            <form onSubmit={props.submitLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={props.handleChanges} 
                />

                <input 
                     type="text"
                     name="password"
                     placeholder="password"
                     onChange={props.handleChanges}
                />

                <button>Login</button>
            </form>

        </div>
    )
}

export default Login;