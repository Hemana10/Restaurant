import { useEffect } from 'react';
import { useState } from 'react';

const useSearchDebounce = (delay) => {
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const debouncedFn = setTimeout(() => setDebouncedSearch(searchTerm), delay);
        return () => clearTimeout(debouncedFn);
    }, [searchTerm, delay]);

    return [debouncedSearch, setSearchTerm];
};

export default useSearchDebounce;