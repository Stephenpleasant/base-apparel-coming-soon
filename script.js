const email = document.getElementById('email')
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (form.email.value === '' || form.email.value == null) {
        messages.push('Please provide a valid email')
    } 
     e.preventDefault()
     errorElement.innerText = messages.join(', ');

    
})
