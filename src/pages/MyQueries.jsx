import './Login.css'
import handshake from '../assets/handshake.png'
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const MyQueries = () => {
    const{user}=useContext(AuthContext)
    const [infos, setInfos]=useState([])
    useEffect(()=>{
        
        getData()
        
    },[user])
    const getData = async()=>{
        const {data} =await axios (
            `${import.meta.env.VITE_API_URL}/products/${user?.email}`,{withCredentials:true}
        )
      
        setInfos(data)
    }

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
                fetch( `${import.meta.env.VITE_API_URL}/product/${id}`, {
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
        <div>
            <header className="cover dark:bg-gray-900 mt-10">
   

   <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
       <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
           <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
               <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
               <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
               <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
               <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
           </div>

           <div className="max-w-lg lg:mx-12 lg:order-2">
               <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-white lg:text-4xl">The best Alternative Information Website</h1>
               <p className="mt-4 text-white dark:text-gray-300">This is a friendly website where every one can search out best product for themselves by the help of others information. For your queries for any products please click the button below. </p>
               <div className="mt-6">
                  <Link to={'/addQue'}> <a href="#" className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"> Add Queries</a></Link>
               </div>
           </div>
       </div>

       <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
           <img className="object-cover w-full h-full max-w-2xl rounded-md" src={handshake} alt="apple watch photo" />
       </div>
   </div>
</header>
<div className=' mt-16'>
    <p className='text-3xl font-bold text-white text-center '>My Queries</p>

</div>

<div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6' >
{
    infos.length>0 ?(infos.map(info=><div key={info._id} className="max-w-lg overflow-hidden  mt-16 cover rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-white uppercase dark:text-white">{info.productName}</h1>
        <p className="mt-1 text-sm text-white dark:text-gray-400">{info.title}</p>
    </div>

    <img className="object-cover w-full h-48 mt-2" src={info.productImage} />

    <div className="flex items-center justify-center gap-4 px-4 py-6 ">
       
       <Link to={`/queDetails/${info._id}`}> <button className="px-2 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">View Details</button></Link>
        <Link to={`/updateQue/${info._id}`}><button className="px-2 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Update</button></Link>
        <button onClick={()=>handleDelete(info._id)} className="px-2 py-2 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Delete</button>
    </div>
</div>))   :(
    <div className="flex flex-col mt-16 items-center justify-center">
    <p className='text-3xl font-bold text-white text-center '>No queries found.Please add your queries if you had any....</p>
    <Link to={'/addQue'}><button className='btn bg-blue-600 text-white mt-7 '>Add Query</button></Link>
  </div>
)
}
</div>
        </div>


    );
};

export default MyQueries;