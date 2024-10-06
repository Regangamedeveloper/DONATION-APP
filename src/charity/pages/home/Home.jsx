import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Adminfooter from "../../../Admin/components/Adminfooter";
import Nav from "../../components/nav/Nav";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
const Home = ()=>{
    return(
        <div className="home">
        <Sidebar />
        
        <div className="homeContainer">
    <Nav/>
    <div className="botom">
    <div className="widgets">
          <Widget type="donor" />
          <Widget type="campaign" />
          <Widget type="donation" />
        </div>
        <div className="charts">
          <Featured/> 
        </div>
        <Adminfooter/>
            </div>
            </div>
            </div>
    );
};
export default Home;