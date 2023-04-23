import './Register.css';
import { useState,useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [check, setCheck] = useState(false);
    const [message,setMessage] = useState("")
    const [status,setStatus] = useState("")
    const handleCheck = () => {
        setCheck(!check);
    }

    async function registerUser(event) {
        event.preventDefault();

        const formData = new FormData()
        formData.append("name",name)
        formData.append("confirmpassword",confirmpassword)
        formData.append("password",password)
         formData.forEach((val, key) => {
        console.log(val,key)
    })
        const response = await fetch('https://booklist-backend-8leh.onrender.com/user/register', {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        setStatus(data.status)
        setMessage(data.message)
    }

    useEffect(() => {
        if (status === 'Success') {
            alert(message)
            navigate('/register')
            setMessage('')
            setStatus("")
            return
        }else {
            alert(message)
            setMessage("")
            setName("")
            setPassword("")
            setConfirmpassword("")
            return 
        }
    },[message])

    return (
        <div className='register'>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
        <div className='inputs'>
            <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <input type='password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
            <br />
            </div>
            <Link to={'/'}><button className='button'>Sign In</button></Link>
        </form>
    </div>
    );
    
}

export default Register;