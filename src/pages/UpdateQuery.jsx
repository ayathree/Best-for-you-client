import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";


const UpdateQuery = () => {
    const info = useLoaderData()
    const{_id,productImage,title,boycotting,productName,productBrand}=info || {}
    const{user}=useContext(AuthContext)
    const navigate = useNavigate()
    const currentTime = Date.now();
    const currentDate = new Date(currentTime);
    const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const handleUpdateQuery= async e=>{
    e.preventDefault();
    const form = e.target;
    const productName = form.name.value;
    const productBrand = form.brand.value;
    const productImage = form.image.value;
    const title = form.title.value;
    const boycotting =form.reason.value;
    const newUpdateData = {productName,productBrand,productImage,title,boycotting,
        queryUser:{
            email: user?.email,
            name: user?.displayName,
            photo: user?.photoURL,
            time:(`${hours}:${minutes}:${seconds}`),
            date:(`${month}-${day}-${year}`),
            recommendationCount:0,


        }
    }
    console.log(newUpdateData)

    try{
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/product/${_id}`, newUpdateData, {withCredentials:true})
        console.log(data)
        form.reset();
        if (data.matchedCount) {
            
            Swal.fire({
           
                text: "updated query successfully",
                icon: "success"
              });
            navigate('/myQue')
        }
    }
    catch(err){
        console.log(err)
        Swal.fire({
           
            text: "An error occurred",
            icon: "error"
          });
    }
}

   
    return (
        <section className="max-w-4xl cover p-6 mx-auto  rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-white capitalize dark:text-white">My queries</h2>
    
        <form onSubmit={handleUpdateQuery}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="username">Product Name</label>
                    <input id="username" defaultValue={productName} type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="emailAddress">Product Brand</label>
                    <input id="emailAddress" type="text" defaultValue={productBrand} name='brand' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="password">Product Image-URL</label>
                    <input id="password" type="text" defaultValue={productImage} name='image' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="passwordConfirmation">Query TItle </label>
                    <input id="passwordConfirmation" defaultValue={title} type="text" name='title' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            </div>
            <div className='mt-4'>
                    <label className="text-white dark:text-gray-200"htmlFor="passwordConfirmation">Boycotting Reason Details</label>
                    <input id="passwordConfirmation" defaultValue={boycotting} type="text" name='reason' className="block w-full px-4 py-6 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
            <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update Query</button>
            </div>
        </form>
    </section>
    );
};

export default UpdateQuery;
