import "./navbar.scss"
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Diversity1SharpIcon from '@mui/icons-material/Diversity1Sharp';
const Navbar = ()=>{
    return(
        <div className="navbar">
        <div className="wrapper">
        <div className="logo">
          <Diversity1SharpIcon />
          Save Life
        </div>
            <div className="items">
                <div className="item">
                < LanguageIcon className="icon"/>
                English
            </div>
            <div className="item">
                < DarkModeOutlinedIcon  className="icon"/>
            </div>
            <div className="item">
                < FullscreenExitOutlinedIcon className="icon"/>
            </div>
            
            <div className="item">
                <  ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
            </div>
            </div>


        </div>
    )
}
export default Navbar;