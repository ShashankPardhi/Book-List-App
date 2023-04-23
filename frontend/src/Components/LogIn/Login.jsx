import './Login.css'
import { useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [message,setMessage] = useState("")
    const [status,setStatus] = useState("")

    async function loginUser(event) {

        event.preventDefault();
        const formData = new FormData()
        formData.append("name",name)
        formData.append("password",password)
        const response = await fetch('https://booklist-backend-8leh.onrendasddader.com/user/login', {
            method: 'POST',
            body:formData,
        
        })
        const data = await response.json()
        setToken(data.token);
        sessionStorage.setItem('token',token);
        setMessage(data.message)
        setStatus(data.status)
    }

    useEffect(() => {
        sessionStorage.setItem("token" ,token)
    },[token])

   

    useEffect(() =>{
        if(token) {
            alert(message)
            navigate('/main')
            setMessage("")
            setStatus("")
            setName("")
            setPassword("")
            
        }else if( message != "") {
            alert(message)
            setMessage("")
            setStatus("")
            setName("")
            setPassword("")
        }
    },[message])
    return (
        <div className='login'>
            <h1>Member Login</h1>                
                <form onSubmit={loginUser}>
                    <br/>
                    <input type='text' value={name} placeholder='User Name' onChange={(e) => setName(e.target.value)} />
                    <br />
                    <br/>
                    <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <br/>
                    <input type='submit' value='Sign-In' />
                    <br />
                    <br />
                    <Link to={'/register'}><button>Register</button></Link>
                </form>
            </div>
    );
}

export default Login;