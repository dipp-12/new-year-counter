const countdown = () => {
    const dueDate = new Date("Jan 1, 2023 00:00:00").getTime()
    const now =  new Date().getTime()
    const gap = dueDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60

    const getHour = Math.floor(gap / hour)
    const getMinute = Math.floor((gap % hour) / minute)
    const getSecond = Math.floor((gap % minute) / second)
    
    document.querySelector('.hour-text').innerText = getHour
    document.querySelector('.minute-text').innerText = getMinute
    document.querySelector('.second-text').innerText = getSecond

    //console.log(gap)
}

setInterval(countdown, 100)

const a = document.queryCommandValue('.second-text').innerText

const test = () => {
    if(a == '5'){
        console.log('true')
    }
}

setInterval(test, 100)

