import React, { useEffect, useState } from 'react';

const Repo = ({ language }) => {
    const [repo, setRepo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

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

                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }

                const data = await response.json();
                if (data.items && data.items.length > 0) {
                    const randomRepo = data.items[Math.floor(Math.random() * data.items.length)];
                    setRepo(randomRepo);
                } else {
                    setError('No repositories found for the specified language');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRandomRepo();
    }, [language]);

    return (
        <div className='w-5/6 h-3/5 rounded-lg flex overflow-y-scroll max-h-3/5 p-4  bg-sky-300 justify-center items-center'>
            {loading ? (
                <h2 className='text-xl cursor-default'>Please wait...</h2>
            ) : error ? (
                <h2 className='text-xl cursor-default text-red-500'>{error}</h2>
            ) : repo ? (
                <div className='text-center'>
                    <h2 className='text-xl font-bold mb-2'>{repo.name}</h2>
                    <p className='text-sm'>{repo.description || "No description available."}</p>
                </div>
            ) : (
                <h2 className='text-xl cursor-default'>Please select a language</h2>
            )}
        </div>
    );
};

export default Repo;
