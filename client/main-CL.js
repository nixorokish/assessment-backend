// submit buttons
const newComplimentSubmit = document.querySelector('#newComplimentSubmit');
const findComplimentSubmit = document.querySelector('#findComplimentSubmit');
const editComplimentSubmit = document.querySelector('#editComplimentSubmit');

// inputs
const newComplimentTxt = document.querySelector('#newCompliment');
const findCompliment = document.querySelector('#findCompliment');
const editComplimentIndex = document.querySelector('#editComplimentIndex');
const editCompliment = document.querySelector('#editCompliment');
const dltComplimentIndex = document.querySelector('#dltComplimentIndex');

// handle submits
newComplimentSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`HOW DO I MAKE THIS WORK`)
    console.log(newComplimentTxt.value);
    console.log(`werld`);
    newComplimentTxt.value=``
    // axios
    //     .get('http://localhost:4000/api/sd')
    //     .then(res => doThis(res.data))
});



// findComplimentSubmit.addEventListener('click', () => {
//     // axios
//     //     .get(`http://localhost:4000/api/complimentw`)
//     //     .then(res => doThis([res.data]))
// });

// editComplimentSubmit.addEventListener('click', () => {
//     // axios
//     //     .get(`http://localhost:4000/api/complimentz`)
//     //     .then(res => doThis(res.data))
// });

// handle response
// function doThis(something) {
//     console.log(res.data)
// }