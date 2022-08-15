import { useQuery } from "react-query";


const useTask = () => {
    const { isLoading, data, refetch } = useQuery("createTask", () =>
        fetch(`https://limitless-reaches-16352.herokuapp.com/createTask/`, {
            method: "GET",
        }).then(res => res.json())
    );
    return [data, isLoading, refetch];
};

export default useTask;