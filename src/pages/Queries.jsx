import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import './Login.css';

const Queries = () => {
    const allInfos = useLoaderData();
    const [infos, setInfos] = useState(allInfos);
    const [ setSearch] = useState('');
    const [gridLayout, setGridLayout] = useState('grid-3'); 

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value.toLowerCase();
        const filteredInfos = allInfos.filter(info => info.productName.toLowerCase().includes(searchText));
        setInfos(filteredInfos);
        setSearch(searchText);
    }

    const toggleGridLayout = (layout) => {
        setGridLayout(layout);
    };

    return (
        <div>
            <form onSubmit={handleSearch} className="join">
                <input className="input input-bordered join-item" name="search" placeholder="Search by product name" />
                <button className="btn join-item bg-green-500">Search</button>
            </form>
            <div className={`grid ${gridLayout} justify-center items-center gap-10`}>
                {infos.map(info => (
                    <div key={info._id} className="mt-16 p-2 overflow-hidden cover rounded-lg shadow-lg dark:bg-gray-800">
                         <img className="object-cover rounded-lg w-full h-56" src={info.productImage} alt="avatar" />
                        <div className="px-8 py-4 rounded-lg  dark:bg-gray-800">
                            <div className="flex justify-center -mt-16 md:justify-end">
                                <a target="_blank" href={info.queryUser.photo}>
                                    <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={info.queryUser.photo} />
                                </a>
                            </div>
                            <div className="flex justify-end">
                                <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{info.queryUser.name}</a>
                            </div>
                            <div className="mt-2">
                                <h2 className="text-xl font-semibold text-white dark:text-white md:mt-0">{info.productName}</h2>
                                <p className="text-white text-sm">Brand: {info.productBrand}</p>
                            </div>
                            <div className="mt-7">
                                <h2 className="text-xl font-semibold text-white dark:text-white md:mt-0">{info.title}</h2>
                                <p className="mt-2 text-sm text-white dark:text-gray-200">{info.boycotting}</p>
                            </div>
                            <div className="mt-7">
                                <p className="text-white">Date Posted: {info.queryUser.date}</p>
                                <p className="text-white">Recommendation: {info.recommendationCount} </p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Link to={`/queDetails/${info._id}`}><button className="btn bg-blue-700 text-white">Recommend</button></Link>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button className="btn bg-blue-600 text-white" onClick={() => toggleGridLayout('grid-2')}>2 Column Grid</button>
                <button className="btn bg-blue-600 text-white" onClick={() => toggleGridLayout('grid-3')}>3 Column Grid</button>
                <button className="btn bg-blue-600 text-white" onClick={() => toggleGridLayout('grid-4')}>4 Column Grid</button>
            </div>
        </div>
    );
};

export default Queries;
