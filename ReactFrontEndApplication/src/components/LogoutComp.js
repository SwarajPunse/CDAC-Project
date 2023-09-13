import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { logout } from "./slice";

export default function LogoutComp()
{
    const navigate=useNavigate();
    const dispatch = useDispatch();
    window.localStorage.clear();
    
    dispatch(logout())
    navigate("/login")

}