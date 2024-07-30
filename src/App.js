<<<<<<< Updated upstream
import Home from './charity/pages/home/Home';
import Login from "./charity/pages/login/Login";
import Donations from "./charity/pages/donations/Donations";
import RequestDonation from "./charity/pages/requestdonation/RequestDonation";
import AddCompaigns from "./charity/pages/addcompaigns/AddCompaigns";
import Compaigns from "./charity/pages/campaigns/Campaigns";
import RequestStatus from "./charity/pages/requeststatus/RequestStatus";
import Transactions from "./charity/pages/transactions/Transactions";
import DonorHome from "./donor/pages/donorhome/DonorHome";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Donate from "./donor/pages/donate/Donate";
import Donationrequest from "./donor/pages/donationrequest/Donationrequest";
import Trackdonation from "./donor/pages/trackdonation/Trackdonation";
import TransactionsD from "./donor/pages/transactions/TransactionsD";
import Donorp from "./donor/pages/profile/Donorp";

function App() {
  return (
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/">
        <Route index element ={<Home/>}/>
        <Route path="login" index element ={<Login/>}/>
        <Route path="addcampaigns" index element ={<AddCompaigns/>}/>
        <Route path="campaigns" index element ={<Compaigns/>}/>
        <Route path="donations" index element ={<Donations/>}/>
        <Route path="requestdonation" index element ={<RequestDonation/>}/>
        <Route path="requeststatus" index element ={<RequestStatus/>}/>
        <Route path="transactions" index element ={<Transactions/>}/>
        <Route path="donorhome" index element ={<DonorHome/>}/>
        <Route path="donate" index element ={<Donate/>}/>
        <Route path="donationrequest" index element ={<Donationrequest/>}/>
        <Route path="trackdonation" index element ={<Trackdonation/>}/>
        <Route path="transaction" index element ={<TransactionsD/>}/>
        <Route path="profile" index element ={<Donorp/>}/>
=======
        
>>>>>>> Stashed changes
        </Route>
        
        <Route path="admin" element={<Adminlayout />}>
            <Route index element={<Adminhome />} />
            <Route path="donordetails" index element={<Donordetails />} /> 
            <Route path="charitydetails" index element={<Charitydetails />} /> 
            <Route path="donationdetails" index element={<Donationdetails />} /> 
            <Route path="campaigndetails" index element={<Campaigndetails />} /> 
            <Route path="userinfo/:id" index element={<Userinfo />} /> 
            <Route path="charityinfo/:id" index element={<Charityinfo />} /> 
            <Route path="campaigninfo/:id" index element={<Campaigninfo />} /> 
            <Route path="adminprofile" index element={<Adminprofile />} /> 
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
