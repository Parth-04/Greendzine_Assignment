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

        <input
                    type="text"
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={handleSearch}
                />
        

        <div className='cards'>
                <ul>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        filteredEmployees.map(employee => (
                            <div className='card' key={employee.id}>
                                <li>
                                    <strong>Name:</strong> {employee.Name}, <strong>Role:</strong> {employee.Role}
                                    {/* Add more fields as needed */}
                                </li>
                            </div>
                        ))
                    )}
                </ul>
            </div>

        {/* <div className='cards'>
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
        </div> */}




        
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