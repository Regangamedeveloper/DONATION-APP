import Bar from "../components/bar/Bar";
import Don from "../components/don/Don";
import Footer from "../components/footer/Footer";
import Lid from "../components/lid/Lid";
import MediaCover from "../components/mediacover/MediaCover";
import "./land.scss"
const Land = ()=>{
    return(
        <div>
            {/* <Bar/> */}
          <Lid/>
                    <Don/>
                    <MediaCover/>
                    <Footer/>
            </div>
    
            
    )
}
export default Land;