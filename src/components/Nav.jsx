import {  Link, NavLink } from 'react-router-dom';
import logo from '../assets/best for you.png'

const Nav = () => {

    const links = <>
    <NavLink to={'/'}><li>Home</li></NavLink>
      <NavLink to={'/que'}><li>Queries </li></NavLink>
      <NavLink to={'/forRecommend'}><li>Recommendations For Me</li></NavLink>
      <NavLink to={'/myQue'}><li>My Queries</li></NavLink>
      <NavLink to={'/myRecommend'}><li>My recommendations</li></NavLink>
    
    </>
   
    return (
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
        
      </ul>
    </div>
    
    <img src={logo} className='h-[100px] w-[150px]' alt="" />
    
    <p className='text-xl font-bold'>best for you</p>
    
  </div>
  <div className="navbar-center    hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex flex-row gap-9">
    {links}
    </ul>
  </div>
  <div className="navbar-end ">
    <Link to={'/login'}><a className="btn">Login</a></Link>
  </div>
</div>
    );
};

export default Nav;