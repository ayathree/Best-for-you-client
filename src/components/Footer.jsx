import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/best for you.png'


const Footer = () => {
    return (
        <footer className=" dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="#">
                <img className="h-[100px] w-[150px]" src={logo} alt="" />
            </a>

            <div className="flex flex-wrap justify-center mt-6 -mx-4">
               

                <p className='text-3xl text-white font-bold'>best for you</p>
            </div>

        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-white dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

            <div className="flex flex-row gap-5 -mx-2">
           <div>
          <a href="https://www.facebook.com">
            <FaFacebook className='text-3xl text-white'></FaFacebook>
          </a>
          
           </div>
            <div>
                <a href="https://www.linkedin.com/">
            <FaLinkedin className='text-3xl text-white' />
            </a>
            </div>
            
                

               
                
            </div>
        </div>
    </div>
</footer>
    );
};

export default Footer;