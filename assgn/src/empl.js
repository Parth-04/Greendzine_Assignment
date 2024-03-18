import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import './empl.css';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router-dom';

const Empl = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("ID1").get();
            setEmployees(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
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

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredEmployees = employees.filter(employee =>
        employee.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSignOut = (event) => {
        console.log("Sign Out");
        navigate('/login');
    }

    return (
        

        <div className='Home-container'>

        <div className='sign_out'>
        <button onClick={handleSignOut} className='sign_out'>Sign Out</button>
        </div>

        <div className='logo_home'>
        </div>

        <div className='logo_home_num_bg'>
        </div>

        <div className='logo_home_num'>
            4
        </div>

        <div className='lady_img'>
        </div>

        <input
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearch}
                />
        

        <div className='cards'>
                
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        searchQuery === '' ? (
                            employees.map(employee => (
                                <div className='card' key={employee.id}>
                                    
                                        <span>EMP ID: {employee.id} </span> 
                                        <span>Name: {employee.Name}</span> 
                                        <span>DOB: {employee.Date_of_Birth}</span> 
                                        <span>Role: {employee.Role}</span> 
                                
                                    
                                </div>
                            ))
                        ) : (
                            filteredEmployees.map(employee => (
                                <div className='card' key={employee.id}>
                                    
                                        <span>EMP ID: {employee.id}</span>
                                        <span>Name: {employee.Name}</span> 
                                        <span>DOB: {employee.Date_of_Birth}</span> 
                                        <span>Role: {employee.Role}</span> 
                                    
                                </div>
                            ))
                        )
                    )}
                
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