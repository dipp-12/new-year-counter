const countdown = () => {
    const currentYear = new Date().getFullYear()
    const nextYear = currentYear + 1
    const dueDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime()
    const now = new Date().getTime()
    const gap = dueDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const getDay = Math.floor(gap / day)
    const getHour = Math.floor((gap % day) / hour)
    const getMinute = Math.floor((gap % hour) / minute)
    const getSecond = Math.floor((gap % minute) / second)

    document.querySelector('.year-title').innerText = nextYear
    document.querySelector('.year-text').innerText = nextYear
    document.querySelector('.day-text').innerText = getDay
    document.querySelector('.hour-text').innerText = getHour
    document.querySelector('.minute-text').innerText = getMinute
    document.querySelector('.second-text').innerText = getSecond

    //console.log(gap)
}

setInterval(countdown, 100)

const a = document.queryCommandValue('.second-text').innerText

const test = () => {
    if (a == '5') {
        console.log('true')
    }
}

setInterval(test, 100)

