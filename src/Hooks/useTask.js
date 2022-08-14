import { useQuery } from "react-query";


const useTask = () => {

    const { isLoading, data, refetch } = useQuery("createTask", () =>
        fetch(`http://localhost:5000/createTask/`, {
            method: "GET",
        }).then(res => res.json())
    );
    console.log(data)
    return [data, isLoading, refetch];
};

export default useTask;