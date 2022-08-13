import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const TaskForm = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex h-auto justify-center items-center py-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl font-bold'>New Task Form</h1>
                        <form action="">
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Title <span className='text-red-500'>*</span></span>
                                </label>
                                <input type="text" placeholder="Wright Title here" class="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Description</span>
                                </label>
                                <textarea class="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Assign to</span>
                                </label>
                                <select class="select select-bordered">
                                    <option disabled selected>Select</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
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