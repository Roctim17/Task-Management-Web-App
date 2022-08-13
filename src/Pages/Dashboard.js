import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="text-center p-5">
                <div class="btn-group">
                    <button class="btn btn-active">Tasks</button>

                    <button class="btn btn-accent">Members</button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;