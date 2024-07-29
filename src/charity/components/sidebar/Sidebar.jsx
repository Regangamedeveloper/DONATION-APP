import "./sidebar.scss"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
const Sidebar = ()=>{
    return(
        <div className="sidebar">
       <div className="top"><span className="logo">
       <img src="https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png"alt="Your Logo" className="logo" /> </span>
       </div>
       <hr />
       <div className="center">
        <ul>
            <p className="title">MENU</p>
            <li>
            <Link to="/"style={{textDecoration:"none"}}>
            <DashboardIcon className="icon"/>
                <span>
                    Home page
                </span>
                </Link>
            </li>
            <p className="title">CAMPAIGNS</p>
            <li>
            <Link to="/addcampaigns"style={{textDecoration:"none"}}>
            <AddHomeWorkIcon className="icon"/>
                <span>
                    Add campaigns
                </span>
                </Link>
            </li>
            <li>   
            <Link to="/campaigns"style={{textDecoration:"none"}}>
            <ArticleIcon className="icon"/>
                <span>
                    Campaigns
                </span>
                </Link>
            </li>
            <p className="title">DONATION</p>
            <li>
            <Link to="/requestdonation"style={{textDecoration:"none"}}>
            <RequestPageIcon className="icon"/>
                <span>
                    Request Donation
                </span>
                </Link>
            </li>
            <li>
            <Link to="/requeststatus"style={{textDecoration:"none"}}>
            <ListAltIcon className="icon"/>
                <span>
                    Request Status
                </span>
                </Link>
            </li>
            <li>
            <Link to="/donations"style={{textDecoration:"none"}}>
            <VolunteerActivismIcon className="icon"/>
                <span>
                    Donations
                </span>
                </Link>
            </li>
            <p className="title">FINANCE</p>
            <li>
            <Link to="/transactions"style={{textDecoration:"none"}}>
            <AccountBalanceWalletIcon className="icon"/>
                <span>
                    Transactions
                </span>
                </Link>
            </li>
            <li>
            <Link to="/"style={{textDecoration:"none"}}> 
                <LogoutIcon className="icon"/>
                <span>
                    Log out
                </span>
                </Link>
            </li>
        </ul>
        </div>
        </div>
    )
}
export default Sidebar;