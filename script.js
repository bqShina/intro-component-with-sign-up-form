const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const inputClass = document.querySelectorAll('.form-control');
const errorMessage = document.querySelectorAll('small');

// Check Error

function checkError(item) {
        let i;
        switch(item) {
            case firstName:
                i = 0;
                break;
            case lastName:
                i = 1;
                break;
            case email:
                i = 2;
                if (!isValidEmail(item.value)) {
                    errorMessage[i].innerText = 'Looks like this is not an email';
                    addErrorMessage(i);
                } else {
                    removeErrorMessage(i);
                }                
                break;
            case password:
                i = 3;
                break;
        }
        if (item.value === '') {
            addErrorMessage(i);
            errorMessage[i].innerText = `${item.name} cannot be empty`;
            togglePlaceholder(item, '');      // Clear Input Placeholder
        } else if (item !== email) {
            removeErrorMessage(i);
            togglePlaceholder(item, item.name);
        }
       
}

// Add Error Message
function addErrorMessage(i, name) {
    inputClass[i].classList.add('error');    
}

// Remove Error Message
function removeErrorMessage(i) {
    inputClass[i].classList.remove('error');
}

// Clear or Recover Placeholder
function togglePlaceholder(input, message) {
    input.setAttribute('placeholder', message);
}
// Check Valid Email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// Add Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkError(firstName);
    checkError(lastName);
    checkError(email);
    checkError(password);
})

