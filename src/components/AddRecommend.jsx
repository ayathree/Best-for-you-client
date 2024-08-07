import { useContext } from 'react';
import '../pages/Login.css'
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddRecommend = ({info}) => {

  // const{queryUser,_id,title,productName}=info
  const{user}=useContext(AuthContext)
  const currentTime = Date.now();
    const currentDate = new Date(currentTime);
    const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const handleAddRecommend=async e=>{
  e.preventDefault();
  if(user?.email === info.queryUser.email) return Swal.fire({
       
    text: "You are not permitted to recommend your own query",
    icon: "error"
  });
  const form = e.target;
  const recoTitle = form.recoTitle.value;
  const recoImage = form.recoImage.value;
  const  recoName = form.recoName.value;
  const recoReason =form.recoReason.value;
  const queryTitle = info.title;
  const queryId = info._id;
  const recoCount = info.queryUser.recommendationCount;
  const productName = info.productName;
  const userEmail = info.queryUser.email;
  const userName = info.queryUser.name;
  const recommenderEmail=user.email;
  const recommenderName = user.displayName;
  const recommendDate = (`${month}-${day}-${year}`)
  const recommenderInfo ={recoTitle,recoImage,recoName,recoCount,recoReason,queryTitle,queryId,productName,userEmail,userName,recommenderEmail,recommenderName,recommendDate}
  console.log(recommenderInfo) 

  try{
    const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/recommend`, recommenderInfo)
    console.log(data)
    form.reset();
    if (data.insertedId) {
        
        Swal.fire({
       
            text: "recommended successfully",
            icon: "success"
          });
        // navigate('/myQue')
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
        <div className="">
             <p className='text-xl font-bold text-white text-center'>Add A Recommendation</p>
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl cover">
      <form onSubmit={handleAddRecommend} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommendation Title</span>
          </label>
          <input type="text" name='recoTitle' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommended product Name</span>
          </label>
          <input type="text" name='recoName' placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommended Product Image URL</span>
          </label>
          <input type="text" name='recoImage' placeholder="" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommendation reason
</span>
          </label>
          <input type="text" name='recoReason' placeholder="" className="input input-bordered" required />
        </div>
        
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Recommendation</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddRecommend;