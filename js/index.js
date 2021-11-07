// Selecting form inputs
var usernameInput = document.getElementById('username')
var userEmailInput = document.getElementById('userEmail')
var userNumberInput = document.getElementById('userNumber')
var userAgeInput = document.getElementById('userAge')
var userPasswordInput = document.getElementById('userPassword')
var userRePasswordInput = document.getElementById('userRePassword')
// Selecting Submit Button
var submitBtn = document.getElementById('submit')

// Form Handling
submitBtn.addEventListener('click', function(e){
  e.preventDefault()

  var isUsernameValid = checkUsername(),
      isEmailValid = checkEmail(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword(),
      isPhoneNumberValid = checkPhoneNumber(),
      isAgeValid = checkAge()

  var isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneNumberValid && isAgeValid

  if (isFormValid) {
    console.log('valid');
  }
})

// isRequired() function
function isRequired(value) {
  if (value === '') {
    return false
  } else {
    return true
  }
}

// isBetween() function
function isBetween(length, min, max) {
  if (length < min || length > max) {
    return false
  } else {
    return true
  }
}

// Check if the email is valid
function isEmailValid(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email)
}

// Check if the password is strong
function isPasswordSecure(password) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
  return regex.test(password)
}

// Check if the phone number is valid
function isPhoneNumValid(phoneNum) {
  var regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
  return regex.test(phoneNum)
}

// Check if age is valid
function isAgeValid(age) {
  if(age >= 0 &&  age <= 200)  
  {
    return true
  } else {
    return false
  }
}

// Develop input field validating functions
// Validate the username field
function checkUsername() {
  var valid = false
  var min = 3
  var max = 25
  var username = usernameInput.value

  usernameInput.classList.add('is-invalid');

  if (!isRequired(username)) {
    usernameInput.classList.remove('is-valid')
    usernameInput.classList.add('is-invalid')
    document.querySelector('div#username').innerHTML = 'Username cannot be blank.'
  } else if (!isBetween(username.length, min, max)) {
    usernameInput.classList.remove('is-valid')
    usernameInput.classList.add('is-invalid')
    document.querySelector('div#username').innerHTML = `Username must be between ${min} and ${max} characters.`
  } else {
    usernameInput.classList.remove('is-invalid')
    usernameInput.classList.add('is-valid')
    valid = true
  }
  return valid
}

// Validate the email field
function checkEmail() {
  var valid = false
  var email = userEmailInput.value

  if (!isRequired(email)) {
    userEmailInput.classList.remove('is-valid')
    userEmailInput.classList.add('is-invalid')
    document.querySelector('div#userEmail').innerHTML = 'Email cannot be blank.'
  } else if (!isEmailValid(email)) {
    userEmailInput.classList.remove('is-valid')
    userEmailInput.classList.add('is-invalid')
    document.querySelector('div#userEmail').innerHTML = 'Email is not valid.'
  } else {
    userEmailInput.classList.remove('is-invalid')
    userEmailInput.classList.add('is-valid')
    valid = true
  }
  return valid
}

// Validate the phone number
function checkPhoneNumber() {
  var valid = false
  var phoneNum = userNumberInput.value 

  if (!isRequired(phoneNum)) {
    userNumberInput.classList.remove('is-valid')
    userNumberInput.classList.add('is-invalid')
    document.querySelector('div#userNumber').innerHTML = 'Phone number cannot be blank.'
  } else if (!isPhoneNumValid(phoneNum)) {
    userNumberInput.classList.remove('is-valid')
    userNumberInput.classList.add('is-invalid')
    document.querySelector('div#userNumber').innerHTML = 'Phone number is not valid.'
  } else {
    userNumberInput.classList.remove('is-invalid')
    userNumberInput.classList.add('is-valid')
    valid = true
  }
  return valid
}

// Validate Age field
function checkAge() {
  var valid = false
  var age = userAgeInput.value

  if (!isRequired(age)) {
    userAgeInput.classList.remove('is-valid')
    userAgeInput.classList.add('is-invalid')
    document.querySelector('div#userAge').innerHTML = 'Age cannot be blank.'
  } else if (!isAgeValid(age)) {
    userAgeInput.classList.remove('is-valid')
    userAgeInput.classList.add('is-invalid')
    document.querySelector('div#userAge').innerHTML = 'Age is not valid.'
  } else {
    userAgeInput.classList.remove('is-invalid')
    userAgeInput.classList.add('is-valid')
    valid = true
  }
  return valid
}

// Validate the password field
function checkPassword() {
  var valid = false
  var password = userPasswordInput.value

  if (!isRequired(password)) {
    userPasswordInput.classList.remove('is-valid')
    userPasswordInput.classList.add('is-invalid')
    document.querySelector('div#userPassword').innerHTML = 'Password cannot be blank.'
  } else if (!isPasswordSecure(password)) {
    userPasswordInput.classList.remove('is-valid')
    userPasswordInput.classList.add('is-invalid')
    document.querySelector('div#userPassword').innerHTML = 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'
  } else {
    userPasswordInput.classList.remove('is-invalid')
    userPasswordInput.classList.add('is-valid')
    valid = true
  }
  return valid
}

// Validate the confirm password field
function checkConfirmPassword() {
  var valid = false 
  var confirmPassword = userRePasswordInput.value
  var password = userPasswordInput.value

  if (!isRequired(confirmPassword)) {
    userRePasswordInput.classList.remove('is-valid')
    userRePasswordInput.classList.add('is-invalid')
    document.querySelector('div#userRePassword').innerHTML = 'Please enter the password again.'
  } else if (password !== confirmPassword) {
    userRePasswordInput.classList.remove('is-valid')
    userRePasswordInput.classList.add('is-invalid')
    document.querySelector('div#userRePassword').innerHTML = 'Confirm password does not match.'
  } else {
    userRePasswordInput.classList.remove('is-invalid')
    userRePasswordInput.classList.add('is-valid')
    valid = true
  }
  return valid
}

