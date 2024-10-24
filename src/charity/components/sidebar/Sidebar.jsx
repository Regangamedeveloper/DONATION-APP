import "./sidebar.scss";
import { NavLink } from "react-router-dom";  // Import NavLink
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import TableRowsIcon from '@mui/icons-material/TableRows';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="tube">
                    <img src="https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png" alt="Your Logo" className="tube" />
                </span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MENUe</p>
                    <li>
                        <NavLink exact to="/" activeClassName="active" style={{ textDecoration: "none" }}>
                            <HomeIcon className="icon" />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/charityp" activeClassName="active" style={{ textDecoration: "none" }}>
                            <PersonIcon className="icon" />
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <p className="title">CAMPAIGNS</p>
                    <li>
                        <NavLink to="/addcampaigns" activeClassName="active" style={{ textDecoration: "none" }}>
                            <AddIcon className="icon" />
                            <span>Add campaigns</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/campaigns" activeClassName="active" style={{ textDecoration: "none" }}>
                            <TableRowsIcon className="icon" />
                            <span>Campaigns</span>
                        </NavLink>
                    </li>
                    <p className="title">DONATION</p>
                    <li>
                        <NavLink to="/requestdonation" activeClassName="active" style={{ textDecoration: "none" }}>
                            <Diversity2OutlinedIcon className="icon" />
                            <span>Request Donation</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/requeststatus" activeClassName="active" style={{ textDecoration: "none" }}>
                            <ListAltIcon className="icon" />
                            <span>Request Status</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/donations" activeClassName="active" style={{ textDecoration: "none" }}>
                            <VolunteerActivismIcon className="icon" />
                            <span>Donations</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/expenditure" activeClassName="active" style={{ textDecoration: "none" }}>
                            <AccountTreeIcon className="icon" />
                            <span>Expenditure</span>
                        </NavLink>
                    </li>
                    <p className="title">FINANCE</p>
                    <li>
                        <NavLink to="/transactions" activeClassName="active" style={{ textDecoration: "none" }}>
                            <AccountBalanceWalletIcon className="icon" />
                            <span>Transactions</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="login" activeClassName="active" style={{ textDecoration: "none" }}>
                            <LogoutIcon className="icon" />
                            <span>Log out</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
