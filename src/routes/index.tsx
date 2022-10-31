import PosPage from "../pages/PosPage";
import FindSellers from "../pages/SearchPage";
import SellersPage from "../pages/SellersPage";
import { Route, Routes } from "react-router-dom";

const RoutesAct = () => (
    <Routes>
        <Route path="/" element={<SellersPage />} />
        <Route path="/pos" element={<PosPage/>} />
        <Route path="/find-sellers" element={<FindSellers />} />
    </Routes>
);

export default RoutesAct; 
