const email = document.getElementById('email')
const submit = document.getElementById('submit')
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(email.value);
    
    let message = []
    if  (email.value === '' || email.value == null) {
        message.push('email is required')
    }
    if (email.value !== '@gmail.com') {
        message.push('please provide a valid email');
    }
})