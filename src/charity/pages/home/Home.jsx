import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Slider from "../../components/slider/Slider"
import Adminfooter from "../../../Admin/components/Adminfooter";
import Nav from "../../components/nav/Nav";
const Home = ()=>{
    return(
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
    <Nav/>
        <Slider/>
        <Adminfooter/>
            </div>
            
            </div>
    );
};
export default Home;