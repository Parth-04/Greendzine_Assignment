import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import './empl.css';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router-dom';

const Empl = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const db = firebase.firestore();
          const data = await db.collection("ID1").get();
          setEmployees(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        fetchData();
    }, []);

    const navigate = useNavigate();

    const handleEmpl = () => {
        console.log('Employee Dashboard');
        navigate('/empl')
    };

    const handleHome = () => {
        console.log('Home');
        navigate('/home');
    };

    return (
        <div className='Home-container'>

        <div className='logo_home'>
        </div>

        <div className='logo_home_num_bg'>
        </div>

        <div className='logo_home_num'>
            4
        </div>

        <div className='lady_img'>
        </div>

        <div className='search'>
        </div>

        <div className='search_text'>
            Search with name
        </div>

        <div className='cards'>
        <ul>
        {employees.map(employee => (
            <div className='card'>
            <li key={employee.id}>
            <strong>Name:</strong> {employee.Name}
            {employee.id} {employee.Role}
          </li>
            </div>
          
        ))}
      </ul>
        </div>




        
        <div className='footer'>
                <img src='' />
                <div className='footer_home'>
                </div>
                <div className='footer_empl'>
                </div>
        </div>

        <div className='empl'>
            </div>
            <button onClick={handleHome} className='home_button'>Home</button>

            <button onClick={handleEmpl} className='empl_button'>Empl</button>

        </div>

        

        );
    };
    
export default Empl;