import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Task = () => {
    return (
        <div >
            <Header></Header>
            <div className="min-h-screen text-center py-10">
                <Link to="/taskform" >
                    <button class="btn btn-outline btn-accent">New Task</button>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Task;