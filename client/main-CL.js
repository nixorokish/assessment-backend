
// top buttons
const getAComplimentBtn = document.getElementById("complimentButton")
const getAFortuneBtn = document.getElementById("fortuneButton")

// submit buttons
const newComplimentSubmit = document.querySelector('#newComplimentSubmit');
const findComplimentSubmit = document.querySelector('#findComplimentSubmit');
const getAllCompliments = document.querySelector(`#getAllCompliments`)

// inputs
const newComplimentTxt = document.querySelector('#newCompliment');
const findCompliment = document.querySelector('#findCompliment');

// divs
const searchResults = document.querySelector('#search-results')
const allComplimentList = document.querySelector('#all-compliments-list')

baseURL = `http://localhost:4000/`


// top buttons event handlers
const getACompliment = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

const getAFortune = function () {
    axios.get("http://localhost:4000/api/fortune/")
            .then(function (response) {
              const data = response.data;
              alert(data);
            });
}

// handle submits
const addedCompliment = (e) => {
    e.preventDefault()
    let newCompliment = newComplimentTxt.value
    axios
        .post(baseURL + 'api/NewCompliment', newCompliment)
        .then((res) => {
          console.log(res)
          alert('Added, thanks!')
          newComplimentTxt.value = ''
        })
}

const searchQuery = () => {
  searchResults.innerHTML = ''
  searchResults.hidden = true
  let searchTerm = findCompliment.value
  console.log(searchTerm)
  axios
    .post(baseURL + 'api/queryResults', { searchTerm })
    .then((res) => {
      searchResults.hidden = false
      for (let i = 0; i < res.data.length; i++) {
        child = document.createElement('li')
        child.innerHTML = `${res.data[i]}`
        searchResults.appendChild(child)
      }
      findCompliment.value = ''
    })
}


// newComplimentSubmit.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(newComplimentTxt.value);
//     newComplimentTxt.value=``
//     // axios
//     //     .post(`${baseURL}/compliment`)
//     //     .then(res => doThis(res.data))
// });

// // handle response
// function doThis(something) {
//     console.log(something)
// }

// const renderCompliments = (data) => {
//     data.forEach((s) => {
//         let nameHeading = document.createElement("h3");
//         nameHeading.textContent = s.name;
//         appendChild(nameHeading);
//     })
// }

const getAll = () => {
    allComplimentList.hidden = false
    axios
        .get(baseURL + `api/allCompliments`)
        .then((res) => {
          console.log('did this')
          for (let i = 0; i < res.data.length; i++) {
            child = document.createElement('li')
            child.innerHTML = `${res.data[i]}`
            allComplimentList.appendChild(child)
          }
        })
}

getAllCompliments.addEventListener(`click`, getAll)
getAComplimentBtn.addEventListener('click', getACompliment)
getAFortuneBtn.addEventListener('click', getAFortune)
newComplimentSubmit.addEventListener('click', addedCompliment)
findComplimentSubmit.addEventListener('click', searchQuery)