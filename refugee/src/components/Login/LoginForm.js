import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

function Login(props) {

    
    return (
        <div className="loginForm">
            <form onSubmit={props.submitLogin}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                    <Input 
                        placeholder=""
                        type="text"
                        onChange={props.handleChanges} 
                    />
                </InputGroup>
                <br />
                <InputGroup>
                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                    <Input 
                        placeholder="" 
                        type="text" 
                        step="1"
                        onChange={props.handleChanges} 
                    />
                <InputGroupAddon addonType="append"><Button color="secondary">Log In</Button></InputGroupAddon>
                </InputGroup>
                
                {/* <input
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={props.handleChanges} 
                /> */}

                {/* <input 
                     type="text"
                     name="password"
                     placeholder="password"
                     onChange={props.handleChanges}
                /> */}

                
            </form>

        </div>
    )
}

export default Login;