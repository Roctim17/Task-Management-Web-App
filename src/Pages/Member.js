import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const Member = () => {
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

                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>10</td>

                                </tr>

                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>10</td>
                                </tr>

                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>5</td>
                                </tr>
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