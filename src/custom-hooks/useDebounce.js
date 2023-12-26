import { useState } from "react";

function useDebounce(delay = 300) {

    const [state, setState] = useState('');

    let timer;

    function setDebounceState(data) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setState(data);
        }, delay);
    }

    return [state, setDebounceState];
}

export default useDebounce;