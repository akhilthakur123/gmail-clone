import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setEmails, setSentEmails } from "../redux/appSlice";

const useGetAllSentEmails = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/email/getallSentemails", {
                    withCredentials: true
                });


                dispatch(setSentEmails(res.data.emails));
            } catch (error) {
                console.log(error);
            }
        }
        fetchEmails();
    }, []);
};
export default useGetAllSentEmails;