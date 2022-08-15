import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useTask from '../Hooks/useTask';
import { toast } from 'react-toastify'
import Loading from '../Components/Loading';
import UpdatedTaskModal from './UpdatedTaskModal';
import { Link, useNavigate } from 'react-router-dom';

const Task = () => {
    const [tasks, isLoading, refetch] = useTask({});
    const [allTask, setAllTask] = useState([]);
    const [updatingTask, setUpdatingTask] = useState({});
    const [modalShow, setModalShow] = useState(null);
    const navigate = useNavigate();

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
        console.log(_id)
        fetch(`https://limitless-reaches-16352.herokuapp.com/createTask/${_id}`, {
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

    const update = (_id) => {
        console.log(_id)
        setModalShow(true);
        fetch(`https://limitless-reaches-16352.herokuapp.com/createTask/${_id}`)
            .then((res) => res.json())
            .then(data => setUpdatingTask(data),
        );
    };

    const navigateToTaskDetails = id => {
        console.log(id)
        navigate(`/taskDetails/${id}`)
    }


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
                                    <th className='text-center'>Action</th>

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
                                    <td className='text-center'><label onClick={() => deleteTask(task._id)} class="btn btn-warning modal-button m-1">Delete</label>
                                        <label
                                            for="my-modal-6"
                                            onClick={() => update(task._id)}
                                            class="btn btn-success modal-button m-1"
                                        >
                                            Update
                                        </label>
                                        <label
                                            onClick={() => navigateToTaskDetails(task._id)}
                                            class="btn btn-info modal-button m-1"
                                        >
                                            Details
                                        </label>
                                    </td>
                                </tr>
                                )}


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <Footer></Footer>

            {modalShow && (
                <UpdatedTaskModal
                    update={updatingTask}
                    setModalShow={setModalShow}
                    refetch={refetch}
                />
            )}

        </div>
    );
};

export default Task;