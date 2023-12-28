import { useState } from "react";

function useDebounce(delay = 300) {

    const [state, setState] = useState('');

    function setDebounceState(timer, data) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            setState(data);
        }, delay);
        return timer;
    }

    return [state, setDebounceState];
}

export default useDebounce;