import { useLoaderData } from 'react-router-dom';
import './Login.css'
import AddRecommend from '../components/AddRecommend';
import AllRecommend from '../components/AllRecommend';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
// import { data } from 'autoprefixer';

const QueryDetails = () => {
    const info = useLoaderData();
    const [recommends, setRecommends]=useState()
    const{productImage,queryUser,title,boycotting,productName,productBrand,_id,recommendationCount}=info || {}

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/recommend/${_id}`,{credentials:'include'})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setRecommends(data)
        })

    },[])

   
    return (
       <Fade> <section className=" mt-16 dark:bg-gray-900">
       <div className="container px-6 py-10 mx-auto">
           
   
           <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-2">
               <div>
                   <div className="relative">
                       <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={productImage} alt="" />
   
                       <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                           <img className="object-cover object-center w-10 h-10 rounded-full" src={queryUser.photo} alt="" />
   
                           <div className="mx-4">
                               <h1 className="text-sm text-gray-700 dark:text-gray-200">{queryUser.name}</h1>
                               <p className="text-sm text-gray-500 dark:text-gray-400">{queryUser.email}</p>
                           </div>
                       </div>
                   </div>
   
                   <h1 className="mt-6 text-xl font-semibold text-white dark:text-white">
                       {title}
                   </h1>
   
                   <hr className="w-32 my-6 text-blue-500" />
   
                   <p className="text-sm text-white dark:text-gray-400">
                      <span className='text-xl font-semibold'> Alternation reason:</span> {boycotting}
                   </p>
                   <hr className="w-32 my-6 text-blue-500" />
                   <p className="text-sm text-white dark:text-gray-400">
                      <span className='text-xl font-semibold'> Product Information:</span> 
                      <ul>
                       <li>Product Name : {productName}</li>
                       <li>Brand : {productBrand}</li>
                       <li>Date Posted : {queryUser.date}</li>
                       
                      </ul>
                   </p>
                   <p className='text-white'>Recommendation : {recommendationCount}</p>
   
                   
               </div>
               <div>
                  
                   <AddRecommend info={info} ></AddRecommend>
               </div>
   
              
           </div>
           <p className='text-3xl font-bold mt-20 text-white text-center underline underline-offset-4'>All Recommendations</p>

          
          
           
       </div>
       <div >
           {
               recommends?.map(reco=><AllRecommend key={reco._id} reco={reco}></AllRecommend>)
           }
       </div>
   </section></Fade>
    );
};

export default QueryDetails;