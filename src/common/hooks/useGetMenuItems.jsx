import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMenuItems = () => {
    const [items, setItems] = useState();
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState();

    useEffect(() => {
        const getITems = async () => {
            
            try {
                setLoading(true)
                const response = await axios.get("./menuItems.json");
                if (response.status === 200) {
                    setItems(response.data)
                }
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        getITems()
    }, [])

    return { items, error,loading }
}