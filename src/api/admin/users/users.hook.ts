import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "./users.api";

const useGetUsers = () => {
    const userData = useQuery({
        queryKey: ["services"],
        queryFn: getAllUsers,
    });
    return userData;
}

export default useGetUsers

//{ data, isLoading, isError }