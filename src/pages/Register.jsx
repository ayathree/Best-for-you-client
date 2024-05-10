import { Link } from 'react-router-dom';
import logo from '../assets/best for you.png'
import './Login.css'

const Register = () => {
    return (
        <div className="w-full cover max-w-sm p-6 m-auto mx-auto  rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
            <img className=" h-[100px] w-[150px]" src={logo} alt="" />
        </div>
    
        <form className="mt-6">
            <div>
                <label htmlFor="username" className="block text-sm text-white dark:text-gray-200">Email</label>
                <input type="email" name='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm text-white dark:text-gray-200">Name</label>
                    
                </div>
    
                <input type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm text-white dark:text-gray-200">Photo URL</label>
                    
                </div>
    
                <input type="text" name='photo' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>

    
            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm text-white dark:text-gray-200">Password</label>
                    
                </div>
    
                <input type="password" name='password' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
    
            <div className="mt-6">
                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    Register
                </button>
            </div>
        </form>
    
        
        
    
        <p className="mt-8   text-center font-bold text-gray-400"> Already have an account? <Link to={'/login'} className="font-bold text-blue-700 dark:text-gray-200 hover:underline">Login</Link></p>
    </div>
    );
};

export default Register;