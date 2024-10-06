import Landbanner from "../components/banner/Landbanner";
import Bar from "../components/bar/Bar";
import Callaction from "../components/callaction/Callaction";
import Compant from "../components/company]/Compant";
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
                    <Landbanner/>
                    <Callaction/>
                    <Compant/>
                    <MediaCover/>
                    <Footer/>
            </div>
    
            
    )
}
export default Land;