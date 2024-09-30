'use strict'

const TextoTextarea = document.getElementById('TextoTextarea')
const PrintConvetion = document.getElementById('PrintConvetion')
const PrintDecodificacao = document.getElementById('PrintDecodificacao')
const BtnIniciar = document.getElementById('BtnIniciar')
const BtnCopiar = document.getElementById('BtnCopiar')
const BtnAbaTexto = document.getElementById('BtnAbaTexto')
const ModalMensager = document.getElementById('ModalMensager')

const Letras = {
    ' ': 32,
    'a': 97, 'b': 98, 'c': 99, 'd': 100, 'e': 101, 'f': 102, 'g': 103, 'h': 104, 'i': 105, 'j': 106, 'k': 107, 'l': 108, 'm': 109, 'n': 110, 'o': 111, 'p': 112, 'q': 113, 'r': 114, 's': 115, 't': 116, 'u': 117, 'v': 118, 'w': 119, 'x': 120, 'y': 121, 'z': 122,
    'A': 65, 'B': 66, 'C': 67, 'D': 68, 'E': 69, 'F': 70, 'G': 71, 'H': 72, 'I': 73, 'J': 74, 'K': 75, 'L': 76, 'M': 77, 'N': 78, 'O': 79, 'P': 80, 'Q': 81, 'R': 82, 'S': 83, 'T': 84, 'U': 85, 'V': 86, 'W': 87, 'X': 88, 'Y': 89, 'Z': 90
}

let Escolha = ''
let CodStr = 0
let Resultado = ''

function Decodificacao(binario) {
    let texto = ''
    // Remover espaços extras e dividir em blocos de 8 bits
    const blocos = binario.trim().split(' ')

    for (const bloco of blocos) {
        // Converter cada bloco de binário para decimal
        const codigoDecimal = parseInt(bloco, 2)

        // Converter o código decimal para o caractere correspondente usando String.fromCharCode
        texto += String.fromCharCode(codigoDecimal)
    }

    PrintDecodificacao.textContent = texto
}

function ConversorPorCaracter() {
    if (Letras.hasOwnProperty(Escolha)) {
        CodStr = Letras[Escolha]
        let Binario = CodStr.toString(2)
        
        console.log(`${Escolha}: ${Binario}`)
        
    } else {
        console.log(`ESSE CARACTER NÃO EXISTE!: ${Escolha}`)
    }
}

function ConversorPorTexto(texto) {
    Resultado = ''
    
    for (const char of texto) {
        if (Letras.hasOwnProperty(char)) {
            const codStr = Letras[char]
            const strBinario = codStr.toString(2)

            Resultado += strBinario + ' '

        } else {
            PrintConvetion.textContent = 'NÃO FOI POSSIVEL FAZER A CONVERSÃO PARA BINARIO, O SEU TEXTO TEM CARACTER QUE NÃO CONSTA NA BASE DE DADOS!'
            return
        }
    }

    PrintConvetion.textContent = Resultado.trim()
    console.log(Decodificacao(Resultado))
}

TextoTextarea.addEventListener('input', () => {
    Escolha = TextoTextarea.value

    if (!Escolha) {
        PrintConvetion.textContent = ''
    }
})

BtnIniciar.onclick = (e) => {
    e.preventDefault()
    PrintConvetion.textContent = ''
    ConversorPorTexto(Escolha)
}

BtnCopiar.onclick = (e) => {
    e.preventDefault()

    if (PrintConvetion.textContent.trim() !== '') {
        navigator.clipboard.writeText(PrintConvetion.textContent).then(() => {
            ModalMensager.textContent = 'Binário copiado!'
            ModalMensager.style.top = '10px'

            setTimeout(() => {
                ModalMensager.style.top = '-100px'
            }, 4000)
        })
    } else {
        ModalMensager.textContent = 'Nada para copiar!'
        ModalMensager.style.top = '10px'

        setTimeout(() => {
            ModalMensager.style.top = '-100px'
        }, 4000)
    }
}
