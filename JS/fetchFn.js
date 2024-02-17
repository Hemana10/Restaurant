const res = fetchDetails();
console.log(res);

async function fetchDetails() {
    try {
        const res = await fetch('https://api.github.com/users/hemanav');
        // console.log(res);
        if (res.ok) {
            return await res.json();
        } else {
            // return Promise.reject(handleError(res.status));
            handleError(res.status);
        }
    } catch (err) {
        console.log('Error in Request');
    }
}

handleError = (error) => {
    console.log('Error ', error);
};