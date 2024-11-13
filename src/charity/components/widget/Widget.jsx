import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import TableRowsIcon from '@mui/icons-material/TableRows';
import { Link } from "react-router-dom"; 
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 7000000;
  const diff = 20;

  switch (type) {
    case "donor":
      data = {
        title: "DONORS",
        isMoney: false,
        link: (
          <Link to="/requestdonation"  style={{width:'max-content' , fontSize:'12px' ,borderBottom:'1px solid gray'}}>
           See all donors
          </Link>
          
        ),
        icon: (
          <Link to="/requestdonation" style={{ display: 'flex', alignItems: 'flex-end' ,alignSelf:'flex-end' }}>
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
            </Link>
        ),
      };
      break;
    case "campaign":
      data = {
        title: "CAMPAIGNS",
        isMoney: false,
        link: (
          <Link to="/campaigns"  style={{width:'max-content' , fontSize:'12px' ,borderBottom:'1px solid gray'}}>
            View all campaigns
          </Link>
        ),
        icon: (
          <Link to="/campaigns" style={{ display: 'flex', alignItems: 'flex-end' ,alignSelf:'flex-end' }}>
          <TableRowsIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
             </Link>
        ),
      };
      break;
    case "donation":
      data = {
        title: "DONATIONS",
        isMoney: true,
        link: (
          <Link to="/donations"  style={{width:'max-content' , fontSize:'12px' ,borderBottom:'1px solid gray'}}>
         View all donations
        </Link>
      ),
        icon: (
<Link to="/donations" style={{ display: 'flex', alignItems: 'flex-end' ,alignSelf:'flex-end' }}>
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
          </Link>
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
