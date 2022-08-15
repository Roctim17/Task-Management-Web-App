import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const MemberDetails = () => {
    const { id } = useParams();
    const [member, setMember] = useState({});
    useEffect(() => {
        const url = `https://limitless-reaches-16352.herokuapp.com/memberDetails/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMember(data))
    }, [id]);

    return (
        <div>
            <Header></Header>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">Member Details</h1><br />
                        <h1 class="text-1xl font-bold">{member.name}</h1><br />
                        <h1 class="text-1xl font-bold">{member.email}</h1>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MemberDetails;