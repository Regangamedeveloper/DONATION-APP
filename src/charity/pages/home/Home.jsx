import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar";
import Widgets from "../../components/widgets/Widgets";
const Home = ()=>{
    return(
        <div className="home">
        <Sidebar />
        <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
        <Widgets/>
        </div>
        <img
              src="https://images.pexels.com/photos/933622/pexels-photo-933622.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="regan"
            />
        </div>
        </div>
    );
};
export default Home;