// submit buttons
const newComplimentSubmit = document.getElementById('#newComplimentSubmit');
const findComplimentSubmit = document.getElementById('#findComplimentSubmit');
const editComplimentSubmit = document.getElementById('#editComplimentSubmit');

// inputs
const newComplimentTxt = document.getElementById('#newCompliment');
const findCompliment = document.getElementById('#findCompliment');
const editComplimentIndex = document.getElementById('#editComplimentIndex');
const editCompliment = document.getElementById('#editCompliment');
const dltComplimentIndex = document.getElementById('#dltComplimentIndex');

// handle submits
newComplimentSubmit.addEventListener('click', () => {
    newComplimentTxt.body
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