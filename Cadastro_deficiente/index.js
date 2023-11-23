const InputDeficiencia = document.getElementById('InputDeficiencia')
const InputNome = document.getElementById('InputNome')
const InputEmail = document.getElementById('InputEmail')
const InputCep = document.getElementById('InputCep')
const InputCpf = document.getElementById('InputCpf')
const inputFile = document.getElementById('inputFile')

const PrintImage = document.getElementById('PrintImage')
const PopUpAlerta = document.getElementById('PopUpAlerta')
const Info = document.getElementById('Info')

const BottomPrintCard = document.getElementById('BottomPrintCard')
const BtnCadastrar = document.getElementById('BtnCadastrar')

const SpanCountUserCadastrado = document.getElementById('SpanCountUserCadastrado')

const patternCep = /^[0-9]{5}-[0-9]{3}$/
const patternCpf = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/
const patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let CountPersonCadastrado = 0

document.addEventListener('input', () => {
    VerifyInputValue()
})

function VerifyInputValue() {
    if (!InputDeficiencia.value || !InputNome.value || !InputEmail.value || !InputCep.value || !InputCpf.value) BtnCadastrar.disabled = true
    else BtnCadastrar.disabled = false
}

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target
    const file = inputFile.files[0]

    if (file) {
        const reader = new FileReader()

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList = 'img'
            img.style.width = '100%'
            img.style.width = '100%'
            img.style.transform = 'translateX(0px)'
            PrintImage.innerHTML = ''

            PrintImage.appendChild(img)

            BtnCadastrar.onclick = () => {
                if (!patternEmail.test(InputEmail.value)) {
                    Info.textContent = 'Email invalido!'
                    PopUpAlerta.style.top = '20px'

                }else if (!patternCep.test(InputCep.value)) {
                    Info.textContent = 'Cep invalido!'
                    PopUpAlerta.style.top = '20px'

                }else if (!patternCpf.test(InputCpf.value)) {
                    Info.textContent = 'Cpf invalido!'
                    PopUpAlerta.style.top = '20px'

                }else {
                    CountPersonCadastrado++
                    PopUpAlerta.style.top = '-50px'

                    const Card = document.createElement('Card')
                    Card.classList = 'Card'
    
                    const PerfilUser = document.createElement('img')
                    PerfilUser.src = readerTarget.result
    
                    const Nome = document.createElement('div')
                    Nome.classList = 'Nome'
                    Nome.textContent = InputNome.value
    
                    const SpanIdUser = document.createElement('span')
                    SpanIdUser.textContent = Math.floor(Math.random() * 999999999)
    
                    BottomPrintCard.appendChild(Card)
                    Card.appendChild(PerfilUser)
                    Card.appendChild(Nome)
                    Card.appendChild(SpanIdUser)

                    SpanCountUserCadastrado.textContent = `${CountPersonCadastrado} pessoas`
    
                    InputNome.value = ''
                    InputEmail.value = ''
                    InputCep.value = ''
                    InputCpf.value = ''
                    inputFile.value = ''
                    img.src = ''
    
                    VerifyInputValue()
                }
            }
        })

        reader.readAsDataURL(file)
    
    }else {
        alert('error')
    }
})
