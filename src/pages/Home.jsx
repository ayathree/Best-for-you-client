import { Link, useLoaderData } from 'react-router-dom';
import Slider from '../components/Slider'
import './Login.css'
import help from '../assets/help.jpg'
import Lottie from 'lottie-react';
import anione from '../assets/lottie two.json';
import anitwo from '../assets/lottie one.json'

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
           <header className=" dark:bg-gray-900 mt-24">
   

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
</header>
           </div>
           <div>
            <p>Recent Queries</p>
            <div  className='grid lg:grid-cols-3 grid-cols-1  justify-center items-center gap-10'>
                {
                    loadedData.slice(0,6).map(data=> <div key={data._id} className="mt-16 p-2 overflow-hidden cover rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover rounded-lg w-full h-56" src={data.productImage} alt="avatar" />
                   <div className="px-8 py-4 rounded-lg  dark:bg-gray-800">
                       <div className="flex justify-center -mt-16 md:justify-end">
                           <a target="_blank" href={data.queryUser.photo}>
                               <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={data.queryUser.photo} />
                           </a>
                       </div>
                       <div className="flex justify-end">
                           <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{data.queryUser.name}</a>
                       </div>
                       <div className="mt-2">
                           <h2 className="text-xl font-semibold text-white dark:text-white md:mt-0">{data.productName}</h2>
                           <p className="text-white text-sm">Brand: {data.productBrand}</p>
                       </div>
                       <div className="mt-7">
                           <h2 className="text-xl font-semibold text-white dark:text-white md:mt-0">{data.title}</h2>
                           <p className="mt-2 text-sm text-white dark:text-gray-200">{data.boycotting}</p>
                       </div>
                       <div className="mt-7">
                           <p className="text-white">Date Posted: {data.queryUser.date}</p>
                           <p className="text-white">Recommendation: {data.recommendationCount} </p>
                       </div>
                   </div>
                   <div className="flex justify-end">
                       <Link to={`/queDetails/${data._id}`}><button className="btn bg-blue-700 text-white">Recommend</button></Link>
                   </div>
               </div>)
                }

            </div>
           </div>
           <div>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
  <Lottie animationData={anitwo}></Lottie>
    <div>
      <h1 className="text-5xl font-bold text-white">A best alternative information getting website....</h1>
      <p className="py-6 text-white">If you want to some recommendation for best products you have to add your queries.For this please press the button bellow...</p>
     <Link to={'/myQue'}> <button className="btn btn-primary">Hi, wanna add your queries...?</button></Link>
    </div>
  </div>
</div>

           </div>
          
        </div>
       
    );
};

export default Home;