import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddMemberForm = () => {

    const navigate = useNavigate();
    const handleNewMember = event => {
        event.preventDefault();
        const newMember = {
            name: event.target.name.value,
            email: event.target.email.value
        }
        fetch(`https://limitless-reaches-16352.herokuapp.com/member`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMember)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                if (data.success) {
                    navigate('/Member')
                }

                if (data.success) {
                    toast(`Successfully Added  ${newMember.name} & Email ${newMember.email}`)
                }
                else {
                    toast.error(` ${newMember.email} Email Already Exist`)
                }

            })
    }

    return (
        <div>
            <Header></Header>
            <div className="flex h-auto justify-center items-center py-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className='text-center text-2xl font-bold'>Add New Member</h1>
                        <form action="" onSubmit={handleNewMember}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name <span className='text-red-500'>*</span></span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email </span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
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