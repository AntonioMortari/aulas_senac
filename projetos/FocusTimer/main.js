'use strict';
import {buttons} from './utilies.js'

let minutes = document.querySelector('#minutes')
let minutesUser = 25
let seconds = document.querySelector('#seconds')

let timeOutId
let music;

const playAlarm = () =>{
    let alarm = new Audio('media/alarm.mp3')
    alarm.play()
}

const countDown = () => {
    timeOutId = setTimeout(function () {
        let second = Number(seconds.textContent)
        let minute = Number(minutes.textContent)

        if (second == 0) {
            if (seconds.textContent == '00' && minutes.textContent == '00') {
                buttons.watch.classList.remove('hide')
                buttons.stop.classList.add('hide')
                buttons.pause.classList.add('hide')
                buttons.play.classList.remove('hide')

                playAlarm()

                return
            }
            second = 60
            seconds.textContent = second

            minute--
            if (minute < 10) {
                minute = '0' + minute
            }
            minutes.textContent = minute
        }

        second--
        if (second < 10) {
            second = '0' + second
        }
        seconds.textContent = second

        countDown()
    }, 1000)
}

buttons.play.onclick = () => {
    buttons.play.classList.add('hide')
    buttons.pause.classList.remove('hide')

    buttons.watch.classList.add('hide')
    buttons.stop.classList.remove('hide')

    countDown()
}

buttons.pause.onclick = () => {
    buttons.pause.classList.add('hide')
    buttons.buttonplay.classList.remove('hide')

    clearTimeout(timeOutId)
}

buttons.soundOn.onclick = () => {
    buttons.soundOn.classList.add('hide')
    buttons.soundOff.classList.remove('hide')

    music = new Audio('media/lofi-music.mp3')
    music.play()
}
buttons.soundOff.onclick = () => {
    buttons.soundOff.classList.add('hide')
    buttons.soundOn.classList.remove('hide')
    music.pause()
}

buttons.stop.onclick = () => {
    buttons.watch.classList.remove('hide')
    buttons.stop.classList.add('hide')
    buttons.pause.classList.add('hide')
    buttons.play.classList.remove('hide')

    minutes.textContent = minutesUser
    seconds.textContent = '00'
    clearTimeout(timeOutId)
}

buttons.watch.onclick = () => {
    minutesUser = Number(prompt('Quantos minutos?'))
    if (minutesUser > 100 || minutesUser <= 0) {
        alert('Os minutos não podem ser maiores que 60 ou menores ou iguais a 0')
        return
    }
    minutes.textContent = minutesUser < 10 ? '0' + minutesUser : minutesUser
    seconds.textContent = '00'
}