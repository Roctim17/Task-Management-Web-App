import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex h-screen justify-center ">
                <div class="btn-group pt-10">
                    <button class="btn btn-active">Tasks</button>

                    <button class="btn btn-accent">Members</button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Dashboard;