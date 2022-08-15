import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const TaskDetails = () => {
    const { id } = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        const url = `https://limitless-reaches-16352.herokuapp.com/taskDetails/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [id]);

    return (
        <div>
            <Header></Header>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">

                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Task Details</h1><br />
                        <h1 class="text-3xl font-bold">Task Name : "{task.title}"</h1>
                        <p class="py-6"><span className='text-2xl font-bold'>Description </span><br />
                            {task.description}</p>
                        <p class="py-6"> <span class="text-1xl font-bold">ASSIGN DATE </span> <br />{task.date}</p>
                        <h3 class="text-2xl font-bold"><span class="text-3xl font-bold">ASSIGN TO</span> <br /> {task.member}</h3>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TaskDetails;