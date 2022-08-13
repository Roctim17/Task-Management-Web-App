import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const AddMemberForm = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex h-auto justify-center items-center py-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl font-bold'>Add New Member</h1>
                        <form action="">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name <span className='text-red-500'>*</span></span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email </span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
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

export default AddMemberForm;