const count = document.querySelector('.count')
const generate = document.querySelector('.generate')

generate.addEventListener('click', () => {
    count.innerHTML = Math.round(Math.random() * 100)
})
