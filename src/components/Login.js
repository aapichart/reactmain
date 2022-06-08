import React from "react";

class LoginForm extends React.Component{

    render(){
        return(
                <div className="loginForm">
                    <form>
                        <label>
                            Name:
                        <input type="text"></input>
                        </label>
                        <br />
                        <label>
                            Password:
                        <input type="text"></input>
                        </label>
                        <br />
                        <input type="submit" value="submit" />
                    </form>
                </div>
        )
    };
};
export default LoginForm;
