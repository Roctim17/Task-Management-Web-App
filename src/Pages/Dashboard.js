import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-5xl font-bold text-center p-10'>Dashboard</h1>
            <div className="flex h-screen justify-center ">

                <div className="btn-group pt-10">
                    <button className="btn btn-active"><Link to='/task'>Tasks</Link></button>
                    <button className="btn btn-accent"> <Link to='/member'>Members</Link></button>



                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;