import axios from "axios";
import {useState} from "react";
import ButtonBT from "./ButtonBT";
// import {useNavigate} from 'react-router-dom'; 

function LoginForm () {

    // const navigate = useNavigate();

    const [state, setState] = useState({
            username:'', 
            password:''
    });
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({...state, [name]:value});
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = state.username;
        const password = state.password;

        const headersin = new Headers({
                // 'Content-Type': 'Basic Auth',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Access-Control-Allow-Credentials':'true', 
                'Access-Control-Allow-Headers':'Content-Type',
        });
        var bodyFormData = new FormData();
        bodyFormData.append('username', username);
        bodyFormData.append('password', password);
        console.log(username);
        console.log(password);
        console.log(state);
        axios({
            method:'post',
            url:'/api/login',
            headers: headersin, 
            auth : state,
        }).then((response)=>{
            console.log(response.data);
            // navigate('/dashboard');
        }).catch(console.error);
    };

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <p>UserName:</p>
                <input type='text' name='username' onChange={handleChange} />
                <br />
                <p>Password:</p>
                <input type='password' name='password' onChange={handleChange} />
                <br />
                <input type="submit" />
                <ButtonBT buttonStyle={'btn--outline'}>SIGN-UP</ButtonBT>
            </form>
        </div>
    )
}
export default LoginForm;
