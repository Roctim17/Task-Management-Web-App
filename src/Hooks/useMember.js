import { useQuery } from "react-query";


const useMember = () => {
    const { isLoading, data, refetch } = useQuery("addedTask", () =>
        fetch(`https://limitless-reaches-16352.herokuapp.com/member/`, {
            method: "GET",
        }).then((res) => res.json())
    );
    return [data, isLoading, refetch];
};

export default useMember;