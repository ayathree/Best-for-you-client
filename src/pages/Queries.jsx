import { Link, useLoaderData } from "react-router-dom";
import './Login.css'

const Queries = () => {
    const infos= useLoaderData()
    // const{productImage,title,productName,productBrand,boycotting,queryUser,recommendationCount}=infos || {}
    console.log(infos)
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10">
            {
                infos.map(info=><div key={info._id} className=" mt-16 p-2  overflow-hidden cover  rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover rounded-lg  w-full h-56" src={info.productImage} alt="avatar" />
            
               
                <div className=" px-8 py-4   rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex justify-center -mt-16 md:justify-end">
                   <a target="_blank" href={info.queryUser.photo}>
                   <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={info.queryUser.photo} />
                   </a>
                </div>
                <div className="flex justify-end ">
                    <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{info.queryUser.name}</a>
                </div>
                
            
                <div className="mt-2">
                <h2 className=" text-xl font-semibold text-white dark:text-white md:mt-0">{info.productName}</h2>
                <p className="text-white text-sm ">Brand : {info.productBrand}</p>
                </div>

               <div className="mt-7">
               <h2 className="  text-xl font-semibold text-white dark:text-white md:mt-0">{info.title}</h2>
            
            <p className="mt-2 text-sm text-white dark:text-gray-200">{info.boycotting}</p>
        
               </div>
               <div className="mt-7">
                <p className="text-white">Date Posted : {info.queryUser.date}</p>
                <p className="text-white">Recommendation : {info.recommendationCount} </p>
               </div>
              
                
            </div>
            <div className=" flex justify-end">
                 <Link to={`/queDetails/${info._id}`}> <button className="btn bg-blue-700 text-white">Recommend</button></Link>
                </div>
            </div>)
            }

        </div>
    );
};

export default Queries;