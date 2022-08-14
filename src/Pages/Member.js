import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useMember from '../Hooks/useMember';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Loading from '../Components/Loading';

const Member = () => {
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



    const deleteMember = (_id) => {
        fetch(`http://localhost:5000/member/${_id}`, {
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


    const handleSubmit = (event, _id) => {

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const data = { name, email };
        if ((name && email)) {
            fetch(`http://localhost:5000/member/${_id}`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data) {

                        toast.success("Member Updated Successfully");

                        event.target.reset();
                    }
                });
        }
        else {
            toast.error('Please Fill Up Full Form', { id: 25 })
        }
    };




    return (
        <div >
            <Header></Header>
            <div className="min-h-screen text-center py-10">
                <Link to="/addmember" >
                    <button className="btn btn-outline btn-accent">Add New Memder</button>
                </Link>

                <div className="py-10 px-5">
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Total Task</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allMember.map((member, index) => <tr
                                    key={member._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td><label onClick={() => deleteMember(member._id)} class="btn btn-error modal-button m-1" >Delete</label>
                                        <label for="my-modal-3" class="btn btn-success modal-button">Update </label>
                                    </td>
                                </tr>
                                )}




                            </tbody>
                        </table>

                    </div>


                </div>


            </div>
            <Footer></Footer>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div className="modal">
                <div className="modal-box md:w-4/12 mt-10 w-10/12 mx-auto relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-koulen text-center text-accent font-bold mb-4">
                        Update Member
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col font-koulen space-y-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="name"
                                className="input input-bordered w-full"
                            />


                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered w-full"
                            />

                            <input
                                type="submit"
                                className="btn btn-accent "
                                value="Update"
                            />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Member;