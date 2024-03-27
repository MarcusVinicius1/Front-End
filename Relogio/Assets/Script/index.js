// Marcus
let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let ampm = document.getElementById('ampm')

let hh = document.getElementById('hh')
let mm = document.getElementById('mm')
let ss = document.getElementById('ss')

let hr_pontos = document.getElementById('hr_ponto')
let min_pontos = document.getElementById('min_ponto')
let seg_pontos = document.getElementById('sec_ponto')

setInterval(() => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let amdDmd = h >= 12 ? "PM" : "AM"
    const formatTime = n => n < 10 ? n = `0${n}` : n
    
    if (h >= 12) h = h - 12
    
    horas.innerHTML = formatTime(h) + `<br><span>Horas</span>`
    minutos.innerHTML = formatTime(m) + `<br><span>Minutos</span>`
    segundos.innerHTML = formatTime(s) + `<br><span>Segundos</span>`
    ampm.textContent = amdDmd

    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    hr_pontos.style.transform = `rotate(${h * 30}deg)`
    min_pontos.style.transform = `rotate(${m * 6}deg)`
    seg_pontos.style.transform = `rotate(${s * 6}deg)`
})
