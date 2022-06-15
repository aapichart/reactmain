import axios from "axios";
import { useContext, useState } from "react";
// import ButtonBT from "./ButtonBT";
import { Redirect, useNavigate} from 'react-router-dom'; 
import DataContext from "../data/DataContext";

function LoginForm() {

    const navigate = useNavigate();
    let [errorMessage, setErrorMessage] = useState({
        error_code: null,
        error_msg: '',
        showerr : false 
    });
    const ErrorMsg = () => { 
        return errorMessage.showerr ? <h1> {errorMessage.error_msg} </h1> : null
    }; 
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
    };

    let {isLoggedIn} = useContext(DataContext);
    const redirectLoginSuccess = () => {
        isLoggedIn = true;
        navigate('/dashboard',{
            state: {
                outMsg1:`isLoggedIn value: ${isLoggedIn} `,
                outMsg2:'test2fromLogin'
            }
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = state.username;
        const password = state.password;

        const headersin = new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,GET',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        axios({
            method: 'post',
            url: '/api/login',
            headers: headersin,
            auth: state,
        }).then((response) => {
            console.log(response.data);
            if ('access_token' in response.data){
                redirectLoginSuccess();
            } else {
                setErrorMessage({...errorMessage,
                    error_code:response.status,
                    error_msg:response.data,
                    showerr:true
                });
            }
        }).catch(function(e){
            setErrorMessage({...errorMessage,
                error_code:e.code,
                error_msg:e.message,
                showerr:true
            });
        });
    };

    return (
        <div className="loginForm">
            <p>
                <ErrorMsg /> 
            </p>
            <form onSubmit={handleSubmit}>
                <p>UserName:</p>
                <p>
                    <input type='text' name='username' onChange={handleChange} />
                </p>
                <p>Password:</p>
                <p>
                    <input type='password' name='password' onChange={handleChange} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default LoginForm;
