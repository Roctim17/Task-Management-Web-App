import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useTask from '../Hooks/useTask';

const Task = () => {

    const [allTask] = useTask({});

    return (
        <div >
            <Header></Header>
            <div className="min-h-screen text-center py-10">
                <Link to="/taskform" >
                    <button className="btn btn-outline btn-accent">New Task</button>
                </Link>

                <div className="py-10 px-5">
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Assign to</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allTask.map((task, index) => <tr
                                    key={task._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{task.title}</td>
                                    <td>{task.date}</td>
                                    <td>{task.member}</td>
                                </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Task;