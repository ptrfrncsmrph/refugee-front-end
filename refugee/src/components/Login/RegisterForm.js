import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

function SignUp(props) {

    
    return (
        <div className="loginForm">
            <form onSubmit={props.submitLogin}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Username</InputGroupAddon>
                    <Input 
                        name="username"
                        placeholder="type a username"
                        type="text"
                        onChange={props.handleChanges}
                        value={props.login.username} 
                    />
                </InputGroup>
                <br />
                <InputGroup>
                <InputGroupAddon addonType="prepend">Password</InputGroupAddon>
                    <Input
                        name="password" 
                        placeholder="type a password" 
                        type="text" 
                        step="1"
                        onChange={props.handleChanges}
                        value={props.login.password} 
                    />
                <InputGroupAddon addonType="append">
                    <Button color="secondary">Sign Up</Button>
                </InputGroupAddon>
                </InputGroup>

                
            </form>

        </div>
    )
}

export default SignUp;