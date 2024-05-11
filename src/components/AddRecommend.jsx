import '../pages/Login.css'

const AddRecommend = () => {
    return (
        <div className="">
             <p className='text-xl font-bold text-white text-center'>Add A Recommendation</p>
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl cover">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommendation Title</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommended product Name</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommended Product Image URL</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" required />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Recommendation reason
</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" required />
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