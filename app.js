// Grab important elements.
const inputs = document.querySelectorAll("input");
const form = document.querySelector("#form");
const firstname = document.querySelector("#firstName");
const lastname = document.querySelector("#lastName");

// Create sign up requirements
const patterns = {
  firstName: /^([a-z])+$/i,
  lastName: /^([a-z])+$/i,
  email: /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]+)(\.[a-z]+)?$/i,
  userName: /^[\w]+$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.+[\d])(?=.*[~!@#$%^&*()-_+=])[a-zA-z\d~!@#$%^&*()-_+=]{8,}$/,
};

// Create a function that validates the regex requirements and changes class name of each input field based on results
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// For each input field add an event listener. When the event listener is activated the validate function will run.
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// if the submit button is clicked and failed. Show all empty input fields and errors. Otherwise proceed.

// function displayGreeting() {
//   const para = document.createElement("h2");
//   document.body.appendChild(para);
//   para.textContent = `Thank you ${username}`;
// }

// input.addEventListener("change", () => {
//   displayGreeting();
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newDiv = document.createElement("div");
  console.log(`Thank you ${firstname.value} ${lastname.value}`);
});
