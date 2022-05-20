const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("button");

submitButton.disabled = true;
const patterns = {
  firstName: /^([a-z])+$/i,
  lastName: /^([a-z])+$/i,
  email: /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]+)(\.[a-z]+)?$/i,
  userName: /^[\w]+$/,
  password:
    /^(?=.*[A-Z])(?=.*[a-z])(?=.+[\d])(?=.*[~!@#$%^&*()-_+=])[a-zA-z\d~!@#$%^&*()-_+=]{8,}$/,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
    if ((field.className = "valid")) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
