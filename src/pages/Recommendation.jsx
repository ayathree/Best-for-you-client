import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Slide } from "react-awesome-reveal";


const Recommendation = () => {
    const {user}=useContext(AuthContext);
    const[recommends, setRecommends]=useState([])

    useEffect(() => {
        getData()
      }, [user])
    
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-recommend/${user?.email}`,{withCredentials:true})
        setRecommends(data)
      }
      console.log(recommends)
    return (
       <Slide> <section className="container px-4 mx-auto">
        
    
       <div className="flex flex-col mt-6">
           <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                   <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                       <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                           <thead className="cover dark:bg-gray-800">
                               <tr className=''>
                                   <th scope="col" className="py-3.5 px-4 text-xl  font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                       <div className="flex items-center gap-x-3">
                                          
                                           <span>Recommender</span>
                                       </div>
                                   </th>
   
                                   <th scope="col" className="px-12 py-3.5 text-xl font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                       <button className="flex items-center gap-x-2">
                                           <span>Image</span>
   
                                           
                                       </button>
                                   </th>
   
                                   <th scope="col" className="px-4 py-3.5 text-xl font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                       <button className="flex items-center gap-x-2">
                                           <span>Recommend</span>
   
                                          
                                       </button>
                                   </th>
   
                                  
   
                                  
                               </tr>
                           </thead>
                           <tbody className="cover divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                              {
                               recommends.map(reco=> <tr key={reco._id}>
                                   <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                       <div className="inline-flex items-center gap-x-3">
                                           
   
                                           <div className="flex items-center gap-x-2">
                                              
                                               <div>
                                                   <h2 className="font-medium text-white dark:text-white ">{reco.recommenderName}</h2>
                                                   <p className="text-sm font-normal text-white dark:text-gray-400">@{reco.recommenderEmail}</p>
                                               </div>
                                           </div>
                                       </div>
                                   </td>
                                   <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                       <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 ">
                                           <img className="h-[70px] w-[70px]" src={reco.recoImage} alt="" />
                                           
                                       </div>
                                   </td>
                                   <td className="px-4 py-4 text-sm text-white dark:text-gray-300 whitespace-nowrap">{reco.recoTitle}</td>
                                 
                                  
                                   
                               </tr>)
                              }
   
                              
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </div>
   
      
   </section></Slide>
    );
};

export default Recommendation;