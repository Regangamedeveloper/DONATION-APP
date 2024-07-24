import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Donations from "./pages/donations/Donations";
import RequestDonation from "./pages/requestdonation/RequestDonation";
import AddCompaigns from "./pages/addcompaigns/AddCompaigns";
import Compaigns from "./pages/campaigns/Campaigns";
import RequestStatus from "./pages/requeststatus/RequestStatus";
import Transactions from "./pages/transactions/Transactions";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/">
        <Route index element ={<Home/>}/>
        <Route path="login" index element ={<Login/>}/>
        <Route path="addcompaigns" index element ={<AddCompaigns/>}/>
        <Route path="compaigns" index element ={<Compaigns/>}/>
        <Route path="donations" index element ={<Donations/>}/>
        <Route path="requestdonation" index element ={<RequestDonation/>}/>
        <Route path="request status" index element ={<RequestStatus/>}/>
        <Route path="transactions" index element ={<Transactions/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
