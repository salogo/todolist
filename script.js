let task = document.getElementById('task')
let submit = document.getElementById('submit')
let ul = document.getElementById('ul')

submit.addEventListener('click', function(){
    console.log('click')

    console.log(task)

    liItem = document.createElement('li')
    let reviewLI = document.createElement('li')
    let button = document.createElement('button')

    reviewLI.innerHTML = task.value
    button.innerHTML = 'remove'
    reviewLI.appendChild(button)

    ul.appendChild(reviewLI)

})

