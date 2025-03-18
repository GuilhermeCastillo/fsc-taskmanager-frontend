import { useNavigate } from "react-router-dom";

import CustomButton from "./CustomButton";

import logo from "../assets/images/logo.png";
import "./Sidebar.scss";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        navigate("/login");
    };

    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="full stack club" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={handleSignOutClick}>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
