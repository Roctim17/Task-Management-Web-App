import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { toast } from 'react-toastify'
import useMember from '../Hooks/useMember';
import Loading from '../Components/Loading';

const TaskForm = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const navigate = useNavigate();

    const [members, isLoading, refetch] = useMember();
    const [allMember, setAllMember] = useState([]);
    useEffect(() => {
        if (members) {
            const sorted = [...members].reverse();
            setAllMember(sorted);
        }
    }, [members]);
    if (isLoading) {
        return <Loading />;
    }



    const handleCreateTask = event => {
        event.preventDefault();
        const member = event.target.member.value;
        const createTask = {
            title: event.target.title.value,
            member,
            date,
            description: event.target.description.value,
        }
        fetch(`https://limitless-reaches-16352.herokuapp.com/createTask`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createTask)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
                if (result) {
                    navigate('/task')
                    refetch()
                }

                if (result) {
                    toast(`Successfully Assign to ${member} with ${createTask.title} Task`)
                }

            })
    }



    return (
        <div>
            <Header></Header>
            <div className="flex h-auto justify-center items-center py-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl font-bold'>New Task Form</h1>
                        <form action="" onSubmit={handleCreateTask}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Title <span className='text-red-500'>*</span></span>

                                </label>
                                <input type="text" name='title' placeholder="Wright Title here"
                                    className="input input-bordered w-full max-w-xs" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='description' className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Assign to</span>
                                </label>
                                <select name='member' className="select select-bordered">
                                    <option disabled selected>Select</option>
                                    {
                                        allMember.map(member => <option
                                            key={member._id}
                                            value={member.name}
                                        >
                                            {member.name}
                                        </option>

                                        )
                                    }
                                </select>

                            </div>
                            <div className="pt-3">
                                <input type="submit" value='submit' placeholder="Type here" className="btn btn-accent w-full max-w-xs" />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TaskForm;