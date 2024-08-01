import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Slider from "../../components/slider/Slider"
import Adminfooter from "../../../Admin/components/Adminfooter";
const Home = ()=>{
    return(
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
        <Navbar/>
        <Slider/>
        <Adminfooter/>
            </div>
            
            </div>
    );
};
export default Home;