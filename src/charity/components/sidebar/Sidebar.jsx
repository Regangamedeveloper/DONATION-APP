import "./sidebar.scss"
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
const Sidebar = ()=>{
    return(
        <div className="sidebar">
       <div className="top"><span className="tube">
       <img src="https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png"alt="Your Logo" className="tube" /> </span>
       </div>
       <hr />
       <div className="center">
        <ul>
            <p className="title">MENU</p>
            <li>
            <Link to="/"style={{textDecoration:"none"}}>
            <HomeIcon className="icon"/>
                <span>
                    Home
                </span>
                </Link>
            </li>
            <p className="title">CAMPAIGNS</p>
            <li>
            <Link to="/addcampaigns"style={{textDecoration:"none"}}>
            < AddIcon className="icon"/>
                <span>
                    Add campaigns
                </span>
                </Link>
            </li>
            <li>   
            <Link to="/campaigns"style={{textDecoration:"none"}}>
            <TableRowsIcon className="icon"/>
                <span>
                    Campaigns
                </span>
                </Link>
            </li>
            <p className="title">DONATION</p>
            <li>
            <Link to="/requestdonation"style={{textDecoration:"none"}}>
            <Diversity2OutlinedIcon className="icon"/>
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