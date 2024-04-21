import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Authentication = () => {
        const navigate = useNavigate();
        const [state, setState] = useState(false)
        useEffect(()=>{
            const checkToken = async () => {
                try {
                    const res = await axios.get("http://localhost:5000/user/validateToken", {
                        withCredentials: true
                    });
                    return res;
                } catch (error) {
                    navigate("/sign")
                }
            }
            checkToken();
            setState(true)
        }, []);
        return <>
        {
             state && <Outlet/>
        }
        </>

}

export default Authentication