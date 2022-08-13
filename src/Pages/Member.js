import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import useMember from '../Hooks/useMember';

const Member = () => {

    const [allMember] = useMember();

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
                                    <th>Title</th>
                                    <th>Total Task</th>
                                </tr>
                            </thead>
                            <tbody>

                                {allMember.map((member, index) => <tr
                                    key={member._id}
                                >
                                    <th>{index + 1}</th>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
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

export default Member;