// ================================================================

var navToggler = document.querySelector('.toggle-menu')
var nav = document.querySelector('nav')
var navHeader = document.querySelector('.nav-header')
var navList = document.querySelectorAll('nav ul li')

navToggler.addEventListener('click', function(){
  // Toggle Nav
  nav.classList.toggle('nav-active')
  navHeader.classList.toggle('navHeader-active')

  // Animate Links
  navList.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkSliding 1s ease forwards ${index / 7 + 0.5}s`
    }
  })

  // Toggler button
  if (nav.classList.contains('nav-active')) {
    navToggler.innerHTML = '<i class="fa fa-align-justify fa-times fa-lg"></i>'
  } else {
    navToggler.innerHTML = '<i class="fas fa-align-justify fa-lg"></i>'
  }
})

// ====================================================================
const ulTag = document.querySelector('.pagination ul')
// let totalPages = 20

function element(totalPages, page) {
  let liTag = ''
  let activeLi
  let beforePages = page - 1
  let afterPages = page + 1

  // Prev btn
  if (page > 1){
    liTag += `<li class="btn prev" onclick="element(totalPages, ${page - 1}); localStorage.setItem('currentPage', ${page - 1}); getData(localStorage.getItem('currentSort'), ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`
  }

  // first Page btn
  if (page > 2) {
    liTag += `<li class="numb" onclick="element(totalPages, 1); localStorage.setItem('currentPage', 1); getData(localStorage.getItem('currentSort'), 1)"><span>1</span></li>`
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`
    }
  }

  if (page == totalPages) {
    beforePages = beforePages - 2
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1
  }

  if (page == 1) {
    afterPages = afterPages + 2
  } else if (page == 2) {
    afterPages = afterPages + 1
  }

  // Active btn - before - after btn
  for(let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPages) {
      continue
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1
    }
    if (page == pageLength) {
      activeLi = 'active'
    } else {
      activeLi = ''
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength}); localStorage.setItem('currentPage', ${pageLength}); getData(localStorage.getItem('currentSort'), ${pageLength})"><span>${pageLength}</span></li>`
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`
    }
    // Last Page
    liTag += `<li class="numb" onclick="element(totalPages, ${totalPages}); localStorage.setItem('currentPage', ${totalPages}); getData(localStorage.getItem('currentSort'), ${totalPages})"><span>${totalPages}</span></li>`
  }

  // next btn
  if (page < totalPages){
    liTag += `<li class="btn next" onclick="element(totalPages, ${page + 1}); localStorage.setItem('currentPage', ${page + 1}); getData(localStorage.getItem('currentSort'), ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`
  }
  ulTag.innerHTML = liTag
}

// element(totalPages, 1)

// ====================================================================
// current 'sort' - 'page num' from event 
let movieList = []
let totalPages = 0
let current = ''  // save it in local storage
let navLink = document.querySelectorAll('.nav-links li a')
let fullSearch = document.getElementById('fullSearch')
let limitedSearch = document.getElementById('limitedSearch')

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function(e){
    let sortCategory = e.target.getAttribute('data-target')
    localStorage.setItem('currentPage', 1)
    getData(sortCategory, localStorage.getItem('currentPage'))
  })
}

async function getData(sort = 'movie/now_playing', pageNum = localStorage.getItem('currentPage')) {
  localStorage.setItem('currentSort', sort)
  let response = await fetch(`https://api.themoviedb.org/3/${sort}?api_key=91cdb01c56c515a486be9478128e0706&language=en-US&page=${pageNum}`)
  let data = await response.json()
  movieList = data.results
  totalPages = data.total_pages
  displayMovies()
  element(totalPages, Number(localStorage.getItem('currentPage')))
  
}
getData()

async function getSearchedData(query) {
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=91cdb01c56c515a486be9478128e0706&query=${query}&language=en-US&page=1`)
  let data = await response.json()
  movieList = data.results
  displayMovies()
}

function displayMovies() {
  let temp = ''
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].poster_path != null) {
      temp += `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="img-container shadow">
          <img src="https://image.tmdb.org/t/p/w500${movieList[i].poster_path}" class="w-100" alt="">
          <div class="overlay">
            <div class="info p-1">
              <h2>${movieList[i].original_title}</h2>
              <p>${movieList[i].overview}</p>
              <p class='rating'>rate: ${movieList[i].vote_average}</p>
              <p class='date'>${movieList[i].release_date}</p>
            </div>
          </div>
        </div>
      </div>
      `
    }
  }
  document.getElementById('rowData').innerHTML = temp
}

// full Search
fullSearch.addEventListener('keyup', function(){
  if (fullSearch.value != '') {
    getSearchedData(fullSearch.value)
  } else {
    getData()
  }
})

// Limited Search
limitedSearch.addEventListener('keyup', function(){
  let temp = ''
  let str = limitedSearch.value.toLowerCase()
  for (let i = 0; i < movieList.length; i++) {
    let x = movieList[i].original_title.toLowerCase().search(`${str}`)
    if (x > -1) {
      temp += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="img-container shadow">
            <img src="https://image.tmdb.org/t/p/w500${movieList[i].poster_path}" class="w-100" alt="">
            <div class="overlay">
              <div class="info p-1">
                <h2>${movieList[i].original_title}</h2>
                <p>${movieList[i].overview}</p>
                <p class='rating'>rate: ${movieList[i].vote_average}</p>
                <p class='date'>${movieList[i].release_date}</p>
              </div>
            </div>
          </div>
        </div>
        `
    }
    document.getElementById('rowData').innerHTML = temp
  }
})

