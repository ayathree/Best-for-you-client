import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div >
            <div className='container mx-auto  lg:px-3 py-8 px-3 '>
            <Nav></Nav>
            </div>
            
            
            <div className='container mx-auto  lg:px-3 py-8 px-3 '>
            <Outlet></Outlet>
            </div>
            
           <div className='container mx-auto  lg:px-3 py-8 px-3 '>
           <Footer></Footer>
           </div>

            

        </div>
    );
};

export default Root;