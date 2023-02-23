import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUsers = (page) => {
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getITems = async () => {
            try {
                setLoading(true);
                let api;
                if (page === 1) {
                    api = "https://randomuser.me/api?results=8";
                } else {
                    api = `https://randomuser.me/api?results=8&page=${page}`
                }
                const response = await axios.get(api);
                if (response.status === 200) {
                    setUsers(response.data.results)
                }
            } catch (err) {
                setError('err')
            }
            setLoading(false)
        }
        getITems()
    }, [page])
    return { users, loading, error }
}