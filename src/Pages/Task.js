import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useTask from '../Hooks/useTask';
import { toast } from 'react-toastify'

const Task = () => {

    const [allTask] = useTask({});


    const deleteTask = (_id) => {
        fetch(`http://localhost:5000/createTask/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`Deleted`);

                }
            });
    };


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
                                    <th>Action</th>
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
                                    <td><button onClick={() => deleteTask(task._id)}>Delete</button></td>
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