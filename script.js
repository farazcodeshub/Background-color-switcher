const button = document.querySelectorAll('.btn');
const body = document.querySelector("body")

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target.id);
        if (e.target.id === 'india') {
            body.style.background = "linear-gradient(to right , orange, white, green)";
        }
        if (e.target.id === 'red') {
            body.style.background = e.target.id
        }
        if (e.target.id === 'green') {
            body.style.background = e.target.id
        }
        if (e.target.id === 'blue') {
            body.style.background = e.target.id
        }
        if (e.target.id === 'yellow') {
            body.style.background = e.target.id
        }
        if (e.target.id === 'reset') {
            body.style.background = 'white'
        }


    })
})


