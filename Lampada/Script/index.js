const Lampada = document.getElementById('Lampada')
const BtnAcender = document.getElementById('BtnAcender')
const BtnApagar = document.getElementById('BtnApagar')
const Btnrestaurar = document.getElementById('Btnrestaurar')
const SpanCountCrack = document.getElementById('SpanCountCrack')
const SpanTimeQueimar = document.getElementById('SpanTimeQueimar')

const FomartTime = n => n < 10 ? n = `0${n}` : n

let CountCrack = 5
let TempoQueimar = 60

SpanCountCrack.textContent = `${CountCrack} para quebrar!`
SpanTimeQueimar.textContent = `${TempoQueimar}s para queimar`

setInterval(() => {
    if (TempoQueimar <= 0) {
        TempoQueimar = 60

        Lampada.src = 'Images/apagada.gif'
        Lampada.style.filter = 'drop-shadow(0 0 5px black)'

        BtnAcender.style.display = 'none'
        BtnApagar.style.display = 'none'
        Btnrestaurar.style.display = 'flex'

    }else if (Lampada.src.match('Images/acesa.gif')) TempoQueimar--

    SpanTimeQueimar.textContent = `${FomartTime(TempoQueimar)}s para queimar`
}, 1000)

BtnAcender.onclick = () => {
    if (Lampada.src.match('Images/acesa.gif') && Lampada.src.match('Images/acesa.gif')) return

    CountCrack--

    SpanCountCrack.textContent = `${CountCrack} para quebrar!`

    if (CountCrack <= 0) {
        BtnAcender.style.display = 'none'
        Btnrestaurar.style.display = 'flex'

        Lampada.src = 'Images/quebrada.png'
        Lampada.style.filter = 'drop-shadow(0 0 20px red)'

        document.body.style.background = 'linear-gradient(25deg, tomato 50%, rgb(163, 0, 0) 50%)'

    }else {
        if (Lampada.src.match('Images/apagada.gif')) {
            BtnAcender.style.display = 'none'
            BtnApagar.style.display = 'flex'

            Lampada.src = 'Images/acesa.gif'
            Lampada.style.filter = 'drop-shadow(0 0 20px gold)'
        }
    }
}

BtnApagar.onclick = () => {
    if (Lampada.src.match('Images/acesa.gif')) {
        BtnAcender.style.display = 'flex'
        BtnApagar.style.display = 'none'

        Lampada.src = 'Images/apagada.gif'
        Lampada.style.filter = 'drop-shadow(0 0 5px black)'
    }
}

Btnrestaurar.onclick = () => {
    CountCrack = 5
    TempoQueimar = 60

    SpanCountCrack.textContent = `${CountCrack} para quebrar!`

    Lampada.src = 'Images/apagada.gif'
    Lampada.style.filter = 'drop-shadow(0 0 5px black)'

    BtnAcender.style.display = 'flex'
    Btnrestaurar.style.display = 'none'

    document.body.style.background = 'linear-gradient(25deg, rgb(58, 58, 58) 50%, black 50%)'
}