const email = document.getElementById('email')
const submit = document.getElementById('submit')
const form = document.getElementById('form')

function showError(errorElement, ){
    document.querySelector("."+errorElement);
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.add('success');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const emailValue = email.Value.trim();

    if(emailValue === '') {
        setError(email, 'Please is required')
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email address')
    
    }else {
        setSuccess(email);
    }
};