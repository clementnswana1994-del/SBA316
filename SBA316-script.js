const form = document.getElementById('form')
const name_input = document.getElementById('name-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
// const successMessageElement = document.getElementById('signup-success');
//     successMessageElement.textContent = 'Welcome, your account has been created!';
 const error_message = document.getElementById('error-message')
        //error_message.textContent = 'Name is required. Email is required. Password is required. Password must have at least 8 characters'

form.addEventListener('submit', (e) => {
  let errors = []

  if(name_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(name_input.value, email_input.value, password_input.value, repeat_password_input.value)
  } else{
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value)
  }
  

  if(errors.length > 0){
    // If there are any errors
    e.preventDefault()
    error_message.textContent  = errors.join(". ")
  }
})

function getSignupFormErrors(name, email, password, repeatPassword){
  let errors = []

  if(name === '' || name == null){
    errors.push('Name is required')
    name_input.parentElement.classList.add('incorrect')
  }
  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }


  return errors;
}

const signupForm = document.querySelector('#signupForm');
        signupForm.addEventListener('submit', handleSignupSubmission);

const allInputs = [name_input, email_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})


const newDiv = document.createElement('div');

// Create a text node to add content to the div
const textContent = document.createTextNode('This is a dynamically created div!');

// Append the text node to the new div
newDiv.appendChild(textContent);

// (Optional) Add an ID or class to the new div
newDiv.id = 'myDynamicDiv';
newDiv.classList.add('dynamic-element');

// Append the new div to the document body
document.body.appendChild(newDiv);