const CursorAba = document.getElementById('CursorAba')

let MobileL = 425

if (innerWidth == MobileL) {
    var PositonCursorAnteriorHover = 290
    var WidthCursorAnterior = 50
    var WidthCursor = 50

}else {
    var PositonInitialCursor = 290
    var PositonCursorHover = 0
    var PositonCursorAnteriorHover = 290
    var WidthCursorAnterior = 50
    var WidthCursor = 0
}

// Aba texto
BtnAbaTexto.onclick = () => {
    if (innerWidth <= MobileL) {
        PositonCursorAnteriorHover = 50
        WidthCursorAnterior = 50
        PositonCursorHover = 50
        WidthCursor = 50

    }else {
        PositonCursorAnteriorHover = 290
        PositonCursorHover = 290
        WidthCursorAnterior = 50
        WidthCursor = 50
    
    }
    CursorAba.style.width = `${WidthCursor}px`
    CursorAba.style.left = `${PositonCursorHover}px`
}

BtnAbaTexto.onmouseover = () => {
    PositonCursorHover = 290
    WidthCursor = 50

    CursorAba.style.width = `${WidthCursor}px`
    CursorAba.style.left = `${PositonCursorHover}px`
}

BtnAbaTexto.onmouseleave = () => {
    if (innerWidth == MobileL) {
        PositonCursorHover = PositonCursorAnteriorHover
        WidthCursor = WidthCursorAnterior
    
        CursorAba.style.width = `${WidthCursor}px`
        CursorAba.style.left = `${PositonCursorHover}px`

    }else {
        PositonCursorHover = PositonCursorAnteriorHover
        WidthCursor = WidthCursorAnterior
    
        CursorAba.style.width = `${WidthCursor}px`
        CursorAba.style.left = `${PositonCursorHover}px`
    }
}

// Aba caracter
BtnAbaCaracter.onclick = () => {
    if (innerWidth <= MobileL) {
        PositonCursorAnteriorHover = 120
        WidthCursorAnterior = 83
        PositonCursorHover = 120
        WidthCursor = 83

    }else {
        PositonCursorAnteriorHover = 365
        PositonCursorHover = 365
        WidthCursorAnterior = 70
        WidthCursor = 70
    }

    CursorAba.style.width = `${WidthCursor}px`
    CursorAba.style.left = `${PositonCursorHover}px`
}

BtnAbaCaracter.onmouseover = () => {
    PositonCursorHover = 365
    WidthCursor = 70

    CursorAba.style.width = `${WidthCursor}px`
    CursorAba.style.left = `${PositonCursorHover}px`
}

BtnAbaCaracter.onmouseleave = () => {
    if (innerWidth == MobileL) {
        PositonCursorHover = PositonCursorAnteriorHover
        WidthCursor = WidthCursorAnterior
    
        CursorAba.style.width = `${WidthCursor}px`
        CursorAba.style.left = `${PositonCursorHover}px`

    }else {
        PositonCursorHover = PositonCursorAnteriorHover
        WidthCursor = WidthCursorAnterior
    
        CursorAba.style.width = `${WidthCursor}px`
        CursorAba.style.left = `${PositonCursorHover}px`
    }
}

// Aba decodificar
BtnAbaDecodificacao.onclick = () => {
    if (innerWidth <= MobileL) {
        PositonCursorAnteriorHover = 219
        WidthCursorAnterior = 99
        PositonCursorHover = 219
        WidthCursor = 99

    }else {
        PositonCursorAnteriorHover = 460
        PositonCursorHover = 460
        WidthCursorAnterior = 95
        WidthCursor = 95
    }
    
    CursorAba.style.width = `${WidthCursor}px`
    CursorAba.style.left = `${PositonCursorHover}px`
}

BtnAbaDecodificacao.onmouseover = () => {
    PositonCursorHover = 460
    WidthCursor = 95

    CursorAba.style.width = `${WidthCursor}px`
    CursorAba.style.left = `${PositonCursorHover}px`
}

BtnAbaDecodificacao.onmouseleave = () => {
    if (innerWidth == MobileL) {
        PositonCursorHover = PositonCursorAnteriorHover
        WidthCursor = WidthCursorAnterior
    
        CursorAba.style.width = `${WidthCursor}px`
        CursorAba.style.left = `${PositonCursorHover}px`

    }else {
        PositonCursorHover = PositonCursorAnteriorHover
        WidthCursor = WidthCursorAnterior
    
        CursorAba.style.width = `${WidthCursor}px`
        CursorAba.style.left = `${PositonCursorHover}px`
    }
}