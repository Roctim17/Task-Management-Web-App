import { useQuery } from "react-query";


const useMember = () => {
    const { isLoading, data, refetch } = useQuery("addedTask", () =>
        fetch(`https://limitless-reaches-16352.herokuapp.com/member/`, {
            method: "GET",
        }).then((res) => res.json())
    );
    console.log(data)
    return [data, isLoading, refetch];




    // const [allMember, setAllMember] = useState([]);

    // useEffect(() => {
    //     fetch(`https://limitless-reaches-16352.herokuapp.com/member/`)
    //         .then(res => res.json())
    //         .then(data => setAllMember(data))
    // }, []);

    // return [allMember];
};

export default useMember;