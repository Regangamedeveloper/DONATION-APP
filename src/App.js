import Home from './charity/pages/home/Home';
import Login from "./charity/pages/login/Login";
import Donations from "./charity/pages/donations/Donations";
import RequestDonation from "./charity/pages/requestdonation/RequestDonation";
import AddCompaigns from "./charity/pages/addcompaigns/AddCompaigns";
import Compaigns from "./charity/pages/campaigns/Campaigns";
import RequestStatus from "./charity/pages/requeststatus/RequestStatus";
import Transactions from "./charity/pages/transactions/Transactions";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
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
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
