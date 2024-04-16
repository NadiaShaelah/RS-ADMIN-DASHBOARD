import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Test from "./images/Test";
import OrderDetails from "./components/Main/Orders/OrderDetails";
import ReservationDetails from "./components/Main/Reservations/ReservationDetails";
import QuoteDetails from "./components/Main/Quotes/QuoteDetails";
import Table from "./images/Table";
import AppTest from "./components/PopUp/AppTest";
import { Tabs } from "./TEST/Tabs";
import MesTabs from "./TEST/MesTabs";
import SearBarTest from "./TEST/SearBarTest.jsx"


function App() {
    return (
        <div className="App">
            
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path='/order-details' element={<OrderDetails/>} />
                <Route path='/reserv-details' element={<ReservationDetails/>} />
                <Route path='/quote-details' element={<QuoteDetails/>} />
                <Route path="/table" element={<Table/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/apptest" element={<AppTest/>}/>
                <Route path="/tabs" element={<Tabs/>}/>
                <Route path="/tab" element={<MesTabs/>}/>
                <Route path="/search" element={<SearBarTest/>}/>
            </Routes>
        </div>
    );
}

export default App;
