var image = document.querySelector('#image')
var fullname = document.querySelector('#fullname')
var email = document.querySelector('#email')
var phone = document.querySelector('#phone')
var city = document.querySelector('#city')


email.innerHTML = ''
fullname.innerHTML = ''
phone.innerHTML = ''
city.innerHTML = ''
image.src = ''

async function getuser() {
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    const result = data.results[0]
    console.log(result)

    email.innerHTML = result.email
    fullname.innerHTML = `${result.name.title} ${result.name.first} ${result.name.last}`
    phone.innerHTML = result.cell
    city.innerHTML = result.location.city
    image.src = result.picture.large
}

getuser()
