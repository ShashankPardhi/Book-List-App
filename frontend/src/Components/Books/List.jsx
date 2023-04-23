import './booklist.css';
import React, { useEffect, useState,useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { ThemeContext } from '../../App';



const List = () => {
    const [name, setTitle] = useState('');
    const [TypeofBook, setTypeOfBook] = useState('');

    

    return (
        <>
        <div className='createbook' >
            <div className='header'>
                <h1>Add Book</h1>
                <button id='btnfirst'>Cancel</button>
            </div>
            <div className='inputcontainer'>
               <div className='name'>
               <label>Type of Book</label><br/>
                <input type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Name here' />
               </div>
                <div className='description'>
                <label>Description</label><br/>
                <input onChange={(e) => setTypeOfBook(e.target.value)} placeholder='Description' />
                </div>
                <div className='type'>
                <h3>Type of Book</h3>
                </div>
                </div>
                </div>
</>
        
    )
}

export default List;