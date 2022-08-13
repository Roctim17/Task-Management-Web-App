import { useEffect } from "react";
import { useState } from "react";


const useMember = () => {
    const [allMember, setAllMember] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/member/`)
            .then(res => res.json())
            .then(data => setAllMember(data))
    }, []);

    return [allMember];
};

export default useMember;