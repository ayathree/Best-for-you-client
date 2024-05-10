import './Login.css'

const AddQueries = () => {
    return (
        <section className="max-w-4xl cover p-6 mx-auto  rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-white capitalize dark:text-white">My queries</h2>
    
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="username">Product Name</label>
                    <input id="username" type="text" name='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="emailAddress">Product Brand</label>
                    <input id="emailAddress" type="text" name='brand' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="password">Product Image-URL</label>
                    <input id="password" type="text" name='image' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
                <div>
                    <label className="text-white dark:text-gray-200"htmlFor="passwordConfirmation">Query TItle </label>
                    <input id="passwordConfirmation" type="text" name='title' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
            </div>
            <div className='mt-4'>
                    <label className="text-white dark:text-gray-200"htmlFor="passwordConfirmation">Boycotting Reason Details</label>
                    <input id="passwordConfirmation" type="text" name='reason' className="block w-full px-4 py-6 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>
    
            <div className="flex justify-end mt-6">
                <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Query</button>
            </div>
        </form>
    </section>
    );
};

export default AddQueries;