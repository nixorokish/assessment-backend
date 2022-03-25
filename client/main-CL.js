// submit buttons
const newComplimentSubmit = document.getElementById('#newComplimentSubmit');
const findComplimentSubmit = document.getElementById('#findComplimentSubmit');
const editComplimentSubmit = document.getElementById('#editComplimentSubmit');

// inputs
const newCompliment = document.getElementById('#newCompliment');
const findCompliment = document.getElementById('#findCompliment');
const editComplimentIndex = document.getElementById('#editComplimentIndex');
const editCompliment = document.getElementById('#editCompliment');
const dltComplimentIndex = document.getElementById('#dltComplimentIndex');

// handle submits
newComplimentSubmit.addEventListener('click', () => {
    axios
        .get('http://localhost:4000/api/compliment')
        .then(res => doThis(res.data))
});

findComplimentSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/inventory/${paramsInput.value}`)
        .then(res => doThis([res.data]))
});

editComplimentSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/inventory?item=${queryInput.value}`)
        .then(res => doThis(res.data))
});

// handle response
function doThis(dataArr) {
    responseSection.innerHTML = null;

    if (dataArr.length === 0) {
        const p = document.createElement('p');
        const t = document.createTextNode("Response came back with no results!");
        p.appendChild(t);

        responseSection.appendChild(p)
    } else {
        dataArr.forEach(item => {
            const p = document.createElement('p');
            const t = document.createTextNode(item)
            p.appendChild(t);
    
            responseSection.appendChild(p)
        })
    }
}