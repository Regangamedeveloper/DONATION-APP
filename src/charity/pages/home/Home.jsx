import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Slider from "../../components/slider/Slider"
const Home = ()=>{
    return(
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
        <Navbar/>
        <div className="top">
            <h1>WElCOME TO ADRA UGANDA </h1>
            </div>
        <Slider/>
            </div>
            
            </div>
    );
};
export default Home;