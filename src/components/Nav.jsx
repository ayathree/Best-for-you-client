import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/best for you.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import '../../src/index.css'; 

const Nav = () => {
  const { user, loggedOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light';
  });

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.body.classList.add('body-bg-dark');
      document.body.classList.remove('body-bg-light');
    } else {
      document.body.classList.add('body-bg-light');
      document.body.classList.remove('body-bg-dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const links = (
    <>
      <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 text-white' : ''} to={'/'}><li className='text-white'>Home</li></NavLink>
      <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 text-white' : ''} to={'/que'}><li className='text-white'>Queries </li></NavLink>
      {
        user && <div className='flex lg:flex-row flex-col lg:gap-6'>
          <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 text-white' : ''} to={'/forRecommend'}><li className='text-white'>Recommendations For Me</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 text-white' : ''} to={'/myQue'}><li className='text-white'>My Queries</li></NavLink>
          <NavLink className={({ isActive }) => isActive ? 'underline underline-offset-4 text-white' : ''} to={'/myRecommend'}><li className='text-white'>My recommendations</li></NavLink>
        </div>
      }
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-blue-500 rounded-box w-52">
      {links}
      <div className='mr-4 mt-5'>
    <label className="flex cursor-pointer gap-2 ">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input  onChange={handleTheme} type="checkbox"  className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    </div>
        
      </ul>
    </div>
    
    <img src={logo} className='h-[100px] w-[150px] hidden lg:block md:block' alt="" />
    
    <p className='lg:text-xl md:text-xl text-sm  font-bold text-white'>best for you</p>
    
  </div>
  <div className="navbar-center    hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex flex-row gap-9">
    {links}
    </ul>
  </div>
  
  <div className="navbar-end  ">
  {/* <div className="navbar-end"> */}
    <div className='lg:mr-4  md:block lg:block hidden'>
    <label className="flex cursor-pointer gap-2 ">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input  onChange={handleTheme} type="checkbox"  className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    </div>
   {
    !user &&  <Link to={'/login'}><button className="lg:btn   md:btn bg-white">Log In</button></Link>
   }
   {
    user && <div className=' flex flex-row gap-3 items-center' >
    <div tabIndex={0} role="" className="btn btn-ghost btn-circle avatar  tooltip tooltip-bottom lg:tooltip-left" data-tip={user.displayName}>
      <div className="w-10 rounded-full ">
        <img referrerPolicy='no-referrer' alt="Tailwind CSS Navbar component" src={user.photoURL} />
      </div>
    </div>
    <button onClick={loggedOut} className="lg:btn md:btn bg-white ">Log Out</button>
  </div>
   }
    
  
  </div>
  
    </div>
  );
};

export default Nav;
