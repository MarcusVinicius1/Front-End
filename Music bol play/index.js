'user strict'
const MusicasLista = [
    {
        Capa: 'Capa.jpg',
        Musica: ''
    },
]

const SpanBool = document.querySelectorAll('span')
const PonteiroMusic = document.getElementById('PonteiroMusic')
const CountCurrentTimeMusic = document.getElementById('CountCurrentTimeMusic')
const CapaMusic = document.getElementById('CapaMusic')

CapaMusic.src = MusicasLista[0].Capa

let HorMusic = 5
let MinMusic = 7
let SegMusic = 2
let TimeMusic = ''

SpanBool.forEach((span, index) => {
    span.textContent = index + 1
})

const VerifyTime = n => n < 10 ? n = `0${n}` : n

const CheckCollision = () => {
    const ponteiroRect = PonteiroMusic.getBoundingClientRect()

    SpanBool.forEach(span => {
        const spanRect = span.getBoundingClientRect()
        const VerifyColision = ponteiroRect.left < spanRect.right &&
                               ponteiroRect.right > spanRect.left &&
                               ponteiroRect.top < spanRect.bottom &&
                               ponteiroRect.bottom > spanRect.top
        
        VerifyColision ? span.style.background = 'red' : span.style.background = 'none'
    })
}

setInterval(() => {CheckCollision()}, 100)

const VerifyCurrentTime = time => time < 10 ? `0${time}` : time

const Time = (hor, min, seg) => {
    if (isNaN(hor)) {
        console.log(`O time (HORA) não é um número! ele é ${typeof hor}`)
        TimeMusic = 'ERROR'

    }else if (isNaN(min)) {
        console.log(`O time (MINUTO) não é um número! ele é ${typeof min}`)
        TimeMusic = 'ERROR'

    }else if (isNaN(seg)) {
        console.log(`O time (SEGUNDO) não é um número! ele é ${typeof seg}`)
        TimeMusic = 'ERROR'

    }else {
        const CalcHor = hor % 24
        const CalcMin = min % 60
        const CalcSeg = seg % 60
        const FormatCurrentTime = `${VerifyCurrentTime(CalcHor)}:${VerifyCurrentTime(CalcMin)}:${VerifyCurrentTime(CalcSeg)}`
        
        TimeMusic = FormatCurrentTime
    }

    if (CountCurrentTimeMusic) CountCurrentTimeMusic.textContent = TimeMusic
}

Time(HorMusic, MinMusic, SegMusic)
