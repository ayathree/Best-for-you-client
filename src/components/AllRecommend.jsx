import '../pages/Login.css'
import LikeUnlikeButton from './LikeUnlikeButton';

const AllRecommend = ({reco}) => {
    const{_id,recoTitle,recoImage,recoName,recommendDate,recommenderName}=reco
    return (
        <div className="flex flex-row justify-between  mt-10 overflow-hidden cover rounded-lg shadow-lg dark:bg-gray-800">
        {/* <img'https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')`}}></div> */}
        <img className="h-[100px] w-[100px]" src={recoImage} alt="" />
    
       <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:gap-64 ">
       <div className=" p-4 md:p-4">
            <h1 className="text-xl font-bold text-white dark:text-white">{recoName}</h1>
    
            <p className="mt-2 text-sm text-white dark:text-gray-400">{recoTitle}</p>    
        </div>
        <div>
            <p className="text-xl font-bold text-white dark:text-white">Recommender : <span className="text-xs"> {recommenderName}</span></p>
            <p className="text-xl font-bold text-white dark:text-white">Date : <span className="text-xs">{recommendDate}</span> </p>
        </div>
       </div>
       <div className="p-4  md:p-4">
        <LikeUnlikeButton recoId={_id} />
      </div>
    </div>
    );
};

export default AllRecommend;