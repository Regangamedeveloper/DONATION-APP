import "./sidebar.scss"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = ()=>{
    return(
        <div className="sidebar">
       <div className="top"><span className="logo">Charity</span></div>
       <hr />
       <div className="center">
        <ul>
            <p className="title">Menu</p>
            <li>
            <DashboardIcon className="icon"/>
                <span>
                    Dashboard
                </span>
            </li>
            <li>
            <AddHomeWorkIcon className="icon"/>
                <span>
                    Add compaign
                </span>
            </li>
            <li>
            <ArticleIcon className="icon"/>
                <span>
                    Compaigns
                </span>
            </li>
            <li>
            <RequestPageIcon className="icon"/>
                <span>
                    Request Donation
                </span>
            </li>
            <li>
            <ListAltIcon className="icon"/>
                <span>
                    Request Status
                </span>
            </li>
            <li>
            <VolunteerActivismIcon className="icon"/>
                <span>
                    Donations
                </span>
            </li>
            <li>
            <AccountBalanceWalletIcon className="icon"/>
                <span>
                    Transactions
                </span>
            </li>
            <li>
                <LogoutIcon className="icon"/>
                <span>
                    Log out
                </span>
            </li>
        </ul>
        </div>
       <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        </div>
        </div>
    )
}
export default Sidebar;