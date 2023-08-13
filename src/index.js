const output = document.getElementById("output")
const fullBtn = document.getElementById("full")
const dateBtn = document.getElementById("date")
const timeBtn = document.getElementById("time")
let mode = "full"

const update = () => output.textContent = format(mode)

const changeMode = (changedMode) => {
    return function () {
        mode = changedMode
        update()
    }
}

fullBtn.onclick = changeMode("full")
dateBtn.onclick = changeMode("date")
timeBtn.onclick = changeMode("time")

update()

const intervalId = setInterval(() => {
    update()
    return (() => {
        clearInterval(intervalId)
    })
}, 1000)

function format(formatMode) {

    const now = new Date()

    switch (formatMode) {
        case "time": return now.toLocaleTimeString() 
        case "date": return now.toLocaleDateString()
        case "full": return now.toLocaleDateString() + " " + now.toLocaleTimeString()
        default: return now.toLocaleTimeString()
    }
}
