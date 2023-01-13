import { BrowserRouter, Route, Routes} from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/static/Footer";
import Navbar from "../components/static/Navbar";
import Home from "../pages/home";

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Banner/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
        
    );
};