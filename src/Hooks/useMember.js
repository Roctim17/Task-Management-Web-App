import { useQuery } from "react-query";


const useMember = () => {
    const { isLoading, data, refetch } = useQuery("addedTask", () =>
        fetch(`http://localhost:5000/member/`, {
            method: "GET",
        }).then((res) => res.json())
    );
    console.log(data)
    return [data, isLoading, refetch];




    // const [allMember, setAllMember] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/member/`)
    //         .then(res => res.json())
    //         .then(data => setAllMember(data))
    // }, []);

    // return [allMember];
};

export default useMember;