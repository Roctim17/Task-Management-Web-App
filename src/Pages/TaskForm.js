import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const TaskForm = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/member')
            .then(res => res.json())
            .then(data => setMembers(data));
    }, [])


    const handleCreateTask = event => {
        event.preventDefault();
        const member = event.target.member.value;
        const createTask = {
            title: event.target.title.value,
            member,
            date,
            description: event.target.description.value,
        }
        fetch('http://localhost:5000/createTask', {
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
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Title <span className='text-red-500'>*</span></span>
                                    {/* <span class="label-text-alt">{date}  </span> */}
                                </label>
                                <input type="text" name='title' placeholder="Wright Title here" class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea name='description' class="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Assign to</span>
                                </label>
                                <select name='member' class="select select-bordered">
                                    <option disabled selected>Select</option>
                                    {
                                        members.map(member => <option
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