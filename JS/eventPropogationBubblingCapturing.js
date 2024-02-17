document.getElementById('GP').addEventListener('click',
    () => { console.log('GP') }, true);
document.getElementById('P').addEventListener('click',
    () => { console.log('P') });
document.getElementById('C').addEventListener('click',
    () => { console.log('C') });


// To stop propogation we can use event.stopPropogation();

// https://www.loginradius.com/blog/engineering/javascript-events-bubbling-capturing-and-propagation/