import {  Link, NavLink } from 'react-router-dom';
import logo from '../assets/best for you.png'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
 
const Nav = () => {
  const{user, loggedOut}=useContext(AuthContext)
 

    const links = <>
    <NavLink className={({isActive})=>isActive?'underline underline-offset-4 text-white':''} to={'/'}><li className='text-white'>Home</li></NavLink>
      <NavLink className={({isActive})=>isActive?'underline underline-offset-4 text-white':''} to={'/que'}><li className='text-white'>Queries </li></NavLink>
     {
      user && <div className='flex lg:flex-row flex-col lg:gap-6'>
         <NavLink className={({isActive})=>isActive?'underline underline-offset-4 text-white':''} to={'/forRecommend'}><li className='text-white'>Recommendations For Me</li></NavLink>
      <NavLink className={({isActive})=>isActive?'underline underline-offset-4 text-white':''} to={'/myQue'}><li className='text-white'>My Queries</li></NavLink>
      <NavLink className={({isActive})=>isActive?'underline underline-offset-4 text-white':''} to={'/myRecommend'}><li className='text-white'>My recommendations</li></NavLink>
      </div>
     
     }
    
    </>
   
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52">
      {links}
        
      </ul>
    </div>
    
    <img src={logo} className='h-[100px] w-[150px]' alt="" />
    
    <p className='text-xl font-bold text-white'>best for you</p>
    
  </div>
  <div className="navbar-center    hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex flex-row gap-9">
    {links}
    </ul>
  </div>
  <div className="navbar-end ">
   {
    !user &&  <Link to={'/login'}><button className="btn">Log In</button></Link>
   }
   {
    user && <div className=' flex flex-row gap-3 items-center' >
    <div tabIndex={0} role="" className="btn btn-ghost btn-circle avatar  tooltip tooltip-bottom lg:tooltip-left" data-tip={user.displayName}>
      <div className="w-10 rounded-full">
        <img referrerPolicy='no-referrer' alt="Tailwind CSS Navbar component" src={user.photoURL} />
      </div>
    </div>
    <button onClick={loggedOut} className="btn">Log Out</button>
  </div>
   }
    
  
  </div>
</div>
    );
};

export default Nav;