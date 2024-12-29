import React, { useEffect, useState } from 'react';

const Repo = ({ language }) => {
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    const handleRefresh = () => {
        setRefreshTrigger((prev) => prev + 1)
    }

    useEffect(() => {
        if (!language) return; // Fetch only if a language is selected

        const fetchRandomRepo = async () => {
            setRepo(null); // Reset previous repo
            setLoading(true);
            setError('');

            try {
                const response = await fetch(
                    `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=100`
                );

                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    const randomRepo = data.items[Math.floor(Math.random() * data.items.length)];
                    setRepo(randomRepo);
                } else {
                    setError('Failed to fetch Repositories');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRandomRepo();
    }, [language, refreshTrigger]);

    return (
        <div className='mt-5 w-[335px] h-3/5 justify-center  items-center flex flex-col gap-5'>
            {loading ? (
                <div className='w-[335px] h-4/5 rounded-lg flex  max-h-3/5   bg-sky-300 justify-center items-center'>
                    <h2 className='text-xl cursor-default'>Please wait...</h2>
                </div>
            ) : error ? (
                <div className='w-[335px] h-4/5 rounded-lg flex max-h-3/5   bg-red-200 justify-center items-center'>
                    <h2 className='text-xl cursor-default'>{error}</h2>
                </div>

            ) : repo ? (
                <div className='w-[335px] h-4/5 rounded-lg overflow-y-scroll flex flex-col p-4 bg-sky-300 '>
                    <h2 className='text-xl font-bold mb-2'>{repo.name}</h2>
                    <p className='text-sm'>{repo.description || "No description available."}</p>
                </div>
            ) : (
                <div className='w-[335px] h-4/5 rounded-lg flex max-h-3/5  bg-sky-300 justify-center items-center'>
                    <h2 className='text-xl cursor-default'>Please select a language</h2>
                </div>

            )}
            {
                error === 'Failed to fetch Repositories' ?

                    (<button className='h-10 w-[335px]  rounded-lg font-bold bg-red-600 hover:bg-red-800 hover:text-sky-400 duration-300'
                        onClick={handleRefresh}
                    >Click to Retry</button>) : (

                        <button className='h-10 w-[335px] border-2 border-black rounded-lg font-bold hover:bg-black hover:text-sky-400 duration-300'
                            onClick={handleRefresh}
                        >Refresh</button>
                    )
            }
        </div>
    );
};

export default Repo;
