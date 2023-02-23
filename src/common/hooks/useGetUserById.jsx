import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserById = (id) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const getUser = async (id) => {
            try {
                setLoading(true);
                const response = await axios.get(`/https://randomuser.me/api?:id${id}`);
                if (response.status === 200) {
                    setUser(response.data)
                }
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        getUser(id)
    }, [])

    return { user, loading, error }
}