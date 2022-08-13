import { useEffect } from "react";
import { useState } from "react";


const useTask = () => {
    const [allTask, setAllTask] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/createTask/`)
            .then(res => res.json())
            .then(data => setAllTask(data))
    }, []);

    return [allTask];
};

export default useTask;