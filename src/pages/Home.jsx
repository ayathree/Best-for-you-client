import { Link, useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider'
import './Login.css'
import help from '../assets/help.jpg'
import Lottie from 'lottie-react';
import anione from '../assets/lottie two.json';
import anitwo from '../assets/lottie one.json'
import { Fade, Slide } from 'react-awesome-reveal';

const Home = () => {
    const loadedData = useLoaderData();
    return (
        <div>
           <Slider></Slider>
           <div>
           <div className="hero min-h-screen mt-20">
  <div className="hero-content flex-col lg:flex-row">
    <Lottie animationData={anione}></Lottie>
    <div>
      <h1 className="text-5xl font-bold text-white">Welcome to best for you...</h1>
      
    </div>
  </div>
</div>
           </div>
           <div>
          <Slide> <header className=" dark:bg-gray-900 mt-24">
   

   <div className="container cover  flex flex-col  p-5 lg:p-0   lg:flex-row lg:items-center">
       <div className="flex  flex-col items-center w-full lg:flex-row lg:w-1/2">
           

           <div className="max-w-lg lg:mx-12 lg:order-2">
               <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-white lg:text-4xl">Want to add your recommend and share your experience...?</h1>
               <p className="mt-4 text-white dark:text-gray-300">This is a friendly website where every one can search out best product for themselves by the help of others information. You can also check others queries and also add yours and give a recommends and your experience. For this please press the button bellow and take a look.... </p>
               <div className="mt-6">
                  <Link to={'/que'}> <a href="#" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">Check queries and recommend</a></Link>
               </div>
           </div>
       </div>

       <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
           <img className="object-cover w-[300px] h-[200px] lg:p-0 p-5 max-w-2xl rounded-md" src={help} alt="apple watch photo" />
       </div>
   </div>
</header></Slide>
           </div>
           <div>
            <p className='text-3xl font-bold text-white text-center underline underline-offset-2 mt-20 mb-16'>Recent Queries</p>
            <Fade><div  className='grid lg:grid-cols-3 grid-cols-1  justify-center items-center gap-10'>
                {
                    loadedData.slice(0,6).map(data=> <div key={data._id} className="flex max-w-md overflow-hidden cover rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="w-1/3 bg-cover" style={{backgroundImage: `url(${data.productImage})`} }></div>
                
                    <div className="w-2/3 p-4 md:p-4">
                        <h1 className="text-xl font-bold text-white dark:text-white">{data.productName}</h1>
                
                        <p className="mt-2 text-sm text-white dark:text-gray-400">{data.title}</p>
                
                       
                
                        <div className="flex justify-between mt-3 item-center">
                           
                           <Link to={`/queDetails/${data._id}`}> <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-blue-700  rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">View</button></Link>
                        </div>
                    </div>
                </div>)
                }

            </div></Fade>
           </div>
           <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
  <Lottie animationData={anitwo}></Lottie>
    <Fade><div>
      <h1 className="text-5xl font-bold text-white">A best alternative information getting website....</h1>
      <p className="py-6 text-white">If you want to some recommendation for best products you have to add your queries.For this please press the button bellow...</p>
     <Link to={'/myQue'}> <button className="btn btn-primary">Hi, wanna add your queries...?</button></Link>
    </div></Fade>
  </div>
</div>

           </div>
          
        </div>
       
    );
};

export default Home;