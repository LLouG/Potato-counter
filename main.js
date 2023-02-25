let countEl = document.getElementById("count-el")
let saveEl = document.getElementById('save-el')

let count = 0
let countStr = ""

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}