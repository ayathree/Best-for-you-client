import { useContext, useEffect, useState } from 'react';
import './Login.css'
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyRecommend = () => {
    const{user}=useContext(AuthContext)
    const [infos, setInfos]=useState([])

    useEffect(()=>{
        
        getData()
        
    },[user])
    const getData = async()=>{
        const {data} =await axios (
            `${import.meta.env.VITE_API_URL}/my-recommend/${user?.email}`
        )
      
        setInfos(data)
    }
    console.log(infos)

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Are you sure to delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch( `${import.meta.env.VITE_API_URL}/recommend/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success"
                            });
                        }
                       getData()
                    });
            }
        });
    };



    return (
        <section className="container px-4 mx-auto">
        
    
        <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="cover dark:bg-gray-800">
                                <tr className=''>
                                    <th scope="col" className="py-3.5 px-4 text-xl  font-semibold text-left rtl:text-right text-white dark:text-gray-400">
                                        <div className="flex items-center gap-x-3">
                                            
                                            <span>Recommend Product</span>
                                        </div>
                                    </th>
    
                                    <th scope="col" className="px-12 py-3.5 text-xl font-semibold text-left rtl:text-right text-white dark:text-gray-400">
                                        <button className="flex items-center gap-x-2">
                                            <span>Image</span>
    
                                           
                                        </button>
                                    </th>
    
                                    
    
                                    <th scope="col" className="px-4 py-3.5 text-xl font-bold text-left rtl:text-right text-white dark:text-gray-400">Email address</th>
    
                                    <th scope="col" className="px-4 py-3.5 text-xl font-bold text-left rtl:text-right text-white dark:text-gray-400">Action</th>
    
                                    
                                </tr>
                            </thead>
                            <tbody className="cover divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                               {
                                infos.map(info=> <tr key={info._id}>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                           
    
                                            <div className="flex items-center gap-x-2">
                                                
                                                <div>
                                                    <h2 className="font-bold text-white dark:text-white ">{info.productName}</h2>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2  dark:bg-gray-800">
                                           <img className='h-[50px] w-[50px]' src={info.recoImage} alt="" />
                                        </div>
                                    </td>
                                    
                                    <td className="px-4 py-4 text-sm text-white dark:text-gray-300 whitespace-nowrap">{info.recommenderEmail}</td>
                                   
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button onClick={()=>handleDelete(info._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500  dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
    
                                           
                                        </div>
                                    </td>
                                </tr>)
                               }
    
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
       
    </section>
    );
};

export default MyRecommend;
