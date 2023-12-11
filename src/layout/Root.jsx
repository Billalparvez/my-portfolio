import { Outlet } from "react-router-dom";
import Footer from "../Shard/Footer/Footer";
import Navbar from "../Shard/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;