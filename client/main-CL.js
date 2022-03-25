// submit buttons
const newComplimentSubmit = form.querySelector('#newComplimentSubmit');
const findComplimentSubmit = form.querySelector('#findComplimentSubmit');
const editComplimentSubmit = form.querySelector('#editComplimentSubmit');

// inputs
const newComplimentTxt = form.querySelector('#newCompliment');
const findCompliment = form.querySelector('#findCompliment');
const editComplimentIndex = form.querySelector('#editComplimentIndex');
const editCompliment = form.querySelector('#editCompliment');
const dltComplimentIndex = form.querySelector('#dltComplimentIndex');

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