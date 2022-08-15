import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useMember from '../Hooks/useMember';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import UpdateMemberModal from './UpdateMemberModal';

const Member = () => {
    const [members, isLoading, refetch] = useMember();
    const [allMember, setAllMember] = useState([]);
    const [updatingMember, setUpdatingMember] = useState({});
    const [modalShow, setModalShow] = useState(null);
    const navigate = useNavigate();
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
        fetch(`https://limitless-reaches-16352.herokuapp.com/member/${_id}`, {
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
        fetch(`https://limitless-reaches-16352.herokuapp.com/member/${_id}`)
            .then((res) => res.json())
            .then(data => setUpdatingMember(data),
        );
    };

    const navigateToMemberDetails = id => {
        console.log(id)
        navigate(`/memberDetails/${id}`)
    }



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
                                    <th className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allMember.map((member, index) => <tr
                                    key={member._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td className='text-center'><label onClick={() => deleteMember(member._id)} class="btn btn-error modal-button m-1" >Delete</label>

                                        <label
                                            for="my-modal-3"
                                            onClick={() => update(member._id)}
                                            class="btn btn-success modal-button m-1"
                                        >
                                            Update
                                        </label>
                                        <label
                                            onClick={() => navigateToMemberDetails(member._id)}
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
                <UpdateMemberModal
                    update={updatingMember}
                    setModalShow={setModalShow}
                    refetch={refetch}
                />
            )}

        </div>
    );
};

export default Member;