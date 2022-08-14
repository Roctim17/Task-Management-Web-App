import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useTask from '../Hooks/useTask';
import { toast } from 'react-toastify'
import UpdatedTaskModal from './UpdatedTaskModal';
import Loading from '../Components/Loading';

const Task = () => {

    const [tasks, isLoading, refetch] = useTask({});
    const [modalShow, setModalShow] = useState(null);
    const [updatedTask, setUpdatedTask] = useState({});
    const [allTask, setAllTask] = useState([]);

    useEffect(() => {
        if (tasks) {
            const sorted = [...tasks].reverse();
            setAllTask(sorted);
        }
    }, [tasks]);
    if (isLoading) {
        return <Loading />;
    }




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
                    refetch();
                }
            });
    };

    const updateTask = (_id) => {
        setModalShow(true);
        fetch(`http://localhost:5000/updatedTask/${_id}`)
            .then((res) => res.json())
            .then((data) => setUpdatedTask(data));

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
                                    <td><label onClick={() => deleteTask(task._id)} class="btn btn-warning modal-button m-1">Delete</label>
                                        <label
                                            for="my-modal-6"
                                            onClick={() => updateTask(task._id)}
                                            class="btn btn-success modal-button "
                                        >
                                            Update
                                        </label>
                                    </td>
                                </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>
                {modalShow && (
                    <UpdatedTaskModal
                        update={updatedTask}
                        setModalShow={setModalShow}
                        refetch={refetch}
                    />
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Task;