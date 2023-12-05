import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shares/Footer/Footer";
import NavBar from "../Pages/Shares/NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;