import Bar from "../components/bar/Bar";
import Don from "../components/don/Don";
import Footer from "../components/footer/Footer";
import Lid from "../components/lid/Lid";
import MediaCover from "../components/mediacover/MediaCover";
import "./land.scss"
const Land = ()=>{
    return(
        <div className="land">
            <Bar/>
            <div className="bottom">
          <Lid/>
            </div>
            <div className="landContainer">
                <div className="top">
                    <Don/>
                    </div>
                    <div className="bottom">
                    <MediaCover/>
                    <Footer/>
                    </div>
                    </div>
            </div>
    
            
    )
}
export default Land;