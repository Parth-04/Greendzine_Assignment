import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleEmpl = () => {
        console.log('Employee Dashboard');
        navigate('/empl')
    };

    const handleHome = () => {
        console.log('Home');
        navigate('/home');
    };

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

            
            <div className='dashboard'>
            </div>
            <div className='dashboard_no_blur'>

                <div className='Monday'>
                    <div className='text_mon'>
                    <span className='day'>Productivity on Monday</span>
                    <span className='percent'>4%</span>
                    </div>
                    <div className='progressbar_mon'>
                    </div>
                </div>

                <div className='Tuesday'>
                    <div className='text_tue'>
                    <span className='day'>Productivity on Tuesday</span>
                    <span className='percent'>92%</span>
                    </div>
                    <div className='progressbar_tue'>
                    </div>
                </div>

                <div className='Wednesday'>
                    <div className='text_wed'>
                    <span className='day'>Productivity on Wednesday</span>
                    <span className='percent'>122%</span>
                    </div>
                    <div className='progressbar_wed'>
                    </div>
                </div>

                <div className='Thursday'>
                    <div className='text_thu'>
                    <span className='day'>Productivity on Thursday</span>
                    <span className='percent'>93%</span>
                    </div>
                    <div className='progressbar_thu'>
                    </div>
                </div>

                <div className='Friday'>
                    <div className='text_fri'>
                    <span className='day'>Productivity on Friday</span>
                    <span className='percent'>89%</span>
                    </div>
                    <div className='progressbar_fri'>
                    </div>
                </div>

                <div className='Saturday'>
                    <div className='text_sat'>
                    <span className='day'>Productivity on Saturday</span>
                    <span className='percent'>98%</span>
                    </div>
                    <div className='progressbar_sat'>
                    </div>
                </div>
            </div>
            

            <div className='dashboard_header'>
            <span className='dashboard_text'>Employee Productivity Dashboard</span>
            </div>



            <div className='footer'>
                <img src='' />
                <div className='footer_home'>
                </div>
                <div className='footer_empl'>
                </div>
            </div>

            <div className='home'>
            </div>
            <button onClick={handleHome} className='home_button'>Home</button>

            <button onClick={handleEmpl} className='empl_button'>Empl</button>

            </div>

    );
};

export default Home;