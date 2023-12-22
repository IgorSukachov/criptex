const img = ['0','1','2','3','4','5','6','7','8','9']
let numbers = document.querySelectorAll('.numbers')

function random (min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

numbers.forEach(function (element) {
    let randomNum = random(0, img.length - 1)
    element.style.backgroundImage = `url(${img[randomNum]}.jpg)`
    element.dataset.data = randomNum // присваиваем каждому слуйчайный номер и записываем в датасет
    element.addEventListener('click', changeImg)
})

function changeImg() {
    document.querySelector('#out').innerHTML = ''
    let data = this.dataset.data // по клику забираем номер датасета
    if (+data + 1 < img.length) {
        data ++
    } else {
        data = 0
    }
    this.dataset.data = data
    this.style.backgroundImage = `url(${img[data]}.jpg)`
    rightCombination()
}

function rightCombination () {
    let result = [] // Собираем в массив наши значения по датасету
    numbers.forEach((elem) => {
        result.push(elem.dataset.data)
    })
    if (result.join('') == '221294') { // из массива превращаем в строку
        document.querySelector('#out').innerHTML = 'Done'
        alert('Nice! You so clever')
    }
}