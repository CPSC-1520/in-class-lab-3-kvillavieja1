// Enter your code below.
(function () {
    const resources = document.querySelector('.javascript-resources');

    document.querySelector('#show-resources').addEventListener('click', () => {
        resources.classList.remove('d-none');
    });

    document.getElementById('#show-resources').addEventListener('mouseover', (event)=>{
        console.log(event.target.classList);
        event.target.classList.add('fw-bold');
    });

    document.getElementById('#show-resources').addEventListener('mouseout', (event)=> {
        event.target.classList.remove('fw-bold');
    });

    document.querySelector('.list-group-item').addEventListener('click', (event)=> {
        event.target.classList.add('fst-italic');
    })

})();